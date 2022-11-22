import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>Bobby68</title>
        <link rel="icon" href="/Axolotl_Logo.png" />
      </Head>

      <div className="flex justify-between transition duration-600 ml-9 px-5 items-center">
        <div className="mt-3">
          <Link href="/nooble/">
            <img src="../assets/Navigation/back.png" alt="Back" className="w-10 hover:scale-125 transition duration-600 cursor-pointer" />
          </Link>
        </div>
        <h1 className="text-5xl"> Nooble </h1>
        <div>
          <button href="/login">
            <img src="../assets/Navigation/login.png" alt="Login" className="w-10 bg-transparent border-none hover:scale-125 transition duration-600 cursor-pointer" />
          </button>
        </div>
      </div>

      <main className="m-2">
        <div className="py-5 bg-[#161b22] rounded-md ml-[2.5%] m-2 w-[50%] text-3xl p-10">
          <h2>{postData.title}</h2>
        </div>

        <div className="float-left bg-[#161b22] w-[50%] rounded-md p-10 text-xl text-gray-400 mt-2 mb-1 mr-2 ml-[2.5%]">
          <h3>Übersicht:</h3>
          {postData.info}
        </div>

        <div className="float-left bg-[#161b22] w-[50%] rounded-md p-10 text-xl text-white ml-[2.5%]">
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

        <Image src={postData.image} height={650} width={650} className=""/>
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
