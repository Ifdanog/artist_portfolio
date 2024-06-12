import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

const pdfFiles = [
  "/CRISIS.pdf", // Replace with your PDF paths
  "/ADDENDUM.pdf",
  "/FIRST_MONOLOGUE.pdf",
  "/LOVE_TRIANGLE.pdf",
  "/MOTHER_NARRATION.pdf", // Add up to 3 more paths (optional)
];

const Script = () => {
  const [isPreviewing, setIsPreviewing] = useState(null); // Index of PDF being previewed

  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

  const handleDownload = (pdfIndex) => async () => {
    try {
      const blob = await fetch(pdfFiles[pdfIndex]).then((response) =>
        response.blob()
      );
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", `script-${pdfIndex + 1}.pdf`); // Set numbered filenames
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const handlePreview = (pdfIndex) => () => setIsPreviewing(pdfIndex);
  const handleClosePreview = () => setIsPreviewing(null);

  return (
    <div className="w-4/5 md:w-2/3 text-center mx-auto">
      {pdfFiles.map((pdfFile, index) => (
        <div key={index} className="mb-4">
          <p>{pdfFile}</p>
          <button
            disabled={isPreviewing === index}
            onClick={handleDownload(index)}
            className="border border-white px-4 py-2 mr-6"
          >
            Download Script
          </button>
          <button
            disabled={isPreviewing === index}
            onClick={handlePreview(index)}
            className="border border-white px-4 py-2 mr-6"
          >
            Preview Script
          </button>
          {isPreviewing === index && (
            <div className="mt-4">
              <Document file={pdfFile}>
                <Page pageNumber={1} width="100%" height="600px" />
              </Document>
              <button onClick={handleClosePreview}>Close Preview</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Script;