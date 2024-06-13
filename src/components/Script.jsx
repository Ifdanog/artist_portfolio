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

  return (
    <div className="w-4/5 md:w-2/3 text-center mx-auto grid grid-cols-2 md:grid-cols-3">
      {pdfFiles.map((pdfFile, index) => (
        <div key={index} className="mb-4">
          <p>{pdfFile}</p>
          <button
            onClick={handleDownload(index)}
            className="text-xs border border-white px-4 py-2 mr-6"
          >
            Download Script
          </button>
        </div>
      ))}
    </div>
  );
};

export default Script;