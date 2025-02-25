import { createContext, ReactNode, useContext } from 'react'; 
import { UserResponse } from '../models/responses/User';


// Define AuthContextType interface
export interface AuthContextType {
    isLoading: boolean;
    handleLogin: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
    handleLogout: () => void;
    userToken: string | null;
    userData: UserResponse | null;
    userRole: string | null;


}

// Create AuthContext with default values
export const AuthContext = createContext<AuthContextType>({
    isLoading: false,
    handleLogin: async () => ({ success: false, message: 'Default login function' }),
    handleLogout: () => {},
    userToken: null,
    userData: null,
    userRole: null, 


});

// Define AuthProviderProps interface for children
export interface AuthProviderProps {
    children: ReactNode; 
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};