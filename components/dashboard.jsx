import { useEffect, useState } from "react";
import React from "react";
import { listbtnbridge } from "../pages/hub";
import { listsbtn } from "../pages/hub";

export function Dashboard() {
  const [commits, setcommits] = useState("55");

  const [showip, setshowip] = useState();
  const [showversion, setshowversion] = useState();
  const [shownetwork, setshownetwork] = useState();

  const [showcountry, setshowcountry] = useState();
  const [showcity, setshowcity] = useState();
  const [showlan, setshowlan] = useState();
  const [showlon, setshowlon] = useState();

  const ipapi = "https://ipapi.co/json";

  let displayIp;
  let displayVersion;
  let displayNetwork;

  let displayCountry;
  let displayCity;
  let displayLan;
  let displayLon;

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
      <div id="line one" className="flex">
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 h-32">
          <h1 className="pb-2 md:text-2xl">GitHub Pull Requests</h1>
          <span className="text-gray-500">GitHub Repo:</span>
          <a
            href="https://github.com/luca-naujoks/web-project"
            target={"_blank"}
            className="text-gray-400"
          >
            {" "}
            Web-Project
          </a>
          <p className="text-gray-600">{commits} commits</p>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl">Localisation</h1>
          <p className="text-gray-500">{showcountry}</p>
          <p className="text-gray-500">{showcity}</p>
          <p className="text-gray-500">
            {showlan} {showlon}
          </p>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl">Current Used ip adress</h1>
          <p className="text-gray-500">
            {showversion}: {showip}
          </p>
          <p className="text-gray-500">{shownetwork}</p>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl">Loading...</h1>
          <div className="md:text-xl"></div>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="line two" className="flex">
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 h-64">
          <h1 className="pb-2 md:text-2xl text-gray-500">Server CPU Temp</h1>
          <div className="md:text-xl"></div>
          <p className="text-end pr-2 text-sm text-green-400">46°C</p>
          <div className="border-gray-600 border-2 rounded-lg"></div>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl text-gray-500">Mailbox Storage</h1>
          <p className="md:text-xl pt-6 text-gray-600">Total Storage: </p>
          <p className="text-green-700">256 GB</p>

          <p className="md:text-xl pt-3 text-gray-600">Used Storage: </p>
          <p className="text-green-400">47 GB</p>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="line tree" className="flex">
        <div
          className="bg-[#161b22] rounded-xl m-3 p-2 w-80 hover:scale-105 duration-300 cursor-pointer"
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

        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 hover:scale-105 duration-300 cursor-pointer">
          <h1 className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block"
            />
            <span className="text-gray-500"> Dailys</span>
          </h1>
        </div>

        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 hover:scale-105 duration-300 cursor-pointer">
          <a className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block"
            />
            <span className="text-gray-500"> Einkaufen</span>
          </a>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="line four" className="flex"></div>
    </div>
  );
}
