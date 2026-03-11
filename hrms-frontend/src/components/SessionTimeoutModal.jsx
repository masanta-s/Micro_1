import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { logout, setCredentials } from '../store/authSlice';
import { authApi } from '../api/services';

const WARNING_TIME = 60; // Show warning 60 seconds before expiration

const SessionTimeoutModal = () => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken, isAuthenticated } = useSelector((state) => state.auth);

  const [showWarning, setShowWarning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const timerRef = useRef(null);
  const countdownRef = useRef(null);

  const calculateTimeLeft = () => {
    if (!accessToken) return null;
    try {
      const decoded = jwtDecode(accessToken);
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp - currentTime;
    } catch (error) {
      return null;
    }
  };

  const startTimers = () => {
    clearTimers();

    const timeUntilExpiry = calculateTimeLeft();

    if (timeUntilExpiry === null || timeUntilExpiry <= 0) {
      if (isAuthenticated) dispatch(logout());
      return;
    }

    const timeUntilWarning = timeUntilExpiry - WARNING_TIME;

    if (timeUntilWarning > 0) {
      timerRef.current = setTimeout(() => {
        setShowWarning(true);
        setTimeLeft(WARNING_TIME);

        countdownRef.current = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              handleLogout();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

      }, timeUntilWarning * 1000);
    } else {
      // If already within warning window
      setShowWarning(true);
      setTimeLeft(timeUntilExpiry);
      countdownRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleLogout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
  };

  useEffect(() => {
    if (isAuthenticated && accessToken) {
      startTimers();
    } else {
      clearTimers();
      setShowWarning(false);
    }

    return () => clearTimers();
  }, [isAuthenticated, accessToken]);

  const handleLogout = () => {
    clearTimers();
    setShowWarning(false);
    dispatch(logout());
  };

  const handleRefresh = async () => {
    try {
      const response = await authApi.refresh(refreshToken);
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

      const decoded = jwtDecode(newAccessToken);
      dispatch(setCredentials({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        userId: decoded.sub,
        roles: decoded.roles || []
      }));

      setShowWarning(false);
      clearTimers();
      startTimers();
    } catch (error) {
      console.error('Refresh token failed:', error);
      handleLogout();
    }
  };

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Session Expiring Soon</h2>
        <p className="text-gray-600 mb-6">
          Your session will expire in <span className="font-bold text-red-600">{timeLeft}</span> seconds.
          Do you want to continue working?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Log Out
          </button>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeoutModal;
