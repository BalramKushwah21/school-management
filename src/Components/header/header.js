import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header}>
      
      <h2 className={styles.logo}>School Management</h2>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/students" className={styles.link}>
          Students
        </Link>
        <Link href="/teachers" className={styles.link}>
          Teachers
        </Link>
        <Link href="/classes" className={styles.link}>
          Classes
        </Link>
      </div>


    </div>
  )
}
