const Hero = () => {

const scrollToElement = (element, duration = 1000) => {
  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const run = startPosition + distance * easeInOutQuad(progress);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

const handleScroll = () => {
  const contactSection = document.getElementById('contact-form');
  if (contactSection) {
    scrollToElement(contactSection, 1500);
  }
};

  return (
    <section className="hero" id="home">
      <img
        src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/bg.jpg"
        alt="Background"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-banner">
          <h1 className="hero-h1">Civil beredskap</h1>
          <p>
            Professionell hjälp med att skapa en tryggare vardag för dig, ditt
            företag eller dina förenings medlemmar.
          </p>
          <p>Ingen kan göra allt men alla kan göra något.</p>
          <a
            href="#contact-form"
            className="btn cta-btn"
            onClick={handleScroll}
            aria-label="Kontakta oss för civil beredskap, samberedskap och trygghet"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;