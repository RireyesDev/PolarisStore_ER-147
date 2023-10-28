'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { PrimaryButton } from '@/components/PrimaryButton'
import { SecondaryButton } from '@/components/SecondaryButton'
import { BuyButton } from '@/components/BuyButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles/>      
      <p>POLARIS STORE</p>
      <PrimaryButton>INICIAR SESIÓN</PrimaryButton>
      <SecondaryButton>REGISTRATE</SecondaryButton>
      <BuyButton>COMPRAR</BuyButton>
    </main>
  )
}
