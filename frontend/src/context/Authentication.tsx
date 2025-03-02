import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, storeData, removeData } from '../hooks/idbHelpers';
import { AuthContext, AuthProviderProps } from './authContext';
import { UserResponse } from '../models/responses/User';
import { loginUser, logoutUser } from '../services/User';
import Alert from '../components/Alert';

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserResponse | null>(null);

  const handleLogin = async (emailAddress: string, password: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    try {
      const userdata = await loginUser(emailAddress, password, navigate);
      if (!userdata) {
        return { success: false, message: "Invalid credentials" };
      }
  
      await storeData("userToken", userdata.token);
      await storeData("userInfo", userdata);
      await storeData("refreshToken", userdata.refreshToken);
  
      setUserData(userdata);
      setUserToken(userdata.token ?? null);
      
      navigateApp(userdata);
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Login failed. Please try again." };
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      setUserToken(null);
      setUserData(null);
      await removeData('userToken');
      await removeData('userInfo');
      await removeData('refreshToken');
      logoutUser(navigate);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const usertoken = await getData('userToken');
      const userinfo = await getData('userInfo');

      if (userinfo && usertoken) {
        setUserToken(usertoken as string);
        setUserData(userinfo as UserResponse);
        navigateApp(userinfo as UserResponse);
      }
    } catch (error) {
      console.error('isLoggedIn error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateApp = (userData: UserResponse) => {
    try {
      if (userData?.userDetails?.role === 'STUDENT') {
        navigate('/dashboard');
      } else if (userData?.userDetails?.role === 'ADMIN') {
        navigate('/admin-dashboard');
      } else if (userData?.userDetails?.role === 'SUPERADMIN') {
        navigate('/superdashboard');
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };


  const refreshAccessToken = async () => {
    try {
      const currentRefreshToken = await getData('refreshToken');
      const userToken = await getData('userToken');
  
      // Validate the refresh token
      if (!currentRefreshToken || typeof currentRefreshToken !== 'string') {
        throw new Error('Refresh token not found or invalid.');
      }
  
      // Validate the user token
      if (!userToken || typeof userToken !== 'string') {
        throw new Error('User token not found or invalid.');
      }
  
      // Fetch new access token using a utility function
      const res = await fetch('http://localhost:8080/api/v1/users/refresh-token', {
        method: 'POST',
        headers: {
          'Authorization':` Bearer ${userToken}`,
          'Content-Type': 'application/json', // Add Content-Type
        },
        body: JSON.stringify({ refreshToken: currentRefreshToken }),
      });
  
      if (res) {
        const { token, refreshToken } = await res.json();
        // Store the new tokens locally
        await storeData('userToken', token);
        await storeData('refreshToken', refreshToken);
        console.log(token, refreshToken);
  
        // Update the state with the new token
        setUserToken(token);
        console.log(userToken);
      } else {
        throw new Error('Failed to refresh token.');
      }
    } catch (error) {
      console.error('Error refreshing access token:', error);
  
      // Log out the user if token refresh fails
      handleLogout();
    }
  };

  useEffect(() => {
    if (!userToken) return;
    const interval = setInterval(() => {
      refreshAccessToken();
    }, 15 * 60 * 1000); // 15 minutes

    return () => clearInterval(interval);
  }, [userToken]);

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        handleLogin,
        handleLogout,
        userToken,
        userData,
        userRole: userData?.userDetails?.role || null,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
