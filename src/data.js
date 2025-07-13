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
