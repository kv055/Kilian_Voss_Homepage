import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Header({ PageName }) {
  return (
    <>
      <div className="flex flex-row text-center justify-around items-end mb-5">
        <Link to="/" className="text-7xl pb-3">
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
