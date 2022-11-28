import React, { useState } from "react"
import Link from "next/link"
import login_overlay from "../components/login.jsx"

function showsignup() {
  document.getElementById("signup").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}
function showlogin() {
  document.getElementById("signup").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
  document.getElementById("links").style.filter = "blur(4px)";
}
function close() {
  document.getElementById("signup").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("links").classList.remove("blur-sm");
}

export default function Contact() {

  return (
     login_overlay()
  )
}