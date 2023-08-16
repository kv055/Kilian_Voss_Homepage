import React, { useState } from "react";
import "../index.css";
import ExpandedArticle from "../components/expandedArticle";
export default function ArticleCard({
  isExpanded,
  onExpand,
  Id,
  Title,
  Description,
  Icons,
  Article,
  Url,
  Background,
}) {
  return (
    <>
      <div
        
        className={`group relative ${
          isExpanded ? "col-span-full order-first" : "col-span-2 lg:col-span-1"
        } bg-slate-300 rounded-xl p-5 mb-5`}
      >
        <div className="grid grid-cols-2 auto-rows-auto gap-3">
          {isExpanded && (
            <button
              className="visible col-span-2 p-2 border-black text-black border-solid border-4 rounded-xl Orbitron"
              onClick={onExpand}
            >
              Close
            </button>
          )}

          <h3 className="Orbitron font-bold text-lg tracking-widest col-span-2 md:col-span-1">
            {Title}
          </h3>

          <div className="grid grid-flow-col col-span-2 md:col-span-1">
            {Icons.map((item, index) => (
              <img key={index} src={item} className=" w-8 h-8 mx-3" />
            ))}
          </div>

          {!isExpanded && <img src={Background} className="col-span-2"></img>}

          {!isExpanded && (
            <p className="visible text-sm col-span-2">{Description}</p>
          )}
        </div>

        {isExpanded && <ExpandedArticle Article={Article} Url={Url} />}

        {!isExpanded && (
          <button
            className="visible absolute p-2 bg-blue-500 text-white top-1/2 left-1/2 rounded-xl Orbitron transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 transition-opacity opacity-0 group-hover:opacity-100"
            onClick={onExpand}
          >
            Expand
          </button>
        )}
      </div>
    </>
  );
}
