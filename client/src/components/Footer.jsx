// src/components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - About */}
        <div className="footer-section about">
          <h3>Assignment Xpert’s</h3>
          <p>
            Empowering students and professionals with expert academic and
            corporate solutions. Excellence and integrity — every step of the way.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@assignmentxperts.com">info@assignmentxperts.com</a></p>
          <p>Phone: +1 (800) 234-5678</p>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="mailto:info@assignmentxperts.com"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Assignment Xpert’s. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
