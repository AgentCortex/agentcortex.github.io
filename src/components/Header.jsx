import React, { useState } from 'react';
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
          <div className="logo">
            {/* <img src="/AgenticCortex.svg" alt="AgenticCortex" className="logo-img animate-pulse-glow" /> */}
            <AgenticCortex className="logo-img "/>
            <span className="logo-text gradient-text">AgenticCortex</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#features" className="nav-link">Features</a>
            <a href="#technology" className="nav-link">Technology</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#about" className="nav-link">About</a>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            <Button variant="secondary" size="md">Sign In</Button>
            <Button variant="primary" size="md">Start Free Trial</Button>
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
            <a href="#features" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#technology" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Technology</a>
            <a href="#pricing" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#about" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>About</a>
            <div className="mobile-cta">
              <Button variant="secondary" size="sm">Sign In</Button>
              <Button variant="primary" size="sm">Start Free Trial</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;