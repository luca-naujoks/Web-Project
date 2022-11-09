import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./styles/id.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
            <img height="30" src="../assets/Navigation/back.png" alt="Back" />
          </Link>
          <Link href="/" className={styles.navhome}>
            <img height="30" src="../assets/Navigation/Home.png" alt="Home" />
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
        <div className={styles.infohead}>
          <h2>{postData.title}</h2>
        </div>

        <div className={styles.infoback}>
          <h3>Übersicht:</h3>
          {postData.info}
        </div>

        <div className={styles.links}>
          <h3>Links:</h3>
          <a href={postData.link1} target="_blank">
            {postData.title1}
          </a>
          <p>
            <a href={postData.link2} target="_blank">
              {postData.title2}
            </a>
          </p>
          <p>
            <a href={postData.link3} target="_blank">
              {postData.title3}
            </a>
          </p>
          <p>
            <a href={postData.link4} target="_blank">
              {postData.title4}
            </a>
          </p>
        </div>

        <Image
          src={postData.image}
          height={650}
          width={650}
          className={styles.image}
        ></Image>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
