import React, { useContext } from 'react';
import './App.css'
import { AuthContext, AuthProvider } from './context/Authentication';
import AppRoutes from './routes/AppRoutes';

function App() {

  const {userToken} = useContext(AuthContext)


  
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  );
}

export default App;