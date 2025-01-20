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

const PdfToPpt = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1.  Is SaveTools.net PDF to PowerPoint converter free to use?",
      answer: "Yes, our tool is completely free and there are no usage limits.",
    },
    {
      question:
        "2.  Will the converted PowerPoint retain the original PDF design?",
      answer:
        "Yes, the converter ensures all text, images, and layouts are preserved accurately.",
    },
    {
      question: "3. Is there a file size limit for PDF uploads?",
      answer: "No, you can convert PDFs of any size without restrictions.",
    },
    {
      question: "4.  Can I convert PDF to PPTX on my mobile device?",
      answer:
        "Absolutely! The converter is optimized for use on all devices, including smartphones and tablets.",
    },
    {
      question: "5. Is it safe to convert sensitive documents?",
      answer:
        "Yes, all files are processed securely, and we do not store any documents after conversion.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title="Convert PDF to PowerPoint online free Tool"
          description="Transform PDFs into editable PPT and PPTX slides for presentations. We make it easy and simple for you its online free tool for all. Share it with all."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert PDF to PowerPoint Slides
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Convert PDFs to Editable PowerPoint Presentations <br /> file,
              accurate and wonderful design
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
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            Need to turn your PDF documents into dynamic PowerPoint slides?
            SaveTools.net offers a powerful PDF to PowerPoint converter free of
            charge, with no limits on file size or usage. Our online tool
            ensures quick and accurate conversions, maintaining the integrity of
            your layouts, graphics, and text.
          </p>
        </div>
      </div>

      {/*How PDF to PowerPoint Converter Works: */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          How PDF to PowerPoint Converter Works
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">1. &nbsp; &nbsp; Upload your PDF file.</li>
            <li className="py-1">
              2. &nbsp; &nbsp; Click{" "}
              <strong className="text-blue-950">'Convert'</strong> and let the
              tool process your document.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;Now Download your Converted PowerPoint (PPTX)
              presentation file.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose SaveTools.net PDF to PowerPoint Converter? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl mx-2 font-bold">
          Why Choose SaveTools.net PDF to PowerPoint Converter?
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
                PDF to PowerPoint Converter Free No Limit
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Enjoy unlimited conversions without hidden fees.
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
                Best PDF to PPT Converter
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                High accuracy and reliability in every conversion.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 3 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-24 h-auto">
              <img
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                PDF to PPT Converter Online
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Access the tool anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about1}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                PDF to PPTX Converter
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Convert PDFs to the latest PowerPoint format with ease.
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
                All-in-One PDF Converter
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Also try our PDF to Word converter for seamless document
                management.
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

      {/* Key Feature of online PDF to PowerPoint Converter */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Key Feature of online PDF to PowerPoint Converter
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                High-Quality Conversion:{" "}
              </strong>{" "}
              Compress large PDFs to smaller sizes for easy sharing and storage.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">No Limit : </strong> Convert as
              many files as you need, without restrictions.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                User-Friendly Interface :{" "}
              </strong>
              Drag and drop your PDFs for seamless conversion.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Secure and Private : </strong>
              Files are processed securely and deleted after conversion.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Free and Accessible : </strong>
              No software download required – use it online from any device.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs:
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

export default PdfToPpt;
