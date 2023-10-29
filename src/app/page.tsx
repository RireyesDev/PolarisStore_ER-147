'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { PrimaryButton } from '@/components/PrimaryButton'
import { SecondaryButton } from '@/components/SecondaryButton'
import { BuyButton } from '@/components/BuyButton'
import { PolarisCard } from '@/components/PolarisCard'
import { TextBox } from '@/components/TextBox'

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles/>      
      <p>POLARIS STORE</p>
      <PrimaryButton>INICIAR SESIÓN</PrimaryButton>
      
      <BuyButton>COMPRAR</BuyButton>
      <PolarisCard>
        <TextBox title="Usuario" placeHolder="John"></TextBox>
        <TextBox title="Contraseña" placeHolder="*******************"></TextBox>
        <SecondaryButton>REGISTRATE</SecondaryButton>        
      </PolarisCard>
    </main>
  )
}
