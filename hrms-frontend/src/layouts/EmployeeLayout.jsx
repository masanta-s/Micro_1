import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function EmployeeLayout({ children, activeTab = 'details' }) {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
