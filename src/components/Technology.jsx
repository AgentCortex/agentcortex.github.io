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
      title: 'Neural Data Absorption',
      description: 'Brain-like data ingestion that processes information through multiple cortex layers, mimicking human learning patterns.'
    },
    {
      step: '02', 
      title: 'Synaptic Vector Formation',
      description: 'Transform data into neural pathways using advanced embeddings that create interconnected knowledge synapses.'
    },
    {
      step: '03',
      title: 'Cortex Memory Retrieval',
      description: 'Intelligent memory systems navigate neural networks to retrieve contextually relevant information like human recall.'
    },
    {
      step: '04',
      title: 'Conscious Response Generation',
      description: 'Sophisticated language cortex generates human-like responses through multi-layered neural processing.'
    }
  ];

  return (
    <section id="technology" className="technology section">
      <div className="container">
        <div className="technology-content">
          
          {/* Technology Overview */}
          <div className="tech-overview animate-fade-up">
            <h2 className="section-title">
              Neural <span className="gradient-text">Cortex Architecture</span>
            </h2>
            <p className="section-subtitle">
              Our revolutionary brain-inspired RAG system replicates human cognitive architecture, 
              creating AI agents with cortex-like reasoning, memory, and contextual awareness.
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