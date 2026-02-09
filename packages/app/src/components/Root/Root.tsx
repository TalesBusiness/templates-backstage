import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';

// Ícones
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category'; // ✅ Ícone padrão para o Catalog
import ExtensionIcon from '@material-ui/icons/Extension';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt'; // ✅ Ícone de Minhas Solicitações

// Componentes do Logo (assumindo que estão na mesma pasta)
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';

// Plugins Backstage
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';

// Componentes Core
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarSpace,
  useSidebarOpenState,
  Link,
} from '@backstage/core-components';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -10,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 22,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      {/* Ajustei para levar para a Home (Dashboard) ao clicar no logo */}
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
      <SidebarLogo />

      <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
        <SidebarSearchModal />
      </SidebarGroup>

      <SidebarDivider />

      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        {/* ✅ HOME (Dashboard Personalizada) */}
        <SidebarItem icon={HomeIcon} to="/" text="Home" />

        {/* ✅ CATALOG (Agora usando ícone de Categoria) */}
        <SidebarItem icon={CategoryIcon} to="/catalog" text="Catalog" />
        
        <SidebarItem icon={LibraryBooksIcon} to="/docs" text="Docs" />
        <SidebarItem icon={ExtensionIcon} to="/api-docs" text="APIs" />
        
        <SidebarItem icon={CreateComponentIcon} to="/create" text="Create" />
        
        {/* ✅ Minhas Solicitações (Histórico) */}
        <SidebarItem icon={ListAltIcon} to="/minhas-solicitacoes" text="Solicitações" />
        
        {/* ✅ Tasks do Scaffolder */}
        <SidebarItem icon={ListIcon} to="/create/tasks" text="Tasks" />

        <SidebarDivider />

        <MyGroupsSidebarItem
          singularTitle="My Group"
          pluralTitle="My Groups"
          icon={GroupIcon}
        />
      </SidebarGroup>

      <SidebarSpace />

      <SidebarDivider />
      <NotificationsSidebarItem />

      <SidebarDivider />
      <SidebarGroup label="Settings" icon={<UserSettingsSignInAvatar />} to="/settings">
        <SidebarSettings />
      </SidebarGroup>
    </Sidebar>

    {children}
  </SidebarPage>
);