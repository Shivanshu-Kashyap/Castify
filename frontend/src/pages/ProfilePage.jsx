// src/pages/ProfilePage.jsx
import React from 'react';

function ProfilePage() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 space-y-2">
        <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600">Home</button>
        <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600">Liked Videos</button>
        <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600">History</button>
        <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600">My Content</button>
        <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600">Collections</button>
        <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600">Subscribers</button>
      </aside>

      {/* Main Profile Section */}
      <div className="flex-1 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-full w-20 h-20" />
          <div>
            <h1 className="text-2xl font-bold">React Patterns</h1>
            <p>600k Subscribers · 220 Subscribed</p>
          </div>
        </div>
        <div className="border-b border-gray-700 mb-4">
          <button className="px-4 py-2 text-purple-400 border-b-2 border-purple-400">Videos</button>
          <button className="px-4 py-2 text-gray-400">Playlist</button>
          <button className="px-4 py-2 text-gray-400">Tweets</button>
          <button className="px-4 py-2 text-gray-400">Subscribed</button>
        </div>

        {/* No Videos Message */}
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-gray-500">No videos uploaded</p>
          <p className="text-gray-500 mb-4">This page has yet to upload a video.</p>
          <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition">+ New video</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
