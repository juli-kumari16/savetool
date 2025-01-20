import React, { useState } from "react";
import Header from "../Components/Header";
import about1 from "../images/comprehensive _tool.png";
import about2 from "../images/user- friendly.png";
import about3 from "../images/completely _free.png";
import about4 from "../images/secure_and reliable.png";
import about5 from "../images/fast_and _efficient.png";
import about6 from "../images/perfect_for_office_ work.png";
import wtf from "../images/word_to_pdf.png";
import ptp from "../images/pdf_to_ppt.png";
import ptw from "../images/pdf_to_word.png";
import pte from "../images/pdf_to_excel.png";
import ptpdf from "../images/ppt_to_pdf.png";
import extp from "../images/excel_to_pdf.png";
import jptopdf from "../images/jpg_to_pdf.png";
import pdfToJpg from "../images/pdf_to_jpg.png";
import htopdf from "../images/html_to_pdf.png";
import pdf_A from "../images/pdf_to_pdf_a.png";
import faqsimg from "../images/faq.png";
import mtf from "../images/Merge_PDF.png";
import stpdf from "../images/split_PDF.png";
import compPdf from "../images/Compress _PDF.png";
import edtPdf from "../images/Edit_PDF.png";
import signPdf from "../images/sign_pdf.png";
import watermark from "../images/watermark.png";
import rotatePdf from "../images/rotate_pdf.png";
import unlockPdf from "../images/unlock _pdf.png";
import protectPdf from "../images/protect_pdf.png";
import organizePdf from "../images/organize_pdf.png";
import repairPdf from "../images/repair_pdf.png";
import pageno from "../images/page _numbers.png";
import scanToPdf from "../images/Scan_TO_PDF.png";
import ocrPdf from "../images/OCR_PDF.png";
import comparePdf from "../images/Compare_PDF.png";
import redactPdf from "../images/redact_PDF.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Components/Footer";
import homebg from "../images/background.svg";
import SEOComponent from "../Components/SEOComponent";
import jpgWebP from "../images/WEBP_TO_JPG_ICON.png";
import removeTextFromImage from "../images/remove_text_from_image.png";
import imgBgRemoval from "../images/image_background_icon.png";
import ExploreMore from "../Components/ExploreMore";
import WhatsApp from "../Components/WhatsApp";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const item = [
  {
    title: "Free online converter tools for your Office work",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing. edit tempora rerum vero amet aspernatur deleniti aliquid, distinctio Combine your PDFs in the desired order effortlessly using our simple PDF merger tool with SaveTools.net Easily",
  },
  {
    title: "How to Simplify Office Tasks with Free Online File Converters",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing. edit tempora rerum vero amet aspernatur deleniti aliquid, distinctio Combine your PDFs in the desired order effortlessly using our simple PDF merger tool with SaveTools.net Easily",
  },
  {
    title: "The Benefits of Using All-in-One PDF Management Tools",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing. edit tempora rerum vero amet aspernatur deleniti aliquid, distinctio Combine your PDFs in the desired order effortlessly using our simple PDF merger tool with SaveTools.net Easily",
  },
  {
    title: "Top Tips for Managing Large PDF Files Efficiently",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing. edit tempora rerum vero amet aspernatur deleniti aliquid, distinctio Combine your PDFs in the desired order effortlessly using our simple PDF merger tool with SaveTools.net Easily",
  },
  {
    title: "Why Secure Online Tools Like SaveTools.net Are the Future",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing. edit tempora rerum vero amet aspernatur deleniti aliquid, distinctio Combine your PDFs in the desired order effortlessly using our simple PDF merger tool with SaveTools.net Easily",
  },
];

