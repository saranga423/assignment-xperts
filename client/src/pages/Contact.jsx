// src/pages/Contact.jsx
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions, project inquiries, or need assistance? 
          We’re here to help you every step of the way.
        </p>
      </header>

      {/* Main Content */}
      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Reach out through any of the methods below or fill out our contact form.</p>

          <ul>
            <li>
              <Mail className="icon" /> info@assignmentxperts.com
            </li>
            <li>
              <Phone className="icon" /> +1 (800) 234-5678
            </li>
            <li>
              <MapPin className="icon" /> 123 Academic Street, Knowledge City
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your full name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="5"
              required
            ></textarea>
          </label>

          <button type="submit" className="submit-btn">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
