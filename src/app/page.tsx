'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { PrimaryButton } from '@/components/PrimaryButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles/>
      <PrimaryButton>INICIAR SESIÓN</PrimaryButton>
      <PrimaryButton>REGISTRATE</PrimaryButton>
      <p>POLARIS STORE</p>
    </main>
  )
}
