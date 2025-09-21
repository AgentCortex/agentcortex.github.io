import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Neural Cortex Architecture',
      description: 'Brain-inspired RAG technology that mimics human cognitive processes, creating interconnected knowledge networks for superior contextual understanding.',
      highlight: 'Cortex-Powered'
    },
    {
      icon: '🔗',
      title: 'Synaptic Knowledge Linking',
      description: 'Advanced vector embeddings create synaptic connections between data points, enabling human-like reasoning and association.',
      highlight: 'Synaptic'
    },
    {
      icon: '�',
      title: 'Adaptive Memory Systems',
      description: 'Multi-layered memory architecture that stores, retrieves, and processes information like human short-term and long-term memory.',
      highlight: 'Adaptive'
    },
    {
      icon: '⚡',
      title: 'Real-time Neural Processing',
      description: 'Lightning-fast neural pathways process complex queries through distributed cortex networks for instant intelligent responses.',
      highlight: 'Real-time'
    },
    {
      icon: '🎯',
      title: 'Contextual Awareness Engine',
      description: 'Deep contextual understanding that maintains conversation history and domain expertise like human cognitive awareness.',
      highlight: 'Contextual'
    },
    {
      icon: '📈',
      title: 'Continuous Cortex Evolution',
      description: 'Self-improving neural networks that strengthen connections through use, mimicking brain neuroplasticity for enhanced performance.',
      highlight: 'Evolving'
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center mb-12 animate-fade-up">
          <h2 className="section-title">
            Neural <span className="gradient-text">Cortex Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Harness the power of brain-inspired AI architecture that thinks, learns, and adapts like the human mind
          </p>
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