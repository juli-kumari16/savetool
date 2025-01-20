import React, { useState } from "react";
import SEOComponent from "../Components/SEOComponent";
import Header from "../Components/Header";
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

const JpgToWebp = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. What is WebP?",
      answer:
        "WebP is a modern image format developed by Google that provides superior compression for images, reducing file size without compromising quality.",
    },
    {
      question: "2. Is this tool free to use?",
      answer: "Yes, the JPG to WebP tool on savetools.net is completely free.",
    },
    {
      question: "3. Can I convert multiple JPG files at once?",
      answer:
        "Yes, the tool supports batch conversion, allowing you to upload and convert multiple images simultaneously.",
    },
    {
      question: "4. Is there a file size limit for uploads?",
      answer:
        "Yes, the maximum file size is X MB (specify the limit). Larger images can be resized before uploading.",
    },
    {
      question: "5. Does this tool work on mobile devices?",
      answer:
        "Absolutely! You can use this tool on any device with a web browser.",
    },
    {
      question: "6. Can I adjust the quality of the WebP files?",
      answer:
        "Yes, you can customize the compression level to balance file size and image quality.",
    },
    {
      question: "7. Will the converted images lose quality?",
      answer:
        "No, the tool ensures high-quality output while minimizing file size. You can also adjust settings to prioritize quality.",
    },
    {
      question: "8. Are my files secure?",
      answer:
        "Yes, your files are processed on secure servers and automatically deleted after the conversion.",
    },
    {
      question: "9. Why should I convert JPG to WebP?",
      answer:
        "WebP offers smaller file sizes compared to JPG while maintaining quality, making it an ideal format for websites and online use.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Convert JPG to WebP Free Online at Savetools.net"
          description="convert JPG images to WebP format effortlessly. Optimize your website’s performance with this step-by-step guide to faster-loading, high-quality visuals."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert JPG to WebP Free
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              JPG to WebP: <br /> Convert Images to a High-Quality Format
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select JPG images
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
            What is the JPG to WebP Tool?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            The <strong className="text-blue-950">JPG to WebP</strong> tool lets
            you convert your JPG images into the WebP format, a modern image
            format designed for faster loading and better compression. WebP
            files maintain high quality while significantly reducing file size,
            making them ideal for websites and online sharing.
          </p>
        </div>
      </div>

      {/* How to Use the OCR PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Use the JPG to WebP Tool?
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your JPG Files: </strong>{" "}
              Drag and drop your images or click the upload button to select
              files from your device.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Adjust Quality Settings (Optional):{" "}
              </strong>{" "}
              Choose your desired compression level for optimal file size and
              quality.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Convert to WebP : </strong>
              Click the "Convert" button to start the process.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download : </strong>
              4.Save the converted WebP files to your device.
            </li>
          </ul>
        </div>
      </div>

      {/* Features of the JPG to WebP Tool */}
      <div className="mt-20">
        <h2 className="text-red-600 text-center lg:text-3xl font-bold">
          Features of the JPG to WebP Tool
        </h2>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about5}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                High-Quality Conversion
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Retains image clarity and detail while reducing file size.
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
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Batch Conversion
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Upload and convert multiple JPG files simultaneously.
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
                src={about3}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Custom Compression Options
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Control the balance between image quality and file size.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about6}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Fast and Efficient
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Complete the conversion process in seconds.
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
                src={about1}
                alt="Fast and Efficient"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Cross-Device Compatibility
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Works seamlessly on desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about4}
                alt="Perfect for Office / Personal Work"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Secure Processing:
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Files are encrypted during upload and deleted after conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Benefits of Converting JPG to WebP */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Converting JPG to WebP
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-8">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong>Faster Loading Times : </strong>
              Smaller file sizes mean quicker loading on websites and apps.
            </li>
            <li className="py-1 list-disc">
              <strong>Reduced Bandwidth Usage : </strong>
              Save storage and data by optimizing images.
            </li>
            <li className="py-1 list-disc">
              <strong>Enhanced User Experience : </strong>
              Modern WebP format is supported by most browsers, ensuring better
              performance.
            </li>
            <li className="py-1 list-disc">
              <strong>SEO-Friendly : </strong>
              Improve page speed, which is a critical factor for search engine
              rankings.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: JPG to WebP Tool
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

export default JpgToWebp;
