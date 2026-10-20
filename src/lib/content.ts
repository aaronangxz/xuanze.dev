import { getCollection, type CollectionEntry } from 'astro:content';

export const fmtMonth = (d: Date) => d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
export const fmtDay = (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
export const fmtDayMonth = (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', timeZone: 'UTC' });

export async function posts() {
  const all = await getCollection('writing', (p) => !p.data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function projects() {
  const all = await getCollection('projects', (p) => !p.data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Where a project row leads: its own link, its case study, or nowhere (listed only). */
export const projectHref = (p: CollectionEntry<'projects'>) => p.data.href ?? (p.data.page ? `/projects/${p.id}` : null);

/** Project lifecycle pills: one wording everywhere. */
export const STAGE_LABEL = { live: 'Live', beta: 'Beta', building: 'Building' } as const;
export type Stage = keyof typeof STAGE_LABEL;
/** What `status` adds beyond the pill: "Live, invite-only" → "invite-only", "In beta" → "". */
export const statusNote = (d: { status: string; stage?: Stage }) =>
  d.stage ? d.status.replace(new RegExp(`^(in )?${STAGE_LABEL[d.stage]}\\b[\\s,·–-]*`, 'i'), '') : d.status;

/** The one grouping of projects, shared by the Projects page and search. */
export const PROJECT_GROUPS = ['Building now', 'Built at work', 'Side projects', 'Inactive'] as const;
export type ProjectGroup = (typeof PROJECT_GROUPS)[number];
export const projectGroup = (d: { kind: string; active: boolean }): ProjectGroup =>
  !d.active ? 'Inactive' : d.kind === 'product' ? 'Building now' : d.kind === 'work' ? 'Built at work' : 'Side projects';

export function readingTime(body = '') {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/* ---------- Notes and LeetCode ---------- */

type NoteEntry = CollectionEntry<'notes'> | CollectionEntry<'leetcode'>;

/** Title from the first "# Heading" in the file, falling back to the file name. */
export function noteTitle(e: NoteEntry) {
  const h1 = e.body?.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (h1) return h1;
  const file = (e.filePath ?? e.id).split('/').pop() ?? e.id;
  return file.replace(/\.md$/, '').replace(/([a-z])([A-Z])/g, '$1 $2');
}

/** Folder name as written on disk, e.g. "System Design" or "easy". */
export function noteGroup(e: NoteEntry, base: string) {
  const rel = (e.filePath ?? '').split(base + '/')[1] ?? '';
  const parts = rel.split('/');
  return parts.length > 1 ? parts[0] : 'General';
}

export async function notesByGroup() {
  const notes = await getCollection('notes');
  const groups = new Map<string, { title: string; href: string }[]>();
  for (const n of notes) {
    const g = noteGroup(n, 'src/content/notes');
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g)!.push({ title: noteTitle(n), href: `/notes/${n.id}` });
  }
  for (const list of groups.values()) list.sort((a, b) => a.title.localeCompare(b.title));
  return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

export async function leetcodeByLevel() {
  const all = await getCollection('leetcode');
  const order = ['easy', 'medium', 'hard'];
  const groups = new Map<string, { title: string; href: string; no: number }[]>();
  for (const n of all) {
    const g = noteGroup(n, 'src/content/leetcode').toLowerCase();
    if (!groups.has(g)) groups.set(g, []);
    const title = noteTitle(n);
    groups.get(g)!.push({ title, href: `/leetcode/${n.id}`, no: parseInt(title, 10) || 0 });
  }
  for (const list of groups.values()) list.sort((a, b) => a.no - b.no);
  return order.filter((g) => groups.has(g)).map((g) => [g, groups.get(g)!] as const);
}
