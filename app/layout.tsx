import type { Metadata } from 'next'
import './globals.css'
import style from "@/sass/layout.module.scss"


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
        <div className={style.Page}>
          <div className={style.header}>
            07
          </div>
          <div className={style.container}>
            {children}
          </div>
        </div>
        </body> 
    </html>
  )
}
