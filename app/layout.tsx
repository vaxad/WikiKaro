import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import localFont from '@next/font/local'

const monument = localFont({
  src: [
    {
      path: '../public/fonts/MonumentExtended-Regular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/MonumentExtended-Ultrabold.otf',
      weight: '700'
    }
  ],
  variable: '--font-monument'
})
const inter = Inter({ subsets: ['latin'], weight:'500' })

export const metadata: Metadata = {
  title: 'WikiKaro - Home',
  description: 'search engine for wikipedia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${monument.variable} font-sans`}>
      <body className='dark:bg-gray-900'>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
