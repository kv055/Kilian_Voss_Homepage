import React from "react";
import Background from "../assets/backgrounds/space_purp.gif";
import Header from "../components/navbar_header";
import PicCV from "../components/ProfilepagePicCV";
import ContactMe from "../components/contactMeFooter";

export default function Profile_Page() {
  return (
    <>
      {/* Layer 1: background gif */}
      <div
        className="flex bg-no-repeat h-screen p-1 justify-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Layer 2: the white transparent board with rounded corners */}
        <div className="bg-slate-300-60 h-auto md:w-3/4 max-w-screen-xl rounded-xl justify-center text-center p-2 overflow-y-scroll">
          <Header PageName="Profile" />
          <PicCV />
          {/* Layer 3: */}
          <h3 className="Orbitron p-5 tracking-widest">Introduction</h3>
          <div className="md:m-5 bg-slate-300 rounded-xl justify-center">
            <p className="row-span-1 col-span-2 p-5 leading-9 tracking-wide text-lg text-left Outfit">
              My name is Kilian Voss, I am a 26 year old completely self taught
              full stack developer with 3+ years of experience working mostly
              remotely and self employed for independent clients, as well as in
              the corporate world. I have delivered an extensive list of
              projects to clients and by doing so mainly become proficient in
              Javascript and Python including various associated Libraries,
              Frameworks such as React, NextJS and Flask to name a few. In
              addition to the technical side I have a passion for creative UI
              implementations and design experience working with software such
              as Figma as well as the Adobe suite. Currently based in Melbourne,
              Victoria I am looking for short term contract work as well as part
              time employment in roles preferably associated with the
              technologies listed above.
            </p>
          </div>
          <ContactMe />
        </div>
      </div>
    </>
  );
}
