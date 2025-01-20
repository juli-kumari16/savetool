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

const ImageBgRemoval = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is Savetools.net’s background removal tool free?",
      answer:
        "Yes, it’s completely free to use with no hidden costs or limitations..",
    },
    {
      question: "2. What file formats can I upload?",
      answer:
        "You can upload images in common formats like PNG, JPEG, and JPG.",
    },
    {
      question: "3. Is there a limit to the number of images I can process?",
      answer: "No, you can process unlimited images without restrictions.",
    },
    {
      question: "4. Can I replace the background after removing it?",
      answer:
        "Yes! After removing the background, you can download the image with a transparent background or replace it with a solid color or new background.",
    },
    {
      question: "5. Do I need to install any software?",
      answer:
        "No downloads or installations are required. Everything is done online through your browser.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Image background remover Online Free | Unlimited | Savetools"
          description="Image background remover online free tools. Savetools.net remove your image back perfectly in few seconds. Try it now. No registration required! "
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Image background remover online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Background remover is the perfect tool <br /> for Editing photos
              for social media
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
            Remove Backgrounds from Images <br /> Instantly with Savetools.net
          </h2>
        </div>
      </div>
      <div className=" mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="lg:text-2xl font-bold text-blue-950">
          Effortless Background Removal in Seconds
        </h3>
        <span className="lg:text-base sm:text-sm text-sm  text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
          Do you need to remove the background from your images? Savetools.net
          makes background <br /> removal fast, easy, and accurate. Our advanced
          AI-powered tool does the work for you — <br /> no complicated software
          or design skills required!
        </span>
      </div>

      {/* Why Choose Savetools.net for Background Removal? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-2xl font-bold">
          Why Choose Savetools.net for Background Removal?
        </h3>
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
                Fast and Automatic
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Remove backgrounds with a single click. No manual editing or
                complex steps.
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
                High-Quality Results
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Maintain image clarity and detail with pixel-perfect background
                extraction.
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
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Supports Multiple Formats
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Works with popular formats like PNG, JPEG, and more.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about3}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Completely Free
              </h4>
              <p className="text-gray-600 text-sm font-playfair">
                Enjoy professional background removal at no cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  Perfect for Every Use Case */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-2xl font-bold">
          Perfect for Every Use Case
        </h3>
        <h4 className="text-gray-900 lg:text-xl font-semibold mt-3 ">
          Our background remover is ideal for:
        </h4>
        <div className="mt-2 ml-7 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                E-commerce and Product Photos :{" "}
              </strong>{" "}
              Create stunning product listings by removing distracting
              backgrounds.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Professional Headshots :{" "}
              </strong>{" "}
              Enhance portraits for resumes, LinkedIn, or other professional
              platforms.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Social Media and Marketing :{" "}
              </strong>
              Design eye-catching graphics and social media posts.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Compact and Organized :{" "}
              </strong>
              Use transparent backgrounds for logos, collages, and other graphic
              designs.
            </li>
          </ul>
        </div>
      </div>

      {/* How to Remove Backgrounds with Savetools.net */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-2xl font-bold">
          How to Remove Backgrounds with Savetools.net
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-5">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your Image : </strong>{" "}
              Click the upload button and choose an image from your device.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                {" "}
                Automatic Processing :{" "}
              </strong>
              Our AI will automatically detect and remove the background.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download Your Result : </strong>
              Save your image with a transparent or new background.
            </li>
          </ul>
        </div>
      </div>

      {/*Benefits of Using Savetools.net */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Using Savetools.net
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-5">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Time-Saving : </strong> Get
              professional results in just seconds.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">User-Friendly : </strong> No
              learning curve — simply upload and go.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Accessible from Any Device :{" "}
              </strong>
              Works seamlessly on desktops, tablets, and smartphones.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
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
      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ImageBgRemoval;
