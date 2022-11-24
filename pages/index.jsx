import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import login_overlay from "../components/Login";

export default function Home() {

  return (
    <div className="m-5">
      <Head>
        <title>Bobby68</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Axolotl_Logo.png" />
      </Head>

      <div className="flex justify-end">
        <div>
          <button className="bg-[transparent] border-none">
            <img
              src="../assets/Navigation/login.png"
              alt="Login"
              className="h-10 relative hover:scale-125 transition duration-700 ease-in-out"
            />
          </button>
        </div>
      </div>

      <main>
        <svg
          height="100%"
          width="100%"
          className="absolute xs:text-6xl md:text-9xl font-bold"
        >
          <clipPath id="overlay">
            <text x="50%" y="50%" fill="red" textAnchor="middle">
              Bobby68
            </text>
          </clipPath>
        </svg>

        <video autoPlay loop muted className={styles.video}>
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>

        <div className="flex absolute justify-center items-center xs:flex-col md:flex-row xs:left-[52%] md:left-[51%] xl:left-1/2 top-3/4 -mr-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600">
          <a
            href="/about_me"
            className="xs:w-60 xs:h-32 md:w-48 md:h-36 lg:w-80 xl:h-48 border  xs:m-2 xl:m-5 p-15 text-left no-underline border-white rounded-xl hover:scale-105 transition duration-700 ease-in-out hover:text-fuchsia-400 hover:border-fuchsia-400"
          >
            <div className="transition-all p-4">
              <h2 className="md:text-2xl lg:text-4xl m-1 hover:normal-case">
                About Me &rarr;
              </h2>
              <p className="md:text-lg lg:text-2xl m-0 leading-6 hover:normal-case">
                Some Information About me and my Skills.
              </p>
            </div>
          </a>

          <a
            href="/nooble"
            className="xs:w-60 xs:h-32 md:w-48 md:h-36 lg:w-80 xl:h-48 border  xs:m-2 xl:m-5 p-15 text-left no-underline border-white rounded-xl hover:scale-105 transition duration-700 ease-in-out hover:text-fuchsia-400 hover:border-fuchsia-400"
          >
            <div className="transition-all p-4">
              <h2 className="md:text-2xl lg:text-4xl m-1 hover:normal-case">
                Nooble &rarr;
              </h2>
              <p className="md:text-lg lg:text-2xl m-0 leading-6 hover:normal-case">
                The Learning part of this website
              </p>
            </div>
          </a>

          <a
            href="/to-do"
            className="xs:w-60 xs:h-32 md:w-48 md:h-36 lg:w-80 xl:h-48 border xs:m-2 xl:m-5 p-15 text-left no-underline border-white rounded-xl hover:scale-105 transition duration-700 ease-in-out hover:text-fuchsia-400 hover:border-fuchsia-400"
          >
            <div className="transition-all p-4">
              <h2 className="md:text-2xl lg:text-4xl m-1 hover:normal-case">
                To-DO &rarr;
              </h2>
              <p className="md:text-lg lg:text-2xl m-0 leading-6 hover:normal-case">
                A Simple To-Do List
              </p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
