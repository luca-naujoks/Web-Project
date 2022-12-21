import { signIn, useSession, signOut } from "next-auth/react";
import { useRef, useEffect } from "react";

export function Casino() {
  return (
    <div>
      <div className="flex justify-evenly bg-[#161b22] rounded-md w-auto h-14 mx-8 mt-3 mb-2 p-2">
        <div>
          <span className="text-lg cursor-pointer">Coin Flip</span>
        </div>
        <div>
          <span className="text-lg cursor-pointer">Slot Machine</span>
        </div>
      </div>
      <div className="bg-[#161b22] rounded-md w-auto h-128 mx-8"></div>

      <div
        id="navigationbar"
        className="flex justify-between bg-[#161b22] rounded-md w-auto h-48 mx-8 mt-2"
      >
        <div className="flex">
          <button
            id="Min"
            className="bg-red-500 border-red-500 border-4 w-32 h-32 rounded-lg m-10"
          >
            Min
          </button>
          <button
            id="Max"
            className="bg-red-500 border-red-500 border-4 w-32 h-32 rounded-lg m-10"
          >
            Max
          </button>

          <div
            id="Insert"
            className="border-black border-4 w-96 h-32 rounded-lg m-10"
          ></div>
        </div>
        <button
          id="spin"
          className=" bg-green-500 border-green-500 border-4 w-32 h-32 rounded-lg m-10 justify-items-end"
        >
          Spin
        </button>
      </div>
    </div>
  );
}
