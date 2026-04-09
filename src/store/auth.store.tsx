import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../interfaces/user.interface';

interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

// Variable externa accesible fuera de React
let currentToken: string | null = null;

export const getAuthToken = () => currentToken;

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const setAuth = (newToken: string, newUser: User) => {
    currentToken = newToken;
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    currentToken = null;
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthStore = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('useAuthStore must be used within AuthProvider');
  return context;
};
