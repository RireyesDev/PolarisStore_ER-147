'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from './globalStyles'
import { NavBar } from '@/components/NavBar'
import { CardAccount } from '@/components/CardAccount'
import { products } from '@/database/products'



export default function Home() {

  console.log(products[1].name);

  return (
    <main className={styles.main}>
      <GlobalStyles/>  
      <NavBar/>
      <CardAccount></CardAccount>
      {products.map(items => (
        <>
          <h1 key={items.id}>{items.name}</h1>
          <Image src={items.image} alt={items.name} width={300} height={300}></Image>
        </>
      ))}
    </main>
  )
}
