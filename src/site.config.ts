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
  // TODO: replace with an address you actually read.
  email: 'hello@xuanze.dev',
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
    { title: 'AffiliateManager', sub: 'Building and running it', meta: 'product', href: '/projects/affiliate-manager' },
    { title: 'Writing', sub: 'Go, databases and caching', meta: 'posts', href: '/writing' },
    { title: 'Singapore', sub: 'Where I live and work', meta: 'GMT+8' },
  ],

  about: {
    lede: 'Software engineer in Singapore, working mostly in Go and TypeScript. Test engineer turned builder.',
    focus: 'Backend systems, product engineering, testing',
    paragraphs: [
      'I build backend systems and the products around them, and I care about what happens to software after it ships.',
      'I started in test engineering. At Shopee I wrote API automation for voucher services in Marketplace Promotions. At TikTok I tested Data Insights products end to end and built internal tools like DataHelperV2. I studied for a B.Tech in Software Engineering at NUS alongside both jobs. Now I build my own products, starting with AffiliateManager.',
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
    { org: 'Independent', role: 'Building and running AffiliateManager, and a new product in development.', from: '[2025]', to: 'now' },
    { org: 'TikTok', role: 'Software Engineer in Test, Global E-commerce Data Insights', from: 'Oct 2022', to: '[end]',
      detail: 'Built DataHelperV2, a mock-data injection tool for test databases. End-to-end testing of data products.' },
    { org: 'Shopee', role: 'Software QA Engineer, Marketplace Promotions (Vouchers)', from: 'Jun 2021', to: 'Sep 2022',
      detail: 'API automation for voucher services.' },
    { org: 'National University of Singapore', role: 'B.Tech (Computing), Software Engineering', from: '2020', to: '[year]' },
  ],

  life: {
    headline: 'When I’m not shipping code, I’m usually <em>running</em> or <em>on a plane</em>.',
    sub: 'Trips, races and the odd detour. A slower, more personal corner of the site.',
    // TODO: confirm your next race and its date.
    /** Cities in the slow-moving strip under the Life hero. */
    places: ['Bali', 'Yosemite', 'San Francisco', 'New York', 'Hanoi', 'Da Nang', 'Hong Kong', 'Guangzhou', 'Jakarta'],
    nextRace: { name: '[Your first marathon]', date: '2026-12-06', goal: '[goal time]' },
  },
} as const;

export type Site = typeof site;
