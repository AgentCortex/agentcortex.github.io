import React, { useState } from 'react';
import Button from './Button';
import './StartFreeTrial.css';

const StartFreeTrial = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    // Step 2 - Company Info
    company: '',
    role: '',
    industry: '',
    companySize: '',
    
    // Step 3 - Use Case
    useCase: '',
    goals: [],
    hasExperience: '',
    
    // Terms
    acceptTerms: false,
    subscribeNewsletter: true
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'goals') {
      const goalsList = formData.goals.includes(value) 
        ? formData.goals.filter(goal => goal !== value)
        : [...formData.goals, value];
      setFormData(prev => ({ ...prev, goals: goalsList }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Free trial registration:', formData);
      // Handle registration logic here
    }, 2000);
  };

  const industryOptions = [
    'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 
    'Education', 'Government', 'Real Estate', 'Legal', 'Other'
  ];

  const companySizeOptions = [
    '1-10', '11-50', '51-200', '201-1000', '1000+'
  ];

  const goalOptions = [
    'Automate customer support',
    'Improve data analysis',
    'Enhance content creation',
    'Streamline workflows',
    'Research & development',
    'Knowledge management'
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step">
            <h3 className="step-title">Let's get you started</h3>
            <p className="step-description">Create your AgentCortex account to begin your neural journey</p>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Create a strong password"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-step">
            <h3 className="step-title">Tell us about your company</h3>
            <p className="step-description">Help us customize your AgentCortex experience</p>

            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Acme Corporation"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g., CTO, Product Manager, Developer"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select industry</option>
                  {industryOptions.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Company Size</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select size</option>
                  {companySizeOptions.map(size => (
                    <option key={size} value={size}>{size} employees</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-step">
            <h3 className="step-title">What's your use case?</h3>
            <p className="step-description">Let us know how you plan to use AgentCortex</p>

            <div className="form-group">
              <label className="form-label">Primary Use Case</label>
              <textarea
                name="useCase"
                value={formData.useCase}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Describe how you plan to use AI agents in your organization..."
                rows={4}
              />
            </div>

            <div className="form-group">
              <label className="form-label">What are your main goals? (Select all that apply)</label>
              <div className="checkbox-grid">
                {goalOptions.map(goal => (
                  <label key={goal} className="checkbox-option">
                    <input
                      type="checkbox"
                      name="goals"
                      value={goal}
                      checked={formData.goals.includes(goal)}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-label">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Do you have experience with AI/ML?</label>
              <div className="radio-group">
                {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                  <label key={level} className="radio-option">
                    <input
                      type="radio"
                      name="hasExperience"
                      value={level}
                      checked={formData.hasExperience === level}
                      onChange={handleInputChange}
                    />
                    <span className="radio-label">{level}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="start-free-trial" className="start-trial section">
      <div className="container">
        <div className="trial-container">
          
          {/* Header */}
          <div className="trial-header text-center">
            <h1 className="trial-title">
              Start Your <span className="gradient-text">Neural Journey</span>
            </h1>
            <p className="trial-subtitle">
              Get full access to AgentCortex for 14 days. No credit card required.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-steps">
              {[1, 2, 3].map(step => (
                <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''}`}>
                  <div className="step-circle">{step}</div>
                  <div className="step-label">
                    {step === 1 && 'Account'}
                    {step === 2 && 'Company'}
                    {step === 3 && 'Use Case'}
                  </div>
                </div>
              ))}
            </div>
            <div 
              className="progress-line" 
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            ></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="trial-form">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
              )}
              
              <div className="nav-spacer"></div>
              
              {currentStep < 3 ? (
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  onClick={handleNext}
                >
                  Next Step
                </Button>
              ) : (
                <>
                  <div className="terms-container">
                    <label className="terms-checkbox">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a></span>
                    </label>
                    <label className="terms-checkbox">
                      <input
                        type="checkbox"
                        name="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onChange={handleInputChange}
                      />
                      <span>Subscribe to neural insights and product updates</span>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    disabled={!formData.acceptTerms || isLoading}
                    className="start-trial-button"
                  >
                    {isLoading ? 'Creating Your Account...' : 'Start Free Trial'}
                  </Button>
                </>
              )}
            </div>
          </form>

          {/* Benefits */}
          <div className="trial-benefits">
            <h3 className="benefits-title">What's included in your free trial:</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">🚀</span>
                <div>
                  <h4>Full Platform Access</h4>
                  <p>Complete access to all Professional Cortex features</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🧠</span>
                <div>
                  <h4>5 AI Agents</h4>
                  <p>Deploy up to 5 neural agents during your trial</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💬</span>
                <div>
                  <h4>Priority Support</h4>
                  <p>Direct access to our neural engineering team</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📚</span>
                <div>
                  <h4>Onboarding & Training</h4>
                  <p>Personalized setup and neural cortex training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartFreeTrial;