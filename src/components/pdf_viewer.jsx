import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ PdfDoc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`relative cursor-pointer group ${isExpanded ? 'fixed top-0 left-0 h-full w-full z-50' : ''}`} onClick={handleClick}>
      <Document file={PdfDoc}>
        <Page pageNumber={1} scale={isExpanded ? 1 : 0.5} />
      </Document>
      {isExpanded && <button className="absolute top-0 right-0 m-4 p-2 bg-red-500 text-white" onClick={handleClick}>Close</button>}
      {!isExpanded && (
        <div className="absolute top-1/2 left-1/2 rounded-xl Orbitron transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-blue-500 text-white" onClick={handleClick}>Preview</button>
          <a href={PdfDoc} download className="p-2 bg-green-500 text-white">Download</a>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;