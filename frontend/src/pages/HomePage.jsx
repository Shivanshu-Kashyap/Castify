// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
      <p className="text-lg mb-6">Explore videos and connect with users.</p>
      <Link to="/login">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
