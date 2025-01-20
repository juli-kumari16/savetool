import React, { useState } from "react";
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
import { FiMenu } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = [
    {
      title: "Convert To pdf",
      items: [
        { name: "jpg to pdf", image: icon1, link: "/jpg-to-pdf-converter" },
        { name: "Ppt to pdf", image: icon2, link: "/Convert-ppt-to-pdf" },
        {
          name: "Word to pdf",
          image: icon3,
          link: "/word_to_pdf-converter-free-online",
        },
        { name: "Html to pdf", image: icon4, link: "/convert-html-to-pdf" },
        {
          name: "Excel to pdf",
          image: icon5,
          link: "/excel-to-pdf-converter-online-free",
        },
      ],
    },
    {
      title: "Convert Form pdf",
      items: [
        { name: "Pdf to word", image: icon6, link: "/pdf-to-word-converter" },
        { name: "pdf to jpg", image: icon7, link: "/pdf-to-jpg-converter" },
        {
          name: "pdf to excel",
          image: icon8,
          link: "/pdf-to-excel-converter-online-free",
        },
        {
          name: "pdf to powerpoint",
          image: icon9,
          link: "/pdf-to-powerpoint-converter",
        },
        { name: "pdf to pdf/A", image: icon10, link: "/convert-pdf-to-pdfa" },
      ],
    },
  ];

  return (
    <div className="">
      <nav className="w-full bg-blue-700 shadow-lg text-white px-4 py-3">
        <div className="flex justify-between items-center">
          {/* 🔹 Logo & Navigation List */}
          <div className="flex items-center space-x-6">
            {/* 🏠 Logo */}
            <div className="w-20">
              <Link to={"/"}>
                <img src={logo} alt="Logo" className="w-full" />
              </Link>
            </div>

            {/* 🖥️ Desktop Navigation (Hidden on Small Screens) */}
            <div className="hidden sm:flex space-x-6">
              <Link to={"/"}>
                <button>Home</button>
              </Link>
              <Link to={"/merge-pdf-in-one-file-online"}>
                <button>Merge PDF</button>
              </Link>
              <Link to={"/split-pdf-online-free"}>
                <button>Split PDF</button>
              </Link>
              <Link to={"/compress-pdf-online-free"}>
                <button>Compress PDF</button>
              </Link>

              {/* 📂 Dropdown Menu */}
              <div className="relative group">
                <button className="flex items-center">
                  Convert PDF <FaSortDown className="ml-1" />
                </button>
                <div className="invisible opacity-0 absolute group-hover:visible group-hover:opacity-100 top-8 left-0 w-[30rem] bg-white border border-gray-300 shadow-lg p-4 transition-all duration-75 ease-linear">
                  <div className="grid grid-cols-2 gap-4 text-black">
                    {data.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-medium text-gray-800 mb-2 uppercase hover:text-blue-500 pl-5">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <Link to={item.link} key={itemIndex}>
                              <li className="flex items-center text-sm cursor-pointer hover:text-blue-500 py-2 pl-10">
                                {typeof item === "object" ? (
                                  <>
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-5 h-5 object-contain mr-2"
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
              </div>
            </div>
          </div>

          {/* 🔒 Login, Sign Up & Mobile Menu */}
          <div className="flex space-x-2">
            {/* Hidden on Small Screens */}
            <div className="hidden sm:flex space-x-2">
              <button>Login</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign Up
              </button>
            </div>

            {/* 📱 Mobile Menu Button (Only visible on small screens) */}
            <button>
              <FiTool className="sm:hidden text-2xl"/>
            </button>
            <button>
              <FaCircleUser className="sm:hidden text-2xl" />
            </button>
            <button
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>

        {/* 📱 Mobile Navigation (Hidden on Large Screens) */}
        {isMenuOpen && (
          <div className="sm:hidden flex flex-col space-y-3 mt-3 text-center">
            <Link to={"/"}>
              <button>Home</button>
            </Link>
            <Link to={"/merge-pdf-in-one-file-online"}>
              <button>Merge PDF</button>
            </Link>
            <Link to={"/split-pdf-online-free"}>
              <button>Split PDF</button>
            </Link>
            <Link to={"/compress-pdf-online-free"}>
              <button>Compress PDF</button>
            </Link>
            <div className="relative group ml-24">
              {/* Convert PDF Button (Hoverable) */}
              <button className="flex">
                Convert PDF <FaSortDown className="ml-1" />
              </button>

              {/* Dropdown Menu - Hidden by default, visible on hover */}
              <div className="absolute left-0 mt-2 bg-white text-black border border-gray-300 shadow-lg p-8 rounded-md opacity-0 invisible transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:visible">
                {data.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-medium text-gray-800 mb-2 uppercase hover:text-blue-500 py-3">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <Link to={item.link} key={itemIndex}>
                          <li className="flex items-center text-sm cursor-pointer hover:text-blue-500 py-1">
                            {typeof item === "object" ? (
                              <>
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-5 h-5 object-contain mr-2"
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

            {/* <button>Login</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign Up
            </button> */}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
