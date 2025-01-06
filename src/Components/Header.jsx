import React from "react";
import { FaSortDown } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import logo from "../images/save_tools_logo.png";
import Home from "../Pages/Home";
import icon1 from "../images/jpg_to_pdf.png";
import icon2 from "../images/ppt_to_pdf.png";
import icon3 from "../images/word_to_pdf.png";
import icon4 from "../images/html_to_pdf.png";
import icon5 from "../images/excel_to_pdf.png";
import icon6 from "../images/pdf_to_word.png";
import icon7 from "../images/pdf_to_jpg.png";
import icon8 from "../images/pdf_to_excel.png";
import icon9 from "../images/pdf_to_ppt.png";
import icon10 from "../images/pdf_to_pdf_a.png";
import { Link } from "react-router-dom";

const Header = () => {
  const data = [
    {
      title: "Convert To pdf",
      items: [
        { name: "jpg to pdf", image: icon1, link: "/jpg_to_pdf" },
        { name: "Ppt to pdf", image: icon2, link: "/powerpoint_to_pdf" },
        {
          name: "Word to pdf",
          image: icon3,
          link: "/word_to_pdf-converter-free-online",
        },
        { name: "Html to pdf", image: icon4, link: "/html_to_pdf" },
        { name: "Excel to pdf", image: icon5, link: "/excel_to_pdf" },
      ],
    },
    {
      title: "Convert Form pdf",
      items: [
        { name: "Pdf to word", image: icon6, link: "/pdf-to-word-converter" },
        { name: "pdf to jpg", image: icon7, link: "/pdf_to_jpg" },
        { name: "pdf to excel", image: icon8, link: "/pdf_to_excel" },
        { name: "pdf to powerpoint", image: icon9, link: "/pdf_to_powerpoint" },
        { name: "pdf to pdf/A", image: icon10, link: "/convert_pdf_to_pdfa" },
      ],
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center px-4 shadow-lg bg-blue-700 text-white">
        {/* Logo */}
        <div className="flex space-x-20">
          <div className="w-20">
            <img src={logo} alt="Logo" className="w-full" />
          </div>

          {/* Navigation List */}
          <div className="flex space-x-6">
            <Link to={"/"} className="mt-7">
              <button className="">Home</button>
            </Link>
            <Link to={"/merge-pdf-in-one-file-online"} className="mt-7">
              <button className="">Merge pdf</button>
            </Link>
            <Link to={"/split-pdf-online-free"} className="mt-7">
              <button className="">Split pdf</button>
            </Link>
            <Link to={"/compress-pdf-online-free"} className="mt-7">
              <button className="">Compress PDF</button>
            </Link>
            <button className="flex group relative mt-7">
              Convert pdf <FaSortDown className="mt-1" />
              <div className="invisible opacity-0 absolute group-hover:visible group-hover:opacity-100 top-16 left-0 w-96 bg-white border border-gray-300 shadow-lg p-4 transition-all duration-75 ease-linear">
                <div className="grid grid-cols-2 gap-6">
                  {data.map((category, index) => (
                    <div key={index}>
                      {/* Title */}

                      <h3 className="text-sm font-medium text-gray-800 mb-3 uppercase hover:text-blue-500">
                        {category.title}
                      </h3>

                      {/* Items */}

                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <Link to={item.link} key={itemIndex}>
                            <li
                              key={itemIndex}
                              className="flex items-center text-sm text-black cursor-pointer hover:text-blue-500"
                            >
                              {typeof item === "object" ? (
                                <>
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-6 h-6 object-contain mr-2"
                                  />
                                  {item.name}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-2">
          <button className="">Login</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
