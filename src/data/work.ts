/**
 * Case study index data.
 *
 * Ordering and headline choice here follow Design Shaped's "Metrics by Value"
 * scale: evidence that is hard to fake (financial impact, behaviour change,
 * error reduction) outranks evidence of activity (screens shipped, systems
 * owned). So the list leads with the projects that carry real outcomes, and
 * the craft-led work sits below it rather than opening the page.
 *
 * `tier` is an editorial marker, not something rendered. It records how much
 * weight a number actually carries, so gaps are visible when this file is
 * revisited. See CONTENT-NOTES.md for what still needs a real figure.
 */

export type EvidenceTier =
  | 'financial'
  | 'behaviour'
  | 'efficiency'
  | 'risk'
  | 'adoption'
  | 'craft'
  | 'output';

/** Pastel card tint. Each project owns one, so the index reads as four
 *  distinct things rather than four rows of the same thing. */
export type Tint = 'pink' | 'mint' | 'blue' | 'lavender' | 'rust';

export interface Evidence {
  value: string;
  label: string;
  tier: EvidenceTier;
}

export interface Project {
  slug: string;
  name: string;
  /** What the thing is, in one line. Sits above the headline. */
  kicker: string;
  /** Outcome-led. This is the line that has to earn the click. */
  headline: string;
  /** Two or three sentences of context for the index row. */
  summary: string;
  role: string;
  org: string;
  period: string;
  status?: 'Live' | 'In active development' | 'Shipped' | 'Handed over';
  evidence: Evidence[];
  stack: string[];
  links: { label: string; href: string }[];
  tint: Tint;
  cover: string;
  coverAlt: string;
  /** Set false to keep a project off the front page without deleting it. */
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'confety',
    tint: 'pink',
    name: 'Confety',
    kicker: 'Event ticketing · iOS, Android and web',
    headline:
      '₦1.31M in tickets processed, on a platform I shipped alone.',
    summary:
      'Confety is an event-ticketing platform I founded and lead, built for the Nigerian events market. Attendees discover and book events; organisers sell tickets and verify them at the door with signed QR codes. I own the product, the codebase and the release pipeline across the App Store, Play Store and web, and wrote 387 of its 394 commits.',
    role: 'Founder & Lead Developer',
    org: 'Confety',
    period: 'Jan 2026–present',
    status: 'Live',
    evidence: [
      {
        value: '₦1.31M',
        label: 'Ticket value processed across 161 orders, Feb–Aug 2026',
        tier: 'financial',
      },
      {
        value: '57.9%',
        label: 'Of paying buyers bought again (11 of 19)',
        tier: 'behaviour',
      },
      {
        value: '21.9%',
        label: 'Of accounts converted to a paid purchase (33 of 151)',
        tier: 'adoption',
      },
      {
        value: '1.5%',
        label: 'Over-deduction on every transaction, found and corrected',
        tier: 'risk',
      },
    ],
    stack: [
      'React Native (Expo)',
      'React',
      'Node',
      'Supabase (Postgres + RLS)',
      'Edge Functions',
      'Paystack',
      'PostHog',
    ],
    links: [{ label: 'confety.app', href: 'https://www.confety.app/' }],
    cover: 'confety-cover',
    coverAlt: 'The Confety event ticketing app shown on mobile and web.',
    featured: true,
  },
  {
    slug: 'outout',
    tint: 'rust',
    name: 'OutOut',
    kicker: 'Social events app · Flutter',
    headline:
      'Seven destinations, five slots, none of them buried.',
    summary:
      'OutOut is a shared-memory app for group outings: everyone at an event contributes photos, messages, place pins and expenses into one collective album that locks into a read-only "Memory" when the night ends. The navigation had more legitimate destinations than a bottom bar can physically hold. I treated it as a prioritisation problem rather than a layout one.',
    role: 'UX & design systems, build and release',
    org: 'AIENAI',
    period: '2025',
    status: 'Shipped',
    evidence: [
      { value: '64%', label: 'Less nav-related confusion in testing', tier: 'behaviour' },
      { value: '7 → 5', label: 'Destinations held in a five-slot bar', tier: 'craft' },
      { value: 'App Store', label: 'Shipped and tracked post-release', tier: 'output' },
    ],
    stack: ['Flutter', 'Supabase', 'EAS Build', 'App Store Connect'],
    links: [{ label: 'outout.app', href: 'https://outout.app/' }],
    cover: 'outout-hero2',
    coverAlt: 'The OutOut social events app shown on mobile.',
    featured: true,
  },
  {
    slug: 'axe',
    tint: 'lavender',
    name: 'AXE LMS',
    kicker: 'Learning platform · three roles, one codebase',
    headline:
      'Caught a grading queue overstating staff workload 9×.',
    summary:
      'AXE is the web platform behind AIENAI\'s two-week AI and design bootcamp, taking learners aged 13–19 from zero to a finished app prototype, a live pitch and a verifiable certificate. It serves three roles, Student, Tutor and Org, each a distinct experience from a single Next.js app. I lead development and wrote 280 of its 300 commits across 605 files.',
    role: 'Lead Developer & UX Designer',
    org: 'AIENAI (AXE Academy)',
    period: '2025–present',
    status: 'In active development',
    evidence: [
      {
        value: '281 → 31',
        label: 'Grading queue de-duplicated before staff triaged against it, a 9× overstatement',
        tier: 'risk',
      },
      {
        value: '1.8s → 30ms',
        label: 'Sidebar selection feedback, by taking a client-only URL param off the server round-trip',
        tier: 'efficiency',
      },
      {
        value: '2.3s → 0.6s',
        label: 'Catalogue time to content, collapsing an N+1 read from 3N+2 queries to 4',
        tier: 'efficiency',
      },
      {
        value: '135',
        label: 'Row-level security policies enforcing tenant isolation',
        tier: 'craft',
      },
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'shadcn/ui on Base UI',
      'Zustand',
      'Supabase',
      'Anthropic SDK',
      'Vercel',
    ],
    links: [{ label: 'axe.ac', href: 'https://www.axe.ac/' }],
    cover: 'axe-cover',
    coverAlt: 'The AXE learning management system dashboard.',
    featured: true,
  },
  {
    slug: 'hum',
    tint: 'mint',
    name: 'HUM',
    kicker: 'Design system, tokens and theming',
    headline:
      'One token set, so design and code stopped drifting.',
    summary:
      'HUM is where I owned the design system end to end: tokens, theming architecture, and the code-side styling structure the rest of the team built against. I took the front end to roughly 60% before moving to a supervisory role, reviewing the handover developer\'s work against the original requirements.',
    role: 'Design System Owner',
    org: 'AIENAI',
    period: '2025',
    status: 'Handed over',
    evidence: [
      { value: '1', label: 'Source of truth for tokens and theming', tier: 'craft' },
      { value: '~60%', label: 'Front end built before handover', tier: 'output' },
    ],
    stack: ['Design tokens', 'Theming architecture', 'Figma'],
    links: [],
    cover: 'hum-cover',
    coverAlt: 'The HUM design system.',
    featured: true,
  },
];

export const featured = projects.filter((p) => p.featured);

export function getProject(slug: string): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project slug: ${slug}`);
  return p;
}
