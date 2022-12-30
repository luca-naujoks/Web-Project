import React from "react";

export function Welcome() {
  return (
    <div>
      <div id="container" className=" m-2">
        <h1 className="flex justify-center xs:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Welcome to My Casino
        </h1>
        <div id="howitworks" className="mt-5">
          <h2 className="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            How It Works:
          </h2>
          <p>1. Chose a Game from the Sidebar</p>
          <p>2. Set your insert</p>
          <p>&nbsp;&nbsp;&nbsp;Min = 5 coins</p>
          <p>&nbsp;&nbsp;&nbsp;Max = 20 coins</p>
          <p>
            3. <span className="font-bold">Spin</span> and have Fun :)
          </p>
        </div>

        <div id="discordcasino" className="mt-12 ">
          <h2 className="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            My Discord Bot/Casino:
          </h2>
          <p>
            <span>if you are on a Discord server where my bot is </span>{" "}
            <span className="text-fuchsia-700">(</span>
            <a
              href="https://discord.com/oauth2/authorize?client_id=864513968935927809&permissions=8&scope=bot"
              className="text-gray-500 cursor-pointer"
            >
              BobbyBot
            </a>
            <span className="text-fuchsia-700">)</span>
            you can also easily use the casino interconnected in the bot.
          </p>
          <p>Your coins are synchronized between the website and the bot</p>
        </div>
      </div>
    </div>
  );
}
