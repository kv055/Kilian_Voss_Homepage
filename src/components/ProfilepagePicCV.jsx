import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadIcon from "../assets/icons/Download_icon.svg";
import PreviewIcon from "../assets/icons/Preview_icon.svg";
import ForwardArrowIcon from "../assets/icons/Forward_arrow_icon.svg";
import BackwardArrowIcon from "../assets/icons/Backward_arrow_icon.svg";
// import CV from "../assets/CV23.pdf";
import CV from "../assets/KV_CV23.pdf";

import ProfilePicture from "../assets/Kilian.jpg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PicCV = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex flex-col ${
      isExpanded ? "xl:flex-col" : "xl:flex-row"
    } justify-evenly items-center`}>
      <img className="w-1/3 h-1/3 rounded-xl" src={ProfilePicture} alt="" />
      <div className="flex flex-col">
        {isExpanded ? (
          <div className="grid grid-cols-2 m-5">
            <a
              href={CV}
              download
              className="border-solid border-black border-4 rounded-xl"
            >
              <div className="flex flex-row">
                <p>Download: </p>
                <img
                  src={DownloadIcon}
                  className="w-20 h-9 mx-auto "
                  href={CV}
                  download
                ></img>
              </div>
            </a>

            <button
              className="p-2 bg-red-500 text-white rounded-xl "
              onClick={handleExpand}
            >
              Close
            </button>
          </div>
        ) : (
          <h3 className="Orbitron p-5 tracking-widest">CV:</h3>
        )}

        <div
          className={`flex flex-col md:flex-row cursor-pointer group ${
            isExpanded ? " h-full w-full flex-col md:flex-col" : ""
          }`}
        >
          <Document file={CV} className="">
            <Page
              pageNumber={pageNumber}
              scale={isExpanded ? 1.3 : 0.5}
              onClick={handleExpand}
            />
          </Document>
          {!isExpanded ? (
            <div className="flex flex-row md:flex-col justify-evenly">
              <img
                src={PreviewIcon}
                className="w-20 h-20 mx-5"
                onClick={handleExpand}
              ></img>
              <a href={CV} download>
                <img
                  src={DownloadIcon}
                  className="w-20 h-20 mx-5"
                  href={CV}
                  download
                ></img>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-2 place-items-center">
              {pageNumber !== 1 && (
                <img
                  src={BackwardArrowIcon}
                  className="m-5 w-20 h-14 col-start-1"
                  onClick={() => setPageNumber(pageNumber - 1)}
                  alt="Backward Arrow"
                />
              )}
              {pageNumber !== 2 && (
                <img
                  src={ForwardArrowIcon}
                  className="m-5 w-20 h-14 col-start-2"
                  onClick={() => setPageNumber(pageNumber + 1)}
                  alt="Forward Arrow"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PicCV;
