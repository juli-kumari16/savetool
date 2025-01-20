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

const ExcelToPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1.  Is this Excel to PDF converter free?",
      answer:
        "Yes, it’s completely free to use. There are no limits or hidden fees.",
    },
    {
      question: "2. What file formats are supported?",
      answer:
        "You can upload Excel files in XLS or XLSX formats. The output will always be in PDF format.",
    },
    {
      question: "3. Will my table layout and charts be preserved?",
      answer:
        "Yes, our tool ensures that all tables, charts, graphs, and formatting are accurately preserved in the PDF.",
    },
    {
      question: "4.  Is my data safe?",
      answer:
        "Yes, your files are secure. All uploaded files are deleted automatically from our servers after processing.",
    },
    {
      question: "5. Can I use this tool on my phone?",
      answer:
        "Absolutely! Our Excel to PDF converter is mobile-friendly and works on all devices with a browser.",
    },
    {
      question: "6.  Are there any file size limitations? ",
      answer:
        "You can upload files up to 20MB. For larger files, consider splitting your Excel sheets into smaller sections before converting.",
    },
    {
      question: "7. Can I convert multiple Excel files at once?",
      answer:
        "Yes! Our tool supports batch conversions, saving you time by processing multiple files simultaneously.",
    },
    {
      question: "8. Do I need to install software or create an account?",
      answer:
        "No, our tool is entirely online. No installations or registrations are required.",
    },
    {
      question: "9. What happens to formulas in my Excel sheet?",
      answer:
        "While formulas won’t be functional in the PDF, the calculated values will be displayed. PDFs are static documents.",
    },
    {
      question: "10. Can I convert password-protected Excel files?",
      answer:
        "Unfortunately, password-protected files cannot be processed. Please remove the password protection before uploading.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Convert Excel to PDF File, Extract Exactly Excel to PDF"
          description="Convert Excel Spread sheets to PDF files online for free. Create uneditable files that can be easily shared with anyone with Savetools.net"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert EXCEL to PDF File online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Looking to convert an Excel file to a PDF to create <br /> an
              uneditable document? Savetools.net can perform the <br />{" "}
              conversion in just a few seconds with excellent quality.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select EXCEL files
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            Excel to PDF Converter – Free, Fast & Reliable
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Need to convert your Excel Spread sheets into professional PDF
            documents? Our{" "}
            <strong className="text-blue-950">Excel to PDF Converter</strong>{" "}
            makes it quick and simple! Preserve the layout, data, and formatting
            of your Excel sheets while creating a PDF perfect for sharing,
            printing, or archiving.
          </p>
        </div>
      </div>

      {/* How to Convert Excel to PDF Online? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Convert Excel to PDF Online?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your File:</strong> Drag
              and drop your Excel file (XLS or XLSX).
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950"> Click ‘Convert’:</strong>
              Let our tool work its magic in seconds.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download Your PDF:</strong> Save
              your perfectly formatted PDF and share it immediately.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Use Our Excel to PDF Converter? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold mx-6">
          Why Use Our Excel to PDF Converter?
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
                Accurate Formatting
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Retain all tables, charts, and data formatting exactly as in the
                Excel file.
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
                Secure File Processing
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Your files are encrypted and deleted automatically after
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
                Multi-Device Compatibility
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works seamlessly on mobile devices, tablets, and desktops.
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

      {/* Who Can Benefit from This Tool? */}
      <div className="lg:mx-20 lg:ml-28 sm:mx-3 mx-4 mt-10">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Who Can Benefit from This Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Business Professionals:{" "}
              </strong>{" "}
              Convert financial reports, invoices, or data sheets into
              uneditable PDFs for secure sharing.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Students : </strong> Save
              academic data in a shareable and printable format.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Data Analysts : </strong>
              Share clean, readable data with clients or colleagues.
            </li>
          </ul>
        </div>
      </div>

      {/*  Benefits of Converting Excel to PDF */}
      <div className="lg:mx-20 lg:ml-28 sm:mx-3 mx-4 mt-10">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Converting Excel to PDF
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Professional Presentation :{" "}
              </strong>{" "}
              PDFs offer a clean, professional format that’s easy to share and
              print.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Uneditable Format : </strong>{" "}
              Lock your data to prevent unauthorized changes or edits.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Universal Compatibility :{" "}
              </strong>
              PDFs are easily viewable on any device or operating system.
            </li>
          </ul>
        </div>
      </div>
      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – Excel to PDF Converter
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

export default ExcelToPdf;
