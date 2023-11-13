'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { NavBar } from '@/components/NavBar'
import { CardAccount } from '@/components/CardAccount'



export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles/>  
      <NavBar/>
      <CardAccount></CardAccount>
    </main>
  )
}
