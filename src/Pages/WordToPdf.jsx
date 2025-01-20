import React, { useState } from "react";
import Header from "../Components/Header";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import about6 from "../images/perfect_for_office_ work.png";
import SEOComponent from "../Components/SEOComponent";
import faqsimg from "../images/faq.png";
import Footer from "../Components/Footer";
import { IoCloseSharp } from "react-icons/io5";
import { BsImages } from "react-icons/bs";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

const WordToPdf = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]); // Store selected files
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const faqs = [
    {
      question: "1. Is the Word to PDF converter free to use?",
      answer:
        "Yes, our Word to PDF converter is completely free with no hidden charges or subscriptions.",
    },
    {
      question: "2. Do I need to sign up to use this tool?",
      answer:
        "No, you can use the Word to PDF converter without registering or creating an account.",
    },
    {
      question: "3. Is my file safe during the conversion process?",
      answer:
        "Absolutely! We prioritize your privacy and security. All uploaded files are encrypted and automatically deleted from our servers after processing.",
    },
    {
      question: "4. What file formats are supported?",
      answer:
        "Our tool supports both DOC and DOCX formats, ensuring compatibility with all versions of Microsoft Word.",
    },
    {
      question: "5. Will my formatting stay intact after conversion?",
      answer:
        "Yes, our tool preserves the original formatting, layout, fonts, and images of your Word file in the converted PDF.",
    },
    {
      question: "6. How long does it take to convert a Word file to PDF?",
      answer:
        "The process is quick and usually takes just a few seconds, depending on your file size and internet connection.",
    },
    {
      question: "7. Can I use this tool on my phone or tablet?",
      answer:
        "Yes, our Word to PDF converter is mobile-friendly and works seamlessly on all devices, including smartphones and tablets.",
    },
    {
      question: "8. Is there a limit to the file size I can upload?",
      answer:
        "We handle most file sizes efficiently, but extremely large files may take longer to process.",
    },
    {
      question: "9. Do I need to install any software?",
      answer:
        "No, our Word to PDF converter is 100% online. You don’t need to download or install anything.",
    },
    {
      question: "10. Can I convert multiple Word files at once?",
      answer:
        "Currently, our tool processes one file at a time to ensure the best quality.",
    },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const inmageHandle = (e) => {
    console.log("files", e.target);
    const files = e.target.files;
    const length = files.length;

    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];

      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const removeImage = (i) => {
    const filterImage = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);
    setImages(filterImage);
    setImageShow(filterImageUrl);
  };

  // const handleFileChange = (event) => {
  //   const files = event.target.value; // Get selected files
  //   console.log("first", files);
  //   if (files.length > 0) {
  //     for (let i = 0; i < files.length; i++) {
  //       console.log(
  //         `File ${i + 1}: Name - ${files[i].name}, Size - ${
  //           files[i].size
  //         } bytes, Type - ${files[i].type}`
  //       );
  //     }
  //   } else {
  //     console.log("No file selected");
  //   }
  // };

  const handleFileChange = (event) => {
    // console.log("jhgyughjkljvbhjhgfcfghuioghcghjujhg", event.target.value);
    const newFiles = Array.from(event.target.files); // Convert FileList to Array
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]); // Append new files
  };

  return (
    <div>
      <div>
        <SEOComponent
          title="Convert Word to PDF File Online Free & Easy way – Savetools"
          description="Convert your Word documents to professional, high-quality PDFs with our Word to PDF Converter Online free at Savetools.net"
        />
              
      </div>
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-center px-4 sm:px-8">
        <div className="text-center w-full max-w-5xl">
          <div className="mb-10 mt-10">
            {/* Headings */}
            <h1 className="lg:text-4xl sm:text-2xl xs:text-xl text-2xl font-bold text-blue-900 mb-7">
              Word to PDF Converter Online Free
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-700">
              Convert your Word documents to professional, high-quality{" "}
              <br className="hidden sm:block" />
              PDFs files with SaveTools.net
            </h2>

            {/* File Upload Section */}
            <div className="flex flex-col items-center justify-center sm:mt-6 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-4 xs:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
                {imageShow.map((img, i) => (
                  <div className="h-[180px] relative" key={i}>
                    <label htmlFor={i}>
                      <img
                        className="w-full h-full rounded-sm"
                        src={img.url}
                        alt=""
                      />
                    </label>
                    <input
                      onChange={(e) => changeImage(e.target.files[0], i)}
                      type="file"
                      id={i}
                      className="hidden"
                    />
                    <span
                      onClick={() => removeImage(i)}
                      className="p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full"
                    >
                      <IoCloseSharp />
                    </span>
                  </div>
                ))}

                {/* Upload New Image Button */}
                <label
                  className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
                  htmlFor="image"
                >
                  <span>
                    <BsImages />
                  </span>
                  <span>select image</span>
                </label>
                <input
                  multiple
                  onChange={inmageHandle}
                  className="hidden"
                  type="file"
                  id="image"
                />
              </div>

              {/* Drop PDFs Here Text */}
              <p className="mt-4 text-gray-600 text-sm">or drop PDFs here</p>

              {/* Selected Files List */}
              {selectedFiles.length > 0 && (
                <div className="mt-4 w-full sm:w-2/3">
                  <h3 className="text-lg font-semibold">Selected Files:</h3>
                  <ul className="list-disc ml-5">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="text-gray-800">
                        📄 {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Description Text */}
            <p className="text-base text-gray-600 pt-8 px-4 sm:px-0">
              Effortlessly convert your Word documents to professional,
              high-quality PDFs with our
              <br className="hidden sm:block" />
              <strong>Word to PDF Converter Online</strong>. Whether you’re
              working on an important report, an invoice, or
              <br className="hidden sm:block" />
              any other document, SaveTools.net makes the process quick, free,
              and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}

      <div className="mt-10">
        <h3 className="text-red-600 text-center lg:text-3xl font-bold">
          Why Use Our Word to PDF Converter?
        </h3>
        {/* First Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-48 h-auto">
              <img
                src={about1}
                alt="Comprehensive Tools"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Free and Easy to Use:
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No hidden charges or complicated steps. Simply upload your Word
                document, and your PDF will be ready in seconds.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto">
              <img
                src={about2}
                alt="User-Friendly"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                High-Quality Conversion:
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Maintain the original layout, fonts, images, and formatting of
                your Word file without compromise.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 3 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto">
              <img
                src={about3}
                alt="Completely Free"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                100% Online:
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                No need to download software or apps. Access the tool from any
                browser, on any device.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-48 h-auto">
              <img
                src={about4}
                alt="Secure and Reliable"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Fast and Secure:
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Your files are processed quickly, and we ensure complete data
                privacy by deleting files shortly after conversion.
              </p>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
          {/* Card 5 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto">
              <img
                src={about6}
                alt="Fast and Efficient"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                Supports DOC and DOCX Files:
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Whether you have an older Word file or a modern one, our tool
                can handle both seamlessly.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
            <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
              <img
                src={about5}
                alt="Perfect for Office / Personal Work"
                className="mr-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center mx-5">
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                No Downloads Needed:
              </h4>
              <p className="text-gray-600 text-base font-playfair group-hover:text-white">
                Everything is online, so there’s no need to install bulky
                software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Convert Word to PDF online */}
      <div className="mt-10 lg:ml-28 sm:mx-3 lg:mx-0 mx-4">
        <h3 className="font-bold text-blue-900 lg:text-2xl">
          How to Convert Word to PDF Online
        </h3>
        <ul className="lg:text-lg text-gray-700">
          <li className="pt-6">
            1. Upload your Word file by clicking the{" "}
            <strong className="text-blue-950">"Choose File"</strong> button or
            drag-and-drop it into the tool.
          </li>
          <li>
            2. Our system will instantly process the document and generate a PDF
            version.
          </li>
          <li>
            3. Download the converted PDF to your device with a single click.
          </li>
        </ul>
      </div>

      {/* Who Can Benefit from This Tool? */}
      <div className="mt-10 lg:mx-20 lg:ml-28 sm:mx-3 mx-4">
        <h3 className="text-blue-900 lg:text-2xl font-bold">
          Who Can Benefit from This Tool?
        </h3>
        <div className="mt-5">
          <ul className="text-gray-700 lg:text-lg">
            <li className="py-1">
              <strong className="text-blue-950">Students: </strong> Drag and
              drop your PDFs or JPGs, or select them from your device.
            </li>
            <li className="py-1">
              <strong className="text-blue-950">Professionals : </strong>Reorder
              the files in the sequence you prefer.
            </li>
            <li className="py-1">
              <strong className="text-blue-950">Freelancers : </strong>Click the
              'Merge' button, and your combined file will be ready to download.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose  SaveTools.net for Word to PDF Conversion? */}
      <div className="mt-10 lg:ml-28 sm:mx-3 mx-4 lg:mx-0">
        <h3 className="font-bold text-blue-900 lg:text-2xl">
          Why Choose SaveTools.net for Word to PDF Conversion?
        </h3>
        <p className="mt-5 lg:text-lg text-gray-700">
          At SaveTools.net, we prioritize simplicity, quality, and user
          experience. With no <br /> registration required,no software
          installation, and no annoying ads, our{" "}
          <strong className="text-blue-950">
            {" "}
            Word to PDF <br /> Converter
          </strong>{" "}
          is designed to make your workflow smoother and more efficient.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
        <h3 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
          FAQs for Word to PDF Converter Online
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

export default WordToPdf;
