import Header from '../components/Header';
import Footer from '../components/Footer';
import Team from '../components/Team';

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
