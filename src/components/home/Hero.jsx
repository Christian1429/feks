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
    <section
      id="home"
      className="relative h-screen flex justify-center items-center overflow-hidden"
    >
      <img
        fetchpriority="high"
        src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/70 to-black/70 z-10" />

      <div className="relative z-20 w-full flex justify-center items-center px-4 text-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-5xl font-bold uppercase">
            Samberedskap
          </h1>
          <p className="mt-4 max-w-md mx-auto tracking-wide">
            Professionell hjälp med att skapa en tryggare vardag för dig, ditt
            företag eller dina förenings medlemmar.
          </p>
          <p className="mt-2 tracking-wide">
            Ingen kan göra allt men alla kan göra något.
          </p>
          <a
            href="#contact-form"
            onClick={handleScroll}
            aria-label="Kontakta oss"
            className="inline-flex items-center justify-center m-auto mt-8 text-2xl text-red-700 bg-white border-2 border-white rounded-lg shadow-lg transition-colors duration-300 hover:text-white hover:bg-transparent hover:border-white h-14 w-60 px-3"
          >
            KONTAKTA OSS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;