import React from 'react';
import './Footer.css';  
import { SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src="/assets/logo.webp" alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <p className="footer-address">
        <SiGooglemaps className='footer-icon'/>6000 Live Oak Parkway, <br/>Suite 108 B
        Norcross,<br/> Georgia USA 30093
        </p>
        
        <p className="footer-email">
        <li>
             <FaPhone className='footer-icon'/> +1 (770) 284 5779
            </li>
        <li>

         <MdOutlineMailOutline className='footer-icon'/> contact.us@thinkitech.com  
        </li>
        </p>
      </div>
    </footer>
  );
};

export default Footer;