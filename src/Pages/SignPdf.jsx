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

const SignPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. Is this eSign tool free to use?",
      answer:
        "Yes, our Sign PDF Online tool is 100% free without any hidden fees.",
    },
    {
      question: "2. Are digital signatures legally binding?",
      answer:
        "Yes, our digital signatures comply with global standards, making them legally valid in most countries.",
    },
    {
      question: "3. Can I add multiple signatures to a PDF?",
      answer: "Yes, you can add multiple signatures to a document if needed.",
    },
    {
      question: "4. Is my data safe?",
      answer:
        "Absolutely! Your files are encrypted, and all uploaded files are deleted from our servers after the signing process.",
    },
    {
      question: "5. Can I sign a PDF on my phone?",
      answer:
        "Yes, our tool is mobile-friendly and works on smartphones, tablets, and desktops.",
    },
    {
      question: "6. Do I need to create an account to sign PDFs?",
      answer:
        "No, there’s no need to register or create an account to use our tool.",
    },
    {
      question: "7. What types of files can I upload?",
      answer:
        "You can upload any standard PDF file. Other formats must be converted to PDF first.",
    },
    {
      question: "8. Can I upload an image of my signature?",
      answer:
        "Yes, you can upload a scanned or digital image of your signature and place it on the PDF.",
    },
    {
      question: "9. Can I use the tool to sign password-protected PDFs?",
      answer:
        "You’ll need to unlock the PDF by removing the password before signing.",
    },
    {
      question: "10. Is there a limit to the file size?",
      answer:
        "Our tool supports files up to 20MB. For larger files, consider splitting the PDF before signing.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Sign PDF online, eSign Digital Signature of Documents "
          description="Sign your documents electronically or request eSign Digital signatures from others. Savetools.net Make it easily now."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              eSign PDF online
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Our e<strong className="text-blue-950">Sign PDF Online</strong>
              tool lets you <br /> add legally binding digital signatures <br />{" "}
              to any PDF file in seconds.
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
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            Sign PDF Online – <br /> Fast, Secure & Free
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Looking for a quick and hassle-free way to sign your PDF documents
            online? Our{" "}
            <strong className="text-blue-950">Sign PDF Online</strong> tool lets
            you add legally binding digital signatures to any PDF file in
            seconds. Whether you need to eSign contracts, invoices, or forms,
            our platform ensures a secure, seamless process without downloading
            any software.
          </p>
        </div>
      </div>

      {/* How to Sign a PDF Online? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How to Sign a PDF Online?
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
              <strong className="text-blue-950">Create Your Signature:</strong>
              Use the drawing tool, upload an image of your signature, or type
              your name in a preferred style.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Place the Signature:</strong>{" "}
              Drag and drop your signature to the correct location in the PDF.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">
                Download the Signed PDF:
              </strong>{" "}
              Save and share your signed document instantly.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Our Sign PDF Online Tool? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold mx-4">
          Why Choose Our Sign PDF Online Tool?
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
                Free and Easy to Use
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No registration or payments required.
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
                Legally Binding Signatures
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Digital signatures comply with global eSignature standards.
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
                Your files are encrypted and deleted immediately after
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
                Multi-Device Compatibility
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Works perfectly on desktops, tablets, and smartphones.
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

      {/*Key Features of Our eSign Tool */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Key Features of Our eSign Tool
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Draw or Upload Signature:{" "}
              </strong>{" "}
              Create your signature by drawing it or uploading an image..
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Type Your Signature : </strong>{" "}
              Save Choose from professional fonts to type your name as a
              signature.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Sign Anywhere : </strong>
              Place your signature anywhere on the PDF
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Secure Encryption : </strong>
              Your documents remain confidential throughout the process.
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
              <strong className="text-blue-950">
                Business Professionals:{" "}
              </strong>{" "}
              eSign contracts, agreements, and invoices effortlessly.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Freelancers : </strong> Sign
              freelance contracts and send them to clients quickly.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Students and Educators :{" "}
              </strong>
              Add signatures to academic documents or applications.
            </li>
          </ul>
        </div>
      </div>

      {/* Benefits of Signing PDFs Online*/}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Signing PDFs Online
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Save Time: </strong> Sign
              documents instantly without printing or scanning.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Environmentally Friendly :{" "}
              </strong>
              Go paperless with digital signatures.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Professional and Convenient :{" "}
              </strong>
              Add professional-looking signatures with ease.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – Sign PDF Online Tool
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

export default SignPdf;
