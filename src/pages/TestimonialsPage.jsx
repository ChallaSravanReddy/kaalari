import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
