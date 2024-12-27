import React, { useState, useEffect } from 'react';
import SigninForm from './forms/SignIn';
import SignupForm from './forms/SignUp';
import BackgroundImage from '../Assets/BG5.webp';
import Header from '../Components/header';

const AuthHome = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header
        isSignUp={isSignUp}
        toggleForm={() => setIsSignUp(!isSignUp)}
      />
      <div className="flex flex-1">
        {/* Form Section */}
        <div className="w-full sm:w-2/5 bg-gradient-to-tl from-[#ff7e5f] to-[#feb47b] flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-md">
            {isSignUp ? (
              <SignupForm toggleForm={() => setIsSignUp(false)} />
            ) : (
              <SigninForm toggleForm={() => setIsSignUp(true)} />
            )}
          </div>
        </div>
        <div className="w-0 sm:w-3/5 bg-gradient-to-tl from-[#ff7e5f] to-[#feb47b] flex items-center justify-center relative hidden sm:block">
          <div
            className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          >
            <img
              src={BackgroundImage}
              alt="Background"
              className="w-full h-full object-cover transition-transform "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHome;
