"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getNavigationForRole, roles as allowedRoles } from "@/auth/roles";
import { useAuth } from "@/auth/auth-provider";
import style from "./navbar.module.css";

export default function Navbar({ children }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1] || "home";
  const page = currentPage
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { role, logout } = useAuth();
  const schoolMatch = pathname.match(/^\/school\/([^/]+)/);
  const schoolPrefix = schoolMatch ? `/school/${schoolMatch[1]}` : "";

  const navigation = getNavigationForRole(role).map((item) => ({
    ...item,
    href:
      schoolPrefix && item.href !== "/"
        ? `${schoolPrefix}${item.href}`
        : schoolPrefix
        ? schoolPrefix
        : item.href,
  }));

  if (pathname === "/") {
    return <>{children}</>;
  }

  if (!role || !allowedRoles.includes(role)) {
    return <>{children}</>;
  }

  return (
    <div className={style.mainContainer}>
      <aside className={`${style.sidebar} ${!isMenuOpen ? style.closed : ""}`}>
        <h2 className={style.logo}>School Management</h2>
        <div className={style.roleTag}>{role.toUpperCase()}</div>
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className={style.link}>
            {item.label}
          </Link>
        ))}
        <button className={style.logoutButton} onClick={logout} type="button">
          Logout
        </button>
      </aside>

      <div className={style.container}>
        <header className={style.header}>
          <button
            className={style.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            Menu
          </button>
          <h1 className={style.pageTitle}>{page}</h1>
        </header>
        <main className={style.content}>{children}</main>
      </div>
    </div>
  );
}
