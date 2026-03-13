import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl">corporate_fare</span>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">HRMS Solutions</h2>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">
                My Employee Profile
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </nav>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4 max-w-xl">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 dark:bg-slate-800 rounded-lg text-sm placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                placeholder="Search employee..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden cursor-pointer" onClick={handleLogout} title="Logout">
                <span className="material-symbols-outlined text-primary text-sm">person</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
