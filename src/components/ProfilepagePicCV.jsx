import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import EpandedPDF from "../components/expandedPDF";
import DownloadIcon from "../assets/icons/Download_icon.svg";
import PreviewIcon from "../assets/icons/Preview_icon.svg";
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
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Tailwind's sm
        setScale(0.4);
      } else if (window.innerWidth < 768) {
        // Tailwind's md
        setScale(0.5);
      } else if (window.innerWidth < 1024) {
        // Tailwind's lg
        setScale(0.5);
      } else {
        // Tailwind's xl
        setScale(0.6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the scale based on the initial viewport size

    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  return (
    <>
      {!isExpanded ? (
        <div
          className={`flex flex-col ${
            isExpanded ? "xl:flex-col" : "xl:flex-row"
          } justify-evenly items-center relative`}
        >
          <img className="w-1/3 h-1/3 rounded-xl" src={ProfilePicture} alt="" />
          <div className="flex flex-col">
            <h3 className="Orbitron p-5 tracking-widest">CV:</h3>
            <div
              className={`relative cursor-pointer group ${
                isExpanded ? "h-full w-full flex-col md:flex-col" : ""
              }`}
            >
              <Document file={CV} className="">
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  onClick={handleExpand}
                />
              </Document>
              {window.innerWidth > 1024 ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <img
                    src={PreviewIcon}
                    className="w-20 h-20"
                    onClick={handleExpand}
                    alt="Preview"
                  />
                  <a href={CV} download>
                    <img
                      src={DownloadIcon}
                      className="w-20 h-20"
                      alt="Download"
                    />
                  </a>
                </div>
              ) : (
                <div className="flex flex-row lg:flex-col justify-evenly">
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
              )}
            </div>
          </div>
        </div>
      ) : (
        <EpandedPDF handleExpand={handleExpand}></EpandedPDF>
      )}
    </>
  );
};
export default PicCV;
