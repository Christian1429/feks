// export const pageLinks = [
//   { id: 1, href: '#home', text: 'hem' },
//   { id: 2, href: '#about', text: 'om oss' },
//   { id: 3, href: '#services', text: 'tjänster' },
  // { id: 4, href: '#login', text: 'login', class: 'btn login' },
// ];

export const services = [
  {
    id: 1,
    icon: 'fas fa-home fa-fw',
    title: ' Platsbesök',
    text: 'Inspektion av fastighet och omgivning, vad har ni för skydd idag och vad behöver ni för att bli krissäkra',
  },
  {
    id: 2,
    icon: 'fas fa-book fa-fw',
    title: 'RSA (Risk och sårbarhetsanalys)',
    text: 'Fullständig RSA lämnas, där ni får en överblick över era risker och sårbarheter',
  },
  {
    id: 3,
    icon: 'fas fa-check fa-fw',
    title: 'Beredskapsplan',
    text: 'Dokumentation av hur ni bör agera i en kris och hur ni kan skydda er på bästa sätt',
  },
  {
    id: 4,
    icon: 'fas fa-comments fa-fw',
    title: 'Samberedskap',
    text: 'Möjligheten till att samverka med varandra, alla kan göra nånting men ingen kan göra allt',
  },
  {
    id: 5,
    icon: 'fas fa-user fa-fw',
    title: 'Trygghet och förmåga',
    text: 'Besitter kunskap och förmåga att agera i en kris.',
  },
  {
    id: 6,
    icon: 'fas fa-globe fa-fw',
    title: 'Beredskapscertifiering',
    text: 'Certifieringen visar att er fastighet eller verksamhet uppnår en hög nivå av beredskap',
  },
];

// News links images decending order
import link1 from './images/news/pwn.jpg';
import link2 from './images/news/kansliet.jpg';
import link3 from './images/news/msb.jpg';
import link4 from './images/news/SK.jpg';



// High number descending order
export const newsLinks = [
  {
    id: 1,
    image: link1,
    date: 'Mars 5, 2025',
    title: 'Nya riktlinjer för cybersäkerhet',
    info: `Nya riktlinjer för cybersäkerhet har utfärdats för att skydda mot ökande cyberhot.`,
    location: 'Sverige',
    href: 'https://www.regeringen.se/contentassets/1e56bf5cad214fc78eb80d91c11cccb6/nya-regler-om-cybersakerhet-sou-202418.pdf',
  },
  {
    id: 2,
    image: link2,
    date: 'Mars 5, 2024',
    title: 'Nytt säkerhetsprogram',
    info: `Ett nytt säkerhetsprogram har lanserats för att förbättra skyddet av kritisk infrastruktur i Sverige.`,
    location: 'Sverige',
    href: 'https://www.regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2024/03/sou-202418/',
  },
  {
    id: 3,
    image: link3,
    date: 'Oktober 28, 2024',
    title: 'MSB byter namn',
    info: ` I promemorian föreslås att Myndigheten för samhällsskydd och beredskap (MSB) ska byta namn till Myndigheten för civilt försvar. Det nya namnet syftar till att tydliggöra och markera myndighetens uppdrag inom civilt försvar.`,
    location: 'Sverige',
    href: 'https://www.regeringen.se/rattsliga-dokument/departementsserien-och-promemorior/2024/10/myndigheten-for-civilt-forsvar--ett-nytt-namn-for-myndigheten-for-samhallsskydd-och-beredskap-och-vissa-organisatoriska-forandringar/',
  },
  {
    id: 4,
    image: link4,
    date: 'November 19, 2024',
    title: 'Utbildning i krishantering',
    info: `En omfattande utbildning i krishantering kommer att hållas för att stärka beredskapen hos myndigheter och företag.`,
    location: 'Sverige',
    href: 'https://www.msb.se/sv/amnesomraden/krisberedskap--civilt-forsvar/det-svenska-civila-beredskapssystemet/',
  },
];
  
  export const formFields = [
  {
    id: 1,
    type: 'email',
    name: 'email',
    placeholder: 'email@exempel.se *',
    required: true,
  },
  {
    id: 2,
    type: 'tel',
    name: 'telefon',
    placeholder: 'Telefon nummer *',
    required: true,
  },
  {
    id: 3,
    type: 'text',
    name: 'adress',
    placeholder: 'Adress *',
    required: true,
  },
  {
    id: 4,
    type: 'textarea',
    name: 'meddelande',
    placeholder: 'Övrigt *',
    required: true,
  },
];
