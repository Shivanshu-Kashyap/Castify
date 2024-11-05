// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  return (
    <nav className="w-full bg-gray-900 text-white fixed top-0 flex items-center justify-between px-8 py-4 h-16 shadow-lg">
      <Link to="/" className="text-2xl font-bold">Castify</Link>

      <div className="flex items-center space-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Login
            </Link>
            <Link to="/register" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={onLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
