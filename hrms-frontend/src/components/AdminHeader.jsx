import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function AdminHeader() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-4 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">person_add</span>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold">Register New Employee</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input
            className="w-64 pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 outline-none text-slate-900 dark:text-white placeholder-slate-500"
            placeholder="Search system..."
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
        <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-6 cursor-pointer" onClick={handleLogout} title="Logout">
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">{user?.sub || 'Admin User'}</span>
            <span className="text-xs text-slate-500 font-medium">Super Admin</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/20 overflow-hidden">
            <span className="material-symbols-outlined text-primary text-xl">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
