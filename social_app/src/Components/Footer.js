import React from 'react';
import { Instagram, GitHub, LinkedIn, Email } from '@mui/icons-material';
import Logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gradient-to-t from-[#ff7e5f] to-[#feb47b] text-white py-2 bord">
      <div className="container mx-auto px-6 lg:px-12 space-y-4">
        <Link to="/">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="w-28 h-28" />
        </div>
        </Link>
        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram fontSize="inherit" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
            aria-label="GitHub"
          >
            <GitHub fontSize="inherit" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="inherit" />
          </a>
          <a
            href="mailto:contact@yourcompany.com"
            className="hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <Email fontSize="inherit" />
          </a>
        </div>
        <div className="flex justify-center space-x-8 text-lg font-medium">
          <Link to="/about">
          <div className="hover:text-red-500 transition-colors">
            About Us
          </div>
          </Link>
          <Link to="/contact">
          <div className="hover:text-red-500 transition-colors">
            Contact Us
            </div>
            </Link>
        </div>
        <p className="text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
