import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link
      style={{
        border:"1px solid white",
        padding:"1rem",
        borderRadius:"12px"
      }}
      href={"/tutorial01"}><h1>Hello World</h1></Link>
    </main>
  )
}
