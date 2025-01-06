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

const CompressPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1.  Is the PDF compression tool free to use?",
      answer:
        "Yes, our PDF compression tool is completely free with no hidden charges.",
    },
    {
      question: "2. Do I need to sign up or create an account?",
      answer:
        "No, you can compress PDFs online without any registration or account creation.",
    },
    {
      question: "3. Will compressing a PDF reduce its quality?",
      answer:
        "Our tool is designed to retain the original quality of your text and images while reducing the file size.",
    },
    {
      question: "4.  Is there a limit on the file size I can upload?",
      answer:
        "There may be a size limit for extremely large PDFs, but most files can be compressed without any issues.",
    },
    {
      question: "5. How secure is the tool? Will my files be safe?",
      answer:
        "Your files are processed securely, and all uploaded files are automatically deleted from our servers after the compression process is complete.",
    },
    {
      question: "6.  How long does the compression process take? ",
      answer:
        "The process is usually completed within seconds, depending on the size of the file.",
    },
    {
      question: "7. Can I compress multiple PDFs at once?",
      answer:
        "Currently, our tool processes one file at a time, but you can compress multiple files individually in quick succession.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Compress PDF online free. Same PDF Better Quality Less in File Size"
          description="Reduce your PDF file size while maintaining the highest quality, quick and easily. Savetools.net fee online software."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="text-4xl font-bold text-blue-900 mb-7">
              Compress PDF: Same PDF, Better <br /> Quality, Less in File Size
            </h1>
            <h2 className="text-3xl font-bold text-gray-700">
              Compress PDF file for easy to upload at Gov. <br /> official
              website.
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
              Reduce the file size of your PDF documents without compromising
              quality with SaveTools.net. Our online PDF compression tool
              ensures that your files retain their readability and appearance
              while becoming more manageable to store,{" "}
              <strong>let’s try it now.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* How to Compress PDF Online */}
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
              <strong className="text-blue-950">Process the File : </strong>{" "}
              Click the 'Compress' button to start reducing the file size.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download : </strong>Save your
              newly compressed PDF instantly.
            </li>
          </ul>
        </div>
      </div>
      {/* Why Use SaveTools.net to Compress PDFs?? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center text-3xl font-bold">
          Why Use SaveTools.net to Compress PDFs?
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
                Compress PDF online free with no hidden costs or limitations.
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
                High-Quality Results
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Maintain the quality of your PDF while reducing its size.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-row mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-28 h-auto">
              <img
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                No Software Needed
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Perform all tasks directly in your browser, no downloads
                required.
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
                Fast and Efficient
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Get your tasks done in seconds without compromising on quality.
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
                No Downloads Needed
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Everything is online, so there’s no need to install bulky
                software.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex p-4 bg-white rounded-lg shadow-lg border w-1/2 hover:bg-blue-900 group cursor-pointer">
            <div className="w-24 h-auto">
              <img
                src={about4}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Security
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                savetools.net is highly secure online tools
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Key Features of Our PDF Compression Tool */}
      <div className="mt-10 mx-20 ml-28">
        <h3 className="text-blue-900 text-3xl font-bold">
          Key Features of Our PDF Compression Tool
        </h3>
        <div className="mt-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Reduce File Size: </strong>{" "}
              Compress large PDFs to smaller sizes for easy sharing and storage.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Retain Quality : </strong> Keep
              the original quality of your text and images intact.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Online Convenience : </strong>
              Use our tool from anywhere, anytime, with just an internet
              connection.{" "}
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Secure and Private : </strong>
              Your files are processed securely and deleted after compression.
            </li>
          </ul>
        </div>
        <p className="pt-7 text-justify">
          With <strong className="text-blue-950">SaveTools.net,</strong> you can
          make your PDFs more compact while retaining the same <br /> content
          quality. This makes your documents easier to email, upload, and share
          without <br /> sacrificing visual clarity or professionalism.
        </p>
      </div>
      {/* FAQs Section */}
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

export default CompressPdf;
