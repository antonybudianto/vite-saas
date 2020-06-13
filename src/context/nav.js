import React, { useState, useContext } from 'react';

const initialState = {
  collapsed: true,
  showUserDropdown: false,
};
export const NavContext = React.createContext(initialState);

export const NavProvider = ({ children }) => {
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
  const ctx = { nav, toggleCollapse, toggleUserDropdown };

  return <NavContext.Provider value={ctx}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);
