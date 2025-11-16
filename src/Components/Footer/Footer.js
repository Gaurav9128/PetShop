import React from "react";
import "./Footer.css";
import Logo from '../../assets/images/logo1.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Content */}
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
          <p>
            Your trusted partner in digital innovation. We build reliable and modern web solutions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Jaipur, Rajasthan, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 ADS Tech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
