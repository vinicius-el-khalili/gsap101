import type { Metadata } from 'next'
import '@/sass/globals.scss'
import style from "@/sass/layout.module.scss"
import DynamicLayout from './DynamicLayout'


export const metadata: Metadata = {
  title: 'GSAP 101',
  description: 'GSAP case studies',
}

export default function MyRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <div className={style.Page}>
    <DynamicLayout/>
    <div className={style.container}>
      {children}
    </div>
  </div>
  
  )
}
