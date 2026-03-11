import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  userId: localStorage.getItem('userId') || null,
  roles: localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : [],
  isAuthenticated: !!localStorage.getItem('accessToken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken, userId, roles } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.userId = userId;
      state.roles = roles || [];
      state.isAuthenticated = true;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userId', userId);
      localStorage.setItem('roles', JSON.stringify(roles || []));
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.userId = null;
      state.roles = [];
      state.isAuthenticated = false;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('roles');
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    }
  },
});

export const { setCredentials, logout, updateAccessToken } = authSlice.actions;

export default authSlice.reducer;
