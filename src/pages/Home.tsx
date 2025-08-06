import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Articles from '../components/home/Articles';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
