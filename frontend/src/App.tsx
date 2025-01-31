import React from 'react';
import {  AuthProvider } from './context/Authentication';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  );
}

export default App;