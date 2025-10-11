const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforming Brands into <span className="highlight">Digital Success Stories</span>
          </h1>
          <p className="hero-subtitle">
            From strategy to execution — we elevate your brand digitally.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Let's Work Together
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
