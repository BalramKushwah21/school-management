"use client";
import React from "react";
import style from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({children}) {
  const pathname = usePathname();
  const page = pathname.split("/")[1];

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
 
  return (
    <div className={style.mainContainer}  >
      <aside className={style.sidebar} style={{display:isMenuOpen?"flex":"none",}} >
        <h2 className={style.logo}>School Management</h2>
        <Link href="/" className={style.link}>Dashboard</Link>
        <Link href="/students" className={style.link}>Students</Link>
        <Link href="/teachers" className={style.link}>Teachers</Link>
        <Link href="/courses" className={style.link}>Classes</Link>
        <Link href="/attendance" className={style.link}>Attendance</Link>
        <Link href="/examinations" className={style.link}>Examinations</Link>
        <Link href="/assignments" className={style.link}>Assignment</Link>
        <Link href="/curriculum" className={style.link}>Curriculum</Link>
        <Link href="/timetable" className={style.link}>Timetable</Link>
        <Link href="/admissions" className={style.link}>Admissions</Link>
        <Link href="/library" className={style.link}>Library</Link>
        <Link href="/fees" className={style.link}>Fees</Link>
        <Link href="/reports" className={style.link}>Reports</Link>
        <Link href="/settings" className={style.link}>Settings</Link>
        <Link href="/academics" className={style.link}>Academics</Link>
        <Link href="/department" className={style.link}>Department</Link>

      </aside>

      <div className={style.container}>

  
      <header className={style.header}>
        <button className={style.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <h1 className={style.pageTitle}>{page.toUpperCase()|| "DASHBOARD"}</h1>

        </header>
        <main className={style.content}>
        {children}
      </main>
    
      </div>
    </div>
  );
}
