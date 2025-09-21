import React from 'react';
import Button from './Button';
import './Technology.css';

const Technology = () => {
  const techStack = [
    { name: 'Neural Networks', level: 95 },
    { name: 'RAG Architecture', level: 98 },
    { name: 'Vector Databases', level: 92 },
    { name: 'LLM Integration', level: 96 }
  ];

  const architectureSteps = [
    {
      step: '01',
      title: 'Data Ingestion',
      description: 'Secure ingestion of your proprietary data with automatic preprocessing and optimization.'
    },
    {
      step: '02', 
      title: 'Vector Embedding',
      description: 'Advanced embedding models convert your data into high-dimensional vector representations.'
    },
    {
      step: '03',
      title: 'Retrieval System',
      description: 'Intelligent retrieval mechanisms find the most relevant context for each query.'
    },
    {
      step: '04',
      title: 'AI Generation',
      description: 'State-of-the-art language models generate accurate, contextual responses.'
    }
  ];

  return (
    <section id="technology" className="technology section">
      <div className="container">
        <div className="technology-content">
          
          {/* Technology Overview */}
          <div className="tech-overview animate-fade-up">
            <h2 className="section-title">
              Advanced <span className="gradient-text">RAG Architecture</span>
            </h2>
            <p className="section-subtitle">
              Our proprietary Retrieval-Augmented Generation system combines the power of 
              large language models with your specific domain knowledge for unparalleled accuracy.
            </p>
            
            {/* Technology Stack */}
            <div className="tech-stack">
              <h3 className="stack-title">Core Technologies</h3>
              <div className="stack-items">
                {techStack.map((tech, index) => (
                  <div key={index} className="stack-item">
                    <div className="stack-info">
                      <span className="stack-name">{tech.name}</span>
                      <span className="stack-level">{tech.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{width: `${tech.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="architecture-visual animate-fade-up">
            <div className="arch-container">
              <div className="data-flow">
                <div className="flow-line"></div>
                <div className="flow-nodes">
                  <div className="flow-node animate-pulse-glow">Data</div>
                  <div className="flow-node animate-pulse-glow" style={{animationDelay: '0.5s'}}>Vector</div>
                  <div className="flow-node animate-pulse-glow" style={{animationDelay: '1s'}}>Retrieve</div>
                  <div className="flow-node animate-pulse-glow" style={{animationDelay: '1.5s'}}>Generate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Steps */}
        <div className="architecture-steps">
          <h3 className="steps-title text-center mb-8">
            How <span className="gradient-text">RAG Technology</span> Works
          </h3>
          
          <div className="steps-grid">
            {architectureSteps.map((step, index) => (
              <div 
                key={index} 
                className="step-card animate-fade-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="step-number gradient-text">{step.step}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="tech-cta text-center animate-fade-up">
          <h3 className="cta-title">Ready to Experience Next-Gen AI?</h3>
          <p className="cta-subtitle">
            See how our RAG-powered agents can transform your business operations.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg">Schedule Demo</Button>
            <Button variant="outline" size="lg">Technical Documentation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;