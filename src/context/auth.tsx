import React, { useState, useContext } from 'react';
import type { FC, ReactNode, SetStateAction, Dispatch } from 'react';

interface AuthUser {
  displayName: string;
}

// type AuthUser = Record<string, unknown> | null;

export interface AuthCtx {
  user: AuthUser | null;
  setUser: Dispatch<SetStateAction<AuthUser>>;
}

export const AuthContext = React.createContext<AuthCtx>({
  user: null,
  setUser: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const ctx = { user, setUser };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext);
