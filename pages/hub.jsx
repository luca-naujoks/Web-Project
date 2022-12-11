import React, { useState } from "react";
import Link from "next/link";

import { Dashboard } from "../components/dashboard";
import { ServerDashboard } from "../components/serverdashboard";
import { Lists } from "../components/lists";
import { ToDo } from "../components/todo";
import { Settings } from "../components/settings";

export default function Contact() {
  let [dashboardToggled, isDashboardToggled] = useState(true);
  let [listsToggled, isListsToggled] = useState(false);
  let [todoToggled, isToDoToggled] = useState(false);
  let [serverToggled, isServerDashboardToggled] = useState(false);
  let [settingsToggled, isSettingsToggled] = useState(false);

  const dashboardbtn = () => {
    isDashboardToggled((dashboardToggled = true));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = false));
    isServerDashboardToggled((serverToggled = false));
    isSettingsToggled((settingsToggled = false));
  };

  const listsbtn = () => {
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = true));
    isToDoToggled((todoToggled = false));
    isServerDashboardToggled((serverToggled = false));
    isSettingsToggled((settingsToggled = false));
  };

  const todobtn = () => {
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = true));
    isServerDashboardToggled((serverToggled = false));
    isSettingsToggled((settingsToggled = false));
  };

  const serverbtn = () => {
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = false));
    isServerDashboardToggled((serverToggled = true));
    isSettingsToggled((settingsToggled = false));
  };

  const settingsbtn = () => {
    isDashboardToggled((dashboardToggled = false));
    isListsToggled((listsToggled = false));
    isToDoToggled((todoToggled = false));
    isServerDashboardToggled((serverToggled = false));
    isSettingsToggled((settingsToggled = true));
  };

  return (
    <div className="font-poppins antialiased bg-slate-900">
      <div className=" bg-slate-900 p-4 w-[100%]">
        <a href="/" className="flex justify-end md:text-2xl ">
          <text className="hover:text-red-500">&#x2718;</text>
        </a>
      </div>
      <div
        id="view"
        className="h-full w-screen flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="bg-slate-900 h-screen md:block shadow-xl px-3 w-30 md:w-[15%] overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div className="flex border-2 border-gray-800 rounded-md mb-[5%]">
            <input
              type="text"
              className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-slate-900 text-white focus:outline-none"
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
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div id="menu" className="flex flex-col space-y-2">
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


            
          <p className="text-center text-xl">Your Lists</p>
          <hr />
          <a
              
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
          <div className="absolute bottom-[2%]">
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

        <div className="bg-black rounded-xl w-[85%]">
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

          {todoToggled && (
            <div id="ToDO" className="">
              <ToDo />
            </div>
          )}
          {serverToggled && (
            <div id="Server Dashboard" className="">
              <ServerDashboard />
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
