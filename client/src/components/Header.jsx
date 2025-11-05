// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // modern icons
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Left section - logo & title */}
        <div className="logo-section">
          <img src={logo} alt="Assignment Xpert’s Logo" className="logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register" className="register-button">Register</Link>

        </nav>

        {/* Mobile menu icon */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/booking" onClick={toggleMenu}>Booking</Link>
          <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/register" className="register-button" onClick={toggleMenu}>Register</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
