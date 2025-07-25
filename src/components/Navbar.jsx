import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-right">
        <Link to="/" className="nav-link">
          <img src="/assets/logo.webp" alt="Logo" className="nav-logo" />
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={`nav-left ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>  
        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>  
        <Link to="/product" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Product</Link>  
        <Link to="/facility" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Facility</Link> 
      </div>
    </nav>
  );
};

export default Navbar;
