import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import './globals.css'
import MainClientComponent from './MainClientComponent'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polaris Store',
  description: 'Polaris Store es una tienda online de productos',
  icons: {icon: "favicon.ico"}

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 

  return (
    <html lang="en">
      <body className={nunito.className}>
        <MainClientComponent>{children}</MainClientComponent>
      </body>
    </html>
  )
}
