import React, { useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import { Dashboard } from "../components/dashboard";
import { ToDo } from "../components/todo";
import { Casino } from "../components/casino";
import { Settings } from "../components/settings";
import { Lists, updatelist } from "../components/lists";
import { useEffect } from "react";

export default function Hub() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = signIn();
    },
  });

  const [commitCount, setCommitCount] = useState(null);

  useEffect(() => {
    async function fetchCommitCount() {
      const response = await fetch(
        'https://api.github.com/repos/luca-naujoks/Web-Project'
      );
      const data = await response.json();
      setCommitCount(data.commit_count);
    }
    fetchCommitCount();
  }, []);

useEffect(() => {

  if (localStorage.getItem('Home') === null) {
    localStorage.setItem('Home', '');
  }
  if (localStorage.getItem('Home.done') === null) {
    localStorage.setItem('Home.done', '');
  }

  if (localStorage.getItem('Dailys') === null) {
    localStorage.setItem('Dailys', '');
  }
  if (localStorage.getItem('Dailys.done') === null) {
    localStorage.setItem('Dailys.done', '');
  }

  if (localStorage.getItem('Weeklys') === null) {
    localStorage.setItem('Weeklys', '');
  }
  if (localStorage.getItem('Weeklys.done') === null) {
    localStorage.setItem('Weeklys.done', '');
  }
})


  let [dashboardToggled, isDashboardToggled] = useState(true);
  let [listsToggled, isListsToggled] = useState(false);
  let [todoToggled, isToDoToggled] = useState(false);
  let [casinoToggled, isCasinoToggled] = useState(false);
  let [settingsToggled, isSettingsToggled] = useState(false);

  const dashboardbtn = () => {
    isDashboardToggled((dashboardToggled = true));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = false));
    isCasinoToggled((casinoToggled = false));
    isSettingsToggled((settingsToggled = false));
  };

  const listsbtn = (key) => {
    updatelist(key);
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = false));
    isCasinoToggled((casinoToggled = false));
    isSettingsToggled((settingsToggled = false));
    setTimeout(changelist, 100);
  };

  const changelist = () => {
    isListsToggled((listsToggled = true));
  };

  const todobtn = () => {
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = true));
    isCasinoToggled((casinoToggled = false));
    isSettingsToggled((settingsToggled = false));
  };

  const settingsbtn = () => {
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = false));
    isCasinoToggled((casinoToggled = false));
    isSettingsToggled((settingsToggled = true));
  };
  const casinobtn = () => {
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = false));
    isCasinoToggled((casinoToggled = true));
    isSettingsToggled((settingsToggled = false));
  };

  if (status === "loading") {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="font-poppins antialiased bg-[#161b22]">
      <div className=" bg-[#161b22] p-4 w-[100%]">
        <a href="/" className="flex justify-end md:text-2xl ">
          <p className="hover:text-red-500">&#x2718;</p>
        </a>
      </div>
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="flex justify-between bg-[#161b22] h-screen md:block shadow-xl px-3 w-30 md:w-[15%] transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div>
            <div className="flex border-2 border-gray-600 rounded-md mb-[5%]">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-[#161b22] text-white focus:outline-none"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
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
              <div className="flex flex-col space-y-2">
                <a
                  id="dashboardbtn"
                  onClick={dashboardbtn}
                  className="hover:scale-105 text-sm font-medium text-white py-2 px-2 hover:bg-gray-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/dashboard.png"
                    alt="dashboard"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="md:text-lg"> Dashboard</span>
                </a>
                <a
                  onClick={todobtn}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="md:text-lg"> ToDo</span>
                </a>
                <a
                  onClick={casinobtn}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="md:text-lg"> Casino</span>
                </a>

                <p className="text-center text-xl">Your Lists</p>
                <hr />
                <a
                  key="Home"
                  onClick={() => listsbtn("Home")}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="md:text-lg"> Home</span>
                </a>

                <a
                  key="Dailys"
                  onClick={() => listsbtn("Dailys")}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="md:text-lg"> Dailys</span>
                </a>

                <a
                  key="Einkaufen"
                  onClick={() => listsbtn("Weeklys")}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="md:text-lg"> Einkaufen</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2]">
            <a
              onClick={settingsbtn}
              className="text-sm font-medium text-white py-2 px-2 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
            >
              <img
                src="../assets/hub/settings.png"
                alt="settings"
                className="w-8 h-8 fill-current inline-block "
              />
              <span className="md:text-lg"> Settings</span>
            </a>
          </div>
        </div>

        <div className="bg-black rounded-tl-xl w-[85%] overflow-auto">
          {dashboardToggled && (
            <div id="dashboard">
              <Dashboard />
            </div>
          )}

          {listsToggled && (
            <div id="Lists" className="">
              <Lists />
            </div>
          )}
          {casinoToggled && (
            <div id="Casino" className="">
              <Casino />
            </div>
          )}

          {todoToggled && (
            <div id="ToDO" className="">
              <ToDo />
            </div>
          )}

          {settingsToggled && (
            <div id="Settings" className="">
              <Settings />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
