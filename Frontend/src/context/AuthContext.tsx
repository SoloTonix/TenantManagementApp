// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export type Role = 'landlord' | 'tenant';

export type User = {
  name: string;
  email: string;
  roles: Role[];       // all roles available for this user (both roles by default)
  activeRole?: Role;   // the role the user is currently using
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  switchRole: (role: Role) => void; // switch active role
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  switchRole: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    // default active role: pick first role if exists
    setUser({ ...userData, activeRole: userData.roles[0] });
  };

  const logout = () => setUser(null);

  const switchRole = (role: Role) => {
    if (user && user.roles.includes(role)) {
      setUser({ ...user, activeRole: role });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};