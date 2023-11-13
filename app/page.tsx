import Image from 'next/image'
import styles from './page.module.css'
import { gsap, Power3 } from "gsap"
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={"/tutorial01"}>Tutorial 01</Link>
    </main>
  )
}
