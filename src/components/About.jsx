import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About <span className="highlight">KAALARI Productions</span></h2>
          <p className="about-subtitle">Transforming visions into reality</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              We are a full-service digital marketing agency dedicated to transforming brands through creative excellence and strategic innovation.
            </p>
            <p>
              With years of experience in the digital landscape, <strong>KAALARI Productions</strong> has helped countless businesses achieve their online goals. Our team of passionate professionals combines creativity with data-driven strategies to deliver exceptional results.
            </p>
            <p>
              From startups to established enterprises, we partner with brands that dare to dream big and are ready to make their mark in the digital world.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
