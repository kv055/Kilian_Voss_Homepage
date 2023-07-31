import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Header({ PageName }) {
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-5 p-2 text-center">
        <Link to="/" className="grid place-content-center row-span-2 col-span-2 ">
          <div className="text-9xl">&#8592;</div>
        </Link>
        <h1 className="row-span-1 col-span-3 font-bold tracking-widest text-black text-2xl xl:text-5xl Orbitron">
          Kilian Voss
        </h1>
        <h2 className="row-span-1 col-span-3 tracking-widest text-black text-xl xl:text-2xl Orbitron">
          {PageName}
        </h2>
      </div>
    </>
  );
}
