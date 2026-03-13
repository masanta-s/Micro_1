import React from 'react';
import { useSelector } from 'react-redux';

export default function Sidebar({ activeTab }) {
  const { user } = useSelector((state) => state.auth);
  const tabs = [
    { id: 'personal', icon: 'person', label: 'Personal Data' },
    { id: 'job', icon: 'work_history', label: 'Job Data' },
    { id: 'compensation', icon: 'payments', label: 'Compensation' },
    { id: 'performance', icon: 'track_changes', label: 'Performance and Goals' },
    { id: 'succession', icon: 'groups', label: 'Succession' },
    { id: 'learning', icon: 'school', label: 'Learning and Development' },
    { id: 'details', icon: 'badge', label: 'Employee Details' },
    { id: 'talent', icon: 'stars', label: 'Talent Details' },
    { id: 'perf_details', icon: 'analytics', label: 'Performance Details' },
    { id: 'comp_statements', icon: 'receipt_long', label: 'Compensation Statements' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 flex flex-col hidden lg:flex">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden shadow-sm mb-3">
            <span className="material-symbols-outlined text-4xl text-primary">person</span>
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white">{user?.sub || 'User'}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Senior Software Engineer</p>
        </div>
        <button className="mt-4 w-full px-3 py-2 bg-primary text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-sm">open_in_new</span> All Actions
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto sidebar-scroll p-4 space-y-1">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <a
              key={tab.id}
              href="#"
              className={
                isActive
                  ? 'flex items-center gap-3 px-3 py-2.5 text-sm font-bold bg-slate-100 dark:bg-slate-800 text-primary rounded-lg border-l-4 border-primary'
                  : 'flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors group'
              }
            >
              <span
                className={
                  isActive
                    ? 'material-symbols-outlined'
                    : 'material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors'
                }
              >
                {tab.icon}
              </span>
              {tab.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
