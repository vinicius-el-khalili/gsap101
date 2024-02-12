import type { Metadata } from 'next'
import './globals.css'
import style from "@/sass/layout.module.scss"
import MyRootLayout from '@/components/layouts/MyRootLayout'


export const metadata: Metadata = {
  title: 'GSAP 101',
  description: 'GSAP case studies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <html lang="en">
    <body>
      <MyRootLayout>
        {children}
      </MyRootLayout>
    </body> 
  </html>  

  )}
