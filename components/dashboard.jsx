import { useEffect, useState } from "react";
import React from "react";
import { commitCount } from "../pages/hub"

export function Dashboard() {

  const [showip, setshowip] = useState();
  const [showversion, setshowversion] = useState();
  const [shownetwork, setshownetwork] = useState();

  const [showcountry, setshowcountry] = useState();
  const [showcity, setshowcity] = useState();
  const [showlan, setshowlan] = useState();
  const [showlon, setshowlon] = useState();

  let displayIp;
  let displayVersion;
  let displayNetwork;

  let displayCountry;
  let displayCity;
  let displayLan;
  let displayLon;

  function copyip() {
    navigator.clipboard.writeText(showip)
  }
  function copynetwork() {
    navigator.clipboard.writeText(shownetwork)
  }
  async function getipdata() {
    const response = await fetch("https://ipapi.co/json");
    const responseData = await response.json();

    displayIp = responseData.ip;
    displayVersion = responseData.version;
    displayNetwork = responseData.network;

    displayCountry = responseData.country;
    displayCity = responseData.city;
    displayLan = responseData.latitude;
    displayLon = responseData.longitude;

    setshowip(displayIp);
    setshowversion(displayVersion);
    setshownetwork(displayNetwork);

    setshowcountry(displayCountry);
    setshowcity(displayCity);
    setshowlan(displayLan);
    setshowlon(displayLon);
  }

  useEffect(() => {
    getipdata();
  });

  return (
    <div id="main">
      <div id="random" className="flex">
        <div className="bg-[#161b22] rounded-xl xs:my-3 xs:ml-2 md:m-3 p-2 w-96">
          <h1 className="pb-2 md:text-2xl">GitHub Repository</h1>
          <span className="text-gray-500">Repository:</span>
          <a
            href="https://github.com/luca-naujoks/web-project"
            target={"_blank"}
            className="text-gray-400 cursor-pointer"
          >
            <p>Web-Project</p>
          </a>
        </div>
        <div className="bg-[#161b22] rounded-xl xs:my-3 xs:mx-1 md:m-3 p-2 md:w-96 ">
          <h1 className="pb-2 md:text-2xl">Localisation</h1>
          <p className="text-gray-500">{showcountry}</p>
          <p className="text-gray-500">{showcity}</p>
          <p className="text-gray-500">
            {showlan} {showlon}
          </p>
        </div>
        <div className="bg-[#161b22] rounded-xl xs:my-3 xs:mr-2 md:m-3 p-2 w-96">
          <h1 className="pb-2 xs:hidden md:text-2xl">Current Used ip adress</h1>
          <h1 className="pb-2 xs:block md:hidden">Current IP</h1>
          <p className="text-gray-500">{showversion}:</p>
          <p className="text-gray-400 xs:hidden md:block">{showip}</p>
          <p className="text-gray-400 xs:block md:hidden cursor-pointer" onClick={copyip}>Copy Ip</p>
          <span className="text-gray-500">Network:</span>
          <span className="text-gray-400 xs:hidden md:block"> {shownetwork}</span>
          <span className="text-gray-400 xs:block md:hidden cursor-pointer" onClick={copynetwork}>Copy Network</span>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-96 xs:hidden md:block">
          <h1 className="pb-2 md:text-2xl">Loading...</h1>
          <div className="md:text-xl"></div>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="server data" className="flex">
        <div className="bg-[#161b22] rounded-xl xs:my-3 xs:ml-2 md:m-3 p-2 w-96 h-64">
          <h1 className="pb-2 md:text-2xl text-gray-500">Server CPU Temp</h1>
          <div className="md:text-xl"></div>
          <p className="text-end pr-2 text-sm text-green-400">46°C</p>
          <div className="border-gray-600 border-2 rounded-lg"></div>
        </div>
        <div className="bg-[#161b22] rounded-xl xs:my-3 xs:m-2 md:m-3 p-2 w-96">
          <h1 className="pb-2 md:text-2xl text-gray-500">Mailbox Storage</h1>
          <p className="md:text-xl pt-6 text-gray-600">Total Storage: </p>
          <p className="text-green-700">256 GB</p>

          <p className="md:text-xl pt-3 text-gray-600">Used Storage: </p>
          <p className="text-green-400">47 GB</p>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="todo btns" className="flex">
        <div
          className="bg-[#161b22] rounded-xl xs:my-3 xs:ml-2 md:m-3 p-2 w-96 hover:scale-105 duration-300 cursor-pointer"
          key="Home"
          onClick={() => listbtn("Home")}
        >
          <h1 className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block"
            />
            <span className="text-gray-500"> Home</span>
          </h1>
        </div>

        <div className="bg-[#161b22] rounded-xl xs:my-3 xs:m-2 md:m-3 p-2 w-96 hover:scale-105 duration-300 cursor-pointer">
          <h1 className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block"
            />
            <span className="text-gray-500"> Dailys</span>
          </h1>
        </div>

        <div className="bg-[#161b22] rounded-xl xs:my-3 xs:mr-2 md:m-3 p-2 w-96 hover:scale-105 duration-300 cursor-pointer">
          <a className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block"
            />
            <span className="text-gray-500"> Weekly</span>
          </a>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="line four" className="flex"></div>
    </div>
  );
}
