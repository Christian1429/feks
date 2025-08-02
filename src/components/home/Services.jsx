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
    <article className="group flex text-left rounded-xl bg-white p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_12px_12px_rgba(0,0,0,0.25)]">
      <span className="bg-red-400 border-4 border-red-200 rounded-full grid place-items-center mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110 group-hover:drop-shadow-[-4px_8px_6px_rgba(380,27,27,0.4)] self-start">
        {icon}
      </span>
      <div className="pl-4">
        <h4 className="text-base uppercase tracking-wider mb-2 text-gray-900">
          {title}
        </h4>
        <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
      </div>
    </article>
  );
};

const Services = () => {
  return (
    <section className="pt-8 pb-16">
      <Title title="våra" subTitle="tjänster" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-[90vw] sm:w-[95vw]">
        {services.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;