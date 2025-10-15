import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
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
            <Link to="/contact" className="btn btn-primary">
              Let's Work Together
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
