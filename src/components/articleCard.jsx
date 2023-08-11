import React, { useState } from "react";
import "../index.css";
import ExpandedArticle from "../components/expandedArticle";

export default function ArticleCard({Title, Description, Icons, Article, Url}) {
  let [isExpanded, setIsExpanded] = useState(false);
  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className={`group relative ${
          isExpanded ? "basis-full bg-white" : "basis-2/5"
        } bg-white rounded-xl p-5`}
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {isExpanded && (
            <button
              className="visible col-span-2 p-2 bg-blue-500 text-white rounded-xl Orbitron"
              onClick={handleExpansion}
            >
              Close
            </button>
          )}

          <h3 className="Orbitron font-bold text-lg tracking-widest">
            {Title}
          </h3>

          <div className="grid grid-flow-col">
            {Icons.map((item) => (
              <img src={item} className=" w-8 h-8 mx-3" />
            ))}
          </div>

          {!isExpanded && (
            <p className="visible text-sm col-span-2">{Description}</p>
          )}
        </div>

        {isExpanded && <ExpandedArticle Article={Article} Url={Url} />}

        {!isExpanded && (
          <button
            className="visible absolute p-2 bg-blue-500 text-white top-1/2 left-1/2 rounded-xl Orbitron transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 transition-opacity opacity-0 group-hover:opacity-100"
            onClick={handleExpansion}
          >
            Expand
          </button>
        )}
      </div>
    </>
  );
}
