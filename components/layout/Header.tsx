import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import { PROPERTY_TYPES } from '../../constants';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery, 'Type:', selectedType);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-red-500 font-bold text-2xl">ALX Listings</Link>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-auto md:flex-grow md:max-w-xl">
            <form onSubmit={handleSearch} className="flex items-center border rounded-full overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Search for places..."
                className="w-full px-4 py-2 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-500 text-white p-2 px-4 hover:bg-red-600 focus:outline-none"
              >
                Search
              </button>
            </form>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="small">Sign In</Button>
            <Button size="small">Sign Up</Button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="mt-4 flex items-center justify-start overflow-x-auto pb-2">
          {PROPERTY_TYPES.map((type) => (
            <button
              key={type}
              className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full text-sm ${selectedType === type ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              onClick={() => setSelectedType(type === selectedType ? null : type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;