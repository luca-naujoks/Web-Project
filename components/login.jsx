import React, { useState } from "react";
import Link from "next/link";

export default function login_overlay() {
  function changeoverlay() {
    document.getElementById("signup").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
  }
  function changeoverlay1() {
    document.getElementById("signup").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }

  return (
    <div id="container">
      <div id="login" className="flex justify-center items-center hidden">
        <div className=" flex justify-center border-white border-2 w-2/6 p-6 m-5 rounded-xl ">
          <div>
            <div className="">
              <p className="flex justify-center text-xl">Bobby Bank Login</p>
              <button id="loginbtn" className="p-2 font-bold">
                Login
              </button>
              <button id="signupbtn" className="p-2" onClick={changeoverlay}>
                Sign Up
              </button>
            </div>
            <div className="flex justify-center items-center"> </div>
            <form>
              <input
                type="text"
                id="user"
                name="user"
                placeholder="Username"
                className="p-1 m-2 rounded-md border-white border-2 bg-transparent"
              />
              <br />
              <input
                type="password"
                id="passwd"
                name="password"
                placeholder="Password"
                className="p-1 m-2 rounded-md border-white border-2 bg-transparent"
              />
              <br />
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="p-1 m-2"
              />{" "}
              Remember Me?
              <br />
              <button className="rounded-md hover:bg-green-500 duration-300 p-2 m-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <div id="signup" className="flex justify-center items-center hidden">
        <div className=" flex justify-center border-white border-2 w-2/6 p-6 m-5 rounded-xl ">
          <div>
            <div className="">
              <p className="flex justify-center text-xl">Bobby Bank Sign Up</p>
              <button id="loginbtn" className="p-2 " onClick={changeoverlay1}>
                Login
              </button>
              <button id="signupbtn" className="p-2 font-bold">
                Sign Up
              </button>
            </div>
            <div className="flex justify-center items-center"> </div>
            <form>
              <input
                type="text"
                id="user"
                name="user"
                placeholder="Username"
                className="p-1 m-2 rounded-md border-white border-2 bg-transparent"
              />
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail-Adress"
                className="p-1 m-2 rounded-md border-white border-2 bg-transparent"
              />
              <br />
              <input
                type="password"
                id="passwd"
                name="password"
                placeholder="Password"
                className="p-1 m-2 rounded-md border-white border-2 bg-transparent"
              />
              <br />
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="p-1 m-2"
                required
              />{" "}
              Accept our User Guidelines
              <br />
              <button className="rounded-md hover:bg-green-500 duration-300 p-2 m-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
