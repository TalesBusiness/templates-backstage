import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { 
  Page, Header, Content, ContentHeader, SupportButton, 
  Progress, InfoCard
} from '@backstage/core-components';
import { 
  Grid, Stepper, Step, StepLabel, Typography, Button, Box, Paper, Chip, Avatar, makeStyles, useTheme
} from '@material-ui/core';
import { useApi, configApiRef, fetchApiRef } from '@backstage/core-plugin-api';

// Ícones
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  paperContent: {
    padding: theme.spacing(3),
    height: '100%',
  },
  stepper: {
    backgroundColor: 'transparent',
    padding: theme.spacing(3, 0),
  },
  statusChip: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  codeBlock: {
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  fieldLabel: {
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    display: 'block'
  },
  fieldValue: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}));

export const DeploymentStatusPage = () => {
  const { owner, repo, prNumber } = useParams();
  const classes = useStyles();
  const theme = useTheme();
  const config = useApi(configApiRef);
  const { fetch } = useApi(fetchApiRef);

  const [prData, setPrData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [requestStatus, setRequestStatus] = useState<'running' | 'success' | 'error'>('running');

  const getSolicitanteFromDesc = (body: string) => {
    if (!body) return 'Desconhecido';
    const match = body.match(/Solicitante:.*(?:user:default\/|@)([\w-]+)/i);
    return match ? match[1] : 'Desconhecido';
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const backendUrl = config.getString('backend.baseUrl');
        const response = await fetch(`${backendUrl}/api/proxy/github-api/repos/${owner}/${repo}/pulls/${prNumber}`);
        const data = await response.json();
        setPrData(data);
        setLoading(false);

        if (data.merged) {
          setActiveStep(2); // Step 3: Concluído
          setRequestStatus('success');
        } else if (data.state === 'closed') {
          setActiveStep(2); // Step 3: Cancelado
          setRequestStatus('error');
        } else {
          setActiveStep(1); // Step 2: Aguardando Aprovação
          setRequestStatus('running');
        }
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };
    loadData();
  }, [owner, repo, prNumber, config, fetch]);

  if (loading) return <Progress />;

  // Definição dos rótulos dos steps conforme solicitado
  const steps = [
    'Solicitação Enviada', 
    'Aguardando Aprovação', 
    requestStatus === 'error' ? 'Cancelado' : 'Concluído'
  ];

  let statusChip;
  if (requestStatus === 'success') {
    statusChip = <Chip label="Concluído" style={{ backgroundColor: '#4CAF50', color: '#fff' }} className={classes.statusChip} />;
  } else if (requestStatus === 'error') {
    statusChip = <Chip label="Cancelado" style={{ backgroundColor: '#f44336', color: '#fff' }} className={classes.statusChip} />;
  } else {
    statusChip = <Chip label="Aguardando Aprovação" style={{ backgroundColor: '#fdad00', color: '#fff' }} className={classes.statusChip} />;
  }

  return (
    <Page themeId="tool">
      <Header 
        title={`Solicitação #${prNumber}`} 
        subtitle={`Repositório: ${owner}/${repo}`} 
        type="Infrastructure"
      />
      
      <Content>
        <ContentHeader title="">
          <Button 
            component={RouterLink} 
            to="/minhas-solicitacoes" 
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            style={{ marginRight: 16 }}
          >
            Voltar para Lista
          </Button>
          <SupportButton />
        </ContentHeader>

        <Grid container spacing={3}>
          
          <Grid item xs={12}>
            <Paper className={classes.paperContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Status do Processamento</Typography>
                {statusChip}
              </Box>
              
              <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
                {steps.map((label, index) => {
                  const isErrorStep = requestStatus === 'error' && index === 2;
                  return (
                    <Step key={label}>
                      <StepLabel error={isErrorStep}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <InfoCard title="Detalhes da Solicitação" subheader={prData.title.replace('Infra: ', '')}>
              
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="caption" className={classes.fieldLabel}>SOLICITANTE</Typography>
                  <div className={classes.fieldValue}>
                    <Avatar style={{ width: 24, height: 24, fontSize: 12 }}>
                        <PersonIcon fontSize="inherit"/>
                    </Avatar>
                    <Typography variant="body1">@{getSolicitanteFromDesc(prData.body)}</Typography>
                  </div>
                </Grid>
                
                <Grid item xs={6}>
                   <Typography variant="caption" className={classes.fieldLabel}>REPOSITÓRIO</Typography>
                   <div className={classes.fieldValue}>
                     <GitHubIcon style={{ fontSize: 20, opacity: 0.7 }} />
                     <Typography variant="body1">{repo}</Typography>
                   </div>
                </Grid>
              </Grid>

              <Box mt={2}>
                <Typography variant="caption" className={classes.fieldLabel}>
                   <DescriptionIcon style={{ fontSize: 14, verticalAlign: 'middle', marginRight: 4 }}/>
                   DESCRIÇÃO TÉCNICA (ORIGINAL)
                </Typography>
                <div className={classes.codeBlock}>
                  {prData.body || "Sem descrição fornecida."}
                </div>
              </Box>

            </InfoCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <InfoCard title="Ações e Logs">
              <Typography variant="body2" paragraph color="textSecondary">
                O provisionamento é gerenciado via GitHub Actions. Para ver o progresso e logs do Terraform, acesse o PR.
              </Typography>
              
              <Button 
                variant="contained" 
                color="primary" 
                href={prData.html_url} 
                target="_blank"
                fullWidth
                size="large"
                startIcon={<GitHubIcon />}
              >
                Ver no GitHub
              </Button>

              {/* Mensagem para PR em andamento */}
              {requestStatus === 'running' && (
                <Box mt={2} p={2} bgcolor="rgba(253, 173, 0, 0.1)" borderRadius={4} border="1px solid rgba(253, 173, 0, 0.2)">
                  <Typography variant="caption" style={{ color: '#fdad00', fontWeight: 'bold' }}>
                    ℹ️ STATUS: AGUARDANDO APROVAÇÃO
                  </Typography>
                  <Typography variant="body2" style={{ color: '#fdad00', marginTop: 4 }}>
                    Sua solicitação está na fila de revisão. Um engenheiro de SRE precisa validar o "Plan" antes de aplicar as mudanças.
                  </Typography>
                </Box>
              )}

              {/* Mensagem para PR concluído (Mergeado) */}
              {requestStatus === 'success' && (
                <Box mt={2} p={2} bgcolor="rgba(76, 175, 80, 0.1)" borderRadius={4} border="1px solid rgba(76, 175, 80, 0.2)">
                  <Typography variant="caption" style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                    ✅ STATUS: PROVISIONADO
                  </Typography>
                  <Typography variant="body2" style={{ color: '#4CAF50', marginTop: 4 }}>
                    A infraestrutura foi criada com sucesso. Você já pode validar os recursos no console da AWS ou através dos endpoints gerados.
                  </Typography>
                </Box>
              )}

              {/* Mensagem para PR cancelado ou fechado sem merge */}
              {requestStatus === 'error' && (
                <Box mt={2} p={2} bgcolor="rgba(244, 67, 54, 0.1)" borderRadius={4} border="1px solid rgba(244, 67, 54, 0.2)">
                  <Typography variant="caption" style={{ color: '#f44336', fontWeight: 'bold' }}>
                    ❌ STATUS: CANCELADO
                  </Typography>
                  <Typography variant="body2" style={{ color: '#f44336', marginTop: 4 }}>
                    Esta solicitação foi encerrada. Verifique os comentários no GitHub para entender o motivo da recusa ou falha técnica.
                  </Typography>
                </Box>
              )}
            </InfoCard>
          </Grid>

        </Grid>
      </Content>
    </Page>
  );
};