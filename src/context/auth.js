import React, { useState, useContext } from 'react';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const ctx = { user, setUser };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext);
