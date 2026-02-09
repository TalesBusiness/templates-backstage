// 1. Removi o 'import React' para tirar o aviso de valor não lido
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Paper } from '@material-ui/core';
// ✅ SignInPageProps não existe no core-components, apenas o componente SignInPage e o tipo da config
import { SignInPage, SignInProviderConfig } from '@backstage/core-components'; 
// ✅ SignInPageProps (a interface de sucesso) vem do core-plugin-api
import { SignInPageProps, useApi, configApiRef } from '@backstage/core-plugin-api';

// 2. Criamos uma interface que une o que o App.tsx envia (provider e auto) 
// com o que o Backstage espera (onSignInSuccess)
interface CustomSignInPageProps extends SignInPageProps {
  provider: SignInProviderConfig;
  auto?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    fontFamily: theme.typography.fontFamily,
    backgroundColor: '#0f172a',
    overflow: 'hidden',
  },
  
  // --- LADO ESQUERDO (Visual / Branding) ---
  imageSide: {
    position: 'relative',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    overflow: 'hidden',
    height: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      right: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
      animation: '$pulse 15s ease-in-out infinite',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.15,
      mixBlendMode: 'overlay',
    }
  },
  
  imageContent: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(8),
    color: '#ffffff',
  },
  
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  
  logoIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '24px',
    fontWeight: 700,
  },
  
  featuresList: {
    marginTop: theme.spacing(6),
    padding: 0,
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      display: 'flex',
      alignItems: 'flex-start',
      gap: theme.spacing(2),
      opacity: 0,
      animation: '$fadeInUp 0.6s ease-out forwards',
      '&:nth-child(1)': { animationDelay: '0.2s' },
      '&:nth-child(2)': { animationDelay: '0.4s' },
      '&:nth-child(3)': { animationDelay: '0.6s' },
    },
  },
  
  featureIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  
  // --- LADO DIREITO (Formulário) ---
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    backgroundColor: '#ffffff',
    padding: theme.spacing(4),
    zIndex: 3,
    overflowY: 'auto',
  },
  
  contentContainer: {
    width: '100%',
    maxWidth: '460px',
    textAlign: 'center',
    margin: 'auto', 
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    animation: '$fadeIn 0.8s ease-out',
  },
  
  brandSection: {
    marginBottom: theme.spacing(4),
    '& .brand-icon': {
      width: 72,
      height: 72,
      margin: '0 auto 16px',
      borderRadius: 18,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '36px',
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
    }
  },
  
  title: {
    fontWeight: 800,
    fontSize: '2rem',
    color: '#0f172a',
    marginBottom: theme.spacing(2),
    letterSpacing: '-0.5px',
    lineHeight: 1.2,
  },
  
  subtitle: {
    color: '#64748b',
    fontSize: '1rem',
    marginBottom: theme.spacing(4),
    fontWeight: 400,
    lineHeight: 1.6,
  },
  
  decorativeBar: {
    width: 60,
    height: 4,
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    borderRadius: 2,
    margin: '0 auto 24px',
  },
  
  signInWrapper: {
    width: '100%',
    marginTop: theme.spacing(6),
    
    '& header': { display: 'none !important' },
    '& h1': { display: 'none !important' },
    '& .BackstagePage-content-2': { padding: '0 !important' },
    
    '& .MuiButton-root': {
      width: '100%',
      marginBottom: theme.spacing(2),
      height: '64px',
      justifyContent: 'center',
      borderRadius: '16px !important',
      fontSize: '1.1rem',
      fontWeight: 600,
      textTransform: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: '#0f172a',
      color: '#ffffff',
      border: 'none',
      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        transition: 'left 0.5s',
      },
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        '&::before': { left: '100%' }
      },
    },
    '& > div': {
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
    }
  },
  
  footer: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    borderTop: '1px solid #f1f5f9',
  },
  
  footerLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#764ba2',
      textDecoration: 'underline',
    }
  },
  
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  '@keyframes pulse': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '50%': { transform: 'translate(-10%, -10%) scale(1.1)' }
  }
}));

