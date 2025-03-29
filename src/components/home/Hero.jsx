import React, { useState } from 'react';
import Contact from './Contact';

const Hero = () => {
  const [isContactVisible, setContactVisible] = useState(false);

  const showContact = () => {
    setContactVisible(true);
  };

  const hideContact = () => {
    setContactVisible(false);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1 className='hero-h1'>Civil beredskap</h1>
        <p>
          Proffisionell hjälp med att skapa en tryggare vardag för dig, ditt företag eller dina
          förenings medlemmar.
        </p>
        <p>Ingen kan göra allt men alla kan göra något.</p>
        <button className="btn hero-btn" onClick={showContact}>Kontakta oss</button>
      </div>

      {isContactVisible && (
        <div className="overlay" onClick={hideContact}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <Contact hideContactForm={hideContact} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
