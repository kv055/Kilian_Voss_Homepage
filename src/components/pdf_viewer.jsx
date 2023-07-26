import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ PdfDoc }) => {
  return (
    <div>
      <Document file={PdfDoc}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
