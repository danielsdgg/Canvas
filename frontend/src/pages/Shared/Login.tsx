import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authentication';
import Logo from '../../assets/morgan.jpg';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  
  const { handleLogin } = useContext(AuthContext);

  const handlePasswordReset = async () => {
    const url = axiosInstance.getUri() + "/api/v1/users/change-password";
    console.log(resetEmail, newpassword);
    const passwordRequest = {
        emailAddress: resetEmail,
        newPassword: newpassword
    };
    console.log(passwordRequest);
    setIsLoading(true);
    
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
            
            // Check if response is JSON
            if (contentType && contentType.includes("application/json")) {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } else {
                const errorText = await response.text();
                errorMessage = errorText || errorMessage;
            }

            throw new Error(errorMessage);
        }

        // Check if the response is JSON before parsing
        let data;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = { message: await response.text() };
        }

        setSuccessMessage('Password changed successfully');
        setTimeout(() => {
            setSuccessMessage('');
            setShowResetModal(false); // Close modal
            navigate('/login'); // Redirect to login
        }, 3000);
      } catch (error) {
        console.error('Password reset error:', error);
        
        // Ensure error is an instance of Error before accessing message
        if (error instanceof Error) {
            setMessage(error.message);
        } else {
            setMessage('An unknown error occurred');
        }
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="text-center mb-6">
        <img src={Logo} alt="Organization Logo" className="mx-auto w-32 h-32" />
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
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com" className="w-full mt-1 p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" className="w-full mt-1 p-3 border border-gray-300 rounded-lg" />
          </div>
          <button type="button" onClick={() => handleLogin(email, password)}
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>
            <button onClick={() => setShowResetModal(true)} className="text-blue-500 hover:underline">
              Forgot your password?
            </button>
          </p>
          <p className="mt-3">
            Don’t have an account? <a href="/signup" className="text-blue-500 hover:underline font-medium">Sign up</a>
          </p>
        </div>
      </div>

      {/* Password Reset Modal */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
            <input type="email" placeholder="Enter your email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg" />
            <input type="password" placeholder="Enter new password" value={newpassword} onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg" />
           <button onClick={handlePasswordReset} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
    Change Password
</button>

            <button onClick={() => setShowResetModal(false)} className="w-full mt-2 text-gray-700 hover:underline">
              Cancel
            </button>
            {message && <p className="text-center mt-3 text-green-500">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;