import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  // Using Vite proxy configured in vite.config.js instead of hardcoded baseURL
  baseURL: '/',
});

// Request interceptor to add the auth token header to requests
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
