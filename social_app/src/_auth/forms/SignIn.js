import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../API/SigninSignUP';

const SigninForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };

    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.values(newErrors).some((error) => error !== '')) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await getUser(formData); 
      console.log(response.data);

      setErrors({ email: '', password: '' });
      navigate('/user'); 
    } catch (error) {
      setErrors({ email: 'Invalid email or password', password: '' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-4/5">
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

      <div className="mb-6">
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

      <button 
        type="submit" 
        className="w-full bg-[#ff7e5f] text-white p-3 rounded-lg hover:bg-[#feb47b] transition duration-300 ease-in-out"
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="mt-4 text-center">
        <button 
          type="button" 
          onClick={toggleForm} 
          className="text-[#feb47b] hover:text-[#ff7e5f]"
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
