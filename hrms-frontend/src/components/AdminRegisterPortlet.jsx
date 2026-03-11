import React, { useState } from 'react';
import Portlet from './Portlet';
import { adminApi } from '../api/services';
import { ShieldCheck, PlusCircle } from 'lucide-react';

const AdminRegisterPortlet = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await adminApi.register(formData);
      setStatus({ type: 'success', message: 'User registered successfully!' });
      setFormData({ username: '', password: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Registration failed. Check credentials.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Portlet title="Admin Control Center" className="h-full min-h-[250px]">
      <div className="flex items-center text-blue-800 bg-blue-50 p-3 rounded-md mb-4 border border-blue-200 shadow-sm">
        <ShieldCheck size={24} className="mr-3 flex-shrink-0" />
        <span className="text-sm font-medium">Create New Employee</span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
            placeholder="Enter username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            placeholder="Enter temporary password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center font-medium shadow-sm"
          disabled={loading}
        >
          {loading ? 'Registering...' : <><PlusCircle size={18} className="mr-2" /> Register User</>}
        </button>

        {status && (
          <div className={`text-sm text-center p-2 rounded-md mt-2 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {status.message}
          </div>
        )}
      </form>
    </Portlet>
  );
};

export default AdminRegisterPortlet;
