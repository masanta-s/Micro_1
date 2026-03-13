import React from 'react';
import { useSelector } from 'react-redux';
import EmployeeLayout from '../layouts/EmployeeLayout';

export default function EmployeeProfile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <EmployeeLayout activeTab="details">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="h-32 w-32 rounded-full ring-4 ring-background-light dark:ring-slate-800 bg-primary/20 flex items-center justify-center overflow-hidden shadow-lg">
                <span className="material-symbols-outlined text-6xl text-primary">person</span>
              </div>
              <button className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full shadow-md hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{user?.sub || 'User'}</h1>
                  <p className="text-primary font-medium text-lg">Senior Software Engineer</p>
                  <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">badge</span> Employee ID: E12345</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">location_on</span> Bangalore, India</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">apartment</span> Engineering Department</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <button className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">edit</span> Edit Profile
                  </button>
                  <button className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 border-t border-slate-100 dark:border-slate-800">
            <nav className="flex space-x-8 -mb-px">
              <a className="border-b-2 border-primary py-4 px-1 text-sm font-semibold text-primary" href="#">Overview</a>
              <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300" href="#">Employment Information</a>
              <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300" href="#">Payroll &amp; Benefits</a>
              <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300" href="#">Time Off</a>
              <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300" href="#">Documents</a>
            </nav>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Employee Details</h2>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                <h3 className="font-bold text-slate-900 dark:text-white">Personal Information</h3>
              </div>
              <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit_square</span></button>
            </div>
            <div className="p-5 flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-slate-500 dark:text-slate-400">Gender</span>
                <span className="font-medium text-slate-900 dark:text-white">Male</span>
                <span className="text-slate-500 dark:text-slate-400">Marital Status</span>
                <span className="font-medium text-slate-900 dark:text-white">Single</span>
                <span className="text-slate-500 dark:text-slate-400">Date of Birth</span>
                <span className="font-medium text-slate-900 dark:text-white">12 May 1992</span>
                <span className="text-slate-500 dark:text-slate-400">Nationality</span>
                <span className="font-medium text-slate-900 dark:text-white">Indian</span>
              </div>
            </div>
            <a className="p-3 text-center text-sm font-semibold text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-100 dark:border-slate-800" href="#">View All</a>
          </div>

          {/* Personal Contact Information */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contact_phone</span>
                <h3 className="font-bold text-slate-900 dark:text-white">Personal Contact</h3>
              </div>
              <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit_square</span></button>
            </div>
            <div className="p-5 flex-1 space-y-4">
              <div className="grid grid-cols-1 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Personal Email</p>
                  <p className="font-medium text-slate-900 dark:text-white">sabya.masanta@gmail.com</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Phone Number</p>
                  <p className="font-medium text-slate-900 dark:text-white">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Current Address</p>
                  <p className="font-medium text-slate-900 dark:text-white leading-relaxed">HSR Layout, Sector 2, Bangalore, KA, 560102</p>
                </div>
              </div>
            </div>
            <a className="p-3 text-center text-sm font-semibold text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-100 dark:border-slate-800" href="#">View All</a>
          </div>

          {/* Employment Information */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">work</span>
                <h3 className="font-bold text-slate-900 dark:text-white">Employment Info</h3>
              </div>
              <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit_square</span></button>
            </div>
            <div className="p-5 flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-slate-500 dark:text-slate-400">Hire Date</span>
                <span className="font-medium text-slate-900 dark:text-white">01 Jan 2020</span>
                <span className="text-slate-500 dark:text-slate-400">Job Code</span>
                <span className="font-medium text-slate-900 dark:text-white">SE-04</span>
                <span className="text-slate-500 dark:text-slate-400">Department</span>
                <span className="font-medium text-slate-900 dark:text-white">Product Engineering</span>
                <span className="text-slate-500 dark:text-slate-400">Work Type</span>
                <span className="font-medium text-slate-900 dark:text-white">Full-time</span>
              </div>
            </div>
            <a className="p-3 text-center text-sm font-semibold text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-100 dark:border-slate-800" href="#">View All</a>
          </div>

          {/* Work Contact Information */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">mail</span>
                <h3 className="font-bold text-slate-900 dark:text-white">Work Contact</h3>
              </div>
              <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit_square</span></button>
            </div>
            <div className="p-5 flex-1 space-y-4">
              <div className="grid grid-cols-1 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Work Email</p>
                  <p className="font-medium text-slate-900 dark:text-white">s.masanta@hrms-solutions.com</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Extension</p>
                  <p className="font-medium text-slate-900 dark:text-white">4052</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Office Seat</p>
                  <p className="font-medium text-slate-900 dark:text-white">BLR-HSR-04-A12</p>
                </div>
              </div>
            </div>
            <a className="p-3 text-center text-sm font-semibold text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-100 dark:border-slate-800" href="#">View All</a>
          </div>

          {/* Job Relationships */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">groups</span>
                <h3 className="font-bold text-slate-900 dark:text-white">Job Relationships</h3>
              </div>
              <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit_square</span></button>
            </div>
            <div className="p-5 flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img alt="Manager" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7qYatUCbN4M26oeLzkaJ174DSl2G8-Z6OrWxTHpo7D217wZVYc7sZXC8cUANbO0LRCst1cfKwSjNOfMWUPj5nF-n4PhsmNhiILQxEa2O634Femmv_OwM-mqxgpkUEU6TdsBbV-M5OaXWbyKDZvzDl23ReIYly_ZwQU2AZcOs1KUSQ5XQZlDzMpL6JDTl4wRKrfOPp9qlX0hRIBMq-EABI82frhcndf8HMVbDmz9hPSeqynY7FilcBLz23iHNJ0jyHfvqg--ziOwY" />
                </div>
                <div className="text-sm">
                  <p className="text-slate-500 dark:text-slate-400">Manager</p>
                  <p className="font-medium text-slate-900 dark:text-white">Anita Sharma</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img alt="HR" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT3pggLcXTiqB1JM3hygoGEWn3ZWyva-EfKyMGPy9eOdONhd8K63wApnJy_ws1TDPF6RUGx1x8ns2OlZ3h4_RerCSE8fXAZTeCoe2EGg0IsWxEF2h71SazYS8pHgPMxfif2L7kWfa4zzpC1EHv41-89rY_mP49e9q3n7WYdJGIvmnnABwJeizSwoyoolHH03UsEEUO10QK-GbQtuhOrGN9DGUlYlWeclBrA5m7FwJJOGM0RtP8nWIAslNdqpIIE3b5RuoLFCi371Y" />
                </div>
                <div className="text-sm">
                  <p className="text-slate-500 dark:text-slate-400">HR Representative</p>
                  <p className="font-medium text-slate-900 dark:text-white">Vikram Malhotra</p>
                </div>
              </div>
            </div>
            <a className="p-3 text-center text-sm font-semibold text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-100 dark:border-slate-800" href="#">View All</a>
          </div>

          {/* UDF (User Defined Fields) */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">dynamic_form</span>
                <h3 className="font-bold text-slate-900 dark:text-white">UDF</h3>
              </div>
              <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit_square</span></button>
            </div>
            <div className="p-5 flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-slate-500 dark:text-slate-400">Shirt Size</span>
                <span className="font-medium text-slate-900 dark:text-white">Medium</span>
                <span className="text-slate-500 dark:text-slate-400">Dietary Preference</span>
                <span className="font-medium text-slate-900 dark:text-white">Vegetarian</span>
                <span className="text-slate-500 dark:text-slate-400">Emergency Contact</span>
                <span className="font-medium text-slate-900 dark:text-white">+91 99887 76655</span>
              </div>
            </div>
            <a className="p-3 text-center text-sm font-semibold text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-100 dark:border-slate-800" href="#">View All</a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-transparent border-t border-slate-200 dark:border-slate-800 py-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <p>© 2024 HRMS Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Support Center</a>
            </div>
          </div>
        </footer>
      </div>
    </EmployeeLayout>
  );
}
