import React, { useEffect, useState } from 'react';
import Portlet from './Portlet';
import { userApi } from '../api/services';
import { User } from 'lucide-react';

const UserPortlet = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await userApi.getUser(userId);
        setUserData(response.data);
      } catch (err) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return (
    <Portlet title="My Profile" className="h-full min-h-[250px]">
      {loading ? (
        <div className="flex justify-center items-center h-full text-gray-400">Loading...</div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : userData ? (
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md">
             <User size={48} />
          </div>
          <h4 className="text-xl font-bold text-gray-800">{userData.name || 'Unknown User'}</h4>
          <p className="text-sm text-gray-500 mb-6">User ID: {userData.userId}</p>

          {/* Placeholder for future fields */}
          <div className="w-full mt-auto bg-gray-50 p-3 rounded-md border border-gray-100">
             <div className="flex justify-between text-sm py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Department</span>
                <span className="text-gray-800">IT (Future)</span>
             </div>
             <div className="flex justify-between text-sm py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Manager</span>
                <span className="text-gray-800">N/A (Future)</span>
             </div>
             <div className="flex justify-between text-sm py-1">
                <span className="text-gray-500 font-medium">Location</span>
                <span className="text-gray-800">HQ (Future)</span>
             </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-500 text-center">No user data found.</div>
      )}
    </Portlet>
  );
};

export default UserPortlet;
