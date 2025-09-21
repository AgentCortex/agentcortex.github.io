import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Advanced RAG Technology',
      description: 'Retrieval-Augmented Generation that combines your proprietary data with AI reasoning for contextually accurate responses.',
      highlight: 'RAG-Powered'
    },
    {
      icon: '⚡',
      title: 'Intelligent Decision Making',
      description: 'AI agents that analyze complex scenarios and make autonomous decisions based on your business rules and objectives.',
      highlight: 'Autonomous'
    },
    {
      icon: '🔄',
      title: 'Automated Workflows',
      description: 'Streamline complex business processes with intelligent automation that adapts to changing requirements.',
      highlight: 'Adaptive'
    },
    {
      icon: '🚀',
      title: 'Real-time Processing',
      description: 'Lightning-fast response times with distributed computing architecture for immediate insights and actions.',
      highlight: 'Real-time'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, compliance frameworks, and audit trails.',
      highlight: 'Secure'
    },
    {
      icon: '📈',
      title: 'Continuous Learning',
      description: 'Self-improving AI that learns from interactions and outcomes to enhance performance over time.',
      highlight: 'Evolving'
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center mb-12 animate-fade-up">
          <h2 className="section-title">
            Powerful <span className="gradient-text">AI Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Discover the advanced features that make AgenticCortex the leading platform for intelligent automation
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="feature-icon">
                <span className="icon-emoji">{feature.icon}</span>
                <div className="feature-highlight">{feature.highlight}</div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;