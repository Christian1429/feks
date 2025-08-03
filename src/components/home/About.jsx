import Title from './Title';

const About = () => {
  return (
    <section className="mt-8">
      <div className="max-w-450 mx-auto px-4">
        <Title title="om" subTitle="oss" />
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-1 pb-10">
          <div className="mb-8 lg:mb-0 relative">
            <img
              src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/msb_krisberedskap.jpg"
              alt="Krisberedskap"
              className="block w-full"
            />
          </div>
          <article className="p-5 sm:px-8 lg:pr-8 lg:pl-2 pt-3 pb-10 lg:mt-0 text-gray-700 leading-relaxed">
            <p>
              Krisäkras styrka bygger på en unik kombination av gedigen
              akademisk expertis och omfattande praktisk erfarenhet inom
              fastigheter och utbildning. <br /> Vi förenar kunskap och insikt
              för att erbjuda skräddarsydda lösningar som inte bara stärker
              individens förmåga, utan också främjar en robust och sammansvetsad
              kollektiv beredskap. <br />
              Vi brinner för att göra samhället säkrare. <br />
              Genom att samarbeta med företag, bostadsrättsföreningar och
              samfälligheter hjälper vi er att utveckla effektiva
              beredskapsplaner och krisledningsstrategier som fungerar i
              verkligheten.
              <br /> Med vår expertis rustar vi er för en tryggare och mer
              förberedd framtid i en snabbt föränderlig värld — så att ni kan
              känna er trygga både idag och imorgon.
              <br /> För oss handlar beredskap om enkelhet och effektivitet, och
              med rätt stöd är det något alla kan uppnå.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
