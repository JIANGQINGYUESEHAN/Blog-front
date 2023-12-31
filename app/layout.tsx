import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Component/Header'
import Footer from '@/Component/Footer'
import styles from './LayOut.module.css'
import Head from 'next/head'
import Home from './page'
import FlyBird from '@/Component/FlyBird'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body className={styles.LayOut}>
        <Header />

        <Home />

        <Footer />
      </body>

    </html>
  )
}
