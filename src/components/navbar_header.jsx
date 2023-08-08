import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Header({ PageName }) {
  return (
    <>
      <div className="flex flex-row p-2 text-center justify-around">
        <Link to="/" className="text-6xl">
          &#8592;
        </Link>
        <div className="flex flex-col">
          <h1 className="font-bold tracking-widest text-black text-2xl xl:text-3xl Orbitron">
            Kilian Voss
          </h1>
          <h2 className="tracking-widest text-black text-xl xl:text-xl Orbitron">
            {PageName}
          </h2>
        </div>
      </div>
    </>
  );
}
