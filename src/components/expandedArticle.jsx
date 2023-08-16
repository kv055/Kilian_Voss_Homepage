import React from "react";
import "../index.css";

export default function ExpandedArticle({Url, Article}) {
  return (
    <>
      <div className="md:m-5 rounded-xl">
        <div className="flex flex-row flex-wrap justify-evenly">
          <div className="flex flex-row ">
            <a
              href={Url}
              className="Orbitron text-lg tracking-wide font-bold mt-5"
            >
              Visit: {Url}
            </a>
          </div>
        </div>

        <h4 className="m-5 Orbitron text-lg tracking-wide font-bold">
          The Process:
        </h4>
        <p className="pt-5 leading-7 md:leading-9 tracking-wide text-lg text-left">{Article}</p>
      </div>
    </>
  );
}
