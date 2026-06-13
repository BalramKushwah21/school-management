"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  canAccessPath,
  getRoleHome,
  isLoginPath,
  isPublicPath,
  stripSchoolPath,
} from "./roles";
import { useAuth } from "./auth-provider";

export default function RouteGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { role, hydrated } = useAuth();

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    const { school } = stripSchoolPath(pathname);

    if (!role && !isPublicPath(pathname)) {
      router.replace("/login");
      return;
    }

    if (role && isLoginPath(pathname)) {
      router.replace(getRoleHome(role, school));
      return;
    }

    if (role && !canAccessPath(role, pathname)) {
      router.replace(getRoleHome(role, school));
    }
  }, [hydrated, pathname, role, router]);

  if (!hydrated) {
    return (
      <div className="rounded-[28px] bg-white p-8 text-slate-600 shadow-sm ring-1 ring-slate-200/70">
        Loading access...
      </div>
    );
  }

  if (!role && !isPublicPath(pathname)) {
    return null;
  }

  if (role && isLoginPath(pathname)) {
    return null;
  }

  if (role && !canAccessPath(role, pathname)) {
    return null;
  }

  return children;
}
