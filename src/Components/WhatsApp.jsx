import React from "react";
import whatsappIcon from "../images/whatsAppImg.png"; // Ensure correct image path

const WhatsApp = () => {
  const phoneNumber = "+919060636227"; // Ensure there are NO spaces
  const message = encodeURIComponent(
    "Hi! I want to know more about the website you offer. Could you please share the details? Thank you!"
  ); // Pre-filled message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-3 bg-green-500 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all sm:bottom-6 sm:right-6 w-14 h-14 flex items-center justify-center"
      style={{ zIndex: 50 }}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-28" />
    </a>
  );
};

export default WhatsApp;
