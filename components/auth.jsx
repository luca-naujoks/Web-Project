import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRef, useEffect } from "react";

export default function Auth({ req }) {
  const { data: session, status } = useSession();

  const node = useRef();

  // Track events outside scope
  const clickOutside = (e) => {
    if (!node.current.contains(e.target)) {
      document.getElementById("dropdownmenu").classList.add("hidden");
      document.getElementById("auth").classList.remove("bg-[#161b22]");
      document.getElementById("auth").classList.remove("rounded-md");
      document.getElementById("auth").classList.remove("m-1");
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  if (status === "authenticated") {
    return (
      <div id="auth" className="">
        <a
          className="flex m-2 cursor-default items-center justify-center cursor-pointer"
          onClick={function () {
            document.getElementById("dropdownmenu").classList.remove("hidden");
            document.getElementById("auth").classList.add("bg-[#161b22]");
            document.getElementById("auth").classList.add("rounded-md");
            document.getElementById("auth").classList.add("m-1");
          }}
        >
          <p className="xs:text-sm md:text-md">{session.user.name}&nbsp;</p>
          <img
            src={session.user.image}
            className="rounded-full xs:h-5 md:h-10 "
          ></img>
        </a>
        <div ref={node} id="dropdownmenu" className="p-2 m-2 text-right hidden">
          <p className="cursor-pointer">Profile</p>
          <p className="cursor-pointer">Settings</p>
          <p className="cursor-pointer" onClick={signOut}>
            logout
          </p>
        </div>
      </div>
    );
  }

  return (
    <a onClick={signIn}>
      <img
        src="../assets/Navigation/login.png"
        alt="Login"
        className="xs:h-5 md:h-10 hover:scale-125 transition duration-700 ease-in-out m-3"
      />
      <div ref={node} id="dropdownmenu"></div>
    </a>
  );
}
