import React from "react";
import { Link } from "react-router-dom";
import ParticlesComponent from "./Particles";

const ContactUs = () => {
  return (
    <div className={`relative h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-600 transition-opacity duration-1000`}>
      <ParticlesComponent />
      <div className="relative z-10 min-h-screen flex items-center justify-center h-screen w-screen">
        <div className="max-w-xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Have questions or feedback? We’d love to hear from you! Fill out the form below or reach out to us directly.
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

          <div className="bg-white text-gray-900 p-8 rounded-xl shadow-xl">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f] focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f] focus:border-transparent"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-2 block w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f] focus:border-transparent"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#ff7e5f] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#ff4400] transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
