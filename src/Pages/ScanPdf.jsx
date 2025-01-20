import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import SEOComponent from "../Components/SEOComponent";
import { IoCameraOutline } from "react-icons/io5";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import about6 from "../images/perfect_for_office_ work.png";
import faqsimg from "../images/faq.png";
import Footer from "../Components/Footer";
import Webcam from "react-webcam";
// import { IoCameraOutline } from "react-icons/io5";
import { PDFDocument, rgb } from "pdf-lib";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const ScanPdf = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "1. What file formats are supported for uploading?",
      answer:
        "You can upload scanned images in formats like JPEG, PNG, BMP, or TIFF.",
    },
    {
      question: "2. Can I combine multiple scans into one PDF?",
      answer:
        "Yes, you can upload multiple scanned files and merge them into a single PDF.",
    },
    {
      question: "3. Is this tool free to use?",
      answer: "Yes, the Scan to PDF tool is completely free on savetools.net.",
    },
    {
      question: "4. Are my files secure?",
      answer:
        "Absolutely! All files are processed on secure servers and automatically deleted after conversion to protect your privacy.",
    },
    {
      question: "5. Can I reorder the scanned images before creating a PDF?",
      answer:
        "Yes, you can drag and drop files to arrange them in the desired order.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to Capture Image
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };
  console.log("Captured Image:", capturedImage);

  // Function to Convert Image to PDF
  const generatePDF = async () => {
    if (!capturedImage) return;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    // Convert base64 image to Uint8Array
    const imgBytes = await fetch(capturedImage).then((res) =>
      res.arrayBuffer()
    );
    const img = await pdfDoc.embedJpg(imgBytes);
    const { width, height } = img.scale(0.5);

    page.drawImage(img, {
      x: 50,
      y: 250,
      width,
      height,
    });

    // Save PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // Download the PDF
    const a = document.createElement("a");
    a.href = url;
    a.download = "scanned-document.pdf";
    a.click();
  };

  return (
    <div>
      <div>
        <SEOComponent
          title="Scan Documents to PDF Online Free, Fast & Easy Conversion – Unlimited"
          description="Convert physical documents into PDFs with SaveTools.net. Scan to PDF online or use our mobile-friendly tools for fast and easy digital archiving!"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center">
          <div className="mb-5 mt-10">
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Scan to PDF
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Scan documents from your mobile device <br /> and save them as
              PDFs instantly.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="pb-5">Let’s Digitize Your Documents Now!</span>
            {/* Main Container */}
            <div className="flex flex-col items-center space-y-4">
              {/* Webcam View */}
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="border-2 border-gray-400"
              />

              {/* Capture Button */}
              <button
                onClick={captureImage}
                className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer flex"
              >
                <IoCameraOutline className="text-2xl mr-3" />
                Capture Image
              </button>

              {/* Show Captured Image */}
              {capturedImage && (
                <>
                  <img
                    src={capturedImage}
                    alt="Captured"
                    className="w-64 h-64 mt-4 border"
                  />
                  <button
                    onClick={generatePDF}
                    className="bg-green-700 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
                  >
                    Generate PDF
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center space-x-4 mt-5 sm:text-sm lg:text-base text-sm">
              {/* File Input Styled as a Button */}
              <label className="bg-blue-700 hover:bg-blue-900 text-white text-lg sm:text-2xl font-semibold px-10 sm:px-16 py-4 sm:py-6 rounded-lg shadow-lg cursor-pointer">
                Select PDF File
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
            What is the Scan to PDF Tool?
          </h2>
          <p className="text-base text-gray-600 pt-8 text-justify sm:text-center max-w-[700px] leading-relaxed px-4 sm:px-0 mx-auto">
            The Scan to PDF tool allows you to convert scanned images or
            documents into a single, high-quality PDF file. Whether it’s
            receipts, handwritten notes, contracts, or any physical documents,
            this tool ensures easy and organized digital storage.
          </p>
        </div>
      </div>

      {/* How to Use Our Organize PDF Tool? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold pb-5">
          How to Use the Scan to PDF Tool?
        </h3>
        <div className="sm:text-sm lg:text-base text-sm">
          <ul className="text-gray-700">
            <li className="py-1">
              1. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Upload Your Files : </strong>{" "}
              Drag and drop scanned images or documents (JPEG, PNG, etc.), or
              use the upload button.
            </li>
            <li className="py-1">
              2. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Arrange Files : </strong>{" "}
              Reorder your uploaded scans in the desired sequence.
            </li>
            <li className="py-1">
              3. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Convert to PDF : </strong> Click
              “Scan to PDF,” and the tool will create a consolidated PDF file.
            </li>
            <li className="py-1">
              4. &nbsp; &nbsp;{" "}
              <strong className="text-blue-950">Download : </strong> Save your
              new PDF file instantly to your device.
            </li>
          </ul>
        </div>
      </div>

      {/* Features of the Scan to PDF Tool */}
      <div className="mt-20">
        <h3 className="text-red-600 text-center lg:text-3xl sm:text-xl text-lg font-bold">
          Features of the Scan to PDF Tool
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
                Supports Multiple Formats
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Upload scanned files in JPEG, PNG, or other image formats.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-28 h-auto">
              <img
                src={about4}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Reorder Files
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Arrange your files before conversion for a seamless PDF flow.
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
                src={about2}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                High-Quality Output
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Preserve the clarity and details of your scanned documents.
              </p>
            </div>
          </div>

          {/* Card 2 */}
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
                Auto Optimization
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Automatically enhance scanned images for better readability.
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
                src={about6}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Fully Online
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No installation required—works right in your browser.
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
                Cross-Device Compatibility
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Use it on desktop, tablet, or smartphone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits of Using the Scan to PDF Tool */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="text-blue-900 lg:text-3xl font-bold">
          Benefits of Using the Scan to PDF Tool
        </h3>
        <div className="mt-5 sm:text-sm lg:text-base text-sm ml-8">
          <ul className="text-gray-700">
            <li className="py-1 list-disc">
              Digitize physical documents for easy access and storage.
            </li>
            <li className="py-1 list-disc">
              Create professional, organized PDFs from multiple scans.
            </li>
            <li className="py-1 list-disc">
              Simplify sharing and archiving of your documents.
            </li>
            <li className="py-1 list-disc">
              Save time with a fast and intuitive tool.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs: Convert PDF to PDF/A Tool
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

export default ScanPdf;
