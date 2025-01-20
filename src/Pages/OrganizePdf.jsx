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

const OrganizePdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Can I use this tool for free?",
      answer:
        "Yes, the Organize PDF tool on savetools.net is 100% free for all users.",
    },
    {
      question: "2. Is there a limit to the number of PDFs I can merge?",
      answer:
        "You can merge up to X PDFs at a time (specify the limit). For more, you can repeat the process or use our advanced tools.",
    },
    {
      question: "3. Are my files secure when using this tool?",
      answer:
        "Absolutely! Your files are processed on secure servers and automatically deleted within a few hours after use.",
    },
    {
      question: "4. Can I preview the changes before downloading?",
      answer:
        "Yes, our live preview feature allows you to see the edits before applying changes.",
    },
    {
      question: "5. Does the tool work on mobile devices?",
      answer:
        "Yes, the Organize PDF tool is optimized for use on desktops, tablets, and smartphones.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Organize PDF Files Online | Simplify Your PDFs Today! | SaveTools"
          description="Easily organize your PDF files with SaveTools Merge, split, reorder pages, and optimize your documents online for free. Simple and secure tools!"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Organize PDF Files Online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Rearrange, delete, or add pages to your <br /> PDF files as
              needed. Start Arranging <br /> Your PDFs files now.
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
            Why Organize Your PDF Files?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            PDF files often contain pages or sections that need rearranging,
            splitting, or combining for better readability and functionality.
            The <strong className="text-blue-950">Organize PDF</strong> tool
            helps you manage your PDF documents effortlessly by letting you
            customize the structure exactly how you need it.
          </p>
        </div>
      </div>

      {/* How to Use Our Organize PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold pb-5">
          How to Use Our Organize PDF Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your PDF : </strong> Drag
              and drop your file or click the upload button.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Choose Your Action: </strong>{" "}
              <ul className="list-decimal pl-20 sm:text-sm lg:text-base text-sm">
                <li className="list-disc">
                  <strong>Rearrange Pages:</strong>Drag and drop pages into the
                  desired order.
                </li>
                <li className="list-disc">
                  <strong>Split PDF:</strong>Select specific pages to create a
                  new PDF.
                </li>
                <li className="list-disc">
                  <strong>Merge PDFs:</strong>Combine multiple PDFs into one.
                </li>
                <li className="list-disc">
                  <strong>Delete Pages:</strong>Remove unwanted pages easily.
                </li>
              </ul>
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Apply Changes: </strong> Make
              edits and download your organized PDF.
            </li>
          </ul>
        </div>
      </div>

      {/* Features of Our Protect PDF Tool */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Features of Our Protect PDF Tool
        </h3>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about3}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Rearrange Pages
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Drag pages to reorder them in seconds.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about4}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Split PDF Files
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Extract specific pages or sections into new documents.
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
                src={about2}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Merge PDFs
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Combine multiple PDF files into one seamless document.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about1}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Delete Pages
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Remove unnecessary or blank pages quickly.
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
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Preview Changes
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                See a live preview of your edits before downloading.
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
                Cross-Platform Compatibility
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works smoothly on any device – desktops, tablets, or phones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits of Using the Organize PDF Tool */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 text-3xl font-bold">
          Benefits of Using the Organize PDF Tool
        </h3>
        <div className="mt-5 ml-8">
          <ul className="text-gray-700">
            <li className="py-1 list-decimal">
              Save time by managing all your PDF files in one place.
            </li>
            <li className="py-1 list-decimal">
              Keep your documents neat, structured, and professional.
            </li>
            <li className="py-1 list-decimal">
              Simplify collaboration by merging or splitting content.
            </li>
            <li className="py-1 list-decimal">
              Easy-to-use interface for anyone, no technical skills required.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: Organize PDF Tool
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

export default OrganizePdf;
