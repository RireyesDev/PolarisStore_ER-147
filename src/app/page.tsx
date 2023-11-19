'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { NavBar } from '@/components/NavBar'
import { CardAccount } from '@/components/CardAccount'
import { ImageProfile } from '@/components/ImageProfile'


export default function Home() {

  return (
    <main className={styles.main}>
      <GlobalStyles/>  
      <NavBar/>
      <ImageProfile imgSize={32}  ></ImageProfile>
    </main>
  )
}
