// src/components/Auth/Register.tsx
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const naviagte = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
        const response = await axios.post('http://localhost:5000/auth/register', { username, password, email });
        setMessage(response.data.msg);
        naviagte('/dashboard')
      } catch (error) {
        const axiosError = error as AxiosError<{ msg: string }>;
        setMessage(axiosError.response?.data.msg || "Failed to register");
      }
      
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="border rounded-md w-full p-2 mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="border rounded-md w-full p-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="border rounded-md w-full p-2 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition">
            Register
          </button>
        </form>
        {message && <p className="text-red-500 text-center mt-4">{message}</p>}
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
