import React, { useState } from 'react';
import api from '../services/api';
import AdminLayout from '../layouts/AdminLayout';

export default function RegisterEmployee() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await api.post('/admin/register', {
        username: formData.username,
        password: formData.password
      });
      setSuccess('User successfully registered!');
      setFormData({ username: '', password: '', confirmPassword: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm font-medium mb-6">
        <a className="text-slate-500 hover:text-primary" href="#">Admin Operations</a>
        <span className="material-symbols-outlined text-slate-400 text-xs">chevron_right</span>
        <span className="text-slate-900 dark:text-white">New Registration</span>
      </nav>

      {/* Page Title Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Employee Registration</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Create a new organizational identity with system-wide <span className="text-primary font-semibold">ROLE_ADMIN</span> privileges.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Main Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-primary to-blue-400 relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute -bottom-10 left-8 p-1 bg-white dark:bg-slate-900 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">account_circle</span>
              </div>
            </div>
          </div>

          <form className="p-8 pt-16 flex flex-col gap-8" onSubmit={handleSubmit}>
            {/* Alerts */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg text-sm font-medium border border-red-100 dark:border-red-800">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 p-4 rounded-lg text-sm font-medium border border-emerald-100 dark:border-emerald-800">
                {success}
              </div>
            )}

            {/* Account Credentials Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">key</span>
                  Account Credentials
                </h3>
                <p className="text-sm text-slate-500">Enter the primary login details for the new administrator.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Username</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">alternate_email</span>
                    <input name="username" value={formData.username} onChange={handleChange} required className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-slate-900 dark:text-white" placeholder="e.g. saby01" type="text" />
                  </div>
                  <p className="text-[11px] text-slate-500">This will be used for system authentication.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Access Level</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">shield_person</span>
                    <select className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm font-medium text-slate-900 dark:text-white appearance-none outline-none disabled:opacity-50" disabled>
                      <option>ROLE_ADMIN (Full Access)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">lock</span>
                    <input name="password" value={formData.password} onChange={handleChange} required className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-slate-900 dark:text-white" placeholder="••••••••" type="password" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">verified_user</span>
                    <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-slate-900 dark:text-white" placeholder="••••••••" type="password" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Personal Information Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">contact_page</span>
                  Profile Details
                </h3>
                <p className="text-sm text-slate-500">Essential contact information and identifying details.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                  <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                  <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Email</label>
                  <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Department</label>
                  <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none">
                    <option>Administration</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date of Joining</label>
                  <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Employee ID</label>
                  <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" placeholder="HRMS-2024-001" type="text" />
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex items-center justify-end gap-4 mt-4">
              <button className="px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700" type="button" onClick={() => setFormData({username: '', password: '', confirmPassword: ''})}>
                Cancel
              </button>
              <button disabled={loading} className="flex items-center gap-2 px-8 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-70" type="submit">
                {loading ? <span className="material-symbols-outlined text-base animate-spin">refresh</span> : <span className="material-symbols-outlined text-base">how_to_reg</span>}
                Register Administrator
              </button>
            </div>
          </form>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">security</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Secure Access</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">All ROLE_ADMIN accounts require two-factor authentication (2FA) for login after the initial setup.</p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-4">
            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">sync</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Active Directory</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Credentials created here will automatically sync with the corporate LDAP system within 15 minutes.</p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-4">
            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">history</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Audit Trail</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Your administrator ID will be logged as the creator of this account for regulatory compliance.</p>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </AdminLayout>
  );
}
