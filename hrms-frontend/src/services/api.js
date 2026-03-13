import axios from 'axios';
import { store } from '../store';
import { logout, refreshTokenSuccess } from '../store/authSlice';

const api = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const state = store.getState();
        const refreshToken = state.auth.refreshToken;
        if (!refreshToken) {
            store.dispatch(logout());
            return Promise.reject(error);
        }
        const res = await axios.post('/auth/refresh', { token: refreshToken });
        if (res.data?.accessToken) {
            store.dispatch(refreshTokenSuccess({ accessToken: res.data.accessToken, refreshToken: res.data.refreshToken || refreshToken }));
            originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
            return api(originalRequest);
        } else {
             store.dispatch(logout());
        }
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
