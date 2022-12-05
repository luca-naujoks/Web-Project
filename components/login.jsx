import React, { useState } from "react";
import Link from "next/link";

function showsignup() {
  document.getElementById("signup").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

export function showlogin() {
    document.getElementById("signup").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

function close() {
  document.getElementById("signup").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("links").style.filter = "none";
}

export function Overlay() {
  return (
    <div id="container">
      <div id="login" className="flex justify-center items-center mt-24 hidden">
        <div className=" border-white border-2 w-2/6 m-5 rounded-xl backdrop-blur-sm">
          <div>
            <div className="flex justify-end items-end">
              <button
                className="hover:text-red-500 duration-300 p-2"
                onClick={close}
              >
                &#x2718;
              </button>
            </div>

            <p className="flex justify-center text-xl">Bobby Bank Login</p>
            <div className="flex justify-center">
              <button
                id="loginbtn"
                className="p-2 font-bold"
                onClick={showlogin}
              >
                Login
              </button>
              <button id="signupbtn" className="p-2" onClick={showsignup}>
                Sign Up
              </button>
            </div>

            <div className="flex justify-center items-center">
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
      </div>

      <div id="signup" className="flex justify-center items-center hidden">
        <div className=" border-white border-2 w-2/6 m-5 rounded-xl">
          <div>
            <div className="flex justify-end items-end">
              <button
                className="hover:text-red-500 duration-300 p-2"
                onClick={close}
              >
                &#x2718;
              </button>
            </div>

            <p className="flex justify-center text-xl">Bobby Bank Sign Up</p>
            <div className="flex justify-center">
              <button id="loginbtn" className="p-2" onClick={showlogin}>
                Login
              </button>
              <button
                id="signupbtn"
                className="p-2 font-bold"
                onClick={showsignup}
              >
                Sign Up
              </button>
            </div>

            <div className="flex justify-center items-center">
              <form>
                <input
                  type="text"
                  id="username"
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
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="p-1 m-2 rounded-md border-white border-2 bg-transparent"
                />
                <br />
                <input
                  type="checkbox"
                  id="accept"
                  name="remember"
                  className="p-1 m-2"
                />{" "}
                Accept our User Guidelines
                <br />
                <button className="rounded-md hover:bg-blue-500 duration-300 p-2 m-2">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
