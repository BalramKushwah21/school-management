"use client";

import { useMemo } from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function useAuth() {
  const { data: session, status } = useSession();
  const role = session?.user?.role || null;
  const hydrated = status !== "loading";

  return useMemo(
    () => ({
      session,
      role,
      hydrated,
      login: async (email, password) =>
        signIn("credentials", {
          redirect: false,
          email,
          password,
        }),
      logout: () => signOut({ callbackUrl: "/login" }),
    }),
    [session, status],
  );
}
