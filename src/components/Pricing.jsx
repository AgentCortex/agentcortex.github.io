import React, { useState } from 'react';
import Button from './Button';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter Cortex',
      description: 'Perfect for individuals and small teams exploring AI agents',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 5 AI Agents',
        '10K Neural Queries/month',
        'Basic RAG Integration', 
        'Standard Cortex Memory',
        'Community Support',
        'Basic Analytics Dashboard'
      ],
      highlight: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional Cortex',
      description: 'Advanced neural capabilities for growing businesses',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Up to 25 AI Agents',
        '100K Neural Queries/month',
        'Advanced RAG Architecture',
        'Enhanced Cortex Memory',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations',
        'Multi-domain Knowledge Base'
      ],
      highlight: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise Cortex',
      description: 'Full-scale neural infrastructure for large organizations',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Unlimited AI Agents',
        'Unlimited Neural Queries',
        'Custom Cortex Architecture',
        'Enterprise-grade Security',
        'Dedicated Support Team',
        'Custom Model Training',
        'On-premise Deployment',
        'Advanced Compliance Tools',
        'SLA Guarantees'
      ],
      highlight: false,
      cta: 'Contact Sales'
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.yearlyPrice;
    return Math.round((savings / monthlyCost) * 100);
  };

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        
        {/* Header */}
        <div className="pricing-header text-center animate-fade-up">
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Neural Plan</span>
          </h2>
          <p className="section-subtitle">
            Scale your AI cortex with flexible plans designed for every stage of your neural journey
          </p>
          
          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
            <button 
              className="toggle-switch"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <span className="toggle-slider"></span>
            </button>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>
              Yearly <span className="savings-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.highlight ? 'highlight' : ''} animate-fade-up`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.highlight && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                
                <div className="price-container">
                  <span className="currency">$</span>
                  <span className="price">{getPrice(plan)}</span>
                  <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
                </div>
                
                {billingCycle === 'yearly' && (
                  <div className="savings-text">
                    Save {getSavings(plan)}% with annual billing
                  </div>
                )}
              </div>

              <div className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pricing-footer">
                <Button 
                  variant={plan.highlight ? 'primary' : 'secondary'} 
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="enterprise-cta text-center animate-fade-up">
          <h3 className="enterprise-title">Need a Custom Neural Solution?</h3>
          <p className="enterprise-description">
            Our team can design a bespoke cortex architecture tailored to your specific requirements
          </p>
          <Button variant="outline" size="lg">
            Schedule Consultation
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="pricing-faq animate-fade-up">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's included in the free trial?</h4>
              <p>14-day full access to Professional Cortex features with no credit card required.</p>
            </div>
            <div className="faq-item">
              <h4>Can I upgrade or downgrade anytime?</h4>
              <p>Yes, change your plan anytime. Upgrades are immediate, downgrades take effect next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, PayPal, and can arrange wire transfers for enterprise accounts.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a setup fee?</h4>
              <p>No setup fees for any plan. Enterprise deployments include free onboarding and setup assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;