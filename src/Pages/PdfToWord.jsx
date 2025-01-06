import React from "react";
import Header from "../Components/Header";
import SEOComponent from "../Components/SEOComponent";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import about6 from "../images/perfect_for_office_ work.png";

const PdfToWord = () => {
  return (
    <div>
      <div>
        <SEOComponent
          title="PDF to Word Converter | Convert PDF to Editable Word File "
          description="Convert PDFs to editable DOC and DOCX files with near-perfect accuracy. SaveTools.net makes easy PDF to Word Converter online free. "
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="text-4xl font-bold text-blue-900 mb-7">
              PDF to Word Converter Free Online Tool
            </h1>
            <h2 className="text-3xl font-bold text-gray-700">
              Want to make a PDF file as an editable <br /> word file for ease
              of work.
            </h2>
            <div className="flex flex-col items-center justify-center mt-10">
              {/* Main Container */}
              <div className="flex items-center space-x-4">
                {/* File Input Styled as a Button */}
                <label className="bg-blue-700 hover:bg-blue-900 text-white text-2xl font-semibold px-16 py-6 rounded-lg shadow-lg cursor-pointer">
                  Select PDF files
                  <input type="file" className="hidden" multiple />
                </label>
              </div>

              {/* Drop PDFs Text */}
              <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
            </div>
            <p className="text-base text-gray-600 pt-8 text-justify max-w-[600px] leading-relaxed">
              Struggling to make changes to PDF files? SaveTools.net simplifies
              the process by transforming your PDFs into fully editable Word
              documents in just a few clicks. Say goodbye to manual retyping and
              enjoy seamless conversion with accuracy and speed.
            </p>
          </div>
        </div>
      </div>
      {/* How to Compress PDF Online */}

      <div className="mt-10 mx-20 ml-28">
        <h3 className="text-blue-900 text-3xl font-bold">
          How to Compress PDF Online
        </h3>
        <div className="mt-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your PDF: </strong> Drag
              and drop your file, or select it from your device.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Process the File: </strong>{" "}
              Click the 'Compress' button to start reducing the file size.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download : </strong>Save your
              newly compressed converted world file instantly.
            </li>
          </ul>
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-10 mx-20 ml-28">
        <h3 className="text-blue-900 text-3xl font-bold">
          Key Features of our PDF to Word Converter online tool
        </h3>
        <div className="mt-5">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">High Accuracy: </strong> Retains
              original formatting, fonts, and images.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Fast Conversion:</strong>{" "}
              Process large PDFs in seconds.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">User-Friendly: </strong>Simple
              drag-and-drop functionality.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Secure: </strong>
              Your files are processed safely with no data retention.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Free and Accessible:</strong>
              Convert PDFs to Word without any software installation.
            </li>
          </ul>
        </div>
      </div>
      {/* Why Choose SaveTools.net PDF to Word Converter? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center text-3xl font-bold">
          Why Choose SaveTools.net PDF to Word Converter?
        </h3>
        {/* First Row */}
        <div className="flex flex-row mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-24 h-auto">
              <img
                src={about3}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Efficiency
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Save time and effort with quick and reliable conversion.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-24 h-auto">
              <img
                src={about2}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Editable Output
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Modify text, images, and tables easily.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-row mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-24 h-auto">
              <img
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                No Registration Required
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Instant access without sign-ups.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-24 h-auto">
              <img
                src={about1}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Fast and Efficient
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works on all devices and operating systems.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-row mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-28 h-auto">
              <img
                src={about5}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Fast and Efficient
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Get your tasks done in seconds without compromising on quality.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-28 h-auto">
              <img
                src={about4}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                No Downloads Needed
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Everything is online, so there’s no need to install bulky
                software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfToWord;
