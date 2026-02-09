/*
 * Hi!
 *
 * Note that this is an EXAMPLE Backstage backend. Please check the README.
 *
 * Happy hacking!
 */

import { createBackend } from '@backstage/backend-defaults';
import { createBackendModule } from '@backstage/backend-plugin-api';
import { policyExtensionPoint } from '@backstage/plugin-permission-node/alpha';
import { PersonalPermissionPolicy } from './permissions/policy'; // Importa sua política personalizada

const backend = createBackend();

// --- Definição do Módulo de Permissão Personalizado ---
const customPermissionModule = createBackendModule({
  pluginId: 'permission',
  moduleId: 'personal-policy',
  register(reg) {
    reg.registerInit({
      deps: { policy: policyExtensionPoint },
      async init({ policy }) {
        policy.setPolicy(new PersonalPermissionPolicy());
      },
    });
  },
});
// -----------------------------------------------------

backend.add(import('@backstage/plugin-app-backend'));
backend.add(import('@backstage/plugin-proxy-backend'));

// scaffolder plugin
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
backend.add(
  import('@backstage/plugin-scaffolder-backend-module-notifications'),
);

// techdocs plugin
backend.add(import('@backstage/plugin-techdocs-backend'));

// auth plugin
backend.add(import('@backstage/plugin-auth-backend'));
// See https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin
backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
// See https://backstage.io/docs/auth/guest/provider

// ✅ ADICIONADO: Provider do GitHub (necessário para o login funcionar)
backend.add(import('@backstage/plugin-auth-backend-module-github-provider'));

// catalog plugin
backend.add(import('@backstage/plugin-catalog-backend'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);
backend.add(import('@backstage/plugin-catalog-backend-module-github-org'));
// See https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors
backend.add(import('@backstage/plugin-catalog-backend-module-logs'));

// permission plugin
backend.add(import('@backstage/plugin-permission-backend'));

// REMOVIDO: A política "allow-all" (tudo liberado) foi substituída pela sua customizada abaixo
// backend.add(import('@backstage/plugin-permission-backend-module-allow-all-policy'));

// ADICIONADO: Sua política que controla as aprovações
backend.add(customPermissionModule);

// search plugin
backend.add(import('@backstage/plugin-search-backend'));

// search engine
// See https://backstage.io/docs/features/search/search-engines
backend.add(import('@backstage/plugin-search-backend-module-pg'));

// search collators
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));

// kubernetes plugin
backend.add(import('@backstage/plugin-kubernetes-backend'));

// notifications and signals plugins
backend.add(import('@backstage/plugin-notifications-backend'));
backend.add(import('@backstage/plugin-signals-backend'));

backend.start();