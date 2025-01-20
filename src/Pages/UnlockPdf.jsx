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

const UnlockPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Can I unlock any PDF?",
      answer:
        "Yes, as long as you have the password (if the file requires it). We do not bypass passwords on files you don’t have access to.",
    },
    {
      question: "2. Is the process safe?",
      answer:
        "Yes, we prioritize your security. Uploaded files are processed temporarily and deleted automatically after use.",
    },
    {
      question: "3. Are there file size limits?",
      answer:
        "Our tool supports most PDF sizes, but extremely large files may take longer to process.",
    },
    {
      question: "4. Can I remove editing and printing restrictions?",
      answer:
        "Yes, the Unlock PDF tool removes both editing and printing restrictions, giving you full access to your document.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Unlock pdf files, Unlock Password Protected files online free "
          description="If you forget your pdf file password then Remove password protection to unlock your PDF files and enable unrestricted access at SaveTools.net Unlimited"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Unlock PDF
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Did you forget password of your pdf file? <br /> At SaveTools.net
              Unlock PDF Free <br /> Online Unlimited. Try it now.
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
            Unlock PDF Tool – <br /> Remove Password Restrictions on
            SaveTools.net
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Do you have a password-protected PDF that’s difficult to use? The
            <strong className="text-blue-950"> Unlock PDF</strong> tool on{" "}
            <strong className="text-blue-950"> SaveTools.net</strong> is here to
            help. With this free tool, you can easily remove restrictions from
            PDF files and access them without the hassle of entering a password
            every time.
          </p>
        </div>
      </div>

      {/* What is the Unlock PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold pb-5">
          What is the Unlock PDF Tool?
        </h3>
        <p className="text-sm sm:text-sm lg:text-base">
          Our <strong className="text-blue-950">Unlock PDF</strong> tool is
          designed to remove password protection and usage restrictions from PDF
          files. It ensures you have full access to your documents so you can
          print, copy, edit, or share them without limitations.
        </p>
      </div>

      {/* Key Features of Unlock PDF Tool */}
      <div className="max-w-3xl lg:mx-28 sm:mx-4 mx-3 p-6 pl-0">
        <h2 className="lg:text-3xl font-bold text-blue-900">
          Key Features of Unlock PDF Tool
        </h2>
        <ol className="list-decimal pl-6 mt-4 lg:text-lg sm:text-sm text-sm">
          <li className="font-bold text-blue-950">
            Fast and Easy to Use
            <p className="font-normal text-gray-700">
              Remove the password from a PDF in seconds with just a few clicks.
            </p>
          </li>
          <li className="font-bold mt-3 text-blue-950">
            Secure and Private
            <ul className="list-disc pl-6 font-normal text-gray-700">
              <li>Your files are processed securely.</li>
              <li>We do not store or share your uploaded PDFs.</li>
            </ul>
          </li>
          <li className="font-bold mt-3 text-blue-950">Free and Accessible</li>
          <p className="font-normal text-gray-700">
            No hidden fees, subscriptions, or installations required.
          </p>
          <li className="font-bold mt-3 text-blue-950">
            Retain Original Quality
          </li>
          <p className="font-normal text-gray-700">
            The PDF content, format, and quality are preserved after unlocking.
          </p>
        </ol>
      </div>

      {/*  How to Unlock a PDF on SaveTools.net */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Unlock a PDF on SaveTools.net
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700 mx-4">
            <li className="py-1 list-decimal">
              Upload the password-protected PDF file.
            </li>
            <li className="py-1 list-decimal">
              Enter the document’s password (if required).
            </li>
            <li className="py-1 list-decimal">
              Click on the{" "}
              <strong className="text-blue-950"> Unlock PDF</strong> button.
            </li>
            <li className="py-1 list-decimal">
              Download your unlocked PDF and enjoy full access!
            </li>
          </ul>
        </div>
      </div>

      {/* Why Use SaveTools.net to Unlock PDFs? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold pb-3 mx-4">
          Why Use SaveTools.net to Unlock PDFs?
        </h3>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about2}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                User-Friendly Interface
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Designed for simplicity, anyone can unlock a PDF with ease.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about3}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                No Installation Needed
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Fully online, no software downloads required.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Universal Support
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works on all devices, including desktops, smartphones, and
                tablets.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about5}
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
      </div>

      {/* Explore More */}
      <div>
        <ExploreMore />
      </div>
      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – Unlock PDF Tool
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

export default UnlockPdf;
