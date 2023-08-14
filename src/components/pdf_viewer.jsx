import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadIcon from "../assets/icons/Download_icon.svg";
import PreviewIcon from "../assets/icons/Preview_icon.svg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ PdfDoc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col md:flex-row cursor-pointer group ${
        isExpanded ? " h-full w-full flex-col md:flex-col" : ""
      }`}
      >
      <Document file={PdfDoc} className="">
        <Page
          pageNumber={1}
          scale={isExpanded ? 1.3 : 0.5}
          onClick={handleClick}
        />
      </Document>
      <div className="flex flex-row md:flex-col justify-evenly">
        <img
          src={PreviewIcon}
          className="w-20 h-20 mx-5"
          onClick={handleClick}
        ></img>
        <a href={PdfDoc} download>
          <img
            src={DownloadIcon}
            className="w-20 h-20 mx-5"
            href={PdfDoc}
            download
          ></img>
        </a>
      </div>
      {isExpanded && (
        <button
          className="absolute top-0 right-0 m-4 p-2 bg-red-500 text-white"
          onClick={handleClick}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default PDFViewer;
