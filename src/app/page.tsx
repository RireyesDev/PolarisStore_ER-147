'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'

export default function Home() {
  return (
    <main className={styles.main}>
      <GlobalStyles></GlobalStyles>
      <p>POLARIS STORE</p>
      <button>CLICK ME</button>
    </main>
  )
}
