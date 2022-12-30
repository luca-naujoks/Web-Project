import React, { useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { Auth } from "../../components/auth";

import { Welcome } from "../../components/casino/welcome";
import { CoinFlip } from "../../components/casino/coinflip";
import { SlotMachines } from "../../components/casino/slotmachine";
import { useEffect } from "react";

export default function Hub() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = signIn();
    },
  });

  useEffect(() => {
    console.log("WELCOME TO THE CASINO");
  }, []);

  let [welcomeToggled, isWelcomeToggled] = useState(true);
  let [coinflipToggled, isCoinFlipToggled] = useState(false);
  let [slotmachinesToggled, isSlotMachinesToggled] = useState(false);

  const welcomebtn = () => {
    isWelcomeToggled((welcomeToggled = true));
    isCoinFlipToggled((coinflipToggled = false));
    isSlotMachinesToggled((slotmachinesToggled = false));
  };
  const coinflipbtn = () => {
    isWelcomeToggled((welcomeToggled = false));
    isCoinFlipToggled((coinflipToggled = true));
    isSlotMachinesToggled((slotmachinesToggled = false));
  };
  const slotmachinesbtn = () => {
    isWelcomeToggled((welcomeToggled = false));
    isCoinFlipToggled((coinflipToggled = false));
    isSlotMachinesToggled((slotmachinesToggled = true));
  };

  if (status === "loading") {
    return (
      <div>
        <p>Waiting for SignIn to Load the CASINO</p>
      </div>
    );
  }

  return (
    <div className="font-poppins antialiased bg-[#161b22]">
      <div className=" bg-[#161b22] p-4 w-[100%]">
        <div className="flex justify-end">
          <Auth />
        </div>
      </div>
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="flex justify-between bg-[#161b22] h-screen md:block shadow-xl px-3 xs:w-18 md:w-40 lg:w-[15%] transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div>
            <div className="flex border-2 border-gray-600 rounded-md mb-[5%]">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-[#161b22] text-white focus:outline-none xs:hidden md:block"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 xs:hidden md:block">
                <svg
                  className="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div id="menu" className="flex flex-col">
              <div className="flex flex-col md:space-y-2">
                <a
                  onClick={welcomebtn}
                  id="dashboardbtn"
                  className="hover:scale-105 text-sm font-medium text-white py-2 px-0 hover:bg-gray-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/dashboard.png"
                    alt="dashboard"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Welcome</span>
                </a>
                <a className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer">
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg">
                    {" "}
                    Tutorials
                  </span>
                </a>

                <p className="text-center xs:hidden md:block text-xl">Games</p>
                <hr />
                <a
                  onClick={coinflipbtn}
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg">
                    {" "}
                    Coin Flip
                  </span>
                </a>

                <a
                  onClick={slotmachinesbtn}
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Slotis</span>
                </a>

                <a
                  href="/hub"
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/settings.png"
                    alt="settings"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Back</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-tl-xl w-[85%] overflow-auto">
          {welcomeToggled && (
            <div id="welcome">
              <Welcome />
            </div>
          )}
          {coinflipToggled && (
            <div id="coinflip">
              <CoinFlip />
            </div>
          )}
          {slotmachinesToggled && (
            <div id="slotmachines">
              <SlotMachines />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
