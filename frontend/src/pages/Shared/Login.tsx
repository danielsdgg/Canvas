import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authentication';
import Logo from '../../assets/morgan_ai.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api';
// import Alert from '../../components/Alert';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const { handleLogin, isLoading } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Check if email and password are filled
    if (!email || !password) {
      setErrorMessage("Both email and password must be filled out to log in.");
      return;
    }

    // Proceed with login if fields are filled
    const response = await handleLogin(email, password);

    if (!response.success) {
      setErrorMessage(response.message || "Invalid credentials");
    }
  };

  const handlePasswordReset = async () => {
    const url = axiosInstance.getUri() + "/api/v1/users/change-password";
    console.log(resetEmail, newpassword);
    const passwordRequest = {
      emailAddress: resetEmail,
      newPassword: newpassword
    };
    console.log(passwordRequest);
    setLoading(true);
    
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passwordRequest),
      });

      const contentType = response.headers.get("content-type");
      
      if (!response.ok) {
        let errorMessage = "Failed to change password";
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } else {
          const errorText = await response.text();
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      setSuccessMessage('Password changed successfully');
      setTimeout(() => {
        setSuccessMessage('');
        setShowResetModal(false);
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('Password reset error:', error);
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Login Container */}
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
            Morgan-LMS Login
          </h1>
          <p className="text-black italic mt-2 text-lg">
            Sign in with your Morgan Technical Training account
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 p-3 bg-red-100/30 border border-red-500 rounded-lg text-red-600 text-center animate-fade-in">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-sm text-black text-center space-y-3">
          <p>
            <button
              onClick={() => setShowResetModal(true)}
              className="text-indigo-600 hover:text-indigo-400 hover:underline font-medium transition-colors duration-300"
            >
              Forgot your password?
            </button>
          </p>
          <p>
            Don’t have an account?{' '}
            <a href="/signup" className="text-indigo-600 hover:text-indigo-400 hover:underline font-medium transition-colors duration-300">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Password Reset Modal */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Reset Your Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
            <input
              type="password"
              placeholder="Enter new password"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
            <button
              onClick={handlePasswordReset}
              disabled={loading}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Change Password"}
            </button>
            <button
              onClick={() => setShowResetModal(false)}
              className="w-full mt-3 text-black hover:text-gray-900 hover:underline font-medium transition-colors duration-300"
            >
              Cancel
            </button>
            {message && (
              <p className="text-center mt-3 text-red-600 animate-fade-in">{message}</p>
            )}
            {successMessage && (
              <p className="text-center mt-3 text-green-600 animate-fade-in">{successMessage}</p>
            )}
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Login;