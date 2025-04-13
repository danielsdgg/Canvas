import axios from 'axios';

// Create an Axios instance with the Spring Boot backend URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", 
  timeout: 1000,                             
  headers: {
    'Content-Type': 'application/json',      
  },
});

export default axiosInstance;