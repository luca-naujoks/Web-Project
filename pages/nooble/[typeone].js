import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/typeone.module.css'
import Link from 'next/link'
import Script from 'next/script'


export default function Home() {
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
        <Link href="https://github.com/Filipza/LF3" className={styles.nav}>
            <img height="42" src="../assets/nooble/git.png" alt="git"/>
          </Link>
          <button href="/login" className={styles.nav}>
            <img height="40" src="../assets/Navigation/login.png" alt="Login" />
          </button>
        </div>
      </div>


    <main className={styles.main}>

    <div className={styles.info} >
        <div className={styles.infohead}><h2>Lernfeld</h2></div>
    </div>
    <div className={styles.info}>

       
    </div>

      </main>
    </div>
  )

}