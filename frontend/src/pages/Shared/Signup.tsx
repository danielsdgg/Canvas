import React, { useState } from "react";
import { registerUser } from "../../services/User";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/morgan_ai.png';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    roleId: 2,
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if all required fields are filled
    const { firstName, lastName, emailAddress, phoneNumber, password } = formData;
    if (!firstName || !lastName || !emailAddress || !phoneNumber || !password) {
      setErrorMessage("All fields must be filled out to sign up.");
      return;
    }

    // Clear error message if all fields are filled
    setErrorMessage(null);
    registerUser(formData, navigate);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Sign Up Container */}
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md transform transition-all duration-500 animate-fade-in-up relative">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 flex items-center text-indigo-600 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 focus:outline-none"
        >
          <FaArrowLeft className="text-xl mr-2" /> Landing Page
        </button>

        {/* Header Section */}
        <div className="text-center mb-8">
          <img src={Logo} alt="Morgan LMS Logo" className="mx-auto w-16 h-24" />
          <h1 className="text-3xl font-bold text-indigo-600 mt-4">
            Create Your Morgan-LMS Account
          </h1>
          <p className="text-black italic mt-2 text-lg">
            Join Morgan Technical Training today
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-100/30 border border-red-500 rounded-lg text-red-600 text-center text-sm sm:text-base">
            {errorMessage}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-black mb-1">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+257123456789"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          {/* Uncomment and style the role selection if needed */}
          {/* <div>
            <label htmlFor="roleId" className="block text-sm font-medium text-black mb-1">
              Role
            </label>
            <select
              id="roleId"
              name="roleId"
              value={formData.roleId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="1">Admin</option>
              <option value="2">Instructor</option>
              <option value="3">Student</option>
            </select>
          </div> */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <div className="mt-6 text-sm text-black text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:text-indigo-400 hover:underline font-medium transition-colors duration-300">
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default SignUp;