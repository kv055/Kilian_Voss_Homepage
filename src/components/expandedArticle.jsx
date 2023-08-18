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
        <p className="pt-5 leading-7 md:leading-9 tracking-wide text-lg text-left Outfit col-span-2">
          {Article}
        </p>
      </div>
    </>
  );
}
