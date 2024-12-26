import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState(null); // Store user data
  const [error, setError] = useState(null); // Store error
  const [loading, setLoading] = useState(true); // Handle loading state

  useEffect(() => {
    // Fetch user data from the server
    axios.get('/api/v1/users/me', { withCredentials: true })
      .then(response => {
        setUser(response.data.data); // Store user data
        setLoading(false); // Set loading to false
      })
      .catch(err => {
        console.error('Error fetching user details:', err);
        setError('Failed to load user data');
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  // If the data is loading, show a loading spinner or message
  if (loading) {
    return (
      <div className="text-center text-xl">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-500 border-solid"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If there is an error, show the error message
  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  // If no user data exists, show a message
  if (!user) {
    return <div className="text-center text-xl">User not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Profile</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-medium">Name:</h2>
            <p>{user.name}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium">Email:</h2>
            <p>{user.email}</p>
          </div>

          {/* Example of user data map if user has additional data */}
          {user.posts && user.posts.length > 0 && (
            <div>
              <h2 className="text-xl font-medium">Your Posts:</h2>
              <ul>
                {user.posts.map(post => (
                  <li key={post.id} className="border-b py-2">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p>{post.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
