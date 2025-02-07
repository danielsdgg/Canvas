import React, { useState } from "react";
// import { AuthContext } from "../context/authContext";
import { registerUser } from "../../services/User";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/morgan.jpg';


const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    emailAddress: "",
    password: "",
    roleId: 2, 
  });

  const navigate = useNavigate()

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault()
    registerUser(formData, navigate)
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="text-center mb-6">
        <img
          src={Logo}
          alt="Organization Logo"
          className="mx-auto w-32 h-32"
        />
        <h1 className="text-xl font-light italic mt-4 text-gray-800">
          Create your Morgan Technical Training account
        </h1>
      </div>

      {/* Sign Up Form */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Your username"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              name="lasstName"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Your username"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {/* <div>
            <label
              htmlFor="roleId"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="roleId"
              name="roleId"
              value={formData.roleId}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
            // onClick={() => handleSignup(formData)}
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline font-medium"
            >
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
