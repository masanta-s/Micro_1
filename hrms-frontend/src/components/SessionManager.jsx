import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, refreshTokenSuccess } from '../store/authSlice';
import api from '../services/api';
import { jwtDecode } from 'jwt-decode';

export default function SessionManager() {
  const { accessToken, refreshToken, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showWarning, setShowWarning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let warningTimer;
    let countdownInterval;

    if (isAuthenticated && accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        const issueTime = decodedToken.iat * 1000;
        const expiryTime = decodedToken.exp * 1000;
        const totalLifetime = expiryTime - issueTime;
        const warningThreshold = totalLifetime / 3; // 1/3 of total lifetime

        const now = Date.now();
        const timeUntilWarning = (expiryTime - warningThreshold) - now;

        if (timeUntilWarning > 0) {
          warningTimer = setTimeout(() => {
            setShowWarning(true);
            setTimeLeft(Math.floor(warningThreshold / 1000));

            countdownInterval = setInterval(() => {
              setTimeLeft((prev) => {
                if (prev <= 1) {
                  clearInterval(countdownInterval);
                  handleLogout();
                  return 0;
                }
                return prev - 1;
              });
            }, 1000);
          }, timeUntilWarning);
        } else if (now < expiryTime) {
          // Token is already in the warning window
          setShowWarning(true);
          setTimeLeft(Math.floor((expiryTime - now) / 1000));

          countdownInterval = setInterval(() => {
             setTimeLeft((prev) => {
                if (prev <= 1) {
                  clearInterval(countdownInterval);
                  handleLogout();
                  return 0;
                }
                return prev - 1;
              });
          }, 1000);
        } else {
            // Token expired
            handleLogout();
        }
      } catch (error) {
        console.error("Error parsing token:", error);
        handleLogout();
      }
    }

    return () => {
      clearTimeout(warningTimer);
      clearInterval(countdownInterval);
    };
  }, [accessToken, isAuthenticated, dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    setShowWarning(false);
    navigate('/login');
  };

  const handleRefresh = async () => {
    try {
      const response = await api.post('/auth/refresh', { token: refreshToken });
      if (response.data?.accessToken) {
        dispatch(refreshTokenSuccess({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken || refreshToken
        }));
        setShowWarning(false);
      } else {
        handleLogout();
      }
    } catch (error) {
      handleLogout();
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 max-w-sm w-full mx-4">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">timer</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Session Expiring Soon</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              For your security, your session will automatically expire in <strong className="text-slate-900 dark:text-white">{formatTime(timeLeft)}</strong>.
            </p>
          </div>
          <div className="flex w-full gap-3 mt-4">
            <button
              onClick={handleLogout}
              className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors"
            >
              Sign Out
            </button>
            <button
              onClick={handleRefresh}
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium transition-colors shadow-sm"
            >
              Keep on Working
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
