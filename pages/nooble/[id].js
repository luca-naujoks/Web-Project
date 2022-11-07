import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from './styles/id.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Post({ postData }) {
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
            <div className={styles.infohead}><h2>{postData.title}</h2></div>
        </div>

        <div className={styles.information}>
        <div className={styles.infoback}>
          <div className={styles.infotext}>
            {postData.info}    
          </div>
        </div>
        <Image src={postData.image} height={650} width={650} className={styles.image}></Image>
        </div>
            </main>
        </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}