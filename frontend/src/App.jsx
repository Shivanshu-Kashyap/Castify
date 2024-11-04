// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx'; // Import RegisterPage
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get('/api/v1/users')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> {/* Add Register route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
