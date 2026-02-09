import React, { useEffect, useState } from 'react';
import { 
  Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, ListItemIcon, 
  makeStyles, Typography, LinearProgress, Tooltip
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
// Novos ícones para os status
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import { 
  useApi, 
  configApiRef, 
  fetchApiRef, 
  identityApiRef 
} from '@backstage/core-plugin-api';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { Link } from '@backstage/core-components'; 

const useStyles = makeStyles({
  card: { height: '100%', display: 'flex', flexDirection: 'column' },
  list: { overflow: 'auto', flexGrow: 1, maxHeight: '300px' },
  item: { '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } },
});

type PR = {
  id: number;
  number: number;
  title: string;
  html_url: string;
  repository_url: string;
  created_at: string;
  state: string;
  // Adicionamos esse objeto para saber se foi mergeado
  pull_request?: {
    merged_at?: string | null;
  };
};

export const MyPullRequestsCard = () => {
  const classes = useStyles();
  const config = useApi(configApiRef);
  const fetchApi = useApi(fetchApiRef);
  const identityApi = useApi(identityApiRef);
  const catalogApi = useApi(catalogApiRef);

  const [prs, setPrs] = useState<PR[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [backstageUser, setBackstageUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAndPRs = async () => {
      try {
        const identity = await identityApi.getBackstageIdentity();
        const userEntityRef = identity.userEntityRef; 
        
        let currentUser = userEntityRef.split('/')[1];
        
        try {
            const userEntity = await catalogApi.getEntityByRef(userEntityRef);
            if (userEntity) {
                currentUser = userEntity.metadata.name;
            }
        } catch (err) {
            // Fallback
        }

        setBackstageUser(currentUser);

        const backendUrl = config.getString('backend.baseUrl');

        const searchTerm = `Solicitante: @${currentUser}`;
        
        // 🟢 ALTERAÇÃO 1: Removido "state:open" para trazer histórico completo
        // Ordenamos por updated (desc) para os mais recentes ficarem no topo
        const query = `is:pr org:TalesBusiness sort:updated-desc "${searchTerm}"`; 
        
        const encodedQuery = encodeURIComponent(query);
        
        const response = await fetchApi.fetch(`${backendUrl}/api/proxy/github-api/search/issues?q=${encodedQuery}`);
        
        if (!response.ok) throw new Error('Falha ao buscar PRs');
        
        const data = await response.json();
        const allPrs = data.items || [];

        const filteredPrs = allPrs.filter((pr: PR) => 
            pr.title.startsWith("Infra: ")
        );

        setPrs(filteredPrs);

      } catch (e: any) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndPRs();
  }, [config, fetchApi, identityApi, catalogApi]);

  const getRepoDetails = (apiUrl: string) => {
    const parts = apiUrl.split('/');
    return { owner: parts[4], repo: parts[5] };
  };

  // 🟢 NOVA FUNÇÃO: Define ícone e cor baseado no status
  const getStatusConfig = (pr: PR) => {
    if (pr.state === 'open') {
        return { 
            icon: <PlayCircleFilledIcon style={{ color: '#fdad00' }} />, // Laranja
            text: 'Em andamento'
        };
    }
    // Se está fechado e tem data de merge, foi concluído com sucesso
    if (pr.pull_request?.merged_at) {
        return { 
            icon: <CheckCircleIcon style={{ color: '#4CAF50' }} />, // Verde
            text: 'Concluído'
        };
    }
    // Se está fechado e não tem merge, foi cancelado
    return { 
        icon: <CancelIcon style={{ color: '#ff3838' }} />, // Cinza
        text: 'Cancelado'
    };
  };

  return (
    <Card className={classes.card}>
      <CardHeader 
        title="Minhas Solicitações" 
        avatar={<GitHubIcon />}
      />
      <Divider />
      {loading && <LinearProgress />}
      
      <CardContent className={classes.list}>
        {error && <Typography color="error" variant="caption">{error}</Typography>}
        
        {!loading && prs.length === 0 && !error && (
          <div style={{ padding: 16, textAlign: 'center', opacity: 0.6 }}>
            <Typography variant="body2">
              Nenhuma solicitação encontrada.
            </Typography>
          </div>
        )}

        <List dense>
          {prs.map((pr) => {
            const { owner, repo } = getRepoDetails(pr.repository_url);
            const status = getStatusConfig(pr);

            return (
              <React.Fragment key={pr.id}>
                <ListItem 
                  button 
                  component={Link}
                  to={`/deployment-status/${owner}/${repo}/${pr.number}`}
                  className={classes.item}
                >
                  {/* Ícone de Status colorido com Tooltip */}
                  <Tooltip title={status.text} arrow>
                      <ListItemIcon style={{ minWidth: 40 }}>
                          {status.icon}
                      </ListItemIcon>
                  </Tooltip>

                  <ListItemText
                    primary={
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                            {pr.title.replace('Infra: ', '')}
                        </Typography>
                    }
                    // Mostramos o Repo, o Número e o Status por extenso
                    secondary={
                        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{repo} • #{pr.number}</span>
                            <span>{status.text}</span>
                        </span>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};