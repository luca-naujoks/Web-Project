import { useEffect, useState } from "react";
import React from "react";

export function Dashboard() {
  const [showipadress, setshowipadress] = useState();
  const ipurl = "https://ipapi.co/json";
  let displayData;

  async function pulljson() {
    const response = await fetch(ipurl);
    const responseData = await response.json();
    console.log(responseData.ip);
    console.log(responseData.city);
    console.log(responseData.region);
  }

  useEffect(() => {
    pulljson();
  });

  return (
    <div id="main">
      <div id="line one" className="flex">
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 h-32">
          <h1 className="pb-2 md:text-2xl">GitHub Pull Requests</h1>
          <div className="md:text-xl">1 Commit/s Open</div>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl">GitHub Pull Requests</h1>
          <div className="md:text-xl">69 Mails Resived</div>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl">Current Used ip adress</h1>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl">Loading...</h1>
          <div className="md:text-xl"></div>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="line two" className="flex">
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 h-64">
          <h1 className="pb-2 md:text-2xl">Server CPU Temp</h1>
          <div className="md:text-xl"></div>
          <div>Graph</div>
        </div>
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80">
          <h1 className="pb-2 md:text-2xl">Mailbox Storage</h1>
          <div className="md:text-xl pt-6">
            Total Storage: <p className="text-green-700">256 gb</p>
          </div>
          <div className="md:text-xl pt-3">
            Used Storage: <p className="text-green-500">47 gb</p>
          </div>
          <div>Graph</div>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="line tree" className="flex">
        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 cursor-pointer">
          <h1 className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block "
            />
            <span> Home</span>
          </h1>
        </div>

        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 cursor-pointer">
          <h1 className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block "
            />
            <span> Dailys</span>
          </h1>
        </div>

        <div className="bg-[#161b22] rounded-xl m-3 p-2 w-80 cursor-pointer">
          <a className="pb-2 md:text-2xl">
            <img
              src="../assets/hub/lists.png"
              alt="lists"
              className="w-8 h-8 fill-current inline-block "
            />
            <span> Einkaufen</span>
          </a>
        </div>
      </div>

      <hr className="m-3 border-gray-600" />

      <div id="line four" className="flex"></div>
    </div>
  );
}
