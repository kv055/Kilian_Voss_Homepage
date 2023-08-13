import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/backgrounds/laser_blu.gif";

const Landing_Page = () => {
  
  return (
    <>
      {/* Layer 1: background gif */}
      <div
        className="flex bg-no-repeat h-screen p-5 sm:p-10 xl:p-28 justify-center items-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Layer 2: the white transparent board with rounded corners */}
        <div className="flex m-5 md:m-10 xl:m-28 bg-slate-300 h-max rounded-xl opacity-60 justify-center items-center scrollable-content">
          {/* Layer 3: */}
          <div className="flex md:p-10 flex-col text-center justify-start md:justify-evenly">
            <h1 className="m-5 font-bold tracking-widest text-black text-2xl md:text-5xl Orbitron">
              Kilian Voss
            </h1>
            <h4 className=" tracking-widest text-black text-lg md:text-2xl Orbitron px-5">
              Full stack development
            </h4>
            <div className="flex xl:flex-row flex-col justify-evenly">
              <Link to="/Profile">
                <button
                  type="button"
                  className="m-6 p-10 rounded-xl Orbitron hover:text-2xl hover:p-8 hover:px-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                >
                  Profile
                </button>
              </Link>
              <Link to="/Skills">
                <button
                  type="button"
                  className="m-6 p-10 rounded-xl Orbitron hover:text-2xl hover:p-8 hover:px-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-blue-500 to-violet-500 hover:from-pink-500 hover:to-yellow-500"
                >
                  Skills
                </button>
              </Link>
              <Link to="/Portfolio">
                <button
                  type="button"
                  className="m-6 p-10 rounded-xl Orbitron hover:text-2xl hover:p-8 hover:px-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-violet-500 to-red-500 hover:from-pink-500 hover:to-yellow-500"
                >
                  Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing_Page;