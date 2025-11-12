import { useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech Innovations Inc.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'KAALARI Productions transformed our digital presence completely. Their strategic approach and creative execution exceeded our expectations. We saw a 250% increase in engagement within the first quarter.',
      rating: 5
    },
    {
      name: 'Rachel Green',
      company: 'Fashion Forward',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with KAALARI has been an absolute game-changer for our brand. Their team understood our vision and brought it to life in ways we never imagined. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mark Davis',
      company: 'Local Eats Restaurant',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Client <span className="highlight">Success Stories</span></h2>
          <p className="testimonials-subtitle">Hear from our satisfied clients</p>
        </div>
        <div className="testimonials-carousel">
          <button className="carousel-button prev" onClick={prevTestimonial}>‹</button>
          <div className="testimonial-slide">
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-text">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
            <div className="testimonial-author">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="author-image" />
              <div className="author-info">
                <div className="author-name">{testimonials[currentIndex].name}</div>
                <div className="author-title">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </div>
          <button className="carousel-button next" onClick={nextTestimonial}>›</button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
