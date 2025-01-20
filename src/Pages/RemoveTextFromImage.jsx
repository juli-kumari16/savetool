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

const RemoveTextFromImage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is the text removal tool on Savetools.net free to use?",
      answer:
        "Yes, the text removal tool is completely free. You don’t need to sign up or pay to remove text from images.",
    },
    {
      question: "2. What image formats are supported?",
      answer:
        "Savetools.net supports popular image formats like JPG, PNG, BMP, and more.",
    },
    {
      question: "3. Will removing text from an image affect the quality?",
      answer:
        "No, the tool uses advanced AI to maintain image quality while seamlessly removing the text.",
    },
    {
      question: "4. Can I remove watermarks with this tool?",
      answer:
        "Yes, you can use the tool to remove watermarks. However, ensure that your usage complies with copyright laws.",
    },
    {
      question: "5. How does the text removal process work?",
      answer:
        "The tool uses an AI-based algorithm to analyze the surrounding area and fill in the removed text with matching background textures for a smooth and natural look.",
    },
    {
      question: "6. Is my uploaded image safe?",
      answer:
        "Absolutely. Privacy and security are top priorities. All uploaded images are automatically deleted from our servers after processing.",
    },
    {
      question: "7. Can I use this tool on mobile devices?",
      answer:
        "Yes, Savetools.net is mobile-friendly. You can remove text from images using your smartphone, tablet, or desktop.",
    },
    {
      question: "8. What if the text removal isn’t perfect?",
      answer:
        "For best results, carefully select only the text area. If needed, you can repeat the process or use manual adjustments for finer control.",
    },
    {
      question: "9. Is there a file size limit for uploading images?",
      answer:
        "Savetools.net allows uploading most standard file sizes, but if your image is too large, try resizing it before using the tool.",
    },
    {
      question: "10. Do I need to install any software or plugins?",
      answer:
        "No installation is required. All tools on Savetools.net are web-based, so you can edit your images directly in your browser.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Remove Text from an Image online free | Unlimited |Savetools.net"
          description="Easily remove unwanted text from your images / Photos with Savetools.net's free online tool. No software needed, just upload and erase text in seconds."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Remove Text from Image online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Use our free online tool to easily remove <br /> text from photos
              in just a few clicks.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select Images
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            How to Remove Text from an Image Online for Free
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Removing text from an image can be essential when you want to clear
            unwanted elements like watermarks, captions, or text overlays. With{" "}
            <strong className="text-blue-950">Savetools.net</strong>, you can do
            this easily without advanced technical skills. Here’s a step-by-step
            guide to help you:
          </p>
        </div>
      </div>

      {/* Steps to Remove Text from an Image on Savetools.net */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold pb-5">
          Steps to Remove Text from an Image on Savetools.net
        </h3>
        <div className="sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">1.Upload Your Image : </strong>{" "}
              <ul className="list-decimal lg:pl-20 sm:pl-10 pl-16 lg:text-lg">
                <li className="list-disc">Click the “Upload Image” button.</li>
                <li className="list-disc">
                  Choose the image file from your device that contains the text
                  you want to remove.
                </li>
              </ul>
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Customize Page Numbers:{" "}
              </strong>{" "}
              <ul className="list-decimal lg:pl-20 sm:pl-10 pl-16 lg:text-lg">
                <li className="list-disc">
                  Use the selection tool to highlight the text portion you want
                  to remove.
                </li>
                <li className="list-disc">
                  Adjust the size and shape of the selection for precise
                  editing.
                </li>
              </ul>
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Apply Text Removal : </strong>{" "}
              <ul className="list-decimal lg:pl-20 sm:pl-10 pl-16 lg:text-lg">
                <li className="list-disc">Click the “Remove Text” button.</li>
                <li className="list-disc">
                  Savetools.net uses intelligent AI technology to fill in the
                  selected area seamlessly, matching the surrounding background.
                </li>
              </ul>
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Preview and Adjust : </strong>
              <ul className="list-decimal lg:pl-20 sm:pl-10 pl-16 lg:text-lg">
                <li className="list-disc">Review the edited image.</li>
                <li className="list-disc">
                  If necessary, fine-tune the removal by repeating the process
                  on any leftover fragments.
                </li>
              </ul>
            </li>
            <li className="py-1">
              5. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download Your Image : </strong>{" "}
              Save your
              <ul className="list-decimal lg:pl-20 sm:pl-10 pl-16 lg:text-lg">
                <li className="list-disc">
                  Once satisfied, click the “Download” button to save the edited
                  image to your device.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Savetools.net? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl sm:text-xl text-xl font-bold">
          Why Choose Savetools.net?
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
                Free and Fast
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No need for costly software. Edit images in seconds.
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
                AI-Powered Text Removal
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Automatically fills in the background for a smooth finish.
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
                Uploaded images are automatically deleted after processing for
                your privacy.
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
                No Sign-Up Needed
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No sign-up required — just upload, edit, and download.
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
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Intuitive Interface for All Skill Levels
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                User-friendly interface suitable for beginners and professionals
                alike.
              </p>
            </div>
          </div>

          {/* Card 2 */}
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
                Versatile Multi-Format Image Support
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Multi-format support for popular image types like PNG, JPG, and
                more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: Remove Text from Image Tool
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

export default RemoveTextFromImage;
