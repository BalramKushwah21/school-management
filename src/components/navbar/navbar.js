"use client";
import React from "react";
import style from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getNavigationForRole } from "@/auth/roles";
import { useAuth } from "@/auth/auth-provider";

export default function Navbar({ children }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1] || "home";
  const page = currentPage
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { role, logout } = useAuth();
  const navigation = getNavigationForRole(role);

  return (
    <div className={style.mainContainer}>
      <aside className={`${style.sidebar} ${!isMenuOpen ? style.closed : ""}`}>
        <h2 className={style.logo}>School Management</h2>
        <div className={style.roleTag}>{role ? role.toUpperCase() : "VISITOR"}</div>
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className={style.link}>
            {item.label}
          </Link>
        ))}
        {role ? (
          <button className={style.logoutButton} onClick={logout} type="button">
            Logout
          </button>
        ) : (
          <Link href="/login" className={style.loginButton}>
            Login
          </Link>
        )}
      </aside>

      <div className={style.container}>
        <header className={style.header}>
          <button
            className={style.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <h1 className={style.pageTitle}>
            {page || "HOME"}
          </h1>
        </header>
        <main className={style.content}>{children}</main>
      </div>
    </div>
  );
}
