'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { NavBar } from '@/components/NavBar'



export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles/>  
      <NavBar/>
    </main>
  )
}
