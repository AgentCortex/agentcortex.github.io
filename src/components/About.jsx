import React from 'react';
import Button from './Button';
import './About.css';

const About = () => {
  const milestones = [
    {
      year: '2022',
      title: 'Neural Foundation',
      description: 'AgentCortex founded with vision to create brain-inspired AI architecture'
    },
    {
      year: '2023',
      title: 'Cortex Breakthrough',
      description: 'Developed revolutionary RAG technology mimicking human cognitive processes'
    },
    {
      year: '2024',
      title: 'Enterprise Launch',
      description: 'Successfully deployed neural agents across Fortune 500 companies'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Leading the future of cognitive AI with 1M+ neural interactions daily'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Neural Architect',
      bio: 'Former neuroscientist turned AI pioneer, leading the cortex revolution',
      expertise: 'Neuroscience, AI Architecture'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & RAG Engineer',
      bio: 'Expert in retrieval systems and large-scale neural network optimization',
      expertise: 'RAG Systems, Distributed Computing'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Head of Research',
      bio: 'Leading cognitive AI research and brain-computer interface development',
      expertise: 'Cognitive Science, Machine Learning'
    }
  ];

  const values = [
    {
      icon: '🧠',
      title: 'Neural Innovation',
      description: 'Pioneering brain-inspired AI that pushes the boundaries of machine cognition'
    },
    {
      icon: '🤝',
      title: 'Human-AI Harmony',
      description: 'Creating AI that augments human intelligence rather than replacing it'
    },
    {
      icon: '🔬',
      title: 'Scientific Rigor',
      description: 'Grounding our technology in neuroscience research and evidence-based methods'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'Democratizing advanced AI capabilities for organizations worldwide'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        
        {/* Hero Section */}
        <div className="about-hero text-center animate-fade-up">
          <h1 className="about-title">
            About <span className="gradient-text">AgentCortex</span>
          </h1>
          <p className="about-subtitle">
            Pioneering the future of artificial intelligence through brain-inspired neural architecture
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision-grid animate-fade-up">
          <div className="mission-card">
            <h2 className="card-title">Our Mission</h2>
            <p className="card-content">
              To revolutionize artificial intelligence by creating neural agents that think, learn, and adapt 
              like the human brain. We believe the future of AI lies in mimicking the cognitive architecture 
              that has made human intelligence so remarkably flexible and creative.
            </p>
          </div>
          
          <div className="vision-card">
            <h2 className="card-title">Our Vision</h2>
            <p className="card-content">
              A world where AI agents possess cortex-like reasoning capabilities, enabling seamless collaboration 
              between human and artificial intelligence to solve humanity's greatest challenges.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="company-story animate-fade-up">
          <h2 className="section-title text-center">
            The <span className="gradient-text">Neural Journey</span>
          </h2>
          
          <div className="story-content">
            <p>
              AgentCortex was born from a simple yet profound realization: the most sophisticated 
              information processing system ever created is the human brain. Our founders, a team of 
              neuroscientists and AI researchers, set out to decode the mysteries of neural architecture 
              and apply these insights to artificial intelligence.
            </p>
            
            <p>
              Through years of research into cortical networks, synaptic connections, and cognitive 
              processes, we developed our revolutionary RAG (Retrieval-Augmented Generation) technology 
              that doesn't just process information—it thinks about it, connects it, and learns from it 
              in ways that mirror human cognition.
            </p>
            
            <p>
              Today, AgentCortex stands at the forefront of cognitive AI, helping organizations worldwide 
              harness the power of brain-inspired intelligence to transform their operations, enhance 
              decision-making, and unlock new possibilities.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section animate-fade-up">
          <h2 className="section-title text-center">
            Our <span className="gradient-text">Evolution</span>
          </h2>
          
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section animate-fade-up">
          <h2 className="section-title text-center">
            Meet the <span className="gradient-text">Neural Pioneers</span>
          </h2>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <span className="avatar-placeholder">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p className="member-bio">{member.bio}</p>
                <div className="member-expertise">{member.expertise}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="values-section animate-fade-up">
          <h2 className="section-title text-center">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta text-center animate-fade-up">
          <h2 className="cta-title">
            Join the <span className="gradient-text">Neural Revolution</span>
          </h2>
          <p className="cta-description">
            Be part of the future where artificial intelligence thinks like the human mind
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="xl">Start Free Trial</Button>
            <Button variant="outline" size="xl">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;