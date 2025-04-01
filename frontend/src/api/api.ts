import axios from 'axios';

// Create an Axios instance with the Spring Boot backend URL
const axiosInstance = axios.create({
  baseURL: "https://canvas-xkxr.onrender.com", 
  timeout: 1000,                             
  headers: {
    'Content-Type': 'application/json',      
  },
});

export default axiosInstance;