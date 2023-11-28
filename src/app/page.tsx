'use client'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { useRouter } from '../../node_modules/next/navigation'

export default function HomePage() {

  const router = useRouter();

  return (
    <main className={styles.main}>     
      <>{router.push('/home')}</>
    </main>
  )
}
