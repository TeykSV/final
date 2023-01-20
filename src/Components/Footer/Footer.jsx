import React from "react";
import "./footer.css";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <FaTelegram size="2rem" /> <FaWhatsapp size="2rem" />
        </div>
        <div>
          <b>Сделал Сергей Т</b>
        </div>
        <div>
          <FaPhone size="1rem" /> +9999999999
        </div>
      </div>
    </footer>
  );
};

export default Footer;