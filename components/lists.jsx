import { useEffect, useState } from "react";
import React from "react";

export function Lists() {
  const todos = localStorage.getItem("todo").split(",");

  function addtodo() {
    let oldtodos = localStorage.getItem("todo");
    let input = document.getElementById("todo-input");
    let inputvalue = oldtodos + "," + input.value;
    localStorage.setItem("todo", inputvalue);

    let ul = document.querySelector("#todolist");
    let li = document.createElement("li");

    let id = input.value

    li.textContent = input.value;
    li.setAttribute("id", input.value);
    console.log(input.value)
    li.setAttribute('onclick', function checklist() {
      let li_item = input.value
      document.getElementById(li_item).classList.add("line-through");
    })
    li.setAttribute(
      "class",
      "bg-[#161b22] text-xl rounded-md h-14 m-2 p-2 cursor-pointer"
    );


    ul.appendChild(li);
  }

  function checkli(id) {
    document.getElementById(id).classList.add("line-through");
  }

  return (
    <div id="main" className="overflow-hidden">
      <div id="headder" className="flex justify-center text-3xl font-bold p-4">
        List Name
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
                onClick={function check() {
                  document.getElementById(item).classList.add("line-through");
                }}
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex bg-[#161b22] h-14 w-auto m-2 mt-6 p-2 rounded-md items-center justify-center">
          <input
            id="todo-input"
            type="search"
            placeholder=" Add New Task"
            className="flex bg-transparent text-xl focus:border-none focus:rounded-none"
          />
          <button onClick={addtodo}>Add Task</button>
        </div>
      </div>
    </div>
  );
}