// ✅ 3. Usamos a interface customizada aqui
export const CustomSignInPage = (props: CustomSignInPageProps) => {
  const classes = useStyles();
  const config = useApi(configApiRef);
  const appTitle = config.getString('app.title') || 'Portal de Engenharia';

  return (
    <Grid container component="main" className={classes.root}>
      
      {/* Esquerda */}
      <Grid item xs={false} sm={5} md={7} className={classes.imageSide}>
        <div className={classes.imageContent}>
          <div className={classes.logoSection}>
            <div className={classes.logoIcon}>T</div>
            <Typography variant="h5" style={{ fontWeight: 700, letterSpacing: 1 }}>
              TALESCORP
            </Typography>
          </div>
          
          <div>
            <Typography variant="h3" style={{ fontWeight: 800, marginBottom: 24, lineHeight: 1.2 }}>
              Transforme sua<br />Infraestrutura em<br />Excelência
            </Typography>
            
            <Typography variant="body1" style={{ opacity: 0.95, maxWidth: '500px', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Plataforma unificada para gerenciamento de serviços, 
              monitoramento de infraestrutura e automação de processos.
            </Typography>
            
            <ul className={classes.featuresList}>
              <li>
                <div className={classes.featureIcon}>🚀</div>
                <div>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>Deploy Automatizado</Typography>
                  <Typography variant="body2" style={{ opacity: 0.9 }}>CI/CD integrado com seus pipelines</Typography>
                </div>
              </li>
              <li>
                <div className={classes.featureIcon}>📊</div>
                <div>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>Observabilidade Total</Typography>
                  <Typography variant="body2" style={{ opacity: 0.9 }}>Métricas e logs em tempo real</Typography>
                </div>
              </li>
              <li>
                <div className={classes.featureIcon}>🔒</div>
                <div>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>Segurança Enterprise</Typography>
                  <Typography variant="body2" style={{ opacity: 0.9 }}>SSO, MFA e auditoria</Typography>
                </div>
              </li>
            </ul>
          </div>
          
          <div style={{ display: 'flex', gap: 32, opacity: 0.9 }}>
            <div><Typography variant="h4" style={{ fontWeight: 700 }}>99.9%</Typography><Typography variant="caption">Uptime</Typography></div>
            <div><Typography variant="h4" style={{ fontWeight: 700 }}>500+</Typography><Typography variant="caption">Serviços</Typography></div>
            <div><Typography variant="h4" style={{ fontWeight: 700 }}>24/7</Typography><Typography variant="caption">Suporte</Typography></div>
          </div>
        </div>
      </Grid>

      {/* Direita: Formulário */}
      <Grid item xs={12} sm={7} md={5} component={Paper} elevation={0} square className={classes.paper}>
        <div className={classes.contentContainer}>
          
          <div className={classes.decorativeBar}></div>
          
          <div className={classes.brandSection}>
            <div className="brand-icon">T</div>
            <Typography variant="h5" style={{ fontWeight: 800, color: '#0f172a', letterSpacing: 1.5 }}>
              TALESCORP
            </Typography>
            <Typography variant="caption" style={{ color: '#667eea', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
              Engineering Portal
            </Typography>
          </div>

          <Typography component="h1" className={classes.title}>
            {appTitle}
          </Typography>
          
          <Typography variant="body2" className={classes.subtitle}>
            Entre com suas credenciais corporativas para continuar
          </Typography>

          {/* ✅ 4. Agora o TypeScript sabe que 'props' contém 'provider' e 'auto' */}
          <div className={classes.signInWrapper}>
            <SignInPage {...props} />
          </div>

          <Box className={classes.footer}>
            <Typography variant="caption" style={{ color: '#64748b', display: 'block', marginBottom: 8 }}>
              Precisa de acesso? <a href="#" className={classes.footerLink}>Contate o time de SRE</a>
            </Typography>
            <Typography variant="caption" style={{ color: '#94a3b8' }}>
              © 2026 TalesCorp. Todos os direitos reservados.
            </Typography>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};