import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      {/* Floating Logo Left */}
      <div className="header-logo">
        <h1>KAALARI</h1>
        <span className="header-logo-subtitle">Productions</span>
      </div>

      {/* Header Content */}
      <div className="header-content">
        {/* Mobile Menu Toggle */}
        <button 
          className="header-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Pill */}
        <nav className={`header-nav-pill ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="header-nav-link">Services</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="header-nav-link">Portfolio</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="header-nav-link">Pricing</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="header-nav-link">Testimonials</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="header-nav-link">Contact</a>

          {/* Call Us Button Inside Nav */}
          <a 
            href="tel:+15551234567" 
            onClick={() => setIsMenuOpen(false)}
            className="header-cta-button"
          >
            Call Us
            <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
