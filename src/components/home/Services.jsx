import Title from './Title'

import {
  MapPin,
  FileText,
  ClipboardList,
  Users,
  ShieldCheck,
  Award,
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <MapPin size={32} strokeWidth={1.5} />,
    title: 'Platsbesök',
    text: 'Inspektion av fastighet och omgivning, vad har ni för skydd idag och vad behöver ni för att bli krissäkra',
  },
  {
    id: 2,
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: 'RSA (Risk och sårbarhetsanalys)',
    text: 'Fullständig RSA lämnas, där ni får en överblick över era risker och sårbarheter',
  },
  {
    id: 3,
    icon: <ClipboardList size={32} strokeWidth={1.5} />,
    title: 'Beredskapsplan',
    text: 'Dokumentation av hur ni bör agera i en kris och hur ni kan skydda er på bästa sätt',
  },
  {
    id: 4,
    icon: <Users size={32} strokeWidth={1.5} />,
    title: 'Samberedskap',
    text: 'Möjligheten till att samverka med varandra, alla kan göra nånting men ingen kan göra allt',
  },
  {
    id: 5,
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Trygghet och förmåga',
    text: 'Besitter kunskap och förmåga att agera i en kris.',
  },
  {
    id: 6,
    icon: <Award size={32} strokeWidth={1.5} />,
    title: 'Beredskapscertifiering',
    text: 'Certifieringen visar att er fastighet eller verksamhet uppnår en hög nivå av beredskap',
  },
];


const Service = ({ icon, title, text }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        {icon}
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
      </div>
    </article>
  )
}

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="våra" subTitle="tjänster" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
}
export default Services
