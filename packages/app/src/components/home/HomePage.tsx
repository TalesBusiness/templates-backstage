import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Button, useTheme } from '@material-ui/core';
import { Content, Page, Link } from '@backstage/core-components';
import { useApi, configApiRef } from '@backstage/core-plugin-api';

// Ícones
import RocketIcon from '@material-ui/icons/EmojiEvents';
import DocsIcon from '@material-ui/icons/Description';
import ApiIcon from '@material-ui/icons/Code';
import CreateIcon from '@material-ui/icons/AddCircleOutline';
import CatalogIcon from '@material-ui/icons/Category';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SupportIcon from '@material-ui/icons/HelpOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';

// Import do seu componente de PRs (mesma pasta)
import { MyPullRequestsCard } from './MyPullRequestsCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    // Gradientes adaptativos baseados no tema
    backgroundImage: theme.palette.type === 'dark' 
      ? `radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 20%), 
         radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 20%)`
      : `radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 20%), 
         radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 20%)`,
  },
  
  // Header Hero
  heroSection: {
    padding: theme.spacing(4, 0, 6),
    marginBottom: theme.spacing(2),
  },
  greeting: {
    fontWeight: 800,
    fontSize: '2.5rem',
    // Gradiente adaptativo
    background: theme.palette.type === 'dark'
      ? 'linear-gradient(90deg, #fff, #94a3b8)'
      : 'linear-gradient(90deg, #1e293b, #64748b)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
    maxWidth: '600px',
  },

  // Estilo dos Cards Principais
  card: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px',
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: theme.shadows[2],
    transition: 'transform 0.2s, border-color 0.2s',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      transform: 'translateY(-2px)',
    }
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    color: theme.palette.text.primary,
  },
  cardContent: {
    color: theme.palette.text.secondary,
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },

  // Estilos para Atalhos Rápidos
  quickLinkGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(2),
  },
  quickLinkBtn: {
    backgroundColor: theme.palette.type === 'dark' 
      ? 'rgba(255,255,255,0.03)' 
      : 'rgba(0,0,0,0.02)',
    borderRadius: '12px',
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    transition: 'all 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark'
        ? 'rgba(99, 102, 241, 0.1)'
        : 'rgba(99, 102, 241, 0.05)',
      borderColor: theme.palette.primary.main,
      transform: 'translateY(-2px)',
    }
  },
  quickLinkTitle: {
    fontWeight: 700,
    fontSize: '1rem',
    marginBottom: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: theme.palette.text.primary,
  },
  quickLinkDesc: {
    fontSize: '0.8rem',
    color: theme.palette.text.secondary,
  },

  // Wrapper do componente de PRs (adaptado)
  prWrapper: {
    width: '100%',
    
    // Remove fundo dos Papers e Cards internos
    '& .MuiPaper-root, & .MuiCard-root': {
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
      backgroundImage: 'none !important',
    },

    // Estiliza a Tabela
    '& table': {
      backgroundColor: 'transparent !important',
    },
    '& thead': {
      backgroundColor: theme.palette.type === 'dark'
        ? 'rgba(255,255,255,0.05) !important'
        : 'rgba(0,0,0,0.03) !important',
    },
    '& th': {
      color: `${theme.palette.text.secondary} !important`,
      borderBottom: `1px solid ${theme.palette.divider} !important`,
      fontWeight: 700,
    },
    '& td': {
      color: `${theme.palette.text.primary} !important`,
      borderBottom: `1px solid ${theme.palette.divider} !important`,
    },

    // Estiliza Links
    '& a': {
      color: `${theme.palette.primary.main} !important`,
      textDecoration: 'none',
      fontWeight: 600,
      '&:hover': {
        color: `${theme.palette.primary.dark} !important`,
      }
    },

    // Remove títulos internos duplicados se houver
    '& .MuiCardHeader-root': {
      display: 'none !important', 
    }
  }
}));

