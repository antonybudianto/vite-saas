import React, { useState, useContext } from 'react';
import type { FC, ReactNode } from 'react';

interface NavData {
  collapsed: boolean;
  showUserDropdown: boolean;
}
export interface NavCtx {
  nav: NavData | null;
  toggleCollapse: () => void;
  toggleUserDropdown: () => void;
}

const initialState: NavData = {
  collapsed: true,
  showUserDropdown: false,
};
export const NavContext = React.createContext<NavCtx>({
  nav: null,
  toggleCollapse() {},
  toggleUserDropdown() {},
});

export const NavProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [nav, setNav] = useState(initialState);
  const toggleCollapse = () => {
    setNav({
      ...nav,
      collapsed: !nav.collapsed,
    });
  };
  const toggleUserDropdown = () => {
    setNav({
      ...nav,
      showUserDropdown: !nav.showUserDropdown,
    });
  };
  const ctx: NavCtx = { nav, toggleCollapse, toggleUserDropdown };

  return <NavContext.Provider value={ctx}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);
