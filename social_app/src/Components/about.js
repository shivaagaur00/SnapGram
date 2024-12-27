import React from "react";
import { Link } from "react-router-dom";
import ParticlesComponent from "./Particles";

const About = () => {
  return (
    <div className={`relative h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-600 transition-opacity duration-1000`}>
      <ParticlesComponent />
      <div className="relative z-10 min-h-screen flex items-center justify-center h-screen w-screen">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Us</h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Welcome to SnapGram, your go-to platform for sharing moments, staying connected with friends, and exploring exciting content from around the world. Our mission is to bring people closer together by enabling them to express themselves and share their stories.
            </p>
          </div>

          <div className="text-center mb-6">
            <Link
              to="/"
              className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition-all"
            >
              Go Back
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
              <p className="leading-relaxed text-center">
                We strive to create a platform that empowers individuals to share their stories and connect with others through engaging content.
              </p>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our Vision</h2>
              <p className="leading-relaxed text-center">
                To be the world's leading platform for meaningful connections and self-expression, fostering a global community of creativity and positivity.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              SnapGram is powered by a passionate team of developers, designers, and innovators committed to creating an exceptional user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
