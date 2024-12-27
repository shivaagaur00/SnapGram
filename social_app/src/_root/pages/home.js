import React, { useState, useEffect } from 'react';
import Logo from '../../Assets/Logo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ParticlesComponent from '../../Components/Particles';
import { Link } from 'react-router-dom';
import header from '../../Components/header';
function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-600 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
    >
      <ParticlesComponent />
      <div className="relative z-10 min-h-screen flex items-center justify-center h-screen w-screen">
        <header></header>
        <section className="text-center p-10 lg:p-20 space-y-8 lg:space-y-12">
          <img
            src={Logo}
            alt="Logo"
            className="w-80 h-80 mb-8 mx-auto rounded-full shadow-lg transition-transform transform hover:scale-105"
          />
          <Link to="/Authentication">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg transform hover:scale-105"
            >
              Explore Now
              <ArrowForwardIcon />
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
