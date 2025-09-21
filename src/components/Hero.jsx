import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          
          {/* Floating Elements */}
          <div className="floating-elements">
            <div className="floating-cube animate-float" style={{animationDelay: '0s'}}></div>
            <div className="floating-cube animate-float" style={{animationDelay: '1s'}}></div>
            <div className="floating-cube animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Main Content */}
          <div className="hero-main animate-fade-up">
            <h1 className="hero-title">
              Next-Generation
              <span className="gradient-text"> AI Agents</span>
              <br />
              Powered by <span className="gradient-text">RAG Technology</span>
            </h1>
            
            <p className="hero-subtitle">
              Transform your business with intelligent agents that understand context, 
              make autonomous decisions, and continuously learn from your data.
            </p>

            <div className="hero-cta">
              <Link to="/start-trial">
                <Button variant="hero" size="xl">Start Free Trial</Button>
              </Link>
              <Button variant="outline" size="xl">Watch Demo</Button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number gradient-text">99.7%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">10x</div>
                <div className="stat-label">Faster Processing</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">24/7</div>
                <div className="stat-label">Autonomous Operation</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hero-visual">
            <div className="neural-network">
              <div className="node node-1 animate-pulse-glow"></div>
              <div className="node node-2 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
              <div className="node node-3 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
              <div className="connection connection-1"></div>
              <div className="connection connection-2"></div>
              <div className="connection connection-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;