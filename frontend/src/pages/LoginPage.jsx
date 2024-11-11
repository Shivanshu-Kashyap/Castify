import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import backgroundImage from '../assets/bg.jpg'; // Update the path to your background image

function LoginPage() {
  const { login } = useAuth();  // Get the login function from context
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/users/login', formData, {
        withCredentials: true,
      });
      if (response.status === 200) {
        login(); // Update authentication state
        navigate('/'); // Redirect to the profile page
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image here
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          New here? <Link to="/register" className="text-purple-600 hover:underline">Register</Link>
        </p>
        <p className="text-center mt-2">
          <Link to="#" className="text-purple-600 hover:underline">Forgot password?</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
