import React, { useEffect, useState } from 'react';
import { 
  Page, Header, Content, ContentHeader, SupportButton, 
  Table, TableColumn
} from '@backstage/core-components';
import { 
  Grid, Typography, Box, makeStyles, Paper, Avatar, Chip, useTheme
} from '@material-ui/core';
import { useApi, configApiRef, fetchApiRef, identityApiRef } from '@backstage/core-plugin-api';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { Link } from 'react-router-dom';

// Ícones
import GitHubIcon from '@material-ui/icons/GitHub';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  // --- Estilo dos Cards (Clean & Professional) ---
  kpiCard: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    overflow: 'hidden',
  },
  // Bordas coloridas sutis na esquerda
  borderBlue: { borderLeft: `6px solid ${theme.palette.primary.main}` },
  borderOrange: { borderLeft: `6px solid #fdad00` },
  borderGreen: { borderLeft: `6px solid #4CAF50` },

  kpiLabel: {
    fontWeight: 600,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    letterSpacing: '0.5px',
    marginBottom: theme.spacing(1),
  },
  kpiValue: {
    fontWeight: 'bold',
    fontSize: '2rem',
    lineHeight: 1,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  
  // --- Tabela ---
  repoCell: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontWeight: 600,
    color: theme.palette.text.secondary
  },
  titleLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

type RequestRow = {
  id: string;
  repository: string;
  title: string;
  created_at: Date;
  status: 'open' | 'merged' | 'closed';
  owner: string;
  repo: string;
  number: number;
};

export const MyRequestsPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const config = useApi(configApiRef);
  const fetchApi = useApi(fetchApiRef);
  const identityApi = useApi(identityApiRef);
  const catalogApi = useApi(catalogApiRef);

  const [data, setData] = useState<RequestRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, open: 0, merged: 0 });

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const identity = await identityApi.getBackstageIdentity();
        const userEntityRef = identity.userEntityRef; 
        let currentUser = userEntityRef.split('/')[1];
        
        try {
            const userEntity = await catalogApi.getEntityByRef(userEntityRef);
            if (userEntity) currentUser = userEntity.metadata.name;
        } catch (err) { /* Fallback */ }

        const backendUrl = config.getString('backend.baseUrl');
        const searchTerm = `Solicitante: @${currentUser}`;
        const query = `is:pr org:TalesBusiness sort:created-desc "${searchTerm}"`; 
        
        const response = await fetchApi.fetch(`${backendUrl}/api/proxy/github-api/search/issues?q=${encodeURIComponent(query)}`);
        const json = await response.json();
        const items = json.items || [];

        const rows = items.map((pr: any) => {
          const parts = pr.repository_url.split('/');
          return {
            id: String(pr.id),
            repository: parts[5],
            title: pr.title.replace('Infra: ', ''),
            created_at: new Date(pr.created_at),
            status: pr.state === 'open' ? 'open' : (pr.pull_request?.merged_at ? 'merged' : 'closed'),
            owner: parts[4],
            repo: parts[5],
            number: pr.number
          };
        });

        setData(rows);
        setStats({
          total: rows.length,
          open: rows.filter((r: any) => r.status === 'open').length,
          merged: rows.filter((r: any) => r.status === 'merged').length
        });

      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [config, fetchApi, identityApi, catalogApi]);

  const columns: TableColumn<RequestRow>[] = [
    { 
      title: 'Repositório', 
      field: 'repository', 
      width: '15%',
      render: (row) => (
        <div className={classes.repoCell}>
           <GitHubIcon style={{ fontSize: 18 }} />
           {row.repository}
        </div>
      )
    },
    { 
      title: 'Solicitação', 
      field: 'title',
      width: '40%',
      render: (row) => (
        <Link 
          to={`/deployment-status/${row.owner}/${row.repo}/${row.number}`} 
          className={classes.titleLink}
        >
          {row.title}
          <ArrowForwardIcon style={{ fontSize: 16, opacity: 0.3 }} />
        </Link>
      )
    },
    { 
      title: 'Status', 
      field: 'status', 
      width: '15%',
      render: (row) => {
        if (row.status === 'open') return <Chip icon={<PlayCircleFilledIcon />} label="Em Andamento" style={{ backgroundColor: 'rgba(253, 173, 0, 0.1)', color: '#d68b00', fontWeight: 'bold', border: '1px solid #d68b00' }} size="small" />;
        if (row.status === 'merged') return <Chip icon={<CheckCircleIcon />} label="Concluído" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#2e7d32', fontWeight: 'bold', border: '1px solid #2e7d32' }} size="small" />;
        return <Chip icon={<CancelIcon style={{ color: '#d32f2f' }} />} label="Cancelado" style={{ backgroundColor: 'rgba(211, 47, 47, 0.1)', color: '#d32f2f', fontWeight: 'bold', border: '1px solid #d32f2f' }} size="small" />;
      }
    },
    { 
      title: 'Data', 
      field: 'created_at', 
      render: (row) => row.created_at.toLocaleDateString('pt-BR')
    },
  ];

  return (
    <Page themeId="home">
      <Header title="Minhas Solicitações" subtitle="Gerencie seus pedidos de infraestrutura" />
      <Content>
        <ContentHeader title="">
          <SupportButton />
        </ContentHeader>

        {/* --- DASHBOARD CLEAN --- */}
        <Grid container spacing={3} style={{ marginBottom: 32 }}>
          
          {/* Card 1: Total (Azul) */}
          <Grid item xs={12} sm={4}>
            <Paper className={`${classes.kpiCard} ${classes.borderBlue}`}>
              <div>
                <Typography className={classes.kpiLabel}>Total de Pedidos</Typography>
                <Typography className={classes.kpiValue} style={{ color: theme.palette.primary.main }}>
                  {stats.total}
                </Typography>
              </div>
              <div className={classes.iconWrapper} style={{ backgroundColor: 'rgba(64, 81, 181, 0.1)' }}>
                 <TrendingUpIcon style={{ color: theme.palette.primary.main }} />
              </div>
            </Paper>
          </Grid>

          {/* Card 2: Em Aberto (Laranja) */}
          <Grid item xs={12} sm={4}>
            <Paper className={`${classes.kpiCard} ${classes.borderOrange}`}>
              <div>
                <Typography className={classes.kpiLabel}>Em Processamento</Typography>
                <Typography className={classes.kpiValue} style={{ color: '#fdad00' }}>
                  {stats.open}
                </Typography>
              </div>
              <div className={classes.iconWrapper} style={{ backgroundColor: 'rgba(253, 173, 0, 0.1)' }}>
                 <PlayCircleFilledIcon style={{ color: '#fdad00' }} />
              </div>
            </Paper>
          </Grid>

          {/* Card 3: Concluído (Verde) */}
          <Grid item xs={12} sm={4}>
            <Paper className={`${classes.kpiCard} ${classes.borderGreen}`}>
              <div>
                <Typography className={classes.kpiLabel}>Aprovados/Concluído</Typography>
                <Typography className={classes.kpiValue} style={{ color: '#4CAF50' }}>
                  {stats.merged}
                </Typography>
              </div>
              <div className={classes.iconWrapper} style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)' }}>
                 <CheckCircleIcon style={{ color: '#4CAF50' }} />
              </div>
            </Paper>
          </Grid>

        </Grid>

        <Table
          options={{ 
            search: true, 
            paging: true, 
            pageSize: 10, 
            padding: 'default',
            showTitle: true
          }}
          title="Histórico Recente"
          columns={columns}
          data={data}
          isLoading={loading}
        />
      </Content>
    </Page>
  );
};