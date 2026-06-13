"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { canAccessPath, getRoleHome, publicRoutes } from "./roles";
import { useAuth } from "./auth-provider";

export default function RouteGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { role, hydrated } = useAuth();

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    if (!role && !canAccessPath(role, pathname)) {
      router.replace("/login");
      return;
    }

    if (role && pathname === "/login") {
      router.replace(getRoleHome(role));
      return;
    }

    if (role && !canAccessPath(role, pathname)) {
      router.replace(getRoleHome(role));
    }
  }, [hydrated, pathname, role, router]);

  if (!hydrated) {
    return (
      <div className="rounded-[28px] bg-white p-8 text-slate-600 shadow-sm ring-1 ring-slate-200/70">
        Loading access...
      </div>
    );
  }

  if (!role && !publicRoutes.includes(pathname)) {
    return null;
  }

  if (role && pathname === "/login") {
    return null;
  }

  if (role && !canAccessPath(role, pathname)) {
    return null;
  }

  return children;
}