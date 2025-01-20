import React, { useState } from "react";
import Header from "../Components/Header";
import SEOComponent from "../Components/SEOComponent";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import faqsimg from "../images/faq.png";
import about6 from "../images/perfect_for_office_ work.png";
import Footer from "../Components/Footer";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const PdfToExcel = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1.   Is this PDF to Excel converter free to use?",
      answer:
        "Yes, our PDF to Excel tool is completely free for all users. You can convert unlimited files without any hidden costs.",
    },
    {
      question: "2.  Will the formatting of my data be preserved?",
      answer:
        "Absolutely! Our tool is designed to maintain the original table structure, including rows, columns, and formatting, for seamless conversion.",
    },
    {
      question: "3. Can I convert scanned PDFs to Excel?",
      answer:
        "Yes, if your PDF is scanned, our tool uses advanced OCR (Optical Character Recognition) technology to extract data accurately into Excel.",
    },
    {
      question: "4.   Is my data secure?",
      answer:
        "Your privacy is our priority. All files are processed securely and deleted automatically from our servers after conversion.",
    },
    {
      question: "5. What file formats are supported?",
      answer:
        "You can upload PDF files, and the output will be in Excel formats like XLS or XLSX, compatible with most spread sheet programs.",
    },
    {
      question: "5. Are there any file size limits?",
      answer:
        "Currently, our tool supports files up to [set a file size limit, e.g., 10MB or 20MB]. For larger files, consider splitting the PDF before uploading.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="PDF to Excel converter, Free PDF to MS Excel converter online"
          description="Extract data from PDFs directly into MS Excel Spreadsheets accurate data in simple formats, Savetools one of the best tool for PDF to Excel converter online free."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert PDF to EXCEL Online unlimited
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Convert PDF data to excel Spread <br /> sheets in few minutes
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select PDF files
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            Convert PDF to Excel Online – <br /> Free and Easy!
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Convert PDF to Excel file into fully a completely editable Excel
            spread sheets with our powerful PDF to Excel converter. No more
            copying and pasting get clean and accurate data extraction in few
            seconds!
          </p>
        </div>
      </div>
      {/* Why Use Our PDF to Excel Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Converter PDF to Excel / spread sheets works?
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp; Upload your PDF file by clicking the{" "}
              <strong>"Choose File"</strong> button.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp; Press{" "}
              <strong className="text-blue-950">'Convert'</strong>and wait for
              the data extraction to be complete.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;Now Download your Excel file instantly.
            </li>
          </ul>
        </div>
      </div>
      {/* Why Choose SaveTools.net PDF to PowerPoint Converter? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold mx-2">
          Why Use Our PDF to Excel Tool?
        </h3>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about3}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Fast and Accurate Conversion
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Preserve table formatting, rows, and columns without losing any
                data integrity.
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
                Free and Online
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No need to install software-convert directly from your browser.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 3 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-36 h-auto">
              <img
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Secure
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Your files are safe with us. We delete uploaded files
                automatically after processing.
              </p>
            </div>
          </div>

          {/* Card 4 */}
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
                Supports Multiple Formats
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works seamlessly with XLS and XLSX formats.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 5 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about5}
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
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about4}
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
      {/* Who Needs This Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Who Needs This Tool?
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Professionals: </strong> Extract
              data from reports, invoices, or financial documents.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Students : </strong> Organize
              academic data into Excel sheets.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Researchers : </strong>
              Quickly analyze datasets from PDFs.
            </li>
          </ul>
        </div>
      </div>
      {/* Who Needs This Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">Key Features</h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Batch Conversion: </strong>{" "}
              Upload and convert multiple files at once.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">High Accuracy : </strong>{" "}
              Extract tables with precision, even from scanned PDFs.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Mobile-Friendly : </strong>
              Convert on the go from any device.
            </li>
          </ul>
        </div>
      </div>
      <p className="pt-5 lg:ml-24 sm:mx-3 lg:mx-0 mx-4 text-sm lg:text-base sm:text-sm">
        Make data management simple and save time. Try our{" "}
        <strong className="text-blue-950">
          PDF to Excel converter tool now!
        </strong>
      </p>

      {/* FAQ Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – PDF to Excel Converter
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

export default PdfToExcel;
