import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../API/SigninSignUP';

const SignupForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
    bio: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  // Handle input change for fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { username: '', email: '', password: '', confirmPassword: '' };

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.values(newErrors).some((error) => error !== '')) {
      setErrors(newErrors);
      return;
    }

    try {
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSubmit.append(key, formData[key]);
      });

      const response = await registerUser(formDataToSubmit);
      if (response && response.data) {
        console.log(response.data); // Logs the mock response data
        navigate('/');
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-4/5">
      {/* Username Field */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-[#feb47b]">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 border border-[#feb47b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-[#feb47b]">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-[#feb47b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-[#feb47b]">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-[#feb47b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      {/* Confirm Password Field */}
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-[#feb47b]">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-3 border border-[#feb47b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-[#ff7e5f] text-white p-3 rounded-lg hover:bg-[#feb47b] transition duration-300 ease-in-out">
        Sign Up
      </button>

      {/* Switch to Sign In */}
      <div className="mt-4 text-center">
        <button type="button" onClick={toggleForm} className="text-[#feb47b] hover:text-[#ff7e5f]">
          Already have an account? Sign In
        </button>
      </div>
    </form>
  );
};

export default SignupForm;