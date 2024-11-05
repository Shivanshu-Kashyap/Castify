// src/pages/HomePage.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function HomePage() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-60 h-full bg-gray-800 p-4 pt-8 fixed top-0 left-0 mt-16">
          <ul className="space-y-4">
            <li><button className="text-lg font-medium hover:text-purple-400">Home</button></li>
            <li><button className="text-lg font-medium hover:text-purple-400">Liked Videos</button></li>
            <li><button className="text-lg font-medium hover:text-purple-400">History</button></li>
            <li><button className="text-lg font-medium hover:text-purple-400">My Content</button></li>
            <li><button className="text-lg font-medium hover:text-purple-400">Collections</button></li>
            <li><button className="text-lg font-medium hover:text-purple-400">Subscribers</button></li>
          </ul>
          <div className="absolute bottom-4 flex flex-col space-y-2">
            <button className="text-white text-sm hover:text-purple-400">Support</button>
            <button className="text-white text-sm hover:text-purple-400">Settings</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow ml-60 p-8 flex flex-col items-center justify-center text-center bg-gray-900">
          <h1 className="text-3xl font-bold text-white mb-4">No videos available</h1>
          <p className="text-gray-400">There are no videos here available. Please try to search something else.</p>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Castify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
