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

const Split = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is the PDF splitter tool free to use?",
      answer:
        "Yes, SaveTools.net provides a completely free PDF splitter tool with no hidden costs.",
    },
    {
      question: "2. Do I need to sign up or create an account?",
      answer:
        "No, you can split PDFs online without any registration or account creation.",
    },
    {
      question: "3. Can I extract specific pages from a PDF?",
      answer:
        "Absolutely! Our tool allows you to select and extract specific pages from your PDF to create a new file.",
    },
    {
      question: "4.  Is my data safe while using SaveTools.net?",
      answer:
        "Yes, your files are processed securely, and all uploaded files are automatically deleted after the task is completed.",
    },
    {
      question: "5. Are there any limits on file size or number of pages?",
      answer:
        "While there may be limits on file size for extremely large PDFs, you can always split the document in smaller parts if needed.",
    },
    {
      question: "6. What file formats are supported? ",
      answer:
        "Our tool currently supports PDF files for splitting and page extraction.",
    },
    {
      question: "7. How long does the process take?",
      answer:
        "The splitting process is usually completed within seconds, depending on the size of the file.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Split pdf files online free, Extract single Pages from PDF File"
          description="Extract single pages or entire sections to create independent PDF files with ease @ SaveTools.net"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="text-4xl font-bold text-blue-900 mb-7">
              Split PDF or Extract Pages Online for Free
            </h1>
            <h2 className="text-3xl font-bold text-gray-700">
              Split your PDF and select which one need you.
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
            <p className="text-base text-gray-600 pt-8 text-justify max-w-[700px] leading-relaxed">
              Split your PDF files into smaller, more manageable documents with
              SaveTools.net. Whether you need to extract specific pages or
              divide a large PDF into multiple files, our online tool makes the
              process fast, free, and effortless.
            </p>
          </div>
        </div>
      </div>
      {/* How to Split PDF Online */}

      <div className="mt-10 mx-20 ml-28">
        <h3 className="text-blue-900 text-3xl font-bold">
          How to Split PDF Online
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
              <strong className="text-blue-950">Select Pages : </strong> Choose
              the pages you want to split or extract.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Process the File: </strong>Click
              the 'Split' button, and the tool will do the rest.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download : </strong>Save your
              new PDF files instantly.
            </li>
          </ul>
        </div>
      </div>
      {/* Why Choose SaveTools.net for Splitting PDFs? */}

      <div className="mt-20">
        <h3 className="text-red-600 text-center text-3xl font-bold">
          Why Choose SaveTools.net for Splitting PDFs?
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
                Free to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Split PDF free with no hidden charges.
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
                User-Friendly
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Designed for everyone, no technical expertise required.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-row mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-36 h-auto">
              <img
                src={about4}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Secure and Private
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Your files are processed securely and automatically deleted
                after the task is completed.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-32 h-auto">
              <img
                src={about1}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Online Tool
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No software installation is needed; everything happens in your
                browser.
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
                src={about6}
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
      {/* Key Features of Our PDF Splitter Tool */}
      <div className="mt-10 mx-20 ml-28">
        <h3 className="text-blue-900 text-3xl font-bold">
          How to Split PDF Online
        </h3>
        <div className="mt-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Split PDF Online: </strong>{" "}
              Break down large PDF documents into smaller files instantly.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Extract Pages from PDF :{" "}
              </strong>{" "}
              Select and extract specific pages to create a new PDF.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Custom Ranges: </strong>Choose
              the pages or ranges you want to split or extract.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Fast Processing : </strong>
              Complete your task in seconds, even with large files.
            </li>
          </ul>
        </div>
      </div>
      {/* Extract Pages from PDF with Ease */}
      <div className="mt-20 pl-28">
        <h3 className="font-bold text-blue-900 text-3xl">
          Extract Pages from PDF with Ease
        </h3>
        <p className="mt-5 text-gray-700 text-base text-justify max-w-[700px] leading-relaxed">
          Need to extract specific pages from a PDF? SaveTools.net lets you
          extract pages with precision. Select the pages you need, and our tool
          will generate a new document for you within moments.
        </p>
      </div>

      {/* Faq section */}
      <div className="mt-20">
        <h3 className="text-blue-900 text-3xl font-bold pl-24">
          FAQs for Word to PDF Converter Online
        </h3>
        <div className="flex flex-row mb-5 pl-5">
          <div className="mx-auto p-6 w-[50%]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-2">
                {/* Question Section */}
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-medium text-blue-800">
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
                  <p className="text-gray-600 mt-3 text-base">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="">
            <img src={faqsimg} alt="" className="" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Split;
