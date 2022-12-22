import Head from "next/head";
import Link from "next/link";
import { Auth, Welcome } from "../components/auth";

export default function Index() {
  return (
    <div id="container">
      <Head>
        <title>Bobby68</title>
        <link rel="icon" href="/Axolotl_Logo.png" />
      </Head>

      <div className="flex justify-end">
        <Auth />
      </div>

      <div id="main" className="absolute top-[30%]">
        <div className="flex  justify-items-center justify-center justify-self-center w-screen">
          <Welcome />
        </div>
      </div>

      <div id="links" className="absolute bottom-[10%] w-screen">
        <div className="flex  justify-evenly">
          <a
            href="about_me"
            className="border-4 border-[#374455] rounded-xl w-1/4 p-4 hover:scale-105 duration 700 transition ease-in-out text-white"
          >
            <h2 className="xs:text-xl md:text-2xl pb-2">About Me &rarr;</h2>
            <p className="xs:hidden md:block">
              Some Information About me and my skills
            </p>
          </a>

          <a
            id="nooble"
            href="nooble"
            className="border-4 border-[#374455] rounded-xl w-1/4 p-4 hover:scale-105 duration 700 transition ease-in-out text-white"
          >
            <h2 className="xs:text-xl md:text-2xl pb-2">Nooble &rarr;</h2>
            <p className="xs:hidden md:block">
              A list of all vocational school projects for IT specialists for
              system integration
            </p>
          </a>

          <a
            href="hub"
            className="border-4 border-[#374455] rounded-xl w-1/4 p-4 hover:scale-105 duration 700 transition ease-in-out text-white"
          >
            <h2 className="xs:text-xl md:text-2xl pb-2">Bobby Hub &rarr;</h2>
            <p className="xs:hidden md:block">
              A hub with a dashboard, todo lists and a casino
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
