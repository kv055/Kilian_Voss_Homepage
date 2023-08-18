import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import DownloadIcon from "../assets/icons/Download_icon.svg";
import ForwardArrowIcon from "../assets/icons/Forward_arrow_icon.svg";
import BackwardArrowIcon from "../assets/icons/Backward_arrow_icon.svg";
import CV from "../assets/KV_CV23.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ExpandedPDF = ({ handleExpand }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(window.innerWidth / 1000);

  useEffect(() => {
    // Update the scale whenever the window size changes
    const handleResize = () => {
      if (window.innerWidth < 468) {
        setScale(window.innerWidth / 600);
      } else if (window.innerWidth < 768) {
        setScale(window.innerWidth / 700);
      } else {
        setScale(window.innerWidth / 900);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize scale on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className={`flex flex-col xl:flex-col justify-evenly items-center`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 m-5">
          <a
            className="p-2 border-solid border-black border-2 rounded-xl"
            href={CV}
            download
          >
            Download
          </a>
          <button
            className="p-2 bg-red-500 text-white rounded-xl "
            onClick={handleExpand}
          >
            Close
          </button>
        </div>

        <div className={`flex flex-col cursor-pointer group h-full w-full`}>
          <Document file={CV} className="">
            <Page
              pageNumber={pageNumber}
              scale={scale}
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

export default ExpandedPDF;
