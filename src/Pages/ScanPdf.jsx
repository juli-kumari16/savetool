import React from "react";
import Header from "../Components/Header";

const ScanPdf = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h2 className="text-4xl font-bold text-gray-700 mb-5">
              Scan to PDF
            </h2>
            <p className="text-2xl text-gray-600">
              Scan documents from your smartphone to your browser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPdf;
