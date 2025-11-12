import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="services" className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Transforming Brands into <span className="highlight">Digital Success Stories</span>
        </h1>
        <p className="hero-subtitle">
          From strategy to execution — we elevate your brand digitally.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn hero-btn-primary">Let&apos;s Work Together</a>
          <a href="#portfolio" className="hero-btn hero-btn-secondary">View Our Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
