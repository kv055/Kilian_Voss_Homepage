import React from "react";
import Background from "./assets/laser_blu.gif";

const Landing_Page_Component = () => {
  
  return (
    <>
      {/* Layer 1: background gif */}
      <div
        className="bg-no-repeat min-h-screen p-5 sm:p-10 xl:p-28"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Layer 2: the white transparent board with rounded corners */}
        <div className="m-5 md:m-10 xl:m-28 bg-slate-300 max-h-screen rounded-xl opacity-60 justify-center">
          {/* Layer 3: */}
          <div className="flex p-10 flex-col text-center">
            <h1 className="m-5 font-bold tracking-widest text-black text-5xl Orbitron">
              Kilian Voss
            </h1>
            <h4 className=" m-5 tracking-widest text-black text-2xl Orbitron">
              Full stack development
            </h4>
            <div className="flex xl:flex-row flex-col mx-auto">
              <button
                type="button"
                className="m-6 sm:m-5 xl:m-20 p-10 rounded-xl Orbitron hover:text-2xl hover:p-8 hover:px-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              >
                Profile
              </button>
              <button
                type="button"
                className="m-6 sm:m-5 xl:m-20 p-10 rounded-xl Orbitron hover:text-2xl hover:p-8 hover:px-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-blue-500 to-violet-500 hover:from-pink-500 hover:to-yellow-500"
              >
                Skills
              </button>
              <button
                type="button"
                className="m-6 sm:m-5 xl:m-20 p-10 rounded-xl Orbitron hover:text-2xl hover:p-8 hover:px-5 hover:underline font-bold tracking-widest bg-gradient-to-r from-violet-500 to-red-500 hover:from-pink-500 hover:to-yellow-500"
              >
                Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing_Page_Component;
