import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PolarisContext } from '@/context/PolarisContext'
import { useState } from 'react'

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

  const [showAccount, setShowAccount] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <PolarisContext.Provider value={{          
          showAccount
        }} >{children}</PolarisContext.Provider>
      </body>
    </html>
  )
}
