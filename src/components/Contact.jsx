import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let&apos;s Create Something <span className="highlight">Amazing</span></h2>
          <p className="contact-subtitle">Get in touch with us today</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3 className="info-title">Email Us</h3>
              <div className="info-content">
                <a href="mailto:info@kaalari.com">info@kaalari.com</a><br />
                <a href="mailto:contact@kaalari.com">contact@kaalari.com</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3 className="info-title">Call Us</h3>
              <div className="info-content">
                <a href="tel:+15551234567">+1 (555) 123-4567</a><br />
                <a href="tel:+15559876543">+1 (555) 987-6543</a>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="info-title">Visit Us</h3>
              <div className="info-content">
                123 Digital Avenue<br />
                Tech City, TC 12345
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3 className="info-title">WhatsApp</h3>
              <div className="info-content">
                <a href="https://wa.me/15551112222">+1 (555) 111-2222</a><br />
                Quick response guaranteed
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group full">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-group full">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group full">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="form-group full">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
