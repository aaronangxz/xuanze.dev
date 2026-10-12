/**
 * Everything about you that isn't a post, a project or a Life entry lives here.
 * Values in [brackets] are placeholders to fill in. See CONTENT-TODO.md.
 */
export const site = {
  name: 'Ang Xuan Ze',
  shortName: 'Xuan Ze',
  monogram: 'xz',
  url: 'https://xuanze.dev',
  description: 'Software engineer in Singapore. I build software in Go and TypeScript, and I make sure it doesn’t break.',
  email: 'angxze@gmail.com',
  location: 'Singapore',
  timezone: 'GMT+8',
  // TODO: add your résumé as public/resume.pdf
  resume: '/resume.pdf',
  links: {
    github: 'https://github.com/aaronangxz',
    linkedin: 'https://www.linkedin.com/in/aaronangxz/',
    leetcode: 'https://leetcode.com/angxze/',
  },

  hero: {
    greeting: 'Hi, I’m Xuan Ze.',
    line: 'I build software in Go and TypeScript, and I make sure it doesn’t break.',
    facts: ['Software engineer', 'Singapore', 'TikTok · Shopee'],
  },

  /** The "Currently" card on the home page. */
  currently: [
    { title: 'TikTok', sub: 'Software Engineer in Test', meta: 'work' },
    { title: 'Avenly', sub: 'Event platform, live', meta: 'product', href: '/projects/avenly' },
    { title: 'Clozit', sub: 'Fashion app, in beta', meta: 'product', href: '/projects/clozit' },
  ],

  about: {
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
      detail: 'Built DataHelperV2, a mock-data injection tool for test databases. End-to-end testing of data products.' },
    { org: 'Shopee', role: 'Software QA Engineer, Marketplace Promotions (Vouchers)', from: 'Jun 2021', to: 'Sep 2022',
      detail: 'API automation for voucher services.' },
  ],

  education: [
    { org: 'National University of Singapore', short: 'NUS', role: 'B.Tech (Computing), Software Engineering', from: '2020', to: '2024' },
    { org: 'Nanyang Polytechnic', short: 'NYP', role: 'Diploma in Mechatronics Engineering', from: '2013', to: '2016' },
  ],

  life: {
    headline: 'When I’m not shipping code, I’m usually <em>running</em> or <em>on a plane</em>.',
    sub: 'Trips, races and the odd detour. A slower, more personal corner of the site.',
    /** Cities in the slow-moving strip under the Life hero. */
    places: ['Bali', 'Yosemite', 'San Francisco', 'New York', 'Hanoi', 'Da Nang', 'Hong Kong', 'Guangzhou', 'Jakarta'],
    /** Upcoming races, soonest first. The first one that hasn't happened yet gets the big countdown; past ones hide themselves. */
    upcoming: [
      { name: 'Garmin Singapore Half Marathon', distance: '21.1 km', date: '2026-10-25' },
      { name: 'Shanghai Marathon', distance: '42.2 km', date: '2026-12-05', note: 'first full marathon' },
    ] as { name: string; distance: string; date: string; goal?: string; note?: string }[],
  },
} as const;

export type Site = typeof site;
