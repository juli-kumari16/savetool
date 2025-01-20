import React, { useState } from "react";
import Header from "../Components/Header";
import SEOComponent from "../Components/SEOComponent";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import about6 from "../images/perfect_for_office_ work.png";
import Footer from "../Components/Footer";
import faqsimg from "../images/faq.png";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const PptToPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is this PowerPoint to PDF converter free?",
      answer:
        "Yes, our tool is completely free for all users. Convert as many files as you want without limits.",
    },
    {
      question: "2.  Will my slide designs and formatting be preserved?",
      answer:
        "Yes! All fonts, layouts, and designs are accurately maintained in the PDF version.",
    },
    {
      question: "3. Can I use this tool on mobile devices?",
      answer:
        "Absolutely! Our converter works flawlessly on smartphones, tablets, and computers.",
    },
    {
      question: "4.    Are my files safe?",
      answer:
        "Yes, your files are secure. We delete all uploaded and converted files automatically after processing.",
    },
    {
      question: "5.  What file formats are supported?",
      answer:
        "You can upload PowerPoint files in PPT and PPTX formats. The output will always be in PDF format.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Converter PowerPoint to PDF, Make PPT to PDF free No Limit"
          description="Convert PPT and PPTX slideshows into easy-to-view PDF files. Savetools.net online free tools for PDF converter now."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert POWERPOINT to PDF Online - <br /> No Limit
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Make PPT and PPTX slideshows easy to view <br /> by converting
              them to PDF. We make it <br /> perfect save time now.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select POWERPOINT files
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            PowerPoint to PDF Converter – <br /> Free, Fast & Secure
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Looking for an easy way to convert PowerPoint presentations into
            professional-looking PDFs? Use our{" "}
            <strong className="text-blue-950">
              PowerPoint to PDF Converter
            </strong>{" "}
            to save time and ensure your slides are perfectly preserved in
            high-quality PDF format at{" "}
            <strong className="text-blue-950">savetools.net</strong>
          </p>
        </div>
      </div>
      {/*How to Convert PowerPoint to PDF for Free?  */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Convert PowerPoint to PDF for Free?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your File:</strong>{" "}
              Select your PowerPoint file (PPT or PPTX).
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Click ‘Convert’:</strong> Press
              Our tool will process your file in seconds.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download Your PDF:</strong> Save
              the PDF version of your presentation.
            </li>
          </ul>
          <div className="pt-5">
            <span className="text-lg">
              {" "}
              <strong className="text-blue-950">
                No registration, no hassle—just fast and efficient conversion!
              </strong>
            </span>
          </div>
        </div>
      </div>
      {/* Convert PowerPoint to PDF Online in Seconds! */}
      <div className="lg:mx-20 lg:ml-28 sm:mx-3 mx-4 mt-10">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Convert PowerPoint to PDF Online in Seconds!
        </h3>
        <p className="text-base text-gray-600 pt-3 text-justify max-w-[700px] leading-relaxed">
          Whether you’re a student, professional, or designer, our{" "}
          <strong className="text-blue-950">PPT to PDF converter</strong> is the
          easiest way to transform your PowerPoint files (PPT or PPTX) into PDFs
          without losing quality.
        </p>
      </div>

      {/* Top Features of Our PowerPoint to PDF Converter */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Top Features of Our PowerPoint to PDF Converter
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                High-Quality Conversion:{" "}
              </strong>{" "}
              Preserve slide layouts, text, images, and formatting.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Free and Unlimited : </strong>{" "}
              No subscription required—convert as many files as you want.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Secure and Private : </strong>
              Your files are automatically deleted after conversion.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Fast and Convenient : </strong>
              Complete the process in seconds, no matter your device.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Mobile-Friendly : </strong>
              Works seamlessly on smartphones, tablets, and desktops.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Fast and Efficient: </strong>
              Get your tasks done in seconds without compromising on quality.
            </li>
          </ul>
        </div>
      </div>
      {/* Why Choose Our PPT to PDF Converter */}

      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold mx-3">
          Why Choose Our PPT to PDF Converter?
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
                Ease of Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Beginner-friendly interface—anyone can use it!
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
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Universal Compatibility
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                PDFs can be viewed on any device without formatting issues.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 3 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about4}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Secure File Processing
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                We use encryption and delete all files after processing.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about1}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Fast and Convenient
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Complete the process in seconds, no matter your device.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 5 */}
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
                Mobile-Friendly
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works seamlessly on smartphones, tablets, and desktops.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
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

      {/* FAQs – PowerPoint to PDF Converter */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – PowerPoint to PDF Converter
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

export default PptToPdf;
