"use client";
import { SITE_CONFIG } from "@/config/site";

import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.topStrip}></div>

        <div className={styles.container}>
          <div className={styles.logoSection}>
            <img
              src="/logo.png"
              alt="School Logo"
              className={styles.logoImage}
            />
            <h1 className={styles.heading}>{SITE_CONFIG.school.name}</h1>
          </div>

          <nav className={styles.desktopMenu}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/courses" className={styles.navLink}>Courses</Link>
            <Link href="/gallery" className={styles.navLink}>Gallery</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>

          <button
            className={styles.toggleBtn}
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {menuOpen && <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)}></div>}

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <Link href="/" className={styles.mobileLink}>Home</Link>
        <Link href="/about" className={styles.mobileLink}>About</Link>
        <Link href="/courses" className={styles.mobileLink}>Courses</Link>
        <Link href="/gallery" className={styles.mobileLink}>Gallery</Link>
        <Link href="/contact" className={styles.mobileLink}>Contact</Link>
      </div>
    </>
  );
}