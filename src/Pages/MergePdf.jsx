import React, { useState } from "react";
import Header from "../Components/Header";
import SEOComponent from "../Components/SEOComponent";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import faqsimg from "../images/faq.png";
import Footer from "../Components/Footer";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const MergePdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is the PDF splitter tool free to use?",
      answer:
        "Yes, SaveTools.net provides a completely free PDF splitter tool with no hidden costs.",
    },
    {
      question: "2. Do I need to sign up or create an account?",
      answer:
        "No, you can split PDFs online without any registration or account creation.",
    },
    {
      question: "3. Can I extract specific pages from a PDF?",
      answer:
        "Absolutely! Our tool allows you to select and extract specific pages from your PDF to create a new file.",
    },
    {
      question: "4. Is my data safe while using SaveTools.net?",
      answer:
        "Yes, your files are processed securely, and all uploaded files are automatically deleted after the task is completed.",
    },
    {
      question: "5. Are there any limits on file size or number of pages?",
      answer:
        "While there may be limits on file size for extremely large PDFs, you can always split the document in smaller parts if needed.",
    },
    {
      question: "6. What file formats are supported? ",
      answer:
        "Our tool currently supports PDF files for splitting and page extraction.",
    },
    {
      question: "7. How long does the process take?",
      answer:
        "The splitting process is usually completed within seconds, depending on the size of the file.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Merge PDF, Multiple PDF in One PDF file Online Free"
          description="Combine your Multiple PDFs in one pdf file in desired order effortlessly using our simple PDF merger tool with SaveTools.net Easily."
        />
              
      </div>
      {/* Header */}
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center w-full max-w-5xl">
          {/* Headings */}
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Merge PDF Online for Free
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Combine your multiple PDF files into one for{" "}
              <br className="hidden sm:block" />
              easy reading and viewing at SaveTools.net
            </h2>
          </div>

          {/* File Upload Section */}
          <div className="flex flex-col items-center justify-center sm:mt-6 mt-4 w-full">
            <div className="flex justify-center w-full">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select PDF files
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>

          {/* Description Text */}
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Combine your multiple PDF files into one effortlessly with
            SaveTools.net. Our user-friendly PDF merger tool is designed to help
            you merge PDFs online, ensuring simplicity, speed, and efficiency.
            Whether you need to merge multiple PDFs into a single file or
            combine images like JPG into a PDF, our tool has got you covered.
          </p>
        </div>
      </div>

      {/* How to use merge pdf tool */}
      <div className="mt-20 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-800 lg:text-3xl font-bold">
          How to Use the Merge PDF Tool
        </h3>
        <div className="mt-5">
          <ul className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <li className="lg:py-2 sm:py-1 py-0 flex items-start">
              <span className="font-bold text-blue-950 mr-2">1.</span>
              <strong className="text-blue-950">Upload Files: </strong>
              <span className="pl-1 sm:pl-2">
                Drag and drop your PDFs or JPGs, or select them from your
                device.
              </span>
            </li>

            <li className="lg:py-2 sm:py-1 py-2 flex items-start">
              <span className="font-bold text-blue-950 mr-2">2.</span>
              <strong className="text-blue-950">Arrange Files: </strong>
              <span className="pl-1 sm:pl-2">
                Reorder the files in the sequence you prefer.
              </span>
            </li>

            <li className="lg:py-2 sm:py-1 py-2 flex items-start">
              <span className="font-bold text-blue-950 mr-2">3.</span>
              <strong className="text-blue-950">Merge: </strong>
              <span className="pl-1 sm:pl-2">
                Click the 'Merge' button, and your combined file will be ready
                to download.
              </span>
            </li>

            <li className="lg:py-2 sm:py-1 py-2 flex items-start">
              <span className="font-bold text-blue-950 mr-2">4.</span>
              <strong className="text-blue-950">Download: </strong>
              <span className="pl-1 sm:pl-2">
                Save your newly merged PDF file instantly.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Why Choose SaveTools.net for PDF Merging? */}

      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Use Our Word to PDF Converter?
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
                Free to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Merge PDF online free with no hidden charges.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-36 h-auto">
              <img
                src={about2}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Simple Interface
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                A straightforward, intuitive design that makes it easy for
                anyone to use.
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
                src={about5}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                No Downloads Needed
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Perform all tasks online without the need to install software.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about4}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Secure and Private
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Your files are processed securely and deleted after merging.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features of our pdf merge tool */}
      <div className="mt-20 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-800 lg:text-3xl font-bold">
          Key Features of Our PDF Merger Tool
        </h3>
        <div className="mt-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1.&nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Merge PDF Online Free :</strong>{" "}
              Combine multiple PDFs into a single document without any cost.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Merge JPG to PDF : </strong>
              Reorder the files in the sequence you prefer.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Custom Order : </strong>Click
              the 'Merge' button, and your combined file will be ready to
              download.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Fast Processing : </strong>Save
              your newly merged PDF file instantly.
            </li>
          </ul>
        </div>
      </div>

      {/* Merge JPG to PDF Made Easy */}
      <div className="mt-20 lg:pl-28 sm:px-3 px-4 lg:px-0">
        <h3 className="font-bold text-blue-900 lg:text-3xl">
          Merge JPG to PDF Made Easy
        </h3>
        <p className="mt-5 text-gray-700 lg:text-base sm:text-sm text-sm text-justify max-w-[700px] leading-relaxed">
          SaveTools.net also lets you merge JPG to PDF effortlessly. Simply
          upload your image files, arrange them in the order you prefer, and
          merge them into a PDF document. It’s as simple as that!
        </p>
      </div>

      {/* Faq section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          Frequently Asked Questions (FAQs)
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

export default MergePdf;
