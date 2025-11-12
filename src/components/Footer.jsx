import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">KAALARI Productions</h3>
            <p className="footer-text">Transforming brands into digital success stories through creative excellence and strategic innovation.</p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">f</a>
              <a href="#" className="social-icon" aria-label="Instagram">📷</a>
              <a href="#" className="social-icon" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
              <a href="#" className="social-icon" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Social Media Marketing</a></li>
              <li><a href="#services" className="footer-link">Branding & Design</a></li>
              <li><a href="#services" className="footer-link">Video Production</a></li>
              <li><a href="#services" className="footer-link">SEO & Google Ads</a></li>
              <li><a href="#services" className="footer-link">Web Development</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-links">
              <li className="footer-text">📧 <a href="mailto:info@kaalari.com" className="footer-link">info@kaalari.com</a></li>
              <li className="footer-text">📞 <a href="tel:+15551234567" className="footer-link">+1 (555) 123-4567</a></li>
              <li className="footer-text">📍 123 Digital Avenue, Tech City</li>
              <li className="footer-text">🕒 Mon - Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2025 KAALARI Productions. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
