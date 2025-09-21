import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Header.css';
import AgenticCortex from '../icon/AgenticCortex';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <AgenticCortex className="logo-img "/>
            <span className="logo-text gradient-text">AgenticCortex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/technology" className="nav-link">Technology</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            <Link to="/signin">
              <Button variant="secondary" size="md">Sign In</Button>
            </Link>
            <Link to="/start-trial">
              <Button variant="primary" size="md">Start Free Trial</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <Link to="/features" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link to="/technology" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Technology</Link>
            <Link to="/pricing" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link to="/about" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>About</Link>
            <div className="mobile-cta">
              <Link to="/signin">
                <Button variant="secondary" size="sm">Sign In</Button>
              </Link>
              <Link to="/start-trial">
                <Button variant="primary" size="sm">Start Free Trial</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;