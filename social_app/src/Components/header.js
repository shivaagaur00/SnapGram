import React from 'react';
import Logo from './../Assets/Logo.png';
import { Link } from 'react-router-dom';
const Header = ({ isSignUp, toggleForm }) => {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-gradient-to-tl from-[#ff7e5f] to-[#feb47b] shadow-lg">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-16 h-16 rounded-full shadow-md" />
        <h1 className="ml-4 text-2xl font-extrabold text-white tracking-wide">
          SnapGram
        </h1>
      </div>
      <nav className="flex items-center space-x-8">
        <Link to="/">        <button className="text-white text-lg font-medium border-2 border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#ff7e5f] transition-all duration-300 focus:outline-none">
          Home
        </button>
        </Link>
        <button
          onClick={toggleForm}
          className="px-6 py-2 text-lg font-semibold text-white bg-[#ff7e5f] rounded-full hover:bg-[#feb47b] shadow-lg focus:outline-none transition-all duration-300"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
