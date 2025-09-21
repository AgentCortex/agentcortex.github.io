import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './CTA.css';

const CTA = () => {
  const benefits = [
    '✨ Free 14-day trial with full access',
    '🚀 Setup in under 5 minutes',
    '🎯 No credit card required',
    '📞 24/7 expert support included'
  ];

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          
          {/* Background Elements */}
          <div className="cta-bg-elements">
            <div className="bg-circle bg-circle-1 animate-float"></div>
            <div className="bg-circle bg-circle-2 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="bg-circle bg-circle-3 animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Main CTA Content */}
          <div className="cta-main animate-fade-up">
            <h2 className="cta-title">
              Transform Your Business with
              <span className="gradient-text"> AI Agents Today</span>
            </h2>
            
            <p className="cta-subtitle">
              Join thousands of companies already using AgenticCortex to automate workflows, 
              enhance decision-making, and accelerate growth with intelligent AI agents.
            </p>

            {/* Benefits List */}
            <div className="cta-benefits">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="benefit-item animate-fade-up"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  {benefit}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link to="/start-trial">
                <Button variant="hero" size="xl">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-number gradient-text">500+</div>
                <div className="trust-label">Enterprise Clients</div>
              </div>
              <div className="trust-item">
                <div className="trust-number gradient-text">99.9%</div>
                <div className="trust-label">Uptime SLA</div>
              </div>
              <div className="trust-item">
                <div className="trust-number gradient-text">SOC2</div>
                <div className="trust-label">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;