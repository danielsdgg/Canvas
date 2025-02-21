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

 

  const handleLogin = async (emailAddress: string, password: string): Promise<boolean> => { 
    setIsLoading(true);
    try {
        const userdata = await loginUser(emailAddress, password, navigate);

        if (!userdata) {
            return false; 
        }

        setUserData(userdata);
        setUserToken(userdata.token ?? null);
        
        return true; 
    } catch (error) {
        console.error('Login error:', error);
        return false; 
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
    if (userData?.role === "STUDENT"){
      navigate("/dashboard")
    } else if (userData?.role === "ADMIN"){
      navigate('/admin-dashboard')
    } else if (userData?.role === 'superadmin'){
      navigate('/superdashboard')
    }
  }
  

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isLoading, 
      handleLogin, 
      handleLogout, 
      userToken, 
      userData, 
      userRole: userData?.role || null // <-- Extract userRole from userData
    }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };