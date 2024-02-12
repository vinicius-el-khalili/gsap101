import type { Metadata } from 'next'
import '@/sass/globals.scss'
import style from "@/sass/layout.module.scss"


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
    <div className={style.header}>
      07
    </div>
    <div className={style.container}>
      {children}
    </div>
  </div>
  
  )
}
