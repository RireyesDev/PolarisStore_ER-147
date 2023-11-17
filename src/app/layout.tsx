import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainClientComponent from './MainClientComponent'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polaris Store',
  description: 'Polaris Store es una tienda online de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 

  return (
    <html lang="en">
      <body className={inter.className}>
        <MainClientComponent>{children}</MainClientComponent>
      </body>
    </html>
  )
}
