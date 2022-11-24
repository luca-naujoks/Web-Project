import React, { useState } from "react"
import Link from "next/link"

export default function login_overlay() {

  return (
    <div className="flex justify-center items-center bg-[url('/assets/bg.png)] z-50">
      <div className=" flex justify-center border-white border-2 w-2/6 p-6 m-5 rounded-xl ">
        <form action="/">
          <p className="flex justify-center text-xl">Bobby Bank Login</p>
          <div className="flex justify-center"> <button className="p-2">Login</button><button className="p-2">Sign Up</button></div>
          <input type="text" id="user" name="user" placeholder="Username" className="p-1 m-2 rounded-md border-white border-2 bg-transparent"/><br />
          <input type="password" id="passwd" name="password" placeholder="Password" className="p-1 m-2 rounded-md border-white border-2 bg-transparent" /><br />
          <input type="checkbox" id="remember" name="remember" className="p-1 m-2"/> Remember Me?<br />
          <button type="submit" className="hover:bg-green-500 duration-300 rounded-md p-2 m-2">Login</button>
        </form>
        </div>
      </div>
  )
}