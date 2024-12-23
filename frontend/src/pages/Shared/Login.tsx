import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authentication';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin} = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="text-center mb-6">
        <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1729158010/crest_x1gutu.jpg"
          alt="Organization Logo" className="mx-auto w-32 h-32"/>
        <h1 className="text-xl font-light italic mt-4 text-gray-800">
          Sign in with your Morgan Technical Training account
        </h1>
      </div>

      {/* Login Form */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          </div>
          <button type="button" onClick={() => handleLogin(email, password)} className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>
            <a href="/password-reset" className="text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </p>
          <p className="mt-3">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline font-medium">
              Sign up
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

export default Login;
