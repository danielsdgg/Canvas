// src/services/authService.ts
import api from './api';
import axios from 'axios';

export const login = async (email: string, password: string) => {
    const response = await api.post('http://localhost:5000/auth/login', { email, password });
    return response.data;
};

export const register = async (email: string, username: string, password: string) => {
    const response = await axios.post('http://localhost:5000/auth/register', {
        email,
        username,
        password,
    });
    return response.data;
};

