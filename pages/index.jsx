import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import { Overlay } from "../components/login";
import { showlogin } from "../components/login";
import Auth from "../components/auth";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bobby68</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Axolotl_Logo.png" />
      </Head>

      <div className="flex justify-end">
        <div>
          <Auth />
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

        <video id="video" autoPlay loop muted className={styles.video}>
          <source src="/assets/background.mp4" type="video/mp4" />
        </video>

        <div
          id="links"
          className="flex absolute justify-center items-center xs:flex-col md:flex-row xs:left-[52%] md:left-[51%] xl:left-1/2 top-3/4 -mr-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-600"
        >
          <a
            id="me"
            href="/about_me"
            className="xs:w-60 xs:h-32 md:w-52 md:h-36 lg:w-80 xl:h-48 border  xs:m-2 xl:m-5 p-15 text-left no-underline border-[#374455] border-4 text-[#374455]  rounded-xl hover:scale-105 transition duration-700 ease-in-out hover:text-white  hover:border-white  "
          >
            <div className="transition-all p-4">
              <h2 className="md:text-2xl lg:text-4xl m-1 hover:normal-case">
                About Me &rarr;
              </h2>
              <p
                id="info"
                className="md:text-lg lg:text-2xl m-0 leading-6 hover:normal-case"
              >
                Some Information About me and my Skills.
              </p>
            </div>
          </a>

          <a
            id="nooble"
            href="/nooble"
            className="xs:w-60 xs:h-32 md:w-52 md:h-36 lg:w-80 xl:h-48 border  xs:m-2 xl:m-5 p-15 text-left no-underline border-[#374455] border-4 text-[#374455]  rounded-xl hover:scale-105 transition duration-700 ease-in-out hover:text-white  hover:border-white  "
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
            id="hub"
            href="/hub"
            className="xs:w-60 xs:h-32 md:w-52 md:h-36 lg:w-80 xl:h-48 border xs:m-2 xl:m-5 p-15 text-left no-underline border-[#374455] border-4 text-[#374455]  rounded-xl hover:scale-105 transition duration-700 ease-in-out hover:text-white  hover:border-white  "
          >
            <div className="transition-all p-4">
              <h2 className="md:text-2xl lg:text-4xl m-1 hover:normal-case">
                Bobby Hub &rarr;
              </h2>
              <p className="md:text-lg lg:text-2xl m-0 leading-6 hover:normal-case">
                A Hub with Dashboards, Lists and an Casino
              </p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
