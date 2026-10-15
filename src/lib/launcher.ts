import { getCollection } from 'astro:content';
import { site } from '../site.config';
import { posts, projects, projectHref, projectGroup, PROJECT_GROUPS, fmtMonth, noteTitle, noteGroup } from './content';

/** One row in the ⌘K launcher. `p` is the preview pane HTML; the action button is added on the client. */
export interface LauncherItem {
  g: string;            // group heading
  t: string;            // title
  s: string;            // subtitle
  i: 'user' | 'box' | 'doc' | 'work' | 'mail' | 'link' | 'note' | 'sun' | 'graph';
  k: string;            // extra search keywords
  p: string;            // preview HTML
  href?: string;
  external?: boolean;
  copy?: boolean;
  img?: string;         // square logo shown instead of the icon
  life?: boolean;       // switches to the Life side with the slide transition
  searchOnly?: boolean; // only listed when the query matches
  cta?: string;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const chips = (xs: readonly string[]) => (xs.length ? `<div class="chips">${xs.map((x) => `<span>${esc(x)}</span>`).join('')}</div>` : '');
const preview = (k: string, h: string, p: string, extra = '') => `<span class="k">${esc(k)}</span><h2>${esc(h)}</h2><p>${esc(p)}</p>${extra}`;

export async function launcherItems(): Promise<LauncherItem[]> {
  const items: LauncherItem[] = [];

  items.push(
    { g: 'Start here', t: 'About me', s: 'Profile', i: 'user', k: 'about bio profile experience singapore', href: '/about', cta: 'Open profile',
      p: preview('profile', 'About me', site.about.paragraphs[0], chips(site.about.languages)) },
    { g: 'Start here', t: 'Copy email address', s: 'Action', i: 'mail', k: 'email contact mail talk', copy: true, cta: 'Copy email',
      p: preview('action', site.email, 'The fastest way to reach me. I usually reply within a day.') },
  );
  if (site.resume) items.splice(1, 0,
    { g: 'Start here', t: 'Résumé', s: 'One page, PDF', i: 'doc', k: 'resume cv experience skills pdf', href: site.resume, external: true, cta: 'Open PDF',
      p: preview('document · pdf', 'Résumé', 'Experience, projects and skills on one page.') });

  // Same groups and order as the Projects page: products, work, side projects, then what's no longer running.
  const pgroup = projectGroup;
  const rank = (d: Parameters<typeof projectGroup>[0]) => PROJECT_GROUPS.indexOf(projectGroup(d));
  const prs = (await projects()).sort((a, b) => rank(a.data) - rank(b.data) || a.data.order - b.data.order);
  for (const pr of prs) {
    const d = pr.data;
    const sub = !d.active ? d.status : d.kind === 'product' ? `Product · ${d.period}` : d.kind === 'work' ? `${d.company?.split(',')[0] ?? 'Work'} · ${d.status}` : d.status;
    const href = projectHref(pr);
    items.push({
      g: pgroup(d), t: d.title, s: sub, i: 'box', img: d.logo, k: `${d.kind} ${pgroup(d)} ${d.stack.join(' ')} ${d.summary}`,
      href: href ?? '/projects', external: !!d.href, cta: d.href ? 'View on GitHub' : href ? 'Read the case study' : 'See all projects',
      p: (d.logo ? `<img class="plogo" src="${esc(d.logo)}" alt="" width="44" height="44">` : '') + preview(`${d.kind === 'side' ? 'side project' : d.kind === 'work' ? 'built at work' : 'product'} · ${d.status}`, d.title, d.summary, chips(d.stack.slice(0, 5))),
    });
  }

  // After me and the products: a way to wander through everything else.
  items.push({ g: 'Explore', t: 'Graph view', s: 'Everything, connected', i: 'graph', k: 'graph map obsidian connections links topics knowledge notes', href: '/graph', cta: 'Open the graph',
      p: preview('graph', 'Graph view', 'The projects I\'ve built and what I\'ve learned along the way, as one map joined by the topics they share.') });
  items.push({ g: 'Explore', t: 'How I work', s: 'Claude Code, day to day', i: 'doc', k: 'how i work workflow claude code ai agents skills subagents orchestrator qa ci worktree', href: '/about/how-i-work', cta: 'Open page',
      p: preview('about · how I work', 'How I work', 'How I run Claude Code as a small engineering team: a skill suite I wrote, role-specific subagents, QA with evidence, and a setup that fixes itself.') });

  for (const x of site.experience.slice(0, 2)) {
    items.push({
      g: 'Experience', t: x.org, s: `${x.role.split(',')[0]} · ${x.from.split(' ').pop()}–${x.to === 'now' ? 'now' : x.to.split(' ').pop()}`, i: 'work', k: `${x.org} ${x.role} ${'detail' in x ? x.detail : ''}`,
      href: '/about', cta: 'See all experience',
      p: preview(`${x.from} – ${x.to}`, x.org, x.role, 'detail' in x && x.detail ? `<p>${esc(x.detail)}</p>` : ''),
    });
  }

  for (const x of site.education) {
    items.push({
      g: 'Education', t: x.org, s: `${x.role.split(',')[0]} · ${x.from}–${x.to}`, i: 'work', k: `education school ${x.short} ${x.role}`,
      href: '/about', cta: 'See education', searchOnly: true,
      p: preview(`${x.from} – ${x.to}`, x.org, x.role),
    });
  }

  const all = await posts();
  for (const post of all) {
    items.push({
      g: 'Writing', t: post.data.title, s: fmtMonth(post.data.date), i: 'doc', k: `${post.data.tags.join(' ')} post`,
      href: `/writing/${post.id}`, cta: 'Read the post', searchOnly: all.indexOf(post) >= 4,
      p: preview(`post · ${fmtMonth(post.data.date).toLowerCase()}`, post.data.title, post.data.description ?? `Tagged ${post.data.tags.join(', ') || 'notes'}.`),
    });
  }
  items.push({ g: 'Writing', t: 'All writing', s: `${all.length} posts`, i: 'doc', k: 'writing blog posts articles', href: '/writing', cta: 'Open writing',
    p: preview('page', 'Writing', 'Notes on things I’ve built and bugs I’ve fixed. Mostly Go, databases and caching.') });

  const notes = await getCollection('notes');
  const lc = await getCollection('leetcode');
  items.push({ g: 'Notes', t: 'Notes & LeetCode', s: `${notes.length + lc.length} pages`, i: 'note', k: 'notes study system design algorithms leetcode', href: '/notes', cta: 'Browse notes',
    p: preview('study notes', 'Notes & LeetCode', `${notes.length} study notes on system design, networking and algorithms, plus ${lc.length} LeetCode write-ups.`) });
  for (const n of notes) {
    const t = noteTitle(n), g = noteGroup(n, 'src/content/notes');
    items.push({ g: 'Notes', t, s: g, i: 'note', k: `note ${g}`, href: `/notes/${n.id}`, searchOnly: true, cta: 'Open note', p: preview(`note · ${g.toLowerCase()}`, t, `Study notes in ${g}.`) });
  }
  for (const n of lc) {
    const t = noteTitle(n), g = noteGroup(n, 'src/content/leetcode');
    const tags = Array.isArray(n.data.tags) ? n.data.tags.join(', ') : '';
    items.push({ g: 'LeetCode', t, s: g, i: 'note', k: `leetcode ${g} ${tags}`, href: `/leetcode/${n.id}`, searchOnly: true, cta: 'Open solution',
      p: preview(`leetcode · ${g}`, t, tags ? `Topics: ${tags}.` : 'Approach, complexity and code.') });
  }

  items.push(
    { g: 'Life', t: 'Travel log', s: 'Flights and stays', i: 'sun', k: 'life travel flights hotels trips holiday', href: '/life', life: true, cta: 'Switch to Life',
      p: preview('the other side', 'Travel log', 'Flights, stays and the trips I keep thinking about.') },
    { g: 'Life', t: 'Running', s: 'Marathon journey', i: 'sun', k: 'life running marathon race strava', href: '/life#l-run', life: true, cta: 'Switch to Life',
      p: preview('the other side', 'Running', 'Races, personal bests and the next start line.') },
    { g: 'Links', t: 'GitHub', s: 'aaronangxz', i: 'link', k: 'github code source', href: site.links.github, external: true, cta: 'Open GitHub',
      p: preview('link', 'GitHub', 'Source for side projects and bots.') },
    { g: 'Links', t: 'LinkedIn', s: 'aaronangxz', i: 'link', k: 'linkedin profile', href: site.links.linkedin, external: true, cta: 'Open LinkedIn',
      p: preview('link', 'LinkedIn', 'Work history.') },
  );
  return items;
}

/** JSON for embedding in a <script type="application/json"> tag. */
export const toJsonScript = (v: unknown) => JSON.stringify(v).replace(/</g, '\\u003c');
