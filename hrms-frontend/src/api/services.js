import api from './axios';

export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  refresh: (refreshToken) => api.post('/auth/refresh', { refreshToken }),
};

export const userApi = {
  getUser: (userId) => api.get(`/users/${userId}`),
};

export const contactApi = {
  getContacts: (userId) => api.get(`/contacts/user/${userId}`),
};

export const adminApi = {
  register: (data) => api.post('/admin/register', data),
};
