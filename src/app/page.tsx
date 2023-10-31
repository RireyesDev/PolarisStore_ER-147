'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { PrimaryButton } from '@/components/PrimaryButton'
import { SecondaryButton } from '@/components/SecondaryButton'
import { BuyButton } from '@/components/BuyButton'
import { PolarisCard } from '@/components/PolarisCard'
import { TextBox } from '@/components/TextBox'
import { TitleCard } from '@/components/TitleCard'
import { DivContainer } from '@/styles/DivContainer'
import { CardLogIn } from '@/components/Card_LogIn'
import { CardSignIn } from '@/components/Card_SignIn'

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles/>  
      <CardSignIn></CardSignIn>
    </main>
  )
}
