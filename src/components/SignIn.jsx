import React, { useState } from 'react';
import Button from './Button';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Sign in attempt:', formData);
      // Handle authentication logic here
    }, 2000);
  };

  return (
    <section id="signin" className="signin section">
      <div className="container">
        <div className="signin-container">
          
          {/* Left Side - Branding */}
          <div className="signin-branding">
            <div className="branding-content">
              <h1 className="branding-title">
                Welcome to the <span className="gradient-text">Neural Future</span>
              </h1>
              <p className="branding-subtitle">
                Access your AgentCortex dashboard and unlock the power of brain-inspired AI agents
              </p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">🧠</span>
                  <span>Advanced RAG Technology</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Real-time Neural Processing</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🔒</span>
                  <span>Enterprise-grade Security</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📈</span>
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign In Form */}
          <div className="signin-form-container">
            <div className="signin-form">
              <div className="form-header">
                <h2 className="form-title">Sign In to AgentCortex</h2>
                <p className="form-subtitle">
                  Enter your credentials to access your neural dashboard
                </p>
              </div>

              <form onSubmit={handleSubmit} className="signin-form-fields">
                
                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="form-options">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#forgot-password" className="forgot-password">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="signin-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>

                {/* Divider */}
                <div className="form-divider">
                  <span>or continue with</span>
                </div>

                {/* Social Sign In */}
                <div className="social-signin">
                  <button type="button" className="social-button google">
                    <span className="social-icon">🌐</span>
                    Continue with Google
                  </button>
                  <button type="button" className="social-button microsoft">
                    <span className="social-icon">🏢</span>
                    Continue with Microsoft
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="signup-link">
                  Don't have an account? 
                  <a href="#signup" className="signup-link-text">
                    Start your free trial
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;