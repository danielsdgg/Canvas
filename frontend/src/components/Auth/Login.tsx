// src/components/Auth/Login.tsx
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/auth/login', { username, password });
            setMessage(response.data.msg);
            navigate('/dashboard'); // Navigate to dashboard on successful login
        } catch (error) {
            const axiosError = error as AxiosError<{ msg: string }>;
            setMessage(axiosError.response?.data.msg || "Failed to log in");
        }
    };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
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
            Login
          </button>
        </form>
        {message && <p className="text-red-500 text-center mt-4">{message}</p>}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
