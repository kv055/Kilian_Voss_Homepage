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
          <div className="flex lg:p-10 flex-col text-center justify-start md:justify-evenly">
            <h1 className="m-2 xl:m-5 font-bold tracking-widest text-black text-2xl lg:text-5xl Orbitron">
              Kilian Voss
            </h1>
            <h4 className=" tracking-widest text-black text-md xl:text-2xl Orbitron px-5">
              Full stack development
            </h4>
            <div className="grid xl:grid-flow-col grid-flow-row gap-5 m-5">
              <Link to="/Profile">
                <button
                  type="button"
                  className="mx-5 rounded-xl Orbitron text-sm lg:text-lg hover:text-2xl hover:p-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 xl:w-48 xl:h-20 w-32 h-12"
                >
                  Profile
                </button>
              </Link>
              <Link to="/Skills">
                <button
                  type="button"
                  className="mx-5 rounded-xl Orbitron text-sm lg:text-lg hover:text-2xl hover:p-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-blue-500 to-violet-500 hover:from-pink-500 hover:to-yellow-500 xl:w-48 xl:h-20 w-32 h-12"
                >
                  Skills
                </button>
              </Link>
              <Link to="/Portfolio">
                <button
                  type="button"
                  className="mx-5 rounded-xl Orbitron text-sm lg:text-lg hover:text-2xl hover:p-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-violet-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 xl:w-48 xl:h-20 w-32 h-12"
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
