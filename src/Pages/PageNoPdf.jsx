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

const PageNoPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Can I use this tool for free?",
      answer:
        "Yes, the Add Page Numbers tool on savetools.net is completely free to use.",
    },
    {
      question: "2. Can I choose where the page numbers appear?",
      answer:
        "Absolutely! You can place the numbers at the top or bottom of the page, aligned to the left, center, or right.",
    },
    {
      question: "3. Can I exclude certain pages from numbering?",
      answer:
        "Yes, you can select specific page ranges to include or exclude from numbering.",
    },
    {
      question: "4. Can I format the page numbers?",
      answer:
        "Yes, you can customize the font style, size, and color to match your document’s look.",
    },
    {
      question: "5. Is there a limit to the number of pages I can number?",
      answer:
        "The tool supports files up to X pages or X MB (specify the limit).",
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
          description="Organize your PDF with page numbers using SaveTools.net. Add numbers to your PDF for free - customize position, style, and format in just a few clicks!"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Add Page Numbers in PDFs
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Insert page numbers into your PDF files. <br /> Customize
              position, size, and font to suit your needs. <br />
              Insert page numbers into your PDF files. <br /> Customize
              position, size, and font to suit your needs.
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
            Why Add Page Numbers to Your PDF?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Page numbers enhance the structure and readability of your PDF
            documents, making them easier to reference, navigate, and share.
            Whether you’re working on reports, eBooks, or academic papers,
            adding page numbers ensures a professional and organized
            presentation.
          </p>
        </div>
      </div>

      {/* How to Use the Add Page Numbers Tool?*/}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 text-3xl font-bold pb-5">
          How to Use the Add Page Numbers Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your PDF : </strong> Drag
              and drop your file or click the upload button to upload your PDF.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Customize Page Numbers:{" "}
              </strong>{" "}
              <ul className="list-decimal pl-20 lg:text-lg text-sm sm:text-sm">
                <li className="list-disc">
                  Select the <strong className="text-blue-950">position</strong>{" "}
                  (top-left, top-center, bottom-right, etc.).
                </li>
                <li className="list-disc">
                  Choose the{" "}
                  <strong className="text-blue-950">font style</strong> and{" "}
                  <strong className="text-blue-950">size</strong>.
                </li>
                <li className="list-disc">
                  Specify the{" "}
                  <strong className="text-blue-950">page range </strong>(e.g.,
                  start from page 2 or number specific sections).
                </li>
              </ul>
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Apply Changes: </strong> Make
              edits and download your organized PDF.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download: </strong> Save your
              updated PDF with the page numbers added.
            </li>
          </ul>
        </div>
      </div>

      {/* Features of the Add Page Numbers Tool */}
      <div className="mt-20">
        <h2 className="text-red-600 text-center lg:text-3xl font-bold mx-3">
          Features of the Add Page Numbers Tool
        </h2>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about5}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Customizable Placement
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Add page numbers to the top or bottom of the page in the left,
                center, or right alignment.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about2}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Flexible Styling
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Choose font type, size, and color to match your document’s
                design.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about3}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Page Range Options
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Add page numbers to specific sections or exclude certain pages.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about6}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Easy-to-Use Interface
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Simple, intuitive steps to number your PDF pages.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about1}
                alt="Fast and Efficient"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Cross-Device Support
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Works on desktops, tablets, and smartphones.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
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
                Your files are processed securely and deleted after use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits of Adding Page Numbers */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Adding Page Numbers
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-8">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              Makes your document more professional and organized.
            </li>
            <li className="py-1 list-disc">
              Simplifies referencing in presentations, meetings, or academic
              submissions.
            </li>
            <li className="py-1 list-disc">
              Improves navigation in lengthy PDF files.
            </li>
            <li className="py-1 list-disc">
              Helps you comply with document standards for submissions or
              publications.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: Add Page Numbers Tool
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

export default PageNoPdf;
