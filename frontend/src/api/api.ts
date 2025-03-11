import axios from 'axios';

// Create an Axios instance with the Spring Boot backend URL
const axiosInstance = axios.create({
  baseURL: "https://canvas-xkxr.onrender.com", // Use Vite's env variable
  timeout: 1000,                             // Optional: Add a timeout
  headers: {
    'Content-Type': 'application/json',      // Set the headers, like Content-Type
  },
});

export default axiosInstance;