import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shelters from './pages/Shelters';
import Adopt from './pages/Adopt';
import Report from './pages/Report';
import Donate from './pages/Donate';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/report" element={<Report />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
