import React from "react";
import Header from "../Components/Header";

const PdfToJpg = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h2 className="text-4xl font-bold text-gray-700 mb-5">
              PDF to JPG
            </h2>
            <p className="text-2xl text-gray-600">
              Convert each PDF page into a JPG or extract all images contained
              in a PDF.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 text-white text-2xl font-semibold px-16 py-6 rounded-lg shadow-lg cursor-pointer">
                Select PDF files
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfToJpg;
