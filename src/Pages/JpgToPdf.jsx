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

const JpgToPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is this JPG to PDF converter free?",
      answer:
        "Yes, our tool is completely free to use with no hidden fees or limits.",
    },
    {
      question: "2. Can I combine multiple JPGs into one PDF?",
      answer:
        "Yes, you can upload multiple images and merge them into a single PDF file.",
    },
    {
      question: "3. Is there a limit on the number of images I can upload?",
      answer:
        "You can upload up to 20 images at a time. If you have more, you can repeat the process.",
    },
    {
      question: "4. Are my files safe?",
      answer:
        "Absolutely! All files are encrypted, and we delete them automatically after the conversion process.",
    },
    {
      question: "5. Can I use this tool on my mobile device?",
      answer:
        "Yes, our JPG to PDF converter works perfectly on smartphones, tablets, and computers.",
    },
    {
      question: "6. What image formats are supported?",
      answer:
        "In addition to JPG, you can also upload PNG, BMP, and TIFF images for conversion.",
    },
    {
      question: "7. Can I rearrange the order of my images?",
      answer:
        "Yes, our tool allows you to rearrange the order of your images before creating the PDF.",
    },
    {
      question: "8. Do I need to install software or create an account?",
      answer:
        "No, everything is done online. No downloads or registrations are required.",
    },
    {
      question: "9. Will the quality of my images be preserved?",
      answer:
        "Yes, your images will be converted to PDF without losing any quality.",
    },
    {
      question: "10. Can I convert password-protected images?",
      answer:
        "You’ll need to unlock any password-protected files before uploading them.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Convert JPG to PDF, PNG JPG images to PDF Online Free "
          description="Convert JPG images to PDFs file with adjustable orientation and margins with Savetools.net Free online Software for all."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert JPG to PDF
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Convert multiple JPG/PNG images to a PDF <br /> file with the best
              quality for easy storage <br /> and sharing. Savetools.net is an
              online <br />
              free software tool.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-3xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select JPG images
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            JPG to PDF Converter – <br /> Free, Fast, and Secure
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Turn your images into polished, shareable PDF documents in seconds!
            Our{" "}
            <strong className="text-blue-950"> JPG to PDF Converter </strong>{" "}
            allows you to merge multiple images or convert single JPG files into
            high-quality PDFs with ease. Perfect for presentations, portfolios,
            and more!
          </p>
        </div>
      </div>

      {/* How to Convert JPG to PDF Online? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Convert JPG to PDF Online?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your JPG Images:</strong>{" "}
              Drag and drop your images or upload them from your device.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950"> Rearrange (Optional):</strong>
              Arrange your images in the desired order for the PDF.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download Your PDF:</strong> 2.
              Download Your PDF:
            </li>
          </ul>
        </div>
      </div>

      {/* Why Use Our JPG to PDF Converter? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Use Our JPG to PDF Converter?
        </h3>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about3}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                High-Quality Output
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Preserve the resolution and clarity of your images.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about2}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Free to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Enjoy unlimited conversions without any charges.
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
                Secure
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Your files are encrypted and deleted immediately after
                conversion.
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
                Multi-Device Compatible
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works seamlessly on desktops, tablets, and smartphones
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
                Fast and Efficient
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Get your tasks done in seconds without compromising on quality.
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

      {/* Who Can Use This Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Who Can Use This Tool?
        </h3>
        <div className="mt-5 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
          <ul className="text-gray-700 sm:text-xs lg:text-base text-sm">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Photographers: </strong> Share
              image portfolios as professional PDFs.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Students and Teachers :{" "}
              </strong>{" "}
              Convert assignment images into PDF documents.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Business Professionals :{" "}
              </strong>
              Combine receipts or documents into a single PDF for easy sharing.
            </li>
          </ul>
        </div>
      </div>

      {/*  Benefits of Converting JPG to PDF */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Converting JPG to PDF
        </h3>
        <div className="sm:text-xs lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Professional Presentation :{" "}
              </strong>{" "}
              PDFs are ideal for showcasing images in a structured format.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Universal Compatibility :{" "}
              </strong>{" "}
              PDFs can be opened on any device or operating system.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Compact and Organized :{" "}
              </strong>
              Combine multiple images into a single, easy-to-share PDF.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – JPG to PDF Converter
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

export default JpgToPdf;
