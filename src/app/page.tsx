'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { PrimaryButton } from '@/components/PrimaryButton'
import { SecondaryButton } from '@/components/SecondaryButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles/>      
      <p>POLARIS STORE</p>
      <PrimaryButton>INICIAR SESIÓN</PrimaryButton>
      <SecondaryButton>REGISTRATE</SecondaryButton>
    </main>
  )
}
