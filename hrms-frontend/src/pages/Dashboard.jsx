import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import UserPortlet from '../components/UserPortlet';
import ContactPortlet from '../components/ContactPortlet';
import AdminRegisterPortlet from '../components/AdminRegisterPortlet';
import { LogOut, Home, Search, Bell } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userId, roles } = useSelector((state) => state.auth);

  const isAdmin = roles.includes('ROLE_ADMIN');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full">
      {/* Top Navigation Bar - SF Style */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md z-10 w-full">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold tracking-tight">HRMS <span className="text-blue-200 font-light">Portal</span></h1>

            <nav className="hidden md:flex space-x-4 ml-6">
               <a href="#" className="flex items-center space-x-1 px-3 py-2 rounded-md bg-white/10 text-white font-medium"><Home size={18}/> <span>Home</span></a>
               <a href="#" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-white/10 text-blue-100 transition-colors"><span>My Employee File</span></a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
               <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
               <input type="text" placeholder="Search for actions or people" className="bg-blue-900/50 border border-blue-700 text-white text-sm rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300 w-64 placeholder-blue-300 transition-all focus:w-80" />
            </div>

            <button className="text-blue-100 hover:text-white relative p-2">
               <Bell size={20} />
               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="h-8 w-px bg-blue-700 mx-2 hidden sm:block"></div>

            <button
              onClick={() => dispatch(logout())}
              className="flex items-center space-x-2 text-sm text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors font-medium"
            >
              <span>Log Out</span>
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between">
            <div>
               <h2 className="text-2xl font-bold text-gray-800">Welcome to Your Workspace</h2>
               <p className="text-gray-500 text-sm mt-1">Here is a summary of your profile and actions.</p>
            </div>
            <div className="text-sm text-gray-500">
               {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-min">

          {/* Tile 1: User Information */}
          <div className="col-span-1 lg:col-span-1 xl:col-span-1 h-full">
            <UserPortlet userId={userId} />
          </div>

          {/* Tile 2: Contact Information */}
          <div className="col-span-1 lg:col-span-1 xl:col-span-1 h-full">
            <ContactPortlet userId={userId} />
          </div>

          {/* Conditional Tile: Admin Registration */}
          {isAdmin && (
            <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 h-full">
              <AdminRegisterPortlet />
            </div>
          )}

          {/* Placeholder for future generic portlet */}
          <div className="col-span-1 lg:col-span-1 xl:col-span-1 h-full">
             <div className="bg-white rounded-lg shadow-sm border border-dashed border-gray-300 h-full min-h-[250px] flex flex-col items-center justify-center p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-all mb-3">
                   <span className="text-2xl">+</span>
                </div>
                <h3 className="text-gray-600 font-medium">Add New Portlet</h3>
                <p className="text-gray-400 text-sm mt-1">Customize your home page</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
