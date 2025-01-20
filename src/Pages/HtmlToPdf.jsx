import React, { useState } from "react";
import Header from "../Components/Header";
import SEOComponent from "../Components/SEOComponent";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
// import about5 from "../images/fast_and _efficient.png";
// import about6 from "../images/perfect_for_office_ work.png";
import faqsimg from "../images/faq.png";
import Footer from "../Components/Footer";
import { list } from "postcss";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const HtmlToPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. What is the HTML to PDF Converter?",
      answer:
        "Our HTML to PDF converter is a tool that allows you to convert web pages (HTML files or URLs) into high-quality PDF documents. It ensures the formatting, text, and images of the web page are preserved in the generated PDF.",
    },
    {
      question: "2. How do I use the HTML to PDF Converter on SaveTools.net?",
      answer: "It’s simple!",
      lists: [
        "Copy and paste the URL of the webpage or upload an HTML file.",
        "Choose your preferred layout settings (like orientation or page size).",
        "Click Convert to generate the PDF.",
        "Download the PDF to your device.",
      ],
    },
    {
      question: "3. Can I customize the PDF output?",
      answer: "Yes! Our tool offers customization options, including:",
      list: [
        "Page size (A4, Letter, etc.)",
        "Orientation (Portrait or Landscape)",
        "Adding headers, footers, or margins",
      ],
    },
    {
      question: "4.   Is my data safe on SaveTools.net?",
      answer:
        "Absolutely! Your data is processed securely, and we do not store any of the files or URLs you upload.",
    },
    {
      question: "5. Are there any limits to using the HTML to PDF Converter?",
      answer:
        "Currently, our tool is free to use with no limits on the number of conversions. However, very large web pages may take slightly longer to process.",
    },
    {
      question: "6. Does the tool work on mobile devices?",
      answer:
        "Yes! SaveTools.net is mobile-friendly, and you can easily convert HTML to PDF from your smartphone or tablet.",
    },
    {
      question: "7. Can I use the tool for printing webpages without ads?",
      answer:
        "Yes! The converter creates clean, print-ready PDFs by removing unnecessary elements like ads and navigation menus from the webpage.",
    },
    {
      question:
        "8. Do I need to download any software or sign up to use this tool?",
      answer:
        "No, you don’t need to download anything or create an account. The tool is fully online and ready to use without any registration.",
    },
    {
      question: "9. What types of HTML files or URLs can I convert?",
      answer: "You can convert:",
      list: [
        "Public webpage URLs (e.g., blogs, articles, invoices).",
        "HTML files saved on your device. Ensure that the content you’re converting is accessible and not behind a login or paywall.",
      ],
    },
    {
      question: "10. Is this tool free to use?",
      answer:
        "Yes! Our HTML to PDF converter is 100% free. There are no hidden fees or subscription charges.",
    },
    {
      question:
        "11. Can I convert dynamic webpages (e.g., JavaScript-heavy websites)?",
      answer:
        "The tool works best with static content. Some dynamic content may not render correctly, but most webpages will convert without issues.",
    },
    {
      question: "12. Can I download the PDF immediately after conversion?",
      answer: "Yes, once the PDF is generated, you can download it instantly.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div>
        <SEOComponent
          title=" Convert HTML to PDF File Free Online, unlimited "
          description="Convert HTML Pages to PDF file: Create a Static, Sharable, Print-Ready Version of a Webpage document at savetools.net online free try it now."
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-10 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Convert HTML to PDF
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Convert HTML webpages into PDFs file <br /> by simply pasting url
              or code.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="flex items-center space-x-4">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Add HTML
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            {/* Drop PDFs Text */}
            <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>
          </div>
          <div class="flex text-red-500 font-bold text-lg items-center justify-center sm:text-sm lg:text-base text-sm mt-5 mx-4 ">
            <span>Pasting the URL</span>
            <span className="mx-2">|</span>
            <span>Pasting the code</span>
          </div>
          <h2 className="lg:text-3xl font-bold text-gray-700 mt-10">
            HTML to PDF Converter – <br /> Create Professional PDFs from
            Webpages
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            At <strong className="text-blue-950">SaveTools.net</strong>, our
            HTML to PDF converter makes it simple to turn web pages into clean,
            professional, and print-ready PDF documents. Whether you need to
            save webpages for offline access, share them as downloadable files,
            or archive them for future reference, our tool is here to help.
          </p>
        </div>
      </div>

      {/* How to Convert HTML to PDF? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold pb-5">
          How to Convert HTML to PDF?
        </h3>
        <span className="text-gray-700">
          Follow these simple steps on{" "}
          <strong className="text-blue-950">SaveTools.net:</strong>
        </span>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp; Enter the URL of the webpage you want to convert
              or upload an HTML file.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;Select your preferred settings for the PDF, such
              as layout and formatting.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;Click{" "}
              <strong className="text-blue-950">Convert</strong> and wait for
              the magic to happen!
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp; Download your PDF and share it instantly.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Our Sign PDF Online Tool? */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold pb-3">
          Why Use an HTML to PDF Converter?
        </h3>
        <span className="lg:ml-32 sm:ml-10 sm:mx-3 lg:mx-0 mx-4 sm:text-sm text-sm text-gray-700 lg:text-lg sm:text-justify">
          HTML files are designed for web display, but sometimes you need a
          portable and static format like PDF. Here’s why:
        </span>
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
                Shareability
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                PDFs are easy to share and maintain their formatting across
                devices.
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
                Offline Access
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Save important webpages and content for offline reading.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
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
                Print-Ready
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Create PDFs optimized for printing without the clutter of ads
                and web elements.
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
                Archiving
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Store records of invoices, articles, or forms for long-term use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature of Save Tool.net HTML to PDF Converter */}
      <div className="max-w-3xl lg:mx-28 p-6">
        <h2 className="lg:text-3xl font-bold text-blue-900">
          Features of <span className="text-blue-900">SaveTools.net</span> HTML
          to PDF Converter
        </h2>
        <ol className="list-decimal pl-6 mt-4 lg:text-lg">
          <li className="font-bold text-blue-950">
            Simple and Fast
            <p className="font-normal text-gray-700">
              Just paste the webpage URL or upload an HTML file to generate your
              PDF in seconds.
            </p>
          </li>
          <li className="font-bold mt-3 text-blue-950">
            Customizable Options
            <ul className="list-disc pl-6 font-normal text-gray-700">
              <li>Adjust page size (A4, Letter, etc.).</li>
              <li>Choose portrait or landscape orientation.</li>
              <li>Add headers, footers, or margins as needed.</li>
            </ul>
          </li>
          <li className="font-bold mt-3 text-blue-950">Clean Formatting</li>
          <p className="font-normal text-gray-700">
            Remove unnecessary elements like ads or navigation menus for a
            professional look.
          </p>
          <li className="font-bold mt-3 text-blue-950">Secure and Private</li>
          <p className="font-normal text-gray-700">
            Your data is processed safely, and we do not store any information.
          </p>
          <li className="font-bold mt-3 text-blue-950">
            Free and User-Friendly
          </li>
          <p className="font-normal text-gray-700">
            No subscriptions or sign-ups required—start converting immediately!
          </p>
          <li className="font-bold mt-3 text-blue-950">
            Fast and Efficient
            <span className="font-normal text-gray-700">
              : Get your tasks done in seconds without compromising on quality.
            </span>
          </li>
        </ol>
      </div>

      {/*Who Can Benefit from This Tool?*/}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Who Can Benefit from This Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm mt-5 mx-4">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                Students and Researchers:{" "}
              </strong>{" "}
              Save online articles, research papers, or tutorials for offline
              use.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">Professionals : </strong>
              Convert webpages like invoices, tickets, or forms for sharing or
              printing.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950">
                {" "}
                Web Developers and Designers :{" "}
              </strong>
              Generate static, print-ready previews of websites for clients.
            </li>
            <li className="py-1 list-disc">
              <strong className="text-blue-950"> Everyone Else : </strong>
              Quickly save any webpage for safekeeping or easy sharing!
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs – HTML to PDF Converter on SaveTools.net
        </h3>
        <div className="flex flex-col lg:flex-row-reverse mb-5">
          {/* FAQ Image (on top for small screens, side by side for large screens) */}
          <div className="lg:w-1/2">
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

export default HtmlToPdf;
