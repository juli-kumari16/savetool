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

const ComparePdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Can I use this tool for free?",
      answer:
        "Yes, the Compare PDF tool on savetools.net is completely free to use.",
    },
    {
      question: "2. What types of changes can this tool detect?",
      answer:
        "The tool detects text changes (additions, deletions, or modifications), formatting differences, and layout changes.",
    },
    {
      question: "3. Is there a file size limit for comparing PDFs?",
      answer:
        "Yes, the maximum file size is X MB (specify the limit). Larger files may need to be split or compressed first.",
    },
    {
      question: "4. Can I compare more than two PDFs at once?",
      answer:
        "No, this tool currently supports comparison between two PDF files at a time.",
    },
    {
      question:
        "5. Does the tool preserve the formatting of the original PDFs?",
      answer:
        "Yes, the tool preserves the original formatting and highlights differences without altering your original documents.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Compare PDF Files Online Free - Find Differences Fast | SaveTools.net"
          description="Quickly compare two PDF files with SaveTools.net. Highlight differences in text, images, and formatting. Fast, free, and easy-to-use comparison tool!"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Compare PDF Files Online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Compare PDF: Spot the Differences Instantly
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
            What is the Compare PDF Tool?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            The Compare PDF tool allows you to quickly and accurately identify
            differences between two PDF documents. Whether you're reviewing
            contracts, proofreading reports, or tracking changes, this tool
            helps you find edits, additions, or deletions in seconds.
          </p>
        </div>
      </div>

      {/* How to Use the Compare PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Use the Compare PDF Tool?
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your File : </strong>{" "}
              Drag and drop both PDF files or use the upload buttons to select
              the files you want to compare.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Start Comparison : </strong>{" "}
              Click the "Compare PDF" button, and the tool will analyze the
              documents.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Review Results : </strong>
              View highlighted changes, such as added, removed, or modified text
              and elements.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Download Comparison Report :{" "}
              </strong>
              Save the results as a new PDF with marked differences.
            </li>
          </ul>
        </div>
      </div>

      {/* Features of the Compare PDF Tool */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Features of the Compare PDF Tool
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Accurate Comparison : </strong>{" "}
              Detects even the smallest changes in text, formatting, or layout.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Side-by-Side View : </strong>{" "}
              See both PDFs side by side for a clearer review.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Highlight Changes : </strong>
              Automatically marks differences for easy identification.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Multi-Device Compatibility :{" "}
              </strong>
              Use the tool on desktop, tablet, or mobile.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Secure Processing : </strong>
              Your files are encrypted and automatically deleted after the
              comparison.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Fast and Efficient : </strong>
              Get your tasks done in seconds without compromising on quality.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">No Downloads Needed : </strong>
              Everything is online, so there’s no need to install bulky software
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Save Tool Start Here */}
      <div className="mt-20">
        <h2 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Choose SaveTools.net?
        </h2>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto">
              <img
                src={about1}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Comprehensive Tools
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                All the PDF and file conversion tools you need in one
                place—merge, split, compress, convert, edit, and more.
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
                User-Friendly
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Simple, intuitive interface designed for effortless use by
                anyone, anytime.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about3}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Completely Free
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                No hidden fees, subscriptions, or limitations. All tools are
                100% free to use.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto">
              <img
                src={about4}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Secure and Reliable
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Secure and Reliable: Your files are handled with the utmost
                care—no malware, pop-ups, or data leaks.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about5}
                alt="Fast and Efficient"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Fast and Efficient
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Get your tasks done in seconds without compromising on quality.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-52 h-auto">
              <img
                src={about6}
                alt="Perfect for Office / Personal Work"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Perfect for Office / Personal Work
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Simplify your workflow by converting Word to PDF, PDF to Word,
                editing PDFs, unlocking PDFs, and more—all tailored to your
                office needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits of Comparing PDFs */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Comparing PDFs
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-8">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              Save time by automating the review process.
            </li>
            <li className="py-1 list-disc">
              Eliminate manual errors when tracking changes.
            </li>
            <li className="py-1 list-disc">
              Ensure accuracy in legal, business, or academic documents.
            </li>
            <li className="py-1 list-disc">
              Simplify collaboration by generating clear comparison reports.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: Compare PDF Tool
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

export default ComparePdf;
