import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import NewsLinks from '../components/home/NewsLinks';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <NewsLinks />
      <Footer />
    </div>
  );
};

export default Home;
