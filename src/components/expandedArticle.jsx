import React from "react";
import "../index.css";

export default function ExpandedArticle({Url, Article}) {
  return (
    <>
      <div className="m-5 rounded-xl">
        <div className="flex flex-row flex-wrap justify-evenly">
          <div className="flex flex-row ">
            <a
              href="https://abelianwebpagehosting.s3-website-us-east-1.amazonaws.com/"
              className="Orbitron text-lg tracking-wide font-bold"
            >
              Visit: {Url}
            </a>
          </div>
        </div>

        <h4 className="Orbitron text-lg tracking-wide font-bold">
          The Process:
        </h4>
        <p className="p-5">{Article}</p>
      </div>
    </>
  );
}
