import React from 'react'
import style from "./header.module.css"
import Link from "next/link"
import Image from 'next/image'

export default function header() {
  return (
    <div className={style.header}>

        <div className={style.left}>
        <Link href="/" className={style.headName}>School Management</Link>
        </div>


        <div className={style.right}>

        <Link href="home" className={style.link}>Home</Link>
        <Link href="features" className={style.link}>Features</Link>
        <Link href="pricing" className={style.link}>Pricing</Link>
        <Link href="contact" className={style.link}>Contact</Link>
        <Link href="faqs" className={style.link}>FAQs</Link>
        <button className={style.loginButton}>Login</button>
        </div>
    
    </div>
  )
}
