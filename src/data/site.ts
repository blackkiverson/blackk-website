export const site = {
  name: 'Samuel Onyebuchi-Igbokwe',
  shortName: 'Samuel Onyebuchi-Igbokwe',
  initials: 'SO',
  roles: ['Fullstack Agentic Designer', 'Product Designer'],
  url: 'https://blackk.website',
  email: 'blackkiverson@gmail.com',
  location: 'Remote',
  available: 'Open to fullstack agentic design and product design roles',
  /** One line. This is the thing someone remembers after closing the tab. */
  positioning:
    'I design and ship products end to end: research, interface, production frontend, full-stack build, run as one AI-native loop rather than a relay.',
  description:
    'Product designer and fullstack agentic designer. I take products from research through to shipped builds, owning the design-to-code loop so design systems in Figma run exactly as intended in production.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samuel-onyebuchi-igbokwe-650413169/' },
    { label: 'Email', href: 'mailto:blackkiverson@gmail.com' },
  ],
} as const;

export const nav = [
  { label: 'Case studies', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv.pdf' },
  { label: 'Contact', href: 'mailto:blackkiverson@gmail.com' },
] as const;

export interface Role {
  title: string;
  org: string;
  href?: string;
  period: string;
  mode: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: 'Product Designer & Frontend Developer',
    org: 'AIENAI',
    href: 'https://www.aienai.co',
    period: 'Dec 2023–present',
    mode: 'Remote',
    points: [
      'Lead design and frontend delivery for in-house and client products, pairing product design with AI-assisted, design-to-code workflows.',
      'Build mobile and web applications in React Native, TypeScript and Tailwind CSS, improving usability across internal tools.',
      'Apply agentic tooling such as Figma MCP to shorten the design-to-build loop, working cross-functionally to lift product adoption.',
      'Began on frontend, building internal tools in React Native and Tailwind CSS to streamline team workflows, before taking on product design.',
    ],
  },
  {
    title: 'Founder & Lead Developer',
    org: 'Confety',
    href: 'https://www.confety.app',
    period: 'Jan 2026–present',
    mode: 'Hybrid',
    points: [
      'Founded and lead Confety, a Nigerian event-ticketing platform shipped on web, iOS and Android.',
      'Own the full release pipeline across the App Store, Play Store and TestFlight, including Apple Sign-In and ongoing maintenance.',
    ],
  },
  {
    title: 'UI Developer (Contributor)',
    org: 'Fantasy 1',
    href: 'https://www.fantasy1.app',
    period: 'Jun 2025',
    mode: 'Remote',
    points: [
      'Built interface components in React Native for a dynamic fantasy racing app.',
      'Designed and built the Fantasy 1 product website in Framer, with accessibility as the constraint rather than the afterthought.',
    ],
  },
  {
    title: 'Lead UI/UX Designer (Contract)',
    org: 'TheUptik',
    period: 'Feb 2025',
    mode: 'Remote',
    points: [
      'Led a full website redesign, running user research and usability testing to find the pain points worth fixing.',
      'Delivered wireframes, prototypes and high-fidelity designs, holding design-system consistency through to launch.',
    ],
  },
  {
    title: 'Part-time Coding Instructor',
    org: 'Algorithmika, Mauritius',
    period: '2023',
    mode: 'Remote',
    points: [
      'Taught programming fundamentals and game development to children aged 8–12, designing tailored curricula and mentoring one to one.',
    ],
  },
];

export const capabilities = [
  {
    title: 'Design & AI',
    items: [
      'Product and UI/UX design',
      'Agentic and AI-assisted workflows',
      'Figma MCP, design-to-code',
      'Design systems and tokens',
      'Figma, Framer',
    ],
  },
  {
    title: 'Engineering',
    items: [
      'React Native, Flutter',
      'TypeScript, Tailwind CSS',
      'Next.js, React',
      'Supabase, Postgres, Git',
      'Fullstack web development',
    ],
  },
  {
    title: 'Ways of working',
    items: [
      'End-to-end ownership',
      'Release pipeline management',
      'User research and usability testing',
      'Accessibility audits (WCAG 2.1 AA)',
      'Cross-functional leadership',
    ],
  },
];

export const education = [
  {
    qualification: 'MSc, Information Technology (Cyber Security)',
    institution: 'University of Luzon',
  },
  {
    qualification: 'BSc, Software Engineering',
    institution: 'American University of Nigeria',
  },
];

export const certifications = [
  'AIENAI Academy Certification in UX Design and Research',
  'Cybrary Linux Systems',
  'Cybrary Cybersecurity',
];
