import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major social platforms with engaging content and strategic campaigns.'
    },
    {
      icon: '🎨',
      title: 'Branding & Design',
      description: 'Create a memorable brand identity that resonates with your audience and stands out in the market.'
    },
    {
      icon: '🎬',
      title: 'Video Production',
      description: 'Captivate your audience with high-quality video content that tells your brand story effectively.'
    },
    {
      icon: '🔍',
      title: 'SEO & Google Ads',
      description: 'Increase your visibility and drive qualified traffic with optimized search strategies and targeted ads.'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build stunning, responsive websites that convert visitors into customers and grow your business.'
    },
    {
      icon: '⭐',
      title: 'Influencer Marketing',
      description: 'Connect with your target audience through authentic partnerships with influential content creators.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our <span className="highlight">Services</span></h2>
          <p className="services-subtitle">Comprehensive digital solutions to grow your business</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-cta">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
