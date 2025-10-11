const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KAALARI Productions</h3>
            <p>Transforming brands into digital success stories through creative excellence and strategic innovation.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Social Media Marketing</a></li>
              <li><a href="#services">Branding & Design</a></li>
              <li><a href="#services">Video Production</a></li>
              <li><a href="#services">SEO & Google Ads</a></li>
              <li><a href="#services">Web Development</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 info@kaalari.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Digital Avenue, Tech City</li>
              <li>🕒 Mon - Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 KAALARI Productions. All rights reserved.</p>
          <div className="footer-links">
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
