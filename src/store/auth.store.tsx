// auth.store.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import { User } from '../interfaces/user.interface';
import { appStorage } from './app.store';

interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

const isTokenValid = (token?: string | null): boolean => {
  if (!token) return false;
  try {
    const decoded: any = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  } catch {
    return false;
  }
};

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [token, setToken] = useState<string | null>(() => {
    const saved = appStorage.getString('token');
    return isTokenValid(saved) ? saved! : null;
  });

  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = appStorage.getString('user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const setAuth = (newToken: string, newUser: User) => {
    appStorage.set('token', newToken);
    appStorage.set('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    appStorage.set('token', '');
    appStorage.set('user', '');
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

export { isTokenValid };
