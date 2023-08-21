import React from "react";
import "../index.css";

export default function ExpandedArticle({ Url, GitHubUrl, Article }) {
  return (
    <>
      <div className="grid grid-flow-row grid-cols-2 md:m-5 rounded-xl">

          {Url && (
            <a
              href={Url}
              className="Orbitron text-lg tracking-wide font-bold mt-5 col-span-1"
            >
              Visit: {Url}
            </a>
          )}

          {GitHubUrl && (
            <a
              href={GitHubUrl}
              className="Orbitron text-lg tracking-wide font-bold mt-5 col-span-1"
            >
              Source Code: GitHub{" "}
            </a>
          )}

        <h4 className="m-5 Orbitron text-lg tracking-wide font-bold col-span-2">
          The Process:
        </h4>
        <p className="col-span-2 py-5  px-6 xl:px-28 leading-5 lg:leading-9 tracking-wide text-sm lg:text-lg text-left Outfit">
          {Article}
        </p>
      </div>
    </>
  );
}
