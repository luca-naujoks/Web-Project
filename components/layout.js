import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getPostData } from '../lib/posts'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
        <div className={styles.container}>
      <Head>
        <title>Bobby68</title>
        <link rel="icon" href="/Axolotl_Logo.png" />
      </Head>
      
      <div className={styles.navdiv}>
        <div>
        <Link href="/nooble/nooble" className={styles.navback}>
            <img height="30" src="../assets/Navigation/back.png" alt="Back"/>
          </Link>
          <Link href="/" className={styles.navhome}>
            <img height="30" src="../assets/Navigation/Home.png" alt="Home"/>
          </Link>
        </div>
        <h1 className={styles.headline}> Nooble </h1>
        <div>
          <button href="/login" className={styles.nav}>
            <img height="40" src="../assets/Navigation/login.png" alt="Login" />
          </button>
        </div>
      </div>


    <main className={styles.main}>

    <div className={styles.info} >
        <div className={styles.infohead}><h2>hallo</h2></div>
    </div>
    <div className={styles.info}>

       
    </div>

      </main>
    </div>
  )
}
