import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Fashion Brand Campaign',
      category: 'social',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Social media transformation for luxury fashion brand'
    },
    {
      id: 2,
      title: 'Tech Startup Branding',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity for emerging tech company'
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'video',
      image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-impact video production for product launch'
    },
    {
      id: 4,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern e-commerce platform with seamless UX'
    },
    {
      id: 5,
      title: 'SEO Success Story',
      category: 'seo',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '300% increase in organic traffic within 6 months'
    },
    {
      id: 6,
      title: 'Restaurant Social Media',
      category: 'social',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Food photography and social media management'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'video', label: 'Video' },
    { id: 'social', label: 'Social Media' },
    { id: 'seo', label: 'SEO' },
    { id: 'web', label: 'Web' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Success stories we're proud to share</p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-card" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="btn-view">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Want results like these?</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
