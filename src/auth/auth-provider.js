"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getRoleHome, roles } from "./roles";

const AuthContext = createContext(null);
const storageKey = "school-management-role";

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedRole = window.localStorage.getItem(storageKey);

    if (roles.includes(storedRole)) {
      setRole(storedRole);
    }

    setHydrated(true);
  }, []);

  const value = useMemo(() => {
    return {
      role,
      hydrated,
      login: (nextRole) => {
        if (!roles.includes(nextRole)) {
          return "/login";
        }

        window.localStorage.setItem(storageKey, nextRole);
        setRole(nextRole);
        return getRoleHome(nextRole);
      },
      logout: () => {
        window.localStorage.removeItem(storageKey);
        setRole(null);
      },
    };
  }, [hydrated, role]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}