import { useState } from 'react';
import Title from './Title';
import {
  MapPin,
  FileText,
  ClipboardList,
  Users,
  ShieldCheck,
  Award,
} from 'lucide-react';
import backgroundImage from '/assets/service1.jpg';

const services = [
  {
    id: 1,
    icon: <Award size={32} strokeWidth={1.5} />,
    title: 'Beredskapscertifiering',
    text: 'Certifieringen visar att er fastighet eller verksamhet uppnår en hög nivå av beredskap',
  },
  {
    id: 2,
    icon: <MapPin size={32} strokeWidth={1.5} />,
    title: 'Platsbesök',
    text: 'Inspektion av fastighet och omgivning, vad har ni för skydd idag och vad behöver ni för att bli krissäkra',
  },
  {
    id: 3,
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: 'RSA (Risk och sårbarhetsanalys)',
    text: 'Fullständig RSA lämnas, där ni får en överblick över era risker och sårbarheter',
  },
  {
    id: 4,
    icon: <ClipboardList size={32} strokeWidth={1.5} />,
    title: 'Beredskapsplan',
    text: 'Dokumentation av hur ni bör agera i en kris och hur ni kan skydda er på bästa sätt',
  },
  {
    id: 5,
    icon: <Users size={32} strokeWidth={1.5} />,
    title: 'Samberedskap',
    text: 'Möjligheten till att samverka med varandra, alla kan göra nånting men ingen kan göra allt',
  },
  {
    id: 6,
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Trygghet och förmåga',
    text: 'Besitter kunskap och förmåga att agera i en kris.',
  },
];

const Service = ({
  icon,
  title,
  text,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => (
  <article
    className={`group flex flex-col sm:h-38 sm:w-80 rounded-3xl border p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_12px_12px_rgba(0,0,0,0.25)]
    ${isHovered ? 'border-red-600' : 'border-red-300'}
    bg-black/50 md:bg-black/40
    backdrop-blur-md backdrop-saturate-100 bg`}
  >
    <div className="flex items-center justify-center gap-3 mb-2">
      <span className="bg-red-400 border-4 border-red-200 rounded-full grid place-items-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110 group-hover:drop-shadow-[-4px_8px_6px_rgba(380,27,27,0.4)] w-12 h-12">
        {icon}
      </span>
      <h4 className="text-base uppercase tracking-wider text-white font-bold">
        {title}
      </h4>
    </div>
    <p className="text-white leading-relaxed text-sm text-center">{text}</p>
  </article>
);

const ServicesStarPattern = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const centerService = services[0];
  const surroundingServices = services.slice(1);
  const baseRadius = 360;
  const topOffset = 50;
  const bottomOffset = 20;

  return (
  <section
    className="py-8 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Title title="våra" subTitle="tjänster" />
    <div className="flex flex-col items-center gap-6 px-4 lg:hidden">
      {services.map((service) => (
        <div key={service.id} className="w-full max-w-sm">
          <Service
            {...service}
            isHovered={false}
          />
        </div>
      ))}
    </div>
    <div className="hidden lg:flex max-w-7xl mx-auto w-[90vw] sm:w-[95vw] relative items-center justify-center rounded-full border border-gray-300 bg-black/60">
      <div className="relative aspect-square w-[700px] sm:w-[800px] md:w-[900px] flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {surroundingServices.map((_, index) => {
            const angle = (360 / surroundingServices.length) * index - 90;
            const rad = (angle * Math.PI) / 180;
            const sin = Math.sin(rad);
            const radius =
              sin > 0.9
                ? baseRadius - bottomOffset
                : sin < -0.9
                ? baseRadius - topOffset
                : baseRadius;
            const x = 50 + (Math.cos(rad) * radius) / 9;
            const y = 50 + (Math.sin(rad) * radius) / 9;
            return (
              <line
                key={index}
                x1="50%"
                y1="50%"
                x2={`${x}%`}
                y2={`${y}%`}
                stroke={hoveredIndex === index ? '#f87171' : '#d1d5db'}
                strokeWidth={hoveredIndex === index ? 3 : 2}
                style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
              />
            );
          })}
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-64 md:w-80">
          <Service
            {...centerService}
            onMouseEnter={() => setHoveredIndex('center')}
            onMouseLeave={() => setHoveredIndex(null)}
            isHovered={hoveredIndex === 'center'}
          />
        </div>
        {surroundingServices.map((service, index) => {
          const angle = (360 / surroundingServices.length) * index - 90;
          const rad = (angle * Math.PI) / 180;
          const sin = Math.sin(rad);
          const radius =
            sin > 0.9
              ? baseRadius - bottomOffset
              : sin < -0.9
              ? baseRadius - topOffset
              : baseRadius;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <div
              key={service.id}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              <div className="w-50 md:w-80">
                <Service
                  {...service}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  isHovered={hoveredIndex === index}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

};

export default ServicesStarPattern;
