import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
     <div className='m-5'>
        <Head>
                <title>Bobby68</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Axolotl_Logo.png" />
            </Head>

      <main className="bg-black px-[5%]">
      <div className="flex justify-between p-2.5">
          <Link href="/">
            <img  src="../assets/Navigation/Home.png" alt="Home"  className="h-10 hover:scale-125 transition duration-700 ease-in-out"/>
          </Link>
            <button id="login" onClick={login} className="bg-[transparent] border-none">
              <img src="../assets/Navigation/login.png" alt="Login" className="h-10 hover:scale-125 transition duration-700 ease-in-out"/>
            </button>
      </div>

      <div id="login_modal" className="bg-gray-800 m-auto w-[30%] rounded-2xl border-gray-900 border-8 p-3">
        <div><span className="flex justify-center items-center text-xl">Login to Bobby Bank</span></div>
        <form className="flex flex-col items-center">
          <label for="name" className="mt-2">User Name:</label>
          <input type="text" id="name" name="fname" className="bg-white w-[30%] rounded-md mt-1 mb-3"/>
          <label for="lname">Password:</label>
          <input type="text" id="password" name="password" className="bg-white w-[30%] rounded-md mt-1"/>
          <button type="submit" className="flex justify-center border-white border-2 m-2 w-[30%] rounded-md">Submit</button>
        </form>
      </div>


      </main>

      <script>
        function login() {
          document.getElementById("login_modal")
        }
        </script>

     </div>

     
    )
  }

  