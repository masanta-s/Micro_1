import React from 'react';
import { Settings } from 'lucide-react';

const Portlet = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col ${className}`}>
      {/* Header matching typical SuccessFactors gray gradient header */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-gray-700 font-semibold text-lg">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Settings size={18} />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-grow text-gray-800">
        {children}
      </div>
    </div>
  );
};

export default Portlet;
