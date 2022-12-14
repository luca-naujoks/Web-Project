import { useEffect, useState } from "react";
import React from "react";

export let list = "Home";

export function updatelist(listpointer) {
  list = listpointer;
}

export function Lists() {
  const todos = localStorage.getItem(list).split(",");
  const todosdone = localStorage.getItem(list + ".done").split(",");

  function addtodo() {
    let input = document.getElementById("todo-input");
    let inputvalue = localStorage.getItem(list) + "," + input.value;
    localStorage.setItem(list, inputvalue);

    let ul = document.querySelector("#todolist");
    let li = document.createElement("li");

    li.textContent = input.value;
    li.setAttribute("id", input.value);
    console.log(input.value);
    li.setAttribute("onclick", function checklist() {});
    li.setAttribute(
      "class",
      "bg-[#161b22] text-xl rounded-md h-14 m-2 p-2 cursor-pointer"
    );
    ul.appendChild(li);
  }


  return (
    <div id="main" className="overflow-hidden">
      <div id="headder" className="flex justify-center text-3xl font-bold p-4">
        {list}
      </div>
      <div>
        <div id="list" className="flex text-white">
          <ul
            id="todolist"
            className="w-[100%] overflow-y-hidden hover:overflow-y-scroll scroll-smooth h-200"
          >
            {todos.map((item) => (
              <li
                id={item}
                key={item}
                className="bg-[#161b22] text-xl rounded-md h-14 m-2 p-2 cursor-pointer"
                onClick={function closetodo() {
                  let todos = localStorage.getItem(list);
                  let updatetodos = todos.replace("," + item, "");
                  localStorage.setItem(list, updatetodos);

                  let donetodos = localStorage.getItem(list + ".done");
                  let updateactivetodos = donetodos + "," + item;
                  localStorage.setItem(list + ".done", updateactivetodos);

                  let ul = document.querySelector("#donetodolist");
                  let li = document.createElement("li");
                  li.textContent = item;
                  li.setAttribute("id", item);
                  console.log(item);
                  li.setAttribute(
                    "class",
                    "bg-[#161b22] text-xl rounded-md h-14 m-2 p-2 cursor-pointer line-through"
                  );
                  ul.appendChild(li);

                  let removetodo = document.querySelector("#todolist");
                  let getitem = removetodo.getElementsByTagName("li")[item];
                  removetodo.removeChild(getitem);
                }}
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <hr />

        <div id="list" className="flex text-white">
          <ul
            id="donetodolist"
            className="w-[100%] overflow-y-hidden hover:overflow-y-scroll scroll-smooth h-200"
          >
            {todosdone.map((item) => (
              <li
                id={item}
                key={item}
                className="bg-[#161b22] text-xl rounded-md h-14 m-2 p-2 line-through cursor-pointer"
                onClick={function opentodo() {
                  let donetodos = localStorage.getItem(list + ".done");
                  let updatedonetodos = donetodos.replace("," + item, "");
                  localStorage.setItem(list + ".done", updatedonetodos);

                  let activetodos = localStorage.getItem(list);
                  let updateactivetodos = activetodos + "," + item;
                  localStorage.setItem(list, updateactivetodos);

                  let ul = document.querySelector("#todolist");
                  let li = document.createElement("li");
                  li.textContent = item;
                  li.setAttribute("id", item);
                  console.log(item);
                  li.setAttribute(
                    "class",
                    "bg-[#161b22] text-xl rounded-md h-14 m-2 p-2 cursor-pointer"
                  );
                  ul.appendChild(li);

                  let removetodo = document.querySelector("#donetodolist");
                  let getitem = removetodo.getElementsByTagName("li")[item];
                  removetodo.removeChild(getitem);
                }}
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex bg-[#161b22] h-14 w-auto m-2 mt-6 p-2 rounded-md items-center justify-center">
        <input
            id="todoinput"
            type="text"
            className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-[#161b22] text-white focus:outline-none xs:hidden md:block"
            placeholder="Search"
          />
          <button className="rounded-tr-md rounded-br-md px-2 py-3 xs:hidden md:block">
            <svg
              className="w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
