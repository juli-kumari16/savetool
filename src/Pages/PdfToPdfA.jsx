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

const PdfToPdfA = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. What types of PDF/A formats can I convert to?",
      answer:
        "Our tool supports conversion to multiple PDF/A standards, including PDF/A-1a, PDF/A-1b, PDF/A-2a, and PDF/A-2b. Choose the one that suits your needs.",
    },
    {
      question: "2. Why should I use PDF/A?",
      answer:
        "PDF/A is ideal for long-term document storage. It ensures your files remain readable and unaltered, making it perfect for archiving, legal records, and compliance.PDF/A is ideal for long-term document storage. It ensures your files remain readable and unaltered, making it perfect for archiving, legal records, and compliance.",
    },
    {
      question: "3. Is this tool free to use?",
      answer:
        "Yes, the Convert PDF to PDF/A tool on savetools.net is completely free.",
    },
    {
      question: "4. Are my files secure?",
      answer:
        "Absolutely. Your files are processed using secure servers and deleted shortly after the conversion is complete.",
    },
    {
      question: "5. Can I convert encrypted PDFs to PDF/A?",
      answer:
        "You’ll need to unlock your encrypted PDF first using our Unlock PDF tool before converting it to PDF/A.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Convert PDF to PDF/A Online Free, Unlimited | Savetools.net"
          description="Easily convert your PDF to PDF/A format for long-term archiving. Use SaveTools.net for fast, free, and secure compliance with ISO standards!"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert PDF to PDF/A
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Convert PDF to PDF/A: <br /> Preserve Your Documents for the
              Future
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
            What is PDF/A?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            PDF/A is an ISO-standardized version of PDF designed for long-term
            preservation. It ensures that your documents remain accessible and
            unaltered over time by embedding all fonts, colors, and elements
            directly within the file. This format is widely used for archiving
            important records, legal documents, and compliance purposes.
          </p>
        </div>
      </div>

      {/* How to Use Our Convert PDF to PDF/A Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Use Our Convert PDF to PDF/A Tool?
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your PDF: </strong> Drag
              and drop your PDF file or click the upload button.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Choose PDF/A Format: </strong>{" "}
              Select the desired version (e.g., PDF/A-1a, PDF/A-2b).
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Convert : </strong>
              Click the “Convert to PDF/A” button, and the file will be
              processed.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download : </strong>
              Save your newly converted PDF/A file instantly.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose PdfToPdfA Start Here */}
      <div className="mt-20">
        <h2 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Choose PdfToPdfA?
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

      {/* Features of the Convert PDF to PDF/A Tool */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Features of the Convert PDF to PDF/A Tool
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm mx-2">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Multiple PDF/A Standards Supported:{" "}
              </strong>{" "}
              Convert to PDF/A-1a, PDF/A-1b, PDF/A-2a, and more.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">100% Compliance: </strong>{" "}
              Ensure your documents meet archival standards.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Quick and Easy : </strong>
              Convert your files in seconds with just a few clicks.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Secure and Private : </strong>
              Your files are processed safely and deleted automatically after
              conversion.
            </li>
            <li className="py-1">
              5. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                No Installation Required:{" "}
              </strong>
              Fully online and works on any device.
            </li>
          </ul>
        </div>
      </div>

      {/* Benefits of Using PDF/A */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Using PDF/A
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-5">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Long-Term Preservation:{" "}
              </strong>{" "}
              Protect your documents for decades without worrying about software
              compatibility.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Compliance: </strong> Meet legal
              and regulatory requirements for document archiving.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Integrity : </strong>
              Ensure that files retain their original layout, fonts, and
              formatting.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Accessibility : </strong>
              Makes documents easily viewable on any PDF reader that supports
              PDF/A.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: Convert PDF to PDF/A Tool
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

export default PdfToPdfA;
