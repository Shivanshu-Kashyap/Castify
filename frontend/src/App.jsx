// src/App.jsx

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/profilepage.jsx'; // Import RegisterPage
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import { useAuth } from './context/AuthContext.jsx';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
