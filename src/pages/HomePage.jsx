import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
