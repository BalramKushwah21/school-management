import React from 'react'
import Link from 'next/link'
import styles from './styles/not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className={styles.backButton}>Go back home</Link>
    </div>
  )
}
