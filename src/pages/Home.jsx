import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Articles from '../components/home/Articles'
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
