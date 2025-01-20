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

const WaterMark = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is this watermark tool free to use?",
      answer:
        "Yes, our Add Watermark to PDF tool is completely free with no hidden costs.",
    },
    {
      question: "2. Can I add both text and image watermarks to the same PDF?",
      answer: "Yes, you can add both types of watermarks to a single document.",
    },
    {
      question:
        "3. Can I add multiple3. Can I customize the size and position of the watermark?",
      answer:
        "Absolutely! You have full control over the size, position, and rotation of your watermark.",
    },
    {
      question: "4. Is my files safe?",
      answer:
        "Yes, your files are encrypted during upload and automatically deleted from our servers after processing.",
    },
    {
      question: "5. Can I use this tool on my phone?",
      answer:
        "Yes, our watermark tool is mobile-friendly and works on all devices.",
    },
    {
      question: "6. 6. Does the tool support image formats other than JPG?",
      answer:
        "Yes, in addition to JPG, the tool supports PNG, BMP, and other common image formats for watermarks.",
    },
    {
      question: "7. Will the watermark affect the quality of my PDF?",
      answer:
        "No, your PDF’s quality will remain intact after adding the watermark.",
    },
    {
      question: "8. Can I apply watermarks to specific pages only?",
      answer:
        "Yes, you can select specific pages or apply the watermark to the entire document.",
    },
    {
      question: "9. Do I need to install any software?",
      answer:
        "No downloads or installations are required; everything is done online.",
    },
    {
      question: "10. Is there a file size limit?",
      answer:
        "You can upload PDF files up to 20MB. For larger files, consider splitting the PDF before applying a watermark.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Add Watermark to PDF,  Add Watermark online into PDF Online "
          description="Add text or image watermarks to your PDFs. Customize the transparency, font, and position to suit your needs. At Savetools.net get it online free software now."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Add Watermark into PDF
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Add a watermark to the PDF file to prevent <br /> misuse of your
              content elsewhere. It free <br /> online free tool try it now.
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
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-100">
            Add Watermark to PDF – <br /> Free, Fast & Secure
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Protect your PDF documents or brand them with custom watermarks
            using our{" "}
            <strong className="text-blue-950"> Add Watermark to PDF</strong>{" "}
            tool. Whether you want to add text, logos, or custom designs, our
            tool makes it easy to insert watermarks into PDFs online in
            seconds—no downloads or installations required!
          </p>
        </div>
      </div>

      {/* How to Add a Watermark to a PDF Online? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Add a Watermark to a PDF Online?
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
              <strong className="text-blue-950">
                Customize Your Watermark:
              </strong>
              Choose text or image watermark, adjust its size, transparency, and
              position.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Apply the Watermark:</strong>{" "}
              Click “Apply” to embed the watermark into your PDF.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Download the Watermarked PDF:
              </strong>{" "}
              Save your updated document and share it instantly.
            </li>
          </ul>
        </div>
      </div>

      {/*Why Use Our Add Watermark Tool? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Use Our Add Watermark Tool?
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
                Custom Watermarks
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Add text, images, or logos as watermarks.
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
                Free and Easy to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No subscriptions or hidden fees.
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
                Secure and Confidential
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Files are encrypted and deleted after processing.
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
                Works on Any Device
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Compatible with desktops, tablets, and smartphones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Features of the Add Watermark Tool*/}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Features of the Add Watermark Tool
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Text Watermarks: </strong> Add
              custom text like "Confidential," "Draft," or your company name.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Image Watermarks : </strong>{" "}
              Insert logos, signatures, or branded designs.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Position Control : </strong>
              Place the watermark at any location—center, corners, or
              diagonally.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Opacity Adjustment : </strong>
              Control the transparency of your watermark for a professional
              look.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Fast and Efficient : </strong>
              Get your tasks done in seconds without compromising on quality.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> No Downloads Needed : </strong>
              Everything is online, so there’s no need to install bulky
              software.
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
              <strong className="text-blue-950">Business : </strong> Protect
              documents with branded watermarks.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Freelancers : </strong> Sign Add
              logos to creative projects before sharing drafts.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Students and Educators :{" "}
              </strong>
              Mark drafts and assignments with “Confidential” or “Draft”
              watermarks.
            </li>
          </ul>
        </div>
      </div>

      {/* Benefits of Adding Watermarks to PDFs*/}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Adding Watermarks to PDFs
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Enhance Security: </strong>{" "}
              Prevent unauthorized use of your documents.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Professional Branding :{" "}
              </strong>
              Add company logos to your PDFs for consistency.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Organized Workflow : </strong>
              Clearly mark drafts, final versions, or confidential files.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – Add Watermark to PDF Tool
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

export default WaterMark;
