import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student', // Default role for signup
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post('/login', {
          username: formData.username,
          password: formData.password,
        });
        // Store token and user info in local storage
        localStorage.setItem('token', response.data.access_token);
        navigate('/'); // Redirect after login
      } else {
        const response = await axios.post('/register', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });
        setMessage(response.data.msg);
      }
    } catch (error:any) {
      setMessage(error.response?.data?.msg || 'Something went wrong');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Redirect after logout
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        {!isLogin && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        {!isLogin && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
              <option value="superuser">Super Admin</option>
            </select>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="mt-4 text-sm">
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:underline ml-1"
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      {message && <p className="mt-4 text-red-600">{message}</p>}
      {/* Logout button, only shown if the user is logged in */}
      {localStorage.getItem('token') && (
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Auth;
