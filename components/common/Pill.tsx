import React from 'react';
import { PillProps } from '../../interfaces';

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 mr-2 mb-2 ${isActive 
        ? 'bg-red-500 text-white' 
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Pill;