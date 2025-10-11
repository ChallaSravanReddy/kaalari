const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '999',
      period: 'month',
      features: [
        'Social Media Management (2 platforms)',
        'Content Creation (8 posts/month)',
        'Monthly Analytics Report',
        'Email Support',
        'Basic SEO Optimization'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '2499',
      period: 'month',
      features: [
        'Social Media Management (4 platforms)',
        'Content Creation (20 posts/month)',
        'Weekly Analytics Reports',
        'Priority Support',
        'Advanced SEO & Google Ads',
        'Basic Video Content',
        'Brand Strategy Consultation'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '4999',
      period: 'month',
      features: [
        'Full Social Media Management',
        'Unlimited Content Creation',
        'Real-time Analytics Dashboard',
        '24/7 Dedicated Support',
        'Complete SEO & PPC Management',
        'Professional Video Production',
        'Influencer Partnerships',
        'Custom Web Development'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Premium',
        'Dedicated Account Manager',
        'Custom Strategy & Solutions',
        'Multi-brand Management',
        'Advanced Analytics & Reporting',
        'White-label Services',
        'API Integration',
        'Training & Workshops'
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Flexible Plans for Every Business</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Choose the perfect plan to grow your brand</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-pricing">Get Started</button>
            </div>
          ))}
        </div>
        <div className="pricing-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I switch plans later?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, PayPal, and bank transfers.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a long-term contract?</h4>
              <p>No, all plans are month-to-month with no long-term commitment required.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer custom solutions?</h4>
              <p>Yes, our Enterprise plan includes fully customized solutions tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
