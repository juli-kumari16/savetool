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

const PdfToJpg = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is this PDF to JPG converter free?",
      answer:
        "Yes, our tool is completely free to use without any restrictions.",
    },
    {
      question: "2. Can I convert an entire PDF into JPG images?",
      answer:
        "Absolutely! You can convert all pages of a PDF into separate JPG files.",
    },
    {
      question: "3.  Is there a file size limit for PDFs?",
      answer:
        "You can upload files up to 20MB. For larger files, consider splitting the PDF into smaller sections.",
    },
    {
      question: "4. Are my files secure?",
      answer:
        "Yes, all files are encrypted during the process and automatically deleted from our servers after conversion.",
    },
    {
      question: "5. Can I use this tool on my phone?",
      answer:
        "Yes, our converter is mobile-friendly and works seamlessly on all devices with a browser.",
    },
    {
      question: "6.What is the quality of the converted JPG images?",
      answer:
        "The tool delivers high-resolution JPG images, preserving the original quality of your PDF.",
    },
    {
      question: "7. Can I select specific pages to convert?",
      answer:
        "Yes, you can choose to convert individual pages or the entire document.",
    },
    {
      question: "8. Do I need to install any software?",
      answer:
        "No installations or downloads are required. You can use the tool directly in your browser.",
    },
    {
      question: "9. Can I convert password-protected PDFs?",
      answer:
        "You’ll need to remove the password protection from your PDF before uploading it to the tool.",
    },
    {
      question: "10. Will my converted JPGs be compressed?",
      answer: "No, the images are high-quality and optimized for clarity.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Convert PDF to JPG, PDF to JPG Online Free High Resolution"
          description="Convert PDF pages into JPG images or extract embedded images from PDFs with high resolution, no Watermark, Unlimited conversions at SaveTools.net"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert PDF to JPG Online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              I want to convert a PDF to JPG for easy editing <br /> and sharing
              on other platforms. At savetools <br /> .net, you can do it in
              just a few seconds.
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
            Convert PDF to JPG Online – <br /> Fast, Free, and Reliable
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Easily convert your PDF documents into high-quality JPG images with
            our online tool. Whether you’re extracting a single page or
            converting an entire document, our{" "}
            <strong className="text-blue-950">PDF to JPG converter</strong>{" "}
            ensures your images retain their original clarity and formatting.
          </p>
        </div>
      </div>

      {/* How to Edit PDF Online? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Convert PDF to JPG Online?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your File:</strong> Drag
              and drop your file or select it from your device.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950"> Choose Pages:</strong>
              Select specific pages or convert the entire PDF.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Download the JPG Images:
              </strong>{" "}
              Get high-resolution JPG files instantly.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Use Our PDF to JPG Converter? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Use Our PDF to JPG Converter?
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
                High-Quality Images
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Preserve the resolution and detail of your PDF in JPG format.
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
                Free and Easy to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Enjoy unlimited conversions without any cost or hidden fees.
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
                All uploaded files are encrypted and automatically deleted after
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
                Accessible Anywhere
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Use the tool on desktops, tablets, and mobile devices.
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

      {/* Who Can Benefit from This Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Who Benefits from a PDF to JPG Converter?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Graphic Designers: </strong>{" "}
              Extract images from PDFs for creative projects.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Students and Educators :{" "}
              </strong>{" "}
              Convert study materials into easy-to-view JPGs.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Business Professionals :{" "}
              </strong>
              Share visual content from PDFs without requiring a PDF reader.
            </li>
          </ul>
        </div>
      </div>

      {/* Who Can Benefit from This Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Converting PDF to JPG
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Ease of Viewing: </strong> JPGs
              can be opened on any device without special software.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Portability : </strong> Share
              images easily on social media, email, or messaging platforms.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Creative Freedom : </strong>
              Edit JPG images using any photo editing software.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – PDF to JPG Converter
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

export default PdfToJpg;
