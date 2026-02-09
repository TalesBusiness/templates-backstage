import { 
  PermissionPolicy, 
  PolicyQuery, 
  PolicyQueryUser 
} from '@backstage/plugin-permission-node';
import { 
  PolicyDecision, 
  AuthorizeResult 
} from '@backstage/plugin-permission-common';
import { 
  templateStepReadPermission 
} from '@backstage/plugin-scaffolder-common/alpha';

export class PersonalPermissionPolicy implements PermissionPolicy {
  async handle(request: PolicyQuery, user?: PolicyQueryUser): Promise<PolicyDecision> {
    
    if (request.permission.name === templateStepReadPermission.name) {
      const userRef = user?.info.userEntityRef;
      const tags = request.metadata?.tags || []; // Garante que é um array

      // 1. Regra DEVOPS
      if (tags.includes('aprovacao-devops')) {
        return userRef === 'group:default/team-devops' 
          ? { result: AuthorizeResult.ALLOW } 
          : { result: AuthorizeResult.DENY };
      }

      // 2. Regra ENGENHARIA (Adicionado)
      if (tags.includes('aprovacao-engenharia')) {
        return userRef === 'group:default/team-engenharia'
          ? { result: AuthorizeResult.ALLOW }
          : { result: AuthorizeResult.DENY };
      }

      // 3. Regra GERÊNCIA (Adicionado)
      if (tags.includes('aprovacao-gerencia')) {
        return userRef === 'group:default/team-gerencia'
          ? { result: AuthorizeResult.ALLOW }
          : { result: AuthorizeResult.DENY };
      }
    }

    // Se não tiver tag nenhuma, libera o passo
    return { result: AuthorizeResult.ALLOW };
  }
}