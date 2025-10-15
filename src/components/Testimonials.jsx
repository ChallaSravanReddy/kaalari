import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech Innovations Inc.',
      text: 'KAALARI Productions transformed our digital presence completely. Their strategic approach and creative execution exceeded our expectations. We saw a 250% increase in engagement within the first quarter.',
      rating: 5
    },
    {
      name: 'Rachel Green',
      company: 'Fashion Forward',
      text: 'Working with KAALARI has been an absolute game-changer for our brand. Their team understood our vision and brought it to life in ways we never imagined. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mark Davis',
      company: 'Local Eats Restaurant',
      text: 'The social media campaigns created by KAALARI drove real customers to our restaurant. Their content is engaging, professional, and perfectly captures our brand identity.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Client Success Stories</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Hear from our satisfied clients</p>
        </div>
        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevTestimonial}>‹</button>
          <div className="testimonial-card">
            <div className="stars">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <p>{testimonials[currentIndex].company}</p>
            </div>
          </div>
          <button className="slider-btn next" onClick={nextTestimonial}>›</button>
        </div>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
