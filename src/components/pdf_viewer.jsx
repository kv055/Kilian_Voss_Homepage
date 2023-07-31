import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ PdfDoc }) => {
  return (
    <div>
      <Document file={PdfDoc}>
        <Page pageNumber={1} scale={0.5} />
      </Document>
    </div>
  );
};

export default PDFViewer;
