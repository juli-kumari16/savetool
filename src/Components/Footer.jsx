import React from "react";

const Footer = () => {
  return (
    <div className="mt-24 bg-customGray px-6 sm:px-10 lg:px-52">
      <div className="flex flex-col lg:flex-row justify-between mt-10 pt-10 pb-10 gap-8 lg:gap-0">
        <div className="">
          <h3 className="font-bold text-blue-600 text-lg">SaveTools</h3>
          <ul className="pt-3 text-gray-700 text-base">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-600 cursor-pointer">Security</li>
            <li className="hover:text-blue-600 cursor-pointer">Tools</li>
            <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-blue-600 text-lg">About Us</h3>
          <ul className="pt-3 text-gray-700 text-base">
            <li className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Term & Conditions
            </li>
          </ul>
        </div>
        {/* <div>
          <h3>Help</h3>
          <ul>
            <li>FAQ</li>
            <li>Tools</li>
          </ul>
        </div> */}
        <div>
          <h3 className="font-bold text-blue-600 text-lg">Company</h3>
          <ul className="pt-3 text-gray-700 text-base">
            <li className="hover:text-blue-600 cursor-pointer">Our Story</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Legal & Privacy
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="mt-16">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 text-lg">
            Subscribe
          </button>
        </div>
        {/* <button className="border rounded bg-blue-600 text-white">Subscribe</button> */}
      </div>
    </div>
  );
};

export default Footer;
