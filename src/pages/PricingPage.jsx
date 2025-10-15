import Header from '../components/Header';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
