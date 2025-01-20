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

const OcrPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. What types of files can I use with this tool?",
      answer:
        "You can upload scanned PDFs and image files, including JPEG, PNG, BMP, and TIFF.",
    },
    {
      question: "2. Is this tool free to use?",
      answer:
        "Yes, the OCR PDF tool on savetools.net is completely free for all users.",
    },
    {
      question: "3. Does this tool support multiple languages?",
      answer:
        "Yes, the tool supports text recognition in multiple languages. You can select the desired language before starting the OCR process.",
    },
    {
      question: "4. Will the formatting of my document be preserved?",
      answer:
        "Our tool preserves the layout and structure of your document wherever possible while making the text editable.",
    },
    {
      question: "5. Are my files secure?",
      answer:
        "Yes, all files are processed on encrypted servers, and they are automatically deleted after the OCR process.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Add Page Numbers in PDF Files Online Free, Unlimited"
          description="Easily convert scanned PDFs to searchable and editable text with SaveTools.net. Use our free OCR tool for fast, accurate text recognition online!"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert Scanned PDFs to Searchable Text
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              OCR PDF: Extract Text from Scanned PDFs
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
          {/* <div class="flex text-red-500 font-bold text-lg items-center justify-center mt-5 sm:text-sm lg:text-base text-sm ">
            <span>Pasting the URL</span>
            <span className="mx-2">|</span>
            <span>Pasting the code</span>
          </div> */}
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            What is OCR PDF?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            OCR (Optical Character Recognition) technology allows you to extract
            editable and searchable text from scanned PDFs or images. Whether
            it’s a scanned document, receipt, or image with text, this tool
            converts it into an accessible format for easy editing and
            searching.
          </p>
        </div>
      </div>
      {/* How to Use the OCR PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Use the OCR PDF Tool?
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Upload Your PDF or Image:{" "}
              </strong>{" "}
              Drag and drop your file or click the upload button (supports
              scanned PDFs, JPEG, PNG, and more).
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Select Language: </strong>{" "}
              Choose the language of the text in your document for accurate
              recognition.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Start OCR : </strong>
              Click “Start OCR” to process the document.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download : </strong>
              Save the extracted text as a new searchable PDF, plain text file,
              or Word document.
            </li>
          </ul>
        </div>
      </div>

      {/* Features of the OCR PDF Tool */}
      <div className="mt-20">
        <h2 className="text-red-600 text-center lg:text-3xl font-bold">
          Features of the OCR PDF Tool
        </h2>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-24 lg:w-24 h-auto">
              <img
                src={about5}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Accurate Text Recognition
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Extract text with high precision, even from complex documents.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about2}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Multi-Language Support
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Recognizes text in multiple languages, including English,
                Spanish, French, German, and more.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-24 lg:w-28 h-auto">
              <img
                src={about3}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Editable Output
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Save the text as a searchable PDF, Word document, or plain text
                file.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-24 lg:w-24 h-auto">
              <img
                src={about1}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Preserve Formatting
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Retains the original layout, fonts, and structure where
                possible.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-24 lg:w-24 h-auto">
              <img
                src={about6}
                alt="Fast and Efficient"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Fully Online
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                No software installation required.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-24 lg:w-24 h-auto">
              <img
                src={about4}
                alt="Perfect for Office / Personal Work"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Secure and Private
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Files are processed securely and deleted after conversion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits of OCR Technology */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of OCR Technology
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-8">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Save Time : </strong>
              No need to manually retype text from scanned documents.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Make PDFs Searchable : </strong>
              Enable keyword searches within scanned PDFs.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Edit Scanned Documents :{" "}
              </strong>
              Convert static text into an editable format.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Accessible Anywhere : </strong>
              Works on any device, including desktops, tablets, and smartphones.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: OCR PDF Tool
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
      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OcrPdf;
