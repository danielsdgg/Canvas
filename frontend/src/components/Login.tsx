import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/authContext';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin} = useContext(AuthContext);

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('/login', { email, password });
  //     const { role } = response.data;

  //     localStorage.setItem('userRole', role);
  //     alert('Login successful');
  //   } catch (error) {
  //     alert('Login failed');
  //   }
  // };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleLogin(email, password)}>Login</button>
    </div>
  );
};

export default Login;
