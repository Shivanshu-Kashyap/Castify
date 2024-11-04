// src/pages/RegisterPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
  });
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === 'avatar') {
      setAvatar(e.target.files[0]);
    } else if (e.target.name === 'coverImage') {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('fullName', formData.fullName);
      form.append('email', formData.email);
      form.append('username', formData.username);
      form.append('password', formData.password);
      if (avatar) form.append('avatar', avatar);
      if (coverImage) form.append('coverImage', coverImage);

      const response = await axios.post('/api/v1/users/register', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="w-80 p-6 bg-white shadow-md rounded-lg">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
          <input
            type="file"
            name="avatar"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">Cover Image</label>
          <input
            type="file"
            name="coverImage"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
