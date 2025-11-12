import '../styles/Pricing.css';

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
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Flexible Plans for <span className="highlight">Every Business</span></h2>
          <p className="pricing-subtitle">Choose the perfect plan to grow your brand</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="pricing-badge">Most Popular</div>}
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-description">Perfect for growing teams</p>
              <div className="pricing-amount">
                <span className="price">
                  <span className="price-currency">$</span>{plan.price}
                  <span className="price-period">/{plan.period}</span>
                </span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li className="feature-item" key={i}>{feature}</li>
                ))}
              </ul>
              <button className="pricing-cta">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
