import React, { useState } from "react";
import Header from "../Components/Header";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import about6 from "../images/perfect_for_office_ work.png";
import faqsimg from "../images/faq.png";
import Footer from "../Components/Footer";
import SEOComponent from "../Components/SEOComponent";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const RotatePdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is this Rotate PDF tool free?",
      answer: "Yes, our tool is 100% free to use without any hidden fees.",
    },
    {
      question: "2. Can I rotate only specific pages in a PDF?",
      answer:
        "Absolutely! You can select specific pages to rotate or apply the rotation to all pages.",
    },
    {
      question: "3. Are my files secure?",
      answer:
        "Yes, all files are encrypted during upload and deleted automatically after processing.",
    },
    {
      question: "4. Can I use this tool on my mobile phone?",
      answer:
        "Yes, the tool is mobile-friendly and works seamlessly on smartphones and tablets.",
    },
    {
      question: "5. Do I need to install any software?",
      answer:
        "No, the entire process is online—no downloads or installations required.",
    },
    {
      question: "6. Can I rotate by custom angles?",
      answer:
        "Currently, the tool supports standard angles (90°, 180°, and 270°). Custom angles are not supported.",
    },
    {
      question: "7. Is there a limit to the file size I can upload?",
      answer: "No, you can upload PDF files of any size without restrictions.",
    },
    {
      question: "8. Does rotating a PDF affect its quality?",
      answer: "No, the quality of your PDF remains unchanged after rotation.",
    },
    {
      question: "9. Can I preview the rotated PDF before downloading?",
      answer:
        "Yes, the tool provides a preview option to ensure everything looks correct before saving.",
    },
    {
      question: "10. Will the original file remain intact?",
      answer:
        "Yes, the original PDF is not altered, and you can download a new file with the rotated pages.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Rotate PDF Pages – Adjust Orientation & Batch Process PDFs "
          description="Easily rotate PDF pages to your desired orientation. Process multiple PDFs at once for quick and efficient adjustments. SaveTools.net"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Rotate PDF
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Rotate your PDF Online Choose from 90°, 180°, <br /> or 270°
              rotation according to needs. Get <br /> excellent results.
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
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            Rotate PDF Online – <br /> Fast, Free & Easy
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Need to fix the orientation of your PDF pages? Our Rotate PDF Tool
            lets you rotate individual pages or the entire document
            effortlessly. Whether you want to adjust landscape to portrait or
            vice versa, our tool provides a quick and secure solution—all
            online, no installations required!
          </p>
        </div>
      </div>

      {/* How to Rotate PDF Pages Online? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Rotate PDF Pages Online?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your PDF:</strong> Drag
              and drop your PDF file into the tool.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Select Pages to Rotate:</strong>
              Choose specific pages or apply rotation to the entire document.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Choose Rotation Angle:</strong>{" "}
              Rotate pages by 90°, 180°, or 270°.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download Your PDF:</strong> Save
              your updated PDF with the corrected orientation.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Our Sign PDF Online Tool? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Use Our Rotate PDF Tool?
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
                Free and Easy to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Rotate PDFs without any cost or registration.
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
                Custom Page Selection
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Rotate specific pages or all pages in the document.
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
                Your files are encrypted and deleted automatically after use.
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
                Works on All Devices
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Rotate PDFs on desktops, tablets, and mobile devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Key Features of Our eSign Tool */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Key Features of the Rotate PDF Tool
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Rotate Single or Multiple Pages:{" "}
              </strong>{" "}
              Select specific pages or rotate the entire PDF.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Multiple Angles : </strong>{" "}
              Choose from 90°, 180°, or 270° rotation.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> No File Size Limit : </strong>
              Upload and rotate PDFs of any size.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                User-Friendly Interface:{" "}
              </strong>
              Intuitive design for easy navigation and fast results.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Fast and Efficient: </strong>
              Get your tasks done in seconds without compromising on quality.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">No Downloads Needed: </strong>
              Everything is online, so there’s no need to install bulky
              software
            </li>
          </ul>
        </div>
      </div>

      {/* Who Can Use This Tool?*/}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Who Can Use This Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Students and Teachers: </strong>{" "}
              Adjust orientations for better readability in academic documents.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Business Professionals :{" "}
              </strong>{" "}
              Correct orientations for invoices, contracts, or presentations.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Anyone with PDFs : </strong>
              Easily fix scanned PDFs or misaligned pages.
            </li>
          </ul>
        </div>
      </div>

      {/* Benefits of Signing PDFs Online*/}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Rotating PDF Pages Online
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Better Readability: </strong>{" "}
              Fix upside-down or misaligned pages for easy reading.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Professional Look : </strong>
              Ensure documents have the correct orientation before sharing.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> No Paper Waste : </strong>
              Adjust page orientation digitally without reprinting.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – Rotate PDF Tool
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

export default RotatePdf;
