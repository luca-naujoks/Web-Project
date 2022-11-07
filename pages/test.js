import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/test.module.css'

import Link from 'next/link'


export default function Layout() {
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
    <div className={styles.infotext}>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
       
    </div>
        
        </main>
    </div>
  )
}