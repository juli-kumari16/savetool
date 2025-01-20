import React from "react";
import { Link } from "react-router-dom";

const tags = [
  {
    title: "Word to PDF",
    link: "/word_to_pdf-converter-free-online",
  },
  {
    title: "Merge PDF",
    link: "/merge-pdf-in-one-file-online",
  },
  {
    title: "Split PDF",
    link: "/split-pdf-online-free",
  },
  {
    title: "Compress PDF",
    link: "/compress-pdf-online-free",
  },
  {
    title: "PDF to Word",
    link: "/pdf-to-word-converter",
  },
  {
    title: "PDF to PowerPoint",
    link: "/pdf-to-powerpoint-converter",
  },
  {
    title: "PDF to Excel",
    link: "/pdf-to-excel-converter-online-free",
  },
  {
    title: "PowerPoint to PDF",
    link: "/Convert-ppt-to-pdf",
  },
  {
    title: "Excel to PDF",
    link: "/excel-to-pdf-converter-online-free",
  },
  {
    title: "Edit PDF",
    link: "/edit-pdf-online",
  },
  {
    title: "PDF to JPG",
    link: "/pdf-to-jpg-converter",
  },
  {
    title: "JPG to PDF",
    link: "/jpg-to-pdf-converter",
  },
  {
    title: "Sign PDF",
    link: "/sign-pdf-online",
  },
  {
    title: "Watermark",
    link: "/add-watermark-to-pdf",
  },
  {
    title: "Rotate PDF",
    link: "/rotate-pdf-online",
  },
  {
    title: "HTML to PDF",
    link: "/convert-html-to-pdf",
  },
  {
    title: "Unlock PDF",
    link: "/unlock-pdf",
  },
  {
    title: "Protect PDF",
    link: "/protect-pdf",
  },
  {
    title: "Organize PDF",
    link: "/organize-pdf",
  },
  {
    title: "PDF to PDF/A",
    link: "/convert-pdf-to-pdfa",
  },
  {
    title: "Repair PDF",
    link: "/repair-pdf-online",
  },
  {
    title: "Add Page Numbers",
    link: "/add-page-numbers-in-pdf",
  },
  {
    title: "Scan to PDF",
    link: "/scan-to-pdf-online",
  },
  {
    title: "OCR PDF",
    link: "/ocr-pdf-to-searcheable-file",
  },
  {
    title: "Compare PDF",
    link: "/compare-pdf-online",
  },
  {
    title: "Redact PDF",
    link: "/redact-pdf-online",
  },
  {
    title: "JPG to WebP",
    link: "/jpg-to-webp",
  },
  {
    title: "Image backgroundremoval",
    link: "/image-background-remover",
  },
  {
    title: "Remove Text from an Image",
    link: "/remove-text-from-an-Image",
  },
];

const ExploreMore = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold mb-10">Explore more</h2>
      <div className="flex flex-wrap gap-3 justify-center max-w-4xl space-y-2">
        {tags.map((tag) => (
          <Link to={tag.link}>
            <span
              key={tag.title}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                tag.link
                  ? "bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300"
                  : "bg-gray-200 text-gray-700 cursor-not-allowed opacity-50"
              }`}
            >
              {tag.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
