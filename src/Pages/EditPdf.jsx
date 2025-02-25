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

const EditPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1.  Is this PDF editor free to use?",
      answer: "Yes, our Edit PDF tool is 100% free with no hidden charges.",
    },
    {
      question: "2. What types of edits can I make to a PDF?",
      answer:
        "You can edit text, insert images, annotate, highlight, and rearrange or delete pages.",
    },
    {
      question: "3. Will the original formatting of my PDF be preserved?",
      answer:
        "Yes, our tool ensures that your document's formatting remains intact while you make edits.",
    },
    {
      question: "4. Is my file safe during the editing process?",
      answer:
        "Absolutely! Your files are encrypted, and we automatically delete them from our servers after processing.",
    },
    {
      question: "5.  Can I edit scanned PDFs?",
      answer:
        "Yes, you can! Our tool includes OCR (Optical Character Recognition) technology to make scanned PDFs editable.",
    },
    {
      question: "6. Are there any file size limits?",
      answer:
        "You can upload files up to 20MB. For larger files, consider splitting the PDF before uploading.",
    },
    {
      question: "7. Can I use this tool on my mobile device?",
      answer:
        "Yes, our Edit PDF tool is mobile-friendly and works seamlessly on smartphones, tablets, and computers.",
    },
    {
      question: "8. Do I need to download or install any software?",
      answer:
        "No downloads or installations are required. Everything is done online in your browser.",
    },
    {
      question: "9.  Can I undo changes while editing?",
      answer:
        "Yes, the editor allows you to undo or redo changes at any time during the editing process.",
    },
    {
      question: "10. Can I edit password-protected PDFs?",
      answer:
        "You’ll need to remove the password protection from your PDF before uploading it to our tool.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Edit PDF, PDF Editor Online Free at Savetools.net"
          description="Add text, images, shapes, or annotations to your PDFs. Customize font, size, and color as needed in your pdf . Try it now."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              PDF Editor Online Free
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Want to hide text or add text shape in your PDF file, at <br />
              savetools.net make it perfectly online free, try it now.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select PDf files
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            Edit PDF Online – Fast, Free & Easy
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Modify your PDF files in just a few clicks! Whether you need to
            update text, add images, or annotate your document, our{" "}
            <strong className="text-blue-950">Edit PDF</strong>
            tool provides a quick and easy solution. No downloads or
            installations required—edit directly in your browser.
          </p>
        </div>
      </div>

      {/* How to Edit PDF Online? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Edit PDF Online?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your File:</strong> Drag
              and drop your PDF into the editor.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950"> Edit the Content:</strong>
              Use our easy editing tools to make changes.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Save and Download:</strong> Save
              Once done, save your changes and download the updated file.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Use Our Edit PDF Tool? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Use Our Edit PDF Tool?
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
                Easy to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                A user-friendly interface lets you edit PDFs effortlessly.
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
                Free and Accessible
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Edit your PDFs online without any subscriptions or hidden fees.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 3 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
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
                We value your privacy—all files are encrypted and deleted after
                processing.
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
                Multi-Platform Support
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works on desktops, tablets, and smartphones.
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
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
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

      {/* What Can You Do with Our Edit PDF Tool?*/}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          What Can You Do with Our Edit PDF Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              Add, edit, or delete{" "}
              <strong className="text-blue-950">text</strong> in your PDF.
            </li>
            <li className="py-1 list-disc">
              Insert{" "}
              <strong className="text-blue-950">
                images, logos, or graphics
              </strong>{" "}
              into your document.
            </li>
            <li className="py-1 list-disc">
              Highlight, underline, or strike through{" "}
              <strong className="text-blue-950">important sections.</strong>
            </li>
            <li className="py-1 list-disc">
              Add <strong className="text-blue-950">annotations</strong> such as
              comments, shapes, or freehand drawings.
            </li>
            <li className="py-1 list-disc">
              Rotate, reorder, or delete{" "}
              <strong className="text-blue-950">PDF pages.</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Who Can Benefit from This Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Why Edit PDFs Online?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Save Time : </strong> Edit
              documents instantly without installing software.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Versatility : </strong> Lock
              Make changes to text, images, and layout all in one tool.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Universal Access : </strong>
              Edit PDFs from anywhere, on any device.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – Edit PDF Tool
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

export default EditPdf;