const cardData = [
  // First Row

  {
    title: "Word to PDF",
    description:
      "Convert DOC and DOCX files to PDF for easy sharing and readability.",
    image: wtf,
    link: "/word_to_pdf-converter-free-online",
  },
  {
    title: "Merge PDF",
    description:
      "Combine your PDFs in the desired order effortlessly using our simple PDF merger tool with SaveTools.net Easily.",
    image: mtf,
    link: "/merge-pdf-in-one-file-online",
  },
  {
    title: "Split PDF",
    description:
      "Extract single pages or entire sections to create independent PDF files with ease @ SaveTools.net",
    image: stpdf,
    link: "/split-pdf-online-free",
  },
  {
    title: "Compress PDF",
    description:
      "Reduce your PDF file size while maintaining the highest quality, quick and easily.",
    image: compPdf,
    link: "/compress-pdf-online-free",
  },

  // Second Row

  {
    title: "PDF to Word",
    description:
      "Convert PDFs to editable DOC and DOCX files with near-perfect accuracy. SaveTools Makes easy to do you’re work.",
    image: ptw,
    link: "/pdf-to-word-converter",
  },
  {
    title: "PDF to PowerPoint",
    description:
      "Transform PDFs into editable PPT and PPTX slides for presentations. We make it easy for you.",
    image: ptp,
    link: "/pdf-to-powerpoint-converter",
  },
  {
    title: "PDF to Excel",
    description:
      "Extract data from PDFs directly into Excel spreadsheets in seconds.",
    image: pte,
    link: "/pdf-to-excel-converter-online-free",
  },
  {
    title: "PowerPoint to PDF",
    description: "Convert PPT and PPTX slideshows into easy-to-view PDF files.",
    image: ptpdf,
    link: "/Convert-ppt-to-pdf",
  },

  // Third Row

  {
    title: "Excel to PDF",
    description:
      "Make Excel spreadsheets more shareable by converting them into PDFs.",
    image: extp,
    link: "/excel-to-pdf-converter-online-free",
  },
  {
    title: "Edit PDF",
    description:
      "Add text, images, shapes, or annotations to your PDFs. Customize font, size, and color as needed.",
    image: edtPdf,
    link: "/edit-pdf-online",
  },
  {
    title: "PDF to JPG",
    description:
      "Convert PDF pages into JPG images or extract embedded images from PDFs.",
    image: pdfToJpg,
    link: "/pdf-to-jpg-converter",
  },
  {
    title: "JPG to PDF",
    description:
      "Quickly convert JPG images to PDFs with adjustable orientation and margins.",
    image: jptopdf,
    link: "/jpg-to-pdf-converter",
  },

  // Fourth Row

  {
    title: "Sign PDF",
    description:
      "Sign your documents electronically or request signatures from others.",
    image: signPdf,
    link: "/sign-pdf-online",
  },
  {
    title: "Watermark",
    description:
      "Add text or image watermarks to your PDFs. Customize the transparency, typography, and position.",
    image: watermark,
    link: "/add-watermark-to-pdf",
  },
  {
    title: "Rotate PDF",
    description:
      "Rotate PDF pages to your preferred orientation. Process multiple PDFs at once.",
    image: rotatePdf,
    link: "/rotate-pdf-online",
  },
  {
    title: "HTML to PDF",
    description:
      "Convert HTML webpages into PDFs by pasting the URL and clicking convert.",
    image: htopdf,
    link: "/convert-html-to-pdf",
  },

  // Fifth Row

  {
    title: "Unlock PDF",
    description:
      "Remove password protection to unlock your PDF files and enable unrestricted access.",
    image: unlockPdf,
    link: "/unlock-pdf",
  },
  {
    title: "Protect PDF",
    description:
      "Secure your PDFs with a password to prevent unauthorized access.",
    image: protectPdf,
    link: "/protect-pdf",
  },
  {
    title: "Organize PDF",
    description: "Rearrange, delete, or add pages to your PDF files as needed.",
    image: organizePdf,
    link: "/organize-pdf",
  },
  {
    title: "PDF to PDF/A",
    description:
      "Convert PDFs to the ISO-standardized PDF/A format for long-term preservation.",
    image: pdf_A,
    link: "/convert-pdf-to-pdfa",
  },

  // Six Row

  {
    title: "Repair PDF",
    description: "Fix damaged or corrupted PDFs and recover lost data easily.",
    image: repairPdf,
    link: "/repair-pdf-online",
  },
  {
    title: "Add Page Numbers",
    description:
      "Insert page numbers into your PDFs. Customize position, size, and font to suit your needs.",
    image: pageno,
    link: "/add-page-numbers-in-pdf",
  },
  {
    title: "Scan to PDF",
    description:
      "Scan documents from your mobile device and save them as PDFs instantly.",
    image: scanToPdf,
    link: "/scan-to-pdf-online",
  },
  {
    title: "OCR PDF",
    description:
      "Convert scanned PDFs into searchable and editable documents with OCR technology.",
    image: ocrPdf,
    link: "/ocr-pdf-to-searcheable-file",
  },

  {
    title: "Compare PDF",
    description:
      "Perform side-by-side comparisons of PDFs to identify changes between file versions.",
    image: comparePdf,
    link: "/compare-pdf-online",
  },
  {
    title: "Redact PDF",
    description:
      "Permanently remove sensitive information from PDFs by redacting text or graphics.",
    image: redactPdf,
    link: "/redact-pdf-online",
  },
  {
    title: "JPG to WebP",
    description:
      "convert JPG images to WebP format effortlessly. Optimize your website’s performance with this step-by-step guide to faster-loading, high-quality visuals.",
    image: jpgWebP,
    link: "/jpg-to-webp",
  },
  {
    title: "Image background removal",
    description:
      "Image background remover online free tools. Savetools.net remove your image back perfectly in few seconds. Try it now. No registration required! ",
    image: imgBgRemoval,
    link: "/image-background-remover",
  },
  {
    title: "Remove Text from an Image",
    description:
      "Easily remove unwanted text from your images / Photos with Savetools.net's free online tool. No software needed, just upload and erase text in seconds.",
    image: removeTextFromImage,
    link: "/remove-text-from-an-Image",
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is SaveTools.net completely free to use?",
      answer:
        "Yes, all tools on SaveTools.net are 100% free with no hidden charges or subscription fees.",
    },
    {
      question: "Is SaveTools.net safe and secure?",
      answer:
        "Absolutely! Your files are processed securely, and we do not store, share, or misuse your data. There are no pop-ups, ads, or malware.",
    },
    {
      question: "Do I need to install any software to use SaveTools.net?",
      answer:
        "No, SaveTools.net is entirely web-based. You can access all tools directly from your browser without downloading any software.",
    },
    {
      question: "What file types are supported?",
      answer:
        "We support a variety of file formats, including Word, PDF, PowerPoint, Excel, JPG, and more.",
    },
    {
      question: "How long does it take to process a file?",
      answer:
        "Our tools are designed for speed and efficiency. Most tasks are completed in seconds, depending on your file size and internet connection.",
    },
    {
      question: "Are there file size limits?",
      answer:
        "We handle most file sizes efficiently. However, very large files may take longer to process or may have limitations depending on your device.",
    },
    // {
    //   question: "What kind of tools does SaveTools.net offer?",
    //   answer:
    //     "SaveTools.net provides a wide range of tools, including: Merge, Split, Compress pdf, Convert Word to pdf,PDF to Word, JPG to PDF, and more,Edit PDFs,Add Watermarks,Rotate, Unlock, and Protect PDFs  ",
    // },
    {
      question: " Can I use SaveTools.net on my phone or tablet?",
      answer:
        "Yes, SaveTools.net is mobile-friendly and works seamlessly on phones, tablets, and desktops.",
    },
    {
      question: "How can I ensure the quality of converted files?",
      answer:
        "Our tools are optimized to provide high-quality conversions, ensuring the final output matches your expectations.",
    },
    {
      question: "Do you keep a copy of my files?",
      answer:
        "No, we respect your privacy. All uploaded files are automatically deleted from our servers shortly after processing.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-10">
      <div>
        <SEOComponent
          title="SaveTools: A Free Online Converter Tools for your Office work"
          description="SaveTools.net offers a comprehensive suite of free online tools to simplify your office tasks. Convert Word to PDF, Fast, secure, and user-friendly tool. "
        />
              
      </div>
      {/* Header */}
      <div>
        <Header />
      </div>
      <div
        className="bg-no-repeat bg-center bg-cover bg-fixed h-screen w-screen"
        style={{
          backgroundImage: `url(${homebg})`,
          zIndex: -1,
        }}
      >
        {/* Page Start Here */}
        <div className="mt-3 flex flex-col items-center justify-center text-center sm:mx-auto lg:mx-auto px-4 sm:px-10">
          <h1 className="font-bold lg:text-4xl text-2xl text-gray-800 font-sans py-5">
            Free online converter tools for your Office work
          </h1>
          <p className="mt-2 lg:text-lg text-gray-800 font-playfair text-justify max-w-[700px] leading-relaxed">
            Savetools is a comprehensive online platform offering converter
            tools to simplify your office work. Effortlessly convert Word files
            to PDF, PDF to Word, edit PDFs, split PDFs, rotate, unlock, and add
            watermarks to your PDFs and many more tools. It's completely free,
            secure, and free from pop-ups or malware.
          </p>
        </div>

        {/* Cards Start Here */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mx-10 mt-3">
          {cardData.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="p-4 border rounded-lg md:col-span-3 sm:shadow-lg lg:shadow-none shadow-lg"
            >
              {/* Image Section */}
              <Link to={card.link}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-10 h-auto object-cover rounded-t-lg mb-4"
                />
                <h3 className="font-bold text-lg py-2 group-hover:text-white text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 py-2 group-hover:text-white font-playfair">
                  {card.description}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Save Tool Start Here */}
        <div className="mt-20">
          <h2 className="text-red-600 text-center lg:text-3xl font-bold">
            Why Choose SaveTools.net?
          </h2>

          {/* First Row */}
          <div className="flex flex-col sm:flex-row flex-wrap mx-5 md:mx-28 mt-10 gap-10 justify-center">
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
              <div className="w-20 sm:w-24 md:w-32 lg:w-44 h-auto">
                <img
                  src={about1}
                  alt="Comprehensive Tools"
                  className="mr-4 w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center mx-5">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Comprehensive Tools
                </h4>
                <p className="text-gray-600 text-sm font-playfair">
                  All the PDF and file conversion tools you need in one
                  place—merge, split, compress, convert, edit, and more.
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
                  User-Friendly
                </h4>
                <p className="text-gray-600 text-sm font-playfair">
                  Simple, intuitive interface designed for effortless use by
                  anyone, anytime.
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
                  src={about3}
                  alt="Completely Free"
                  className="mr-4 w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center mx-5">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Completely Free
                </h4>
                <p className="text-gray-600 text-sm font-playfair">
                  No hidden fees, subscriptions, or limitations. All tools are
                  100% free to use.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
              <div className="w-20 sm:w-24 md:w-32 lg:w-32 h-auto">
                <img
                  src={about4}
                  alt="Secure and Reliable"
                  className="mr-4 w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center mx-5">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Secure and Reliable
                </h4>
                <p className="text-gray-600 text-sm font-playfair">
                  Your files are handled with the utmost care—no malware,
                  pop-ups, or data leaks.
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
                  src={about5}
                  alt="Fast and Efficient"
                  className="mr-4 w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center mx-5">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Fast and Efficient
                </h4>
                <p className="text-gray-600 text-sm font-playfair">
                  Get your tasks done in seconds without compromising on
                  quality.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col sm:flex-row p-4 bg-white rounded-lg shadow-lg border w-full md:w-[48%] hover:bg-blue-500">
              <div className="w-20 sm:w-24 md:w-32 lg:w-56 h-auto">
                <img
                  src={about6}
                  alt="Perfect for Office / Personal Work"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center mx-5">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Perfect for Office / Personal Work
                </h4>
                <p className="text-gray-600 text-sm font-playfair">
                  Simplify your workflow by converting Word to PDF, PDF to Word,
                  editing PDFs, unlocking PDFs, and more—all tailored to your
                  office needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Blog*/}

        <div className="container mx-auto p-4 mt-28">
          <h2 className="text-center font-bold text-3xl mb-10">Blog</h2>
          <Slider {...settings}>
            {item.map((items, i) => (
              <div key={i} className="p-2">
                <div className="border rounded shadow-lg">
                  <h2 className="font-semibold p-5">{items.title}</h2>
                  <p className="p-5">{items.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* FAQ Section  */}
        <div className="mt-20 lg:mx-10 sm:mx-4 mx-4">
          <div>
            <h2 className="lg:text-3xl sm:text-2xl text-2xl font-bold lg:pl-40">
              FAQs for SaveTools.net
            </h2>
          </div>

          {/* FAQ Section - Adjusted for responsive layout */}
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

          {/* Contact Us Section */}
          <div className="flex lg:flex-row sm:flex-col lg:mx-20">
            <p className="lg:pl-40 lg:text-2xl lg:pr-3 font-playfair">
              If you have more questions, feel free to reach out to us!
            </p>
            <button className="bg-blue-300 border rounded lg:px-4 text-sm lg:text-lg sm:text-sm mt-2 sm:block lg:inline-block">
              Contact Us
            </button>
          </div>
        </div>

        {/* Explore More */}
        <div className="mt-10">
          <ExploreMore />
        </div>
        {/* whatsapp */}
        <div>
          <WhatsApp />
        </div>
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
