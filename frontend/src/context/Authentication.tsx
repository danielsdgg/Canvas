import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../hooks/idbHelpers';
import { AuthContext, AuthProviderProps } from './authContext';
import { UserResponse } from '../models/responses/User';
import { loginUser, logoutUser } from '../services/User';


const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserResponse | null>(null);

 

  const handleLogin = async (emailAddress: string, password: string) => { 
    setIsLoading(true);
    try {
        const userdata = await loginUser(emailAddress, password, navigate);

        // Set user data only if userdata is not undefined
        setUserData(userdata ?? null); // If userdata is undefined, set it as null

        // Set user token only if userdata?.token is not undefined
        setUserToken(userdata?.token ?? null); // If token is undefined, set it as null

    } catch (error) {
        console.error('Login error:', error);
    } finally {
        setIsLoading(false);
    }
};


  const handleLogout = () => {
    try {
      setUserToken(null);
      setUserData(null);
      logoutUser(navigate);
      setIsLoading(false);
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
  
      // console.log('Retrieved token:', usertoken);
      // console.log('Retrieved user info:', userinfo);
  
      if (userinfo) {
        setUserToken(usertoken as string);
        setUserData(userinfo as UserResponse);
      }

      navigateApp(userinfo as UserResponse)

      
      setIsLoading(false);
    } catch (error) {
      console.error('isLoggedIn error:', error);
    }
  };

  const navigateApp = (userData:UserResponse) => {
    if (userData?.role === "client"){
      navigate("/dashboard")
    } else if (userData?.role === "admin"){
      navigate('/admin-dashboard')
    } else if (userData?.role === 'superadmin'){
      navigate('/superdashboard')
    }
  }
  

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, handleLogin, handleLogout, userToken, userData }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };