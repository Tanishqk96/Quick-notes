import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 shadow-lg px-6 py-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Tagline */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-extrabold text-2xl tracking-tight flex items-center">
            <span className="bg-white text-indigo-700 rounded-full px-3 py-1 mr-2 text-2xl font-black shadow-md">QN</span>
            QuickNotes
          </span>
          <span className="ml-3 italic text-sm font-light text-white/80 hidden sm:inline">
            Capture. Organize. Achieve.
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-8 text-lg font-medium hidden sm:flex">
          <Link
            to="/login"
            className={`transition-colors duration-200 pb-1 border-b-2 ${
              location.pathname === '/dashboard'
                ? 'border-yellow-300 text-yellow-300'
                : 'border-transparent hover:border-yellow-300 hover:text-yellow-300'
            }`}
          >
            My Workspace
          </Link>
       
          <Link
            to="/settings"
            className={`transition-colors duration-200 pb-1 border-b-2 ${
              location.pathname === '/settings'
                ? 'border-yellow-300 text-yellow-300'
                : 'border-transparent hover:border-yellow-300 hover:text-yellow-300'
            }`}
          >
            Preferences
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-200 pb-1 border-b-2 ${
              location.pathname === '/about'
                ? 'border-yellow-300 text-yellow-300'
                : 'border-transparent hover:border-yellow-300 hover:text-yellow-300'
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
