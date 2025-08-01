import Title from './Title';

const About = () => {
  return (
    <section className="mt-8">
      <Title title="om" subTitle="oss" />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-1">
        <div className="mb-8 lg:mb-0 relative">
          <img
            src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/krisberedskap.jpg"
            alt="Krisberedskap"
            className="block w-full"
          />
        </div>
        <article className="p-5 sm:px-8 lg:pr-8 lg:pl-2 pt-3 pb-10 lg:mt-0 text-gray-700 leading-relaxed">
          <p>
            Teamet på Krissäkra utgörs av tre grundare med olika bakgrunder och
            erfarenheter. Vi har framgångsrikt kombinerat akademisk kunskap med
            praktisk erfarenhet för att skapa en bred kunskapsbas och ett djup i
            vårt "know-how". På Krissäkra Sverige AB strävar vi inte bara efter
            att stärka individuell förmåga utan även att främja kollektiv
            beredskap och krishanteringsförmåga.
            <br />
            <br />
            Vår passion och drivkraft är att stötta samhället genom att hjälpa
            företag, bostadsrättsföreningar och samfälligheter att utveckla
            effektiva beredskapsplaner och krisledningsstrategier. Med vår
            samlade kunskap och erfarenhet skapar vi skräddarsydda lösningar som
            förbereder er för en tryggare framtid i en snabbt föränderlig
            omvärld vilket hjälper er både idag och imorgon. För oss ska
            beredskap vara enkelt, och med rätt förutsättningar är det också
            möjligt. <br /> Bildreferens : www.msb.se
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
