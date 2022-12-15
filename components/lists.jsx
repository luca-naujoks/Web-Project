import { useEffect, useState } from "react";
import React from "react";

export function Lists() {
  const todos = [
    "Einkaufen gehen",
    "Zähne putzen",
    "Küche aufräumen",
    "Bügeln",
    "Abendessen kochen",
    "Rechnungen bezahlen",
    "E-Mails checken",
    "Fenster putzen",
    "Staubsaugen",
    "Blumen gießen",
    "Zimmerschränke aufräumen",
    "Rasen mähen",
    "Auto waschen",
    "Garagenverkauf organisieren",
    "Briefe schreiben",
    "Fotos organisieren",
    "Kontoauszüge ausdrucken",
    "Geschenke kaufen",
    "Bücher zurückbringen",
    "Dokumente ablegen",
    "Handy aufladen",
    "Schuhe putzen",
    "Nägel schneiden",
    "Kleidung ausrangieren",
    "Schminkutensilien auffüllen",
    "Hund ausführen",
    "Klavier üben",
    "Museum besuchen",
    "Wandmalerei anfertigen",
    "Schwimmen gehen",
    "Yoga machen",
    "Ausflug planen",
    "Bilderrahmen aufhängen",
    "Briefkasten leeren",
    "Kühlschrank aufräumen",
    "Geschirr spülen",
    "Abendessen vorbereiten",
    "Gartenpflanzen pflegen",
    "Reise buchen",
    "Treffen mit Freunden organisieren",
  ];

  return (
    <div id="main" className="overflow-hidden">
      <div id="headder" className="flex justify-center text-3xl font-bold p-4">
        List Name
      </div>
      <div>
        <div id="list" className="flex text-white">
          <ul className="w-[100%] overflow-y-hidden hover:overflow-y-scroll scroll-smooth h-200">
            {todos.map((item) => (
              <li
                id={item}
                key={item}
                className="bg-[#161b22] text-xl rounded-md h-14 m-2 p-2 cursor-default"
              >
                <span className="hover:text-green-700 cursor-pointer pr-3">&#10004;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#161b22] h-14 w-auto m-2 mt-6 p-2 rounded-md justify-center">
          Add New Task +
        </div>
      </div>
    </div>
  );
}