// Componente auxiliar de Link Rápido
const QuickLink = ({ to, label, hint, icon: Icon }: { to: string; label: string; hint: string; icon: any }) => {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <Link to={to} className={classes.quickLinkBtn}>
            <div className={classes.quickLinkTitle}>
                {Icon && <Icon style={{ fontSize: 20, color: theme.palette.primary.main }} />}
                {label}
            </div>
            <div className={classes.quickLinkDesc}>{hint}</div>
        </Link>
    );
};

export const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const config = useApi(configApiRef);
  const appTitle = config.getString('app.title') || 'Developer Portal';
  
  return (
    <Page themeId="home">
      <div className={classes.root}>
        <Content>
          
          {/* Header Hero */}
          <div className={classes.heroSection}>
            <Typography variant="h1" className={classes.greeting}>
                Olá, Engenheiro.
            </Typography>
            <Typography className={classes.subtitle}>
                Bem-vindo ao <b>{appTitle}</b>. Gerencie serviços, acompanhe deployments e acesse a documentação em um só lugar.
            </Typography>
          </div>

          <Grid container spacing={4}>
            
            {/* 🟢 COLUNA ESQUERDA (PRINCIPAL) */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4} direction="column">
                
                {/* 1. Card "Comece por aqui" */}
                <Grid item>
                  <Paper className={classes.card}>
                    <div className={classes.cardTitle}>
                        <RocketIcon style={{ color: '#fbbf24' }} />
                        Comece por aqui
                    </div>
                    <div className={classes.cardContent}>
                        <p style={{ margin: 0 }}>
                            Use o menu <b>Criar</b> para iniciar novos microserviços baseados em templates aprovados.
                            Mantenha a documentação atualizada no <b>TechDocs</b> para garantir a qualidade do catálogo.
                        </p>
                    </div>
                  </Paper>
                </Grid>

                {/* 2. Card "Minhas Solicitações" */}
                <Grid item>
                  <Paper className={classes.card}>
                    <div className={classes.cardTitle}>
                        <ListAltIcon style={{ color: theme.palette.primary.main }} />
                        Minhas Solicitações
                    </div>
                    <div className={classes.prWrapper}>
                         <MyPullRequestsCard />
                    </div>
                  </Paper>
                </Grid>

              </Grid>
            </Grid>


            {/* 🔵 COLUNA DIREITA (LATERAL) */}
            <Grid item xs={12} md={4}>
              <Grid container spacing={4} direction="column">

                {/* 1. Acesso Rápido */}
                <Grid item>
                  <Paper className={classes.card}>
                    <div className={classes.cardTitle}>
                        Acesso Rápido
                    </div>
                    <div className={classes.quickLinkGrid}>
                      <QuickLink to="/catalog" label="Catálogo" hint="Serviços" icon={CatalogIcon} />
                      <QuickLink to="/docs" label="Docs" hint="TechDocs" icon={DocsIcon} />
                      <QuickLink to="/create" label="Criar" hint="Templates" icon={CreateIcon} />
                      <QuickLink to="/api-docs" label="APIs" hint="OpenAPI" icon={ApiIcon} />
                    </div>
                  </Paper>
                </Grid>

                {/* 2. Suporte */}
                <Grid item>
                  <Paper 
                    className={classes.card} 
                    style={{ borderLeft: `4px solid ${theme.palette.primary.main}` }}
                  >
                    <div className={classes.cardTitle}>
                        <SupportIcon style={{ color: theme.palette.text.secondary }} />
                        Suporte
                    </div>
                    <div className={classes.cardContent}>
                      <p>
                        Precisa de permissões ou encontrou um problema?
                      </p>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        to="/settings"
                        style={{ width: '100%', marginTop: 8 }}
                      >
                        Falar com SRE
                      </Button>
                    </div>
                  </Paper>
                </Grid>

              </Grid>
            </Grid>

          </Grid>
        </Content>
      </div>
    </Page>
  );
};
