import React from 'react';

export default function AdminSidebar() {
  return (
    <aside className="flex h-full w-72 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
      <div className="flex flex-col h-full p-4 gap-6">
        <div className="flex items-center gap-3 px-2">
          <div className="bg-primary rounded-lg p-2 text-white">
            <span className="material-symbols-outlined">corporate_fare</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-none">HRMS Solutions</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mt-1">Admin Portal</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1 h-full">
          <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Employee Directory</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-sm font-medium">Payroll</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-sm font-medium">Attendance</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-lg" href="#">
            <span className="material-symbols-outlined">admin_panel_settings</span>
            <span className="text-sm font-semibold">Admin Operations</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors mt-auto" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}
