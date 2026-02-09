import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import {
  AlertDisplay,
  OAuthRequestDialog,
} from '@backstage/core-components';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { UnifiedThemeProvider } from '@backstage/theme';

// Plugins
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import { NotificationsPage } from '@backstage/plugin-notifications';
import { SignalsDisplay } from '@backstage/plugin-signals';

// Ícones
import LightIcon from '@material-ui/icons/Brightness7';
import DarkIcon from '@material-ui/icons/Brightness4';

// Componentes Locais
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';
import { modernDarkTheme, modernLightTheme } from './themes';
import { HomePage } from './components/home/HomePage';
import { MyRequestsPage } from './components/requests/MyRequestsPage';
import { DeploymentStatusPage } from './components/deployment/DeploymentStatusPage';

// ✅ IMPORTANTE: Importando sua página de Login Customizada
import { CustomSignInPage } from './components/sign-in/CustomSignInPage';

const app = createApp({
  apis,

  themes: [
    {
      id: 'modern-light',
      title: 'Modern Light',
      variant: 'light',
      icon: <LightIcon />,
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={modernLightTheme} children={children} />
      ),
    },
    {
      id: 'modern-dark',
      title: 'Modern Dark',
      variant: 'dark',
      icon: <DarkIcon />,
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={modernDarkTheme} children={children} />
      ),
    },
  ],

  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
      createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },

  components: {
    // ✅ Configuração da Página de Login Customizada
    SignInPage: props => (
      <CustomSignInPage
        {...props}
        provider={{
          id: 'github-auth-provider',
          title: 'GitHub',
          message: 'Entrar com GitHub',
          apiRef: githubAuthApiRef,
        }}
      />
    ),
  },
});

const routes = (
  <FlatRoutes>
    {/* Home e Customizações */}
    <Route path="/" element={<HomePage />} />
    <Route path="/minhas-solicitacoes" element={<MyRequestsPage />} />
    <Route path="/deployment-status/:owner/:repo/:prNumber" element={<DeploymentStatusPage />} />

    {/* Catálogo */}
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route path="/catalog/:namespace/:kind/:name" element={<CatalogEntityPage />}>
      {entityPage}
    </Route>

    {/* Documentação */}
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route path="/docs/:namespace/:kind/:name/*" element={<TechDocsReaderPage />}>
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>

    {/* Scaffolder (Templates) */}
    <Route path="/create" element={<ScaffolderPage />} />

    {/* APIs */}
    <Route path="/api-docs" element={<ApiExplorerPage />} />

    {/* Importação */}
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />

    {/* Busca */}
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>

    {/* Configurações e Outros */}
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
    <Route path="/notifications" element={<NotificationsPage />} />

    {/* Fallback */}
    <Route path="*" element={<Navigate to="/" />} />
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <SignalsDisplay />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);