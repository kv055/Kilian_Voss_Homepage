import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadIcon from "../assets/icons/Download_icon.svg";
import ForwardArrowIcon from "../assets/icons/Forward_arrow_icon.svg";
import BackwardArrowIcon from "../assets/icons/Backward_arrow_icon.svg";
// import CV from "../assets/CV23.pdf";
import CV from "../assets/KV_CV23.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PicCV = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div
      className={`flex flex-col ${
        isExpanded ? "xl:flex-col" : "xl:flex-row"
      } justify-evenly items-center`}
    >
  
      <div className="flex flex-col">
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

        <div
          className={`flex flex-col lg:flex-row cursor-pointer group ${
            isExpanded ? " h-full w-full flex-col md:flex-col" : ""
          }`}
        >
          <Document file={CV} className="">
            <Page
              pageNumber={pageNumber}
              scale={window.innerWidth / 1000}
              onClick={handleExpand}
            />
          </Document>

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
        </div>
      </div>
    </div>
  );
};

export default PicCV;
