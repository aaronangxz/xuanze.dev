/**
 * Everything about you that isn't a post, a project or a Life entry lives here.
 * Values in [brackets] are placeholders to fill in. See CONTENT-TODO.md.
 */
export const site = {
  name: 'Ang Xuan Ze',
  shortName: 'Xuan Ze',
  url: 'https://xuanze.dev',
  /** Google Analytics 4 measurement ID (the same property the old site used). Empty to turn analytics off. */
  analyticsId: 'G-KP4W6YDH11' as string,
  description: 'Software engineer in Singapore. Curious by default, building at the edge with AI, shipping things that hold up.',
  email: 'angxze@gmail.com',
  location: 'Singapore',
  timezone: 'GMT+8',
  /** Set to '/resume.pdf' once public/resume.pdf exists; every Résumé link hides while this is empty. */
  resume: '' as string,
  links: {
    github: 'https://github.com/aaronangxz',
    linkedin: 'https://www.linkedin.com/in/aaronangxz/',
    leetcode: 'https://leetcode.com/angxze/',
  },

  hero: {
    greeting: 'Hi, I’m Xuan Ze.',
    line: 'Curious by default, building at the edge with AI, shipping things that hold up.',
    facts: ['Software engineer', 'Singapore', 'TikTok · Shopee'],
  },

  /** The "Currently" card on the home page. */
  currently: [
    { title: 'TikTok', sub: 'Software Engineer in Test', meta: 'work' },
    { title: 'Avenly', sub: 'Event platform, live', meta: 'product', href: '/projects/avenly', logo: '/logos/avenly.png' },
    { title: 'Clozit', sub: 'Fashion app, in beta', meta: 'product', href: '/projects/clozit', logo: '/logos/clozit.png' },
    { title: 'Runner Readiness', sub: 'Garmin MCP for runners, live', meta: 'product', href: '/projects/runner-readiness-mcp', logo: '/logos/runner-readiness.png' },
  ],

  about: {
    /** Square profile picture in public/. Leave empty for the placeholder silhouette. */
    photo: '/about/portrait.jpg',
    lede: 'Software engineer in Singapore, working mostly in Go and TypeScript. Test engineer turned builder.',
    focus: 'Backend systems, product engineering, testing',
    paragraphs: [
      'I build backend systems and the products around them, and I care about what happens to software after it ships.',
      'I started in test engineering. At Shopee I wrote API automation for voucher services in Marketplace Promotions. At TikTok I test Data Insights products end to end and build internal tools like DataHelperV2. I finished a B.Tech in Software Engineering at NUS alongside both jobs. Outside work I build my own products: right now that’s Avenly, an event platform, and Clozit, a fashion app.',
    ],
    howIWork: [
      'Small changes, shipped often.',
      'Every bug fix comes with the test that would have caught it.',
      'Boring technology for the core, so attention goes where it matters.',
      'Write it down: decisions, runbooks, and posts like these.',
    ],
    languages: ['Go', 'TypeScript', 'Python', 'C++'],
    tools: ['MySQL', 'Redis', 'React', 'Next.js', 'Docker'],
  },

  experience: [
    { org: 'TikTok', role: 'Software Engineer in Test, Global E-commerce Data Insights', from: 'Oct 2022', to: 'now',
      detail: 'Main QA owner for the creator and partner analytics products. Designed and built DataHelperV2, a test-data platform.',
      highlights: [
        'Owned product stability for the team: cut alert noise and got critical alerts answered faster.',
        'Brought production issues down quarter after quarter through more automation and earlier testing.',
        'Led stress testing ahead of peak shopping events, and the testing for a database migration that let a service take far more traffic.',
        'Built a tool that made sharing and reading logs across teams simpler, and introduced a pre-test checklist and QA handover docs.',
      ] },
    { org: 'Shopee', role: 'Software QA Engineer, Marketplace Promotions (Vouchers)', from: 'Jun 2021', to: 'Sep 2022',
      detail: 'API automation for voucher services.' },
  ],

  education: [
    { org: 'National University of Singapore', short: 'NUS', role: 'B.Tech (Computing), Software Engineering', from: '2020', to: '2024' },
    { org: 'Nanyang Polytechnic', short: 'NYP', role: 'Diploma in Mechatronics Engineering', from: '2013', to: '2016' },
  ],

  life: {
    /** Mirrors the Work hero: the same greeting, then the other half of the sentence. */
    tagline: 'I travel whenever I can, and run <em>wherever I land.</em>',
    /** Printed on the race bibs. */
    bibName: 'XUAN ZE',
    /**
     * Upcoming races, soonest first. The first one that hasn't happened yet gets the "next up" card; past ones hide themselves.
     * `waLabel` shows the World Athletics label (Platinum, Gold, Elite) when the race has one.
     */
    upcoming: [
      { name: 'Garmin Run Marathon Series Singapore', city: 'Singapore', country: 'SG', distance: 'Half Marathon', km: '21.1 km', date: '2026-10-25', start: 'Marina Barrage' },
      { name: 'Shanghai Marathon', city: 'Shanghai', country: 'CN', distance: 'Full Marathon', km: '42.195 km', date: '2026-12-06', start: 'The Bund', waLabel: 'Platinum' },
    ] as {
      name: string; city: string; country: string; distance: 'Half Marathon' | 'Full Marathon' | string; km: string; date: string;
      start?: string; waLabel?: 'Platinum' | 'Gold' | 'Elite'; goal?: string;
    }[],
  },
} as const;

export type Site = typeof site;
