import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="om" subTitle="oss" />
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/krisberedskap.jpg"
            alt="Krisberedskap"
          />
        </div>
        <article className="about-info">
          <h3></h3>
          <p>
            Teamet på Krissäkra utgörs av tre grundare med olika bakgrunder och
            erfarenheter. Vi har framgångsrikt kombinerat akademisk kunskap med
            praktisk erfarenhet för att skapa en bred kunskapsbas och ett djup i
            vårt "know-how". På Krissäkra Sverige AB strävar vi inte bara efter
            att stärka individuell förmåga utan även att främja kollektiv
            beredskap och krishanteringsförmåga.
          </p>
          <p>
            Vår passion och drivkraft är att stötta samhället genom att hjälpa
            företag, bostadsrättsföreningar och samfälligheter att utveckla
            effektiva beredskapsplaner och krisledningsstrategier. Med vår
            samlade kunskap och erfarenhet skapar vi skräddarsydda lösningar som
            förbereder er för en tryggare framtid i en snabbt föränderlig
            omvärld vilket hjälper er både idag och imorgon. För oss ska
            beredskap vara enkelt, och med rätt förutsättningar är det också
            möjligt.
          </p>
          <p> Bildreferens : www.msb.se </p>
        </article>
      </div>
    </section>
  );
};
export default About;
