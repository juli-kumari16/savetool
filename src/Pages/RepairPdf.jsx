import React, { useState } from "react";
import Header from "../Components/Header";
import SEOComponent from "../Components/SEOComponent";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import about6 from "../images/perfect_for_office_ work.png";
import faqsimg from "../images/faq.png";
import Footer from "../Components/Footer";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const RepairPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. What types of errors can this tool fix?",
      answer: "The Repair PDF tool can fix common issues such as:",
      list: [
        "Corrupted file headers.",
        "Missing or blank pages.",
        "Damaged content (text, images, or links).",
      ],
    },
    {
      question: "2. Is the Repair PDF tool free to use?",
      answer: "Yes, the tool is completely free with no hidden charges.",
    },
    {
      question: "3. Is there a file size limit for repairing PDFs?",
      answer:
        "Yes, the maximum file size is X MB (you can specify the limit). For larger files, try compressing them first using our Compress PDF tool.",
    },
    {
      question: "4. Are my files safe during the repair process?",
      answer:
        "Absolutely. All files are processed on secure servers, and we delete them automatically after repair to ensure your privacy.",
    },
    {
      question: "5. Can I use this tool on mobile devices?",
      answer:
        "Yes, our Repair PDF tool works seamlessly on desktops, tablets, and smartphones.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Repair PDF Files Online - Recover Corrupted Documents | SaveTools.net"
          description="Fix damaged or corrupted PDF files effortlessly with SaveTools.net. Repair documents online for free, fast, and secure recovery of your data!"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Repair PDF Files Online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Don’t Let File Corruption Stop You! <br /> Repair Your PDF Now ➔
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select PDF File
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          {/* <div class="flex text-red-500 font-bold text-lg items-center justify-center mt-5 ">
            <span>Pasting the URL</span>
            <span className="mx-2">|</span>
            <span>Pasting the code</span>
          </div> */}
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            What is the Repair PDF Tool?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            The Repair PDF tool is designed to fix corrupted or damaged PDF
            files. Whether your file is unreadable, has missing pages, or throws
            an error when opened, our tool helps recover and restore your
            documents quickly and efficiently.
          </p>
        </div>
      </div>

      {/* How to Use the Repair PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold pb-5">
          How to Use the Repair PDF Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Upload Your Corrupted File :{" "}
              </strong>{" "}
              Drag and drop your damaged PDF file or click the upload button.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Start Repair : </strong> Click
              the “Repair PDF” button, and our system will analyze and fix the
              file.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download: </strong> Once
              repaired, download your fully restored PDF file.
            </li>
          </ul>
        </div>
      </div>

      {/* Features of the Repair PDF Tool */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl sm:text-xl text-lg font-bold">
          Features of the Repair PDF Tool
        </h3>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-20 h-auto">
              <img
                src={about3}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Quick Fixes
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Repair damaged files within seconds.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about1}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Safe Recovery
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Preserve the original content, including text, images, and
                formatting.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-20 h-auto">
              <img
                src={about2}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Wide Compatibility
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works with PDFs of any size or complexity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about4}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Secure and Private
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Your files are processed on encrypted servers and deleted
                automatically after repair.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-52 h-auto">
              <img
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                No Installation Required
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Fully online – no downloads or software needed.{" "}
                <strong className="text-blue-950"> Fast and Efficient:</strong>{" "}
                Get your tasks done in seconds without compromising on quality.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about5}
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
                software
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* When Should You Use the Repair PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          When Should You Use the Repair PDF Tool?
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-8">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              When your PDF won’t open or throws an error message.
            </li>
            <li className="py-1 list-disc">
              If your file shows missing or blank pages.
            </li>
            <li className="py-1 list-disc">
              When your file becomes corrupted after a transfer or download.
            </li>
            <li className="py-1 list-disc">
              To fix broken links, images, or formatting issues in your PDF.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: Repair PDF Tool
        </h3>
        <div className="flex flex-col lg:flex-row-reverse mb-5">
          {/* FAQ Image (on top for small screens, side by side for large screens) */}
          <div className="lg:w-1/2 lg:-mt-24">
            <img src={faqsimg} alt="FAQ Image" className="w-full" />
          </div>

          {/* FAQ Questions & Answers */}
          <div className="mx-auto lg:p-6 w-full lg:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-2">
                {/* Question Section */}
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-800">
                    {faq.question}
                  </h4>
                  <button
                    className="text-blue-500 text-2xl font-bold ml-4"
                    onClick={() => toggleAnswer(index)}
                  >
                    {openIndex === index ? "-" : "+"}
                  </button>
                </div>

                {/* Answer Section */}
                {openIndex === index && (
                  <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore More */}
      <div>
        <ExploreMore />
      </div>

      {/* WhatsApp */}
      <div>
        <WhatsApp />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RepairPdf;
