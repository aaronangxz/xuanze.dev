import { getCollection } from 'astro:content';
import { posts, projects, projectHref, noteTitle, noteGroup } from './content';

/**
 * The knowledge graph on /graph: every note, post, project and LeetCode write-up is a node, plus topic nodes
 * (folders, tags, stack items) that tie them together. Nothing needs to be maintained by hand; edges come from:
 *   - links between pages: markdown links to /notes, /writing, /projects, /leetcode, or [[Title]] wikilinks
 *   - a post's `project`
 *   - folders: a note joins its folder, a subfolder joins its parent folder
 *   - tags (notes, posts, LeetCode) and stack items (projects)
 *   - mentions: a page whose text names a note (e.g. "Redis", "Merge Sort") links to that note
 * A topic with the same name as a note is that note, so tagging a post `redis` links it to the Redis note.
 */

export type NodeType = 'note' | 'post' | 'project' | 'leetcode' | 'topic';
export interface GraphNode { id: string; label: string; type: NodeType; href?: string; sub?: string; desc?: string }
export interface Graph { nodes: GraphNode[]; links: [number, number][] }

/** Matching key: "Linked List", "linkedlist" and "Linked Lists" all become "linkedlist". */
const key = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '').replace(/(?<=[a-z]{3})s$/, '');

/** Display names for folders and tags whose spelling on disk is terse. */
const LABELS: Record<string, string> = { cicd: 'CI/CD', messagequeue: 'Message Queue', csfundamental: 'CS Fundamentals', tree: 'Trees' };

/** Tags and folders that say nothing about the content. */
const SKIP_TOPICS = new Set(['project', 'demo', 'gettingstarted', 'other', 'general']);

/** Note titles too generic to count as a mention when they appear in running text. */
const NO_MENTION = new Set(['overview', 'term', 'network', 'database', 'scaling', 'wallet', 'goland', 'queue', 'stack', 'go']);

/** Prose only: code, images, HTML and link targets would produce false mentions. */
const prose = (body = '') =>
  body
    .replace(/^---[\s\S]*?\n---/, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\]\([^)]*\)/g, '] ')
    .replace(/<[^>]+>/g, ' ');

/** Internal links in a page body, as site paths ("/notes/…") or wikilink titles. */
function links(body = '') {
  const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`\n]*`/g, ' ');
  const paths = [...text.matchAll(/\]\((?:https?:\/\/(?:www\.)?xuanze\.dev)?(\/(?:notes|writing|projects|leetcode)\/[^)#?\s]+)/g)].map((m) => decodeURI(m[1]).replace(/\/$/, ''));
  const wiki = [...text.matchAll(/\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g)].map((m) => m[1].trim());
  return { paths, wiki };
}

/** The first paragraph of prose, for the preview pane. */
function excerpt(body = '', max = 170) {
  const text = body
    .replace(/^---[\s\S]*?\n---/, '')
    .replace(/```[\s\S]*?```/g, '\n\n')
    .replace(/^\s*#.*$/gm, '\n')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '');
  const para = text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/^\s*(?:[-*>]|\d+\.)\s+/gm, '').replace(/[*_`~]/g, '').replace(/\s+/g, ' ').trim())
    .find((p) => p.length > 40 && !p.startsWith('|'));
  if (!para) return undefined;
  return para.length > max ? para.slice(0, para.lastIndexOf(' ', max)).replace(/[,.;:]$/, '') + '…' : para;
}

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export async function buildGraph(): Promise<Graph> {
  const nodes: GraphNode[] = [];
  const edges = new Set<string>();
  const byHref = new Map<string, number>();
  const byKey = new Map<string, number>(); // note titles and topics, for tags, folders and wikilinks
  const bodies: [number, string][] = [];

  const add = (n: GraphNode) => {
    nodes.push(n);
    const i = nodes.length - 1;
    if (n.href) byHref.set(n.href, i);
    return i;
  };
  const link = (a: number, b: number) => {
    if (a === b) return;
    edges.add(a < b ? `${a}-${b}` : `${b}-${a}`);
  };
  /** The note or topic called `name`, created as a topic if there is none yet. */
  const topic = (name: string) => {
    const k = key(name);
    if (!k || SKIP_TOPICS.has(k)) return -1;
    const hit = byKey.get(k);
    if (hit !== undefined) {
      // Prefer the proper spelling when a tag and a stack item disagree ("mysql" vs "MySQL").
      const n = nodes[hit];
      if (n.type === 'topic' && !LABELS[k] && n.label === n.label.toLowerCase() && name !== name.toLowerCase()) n.label = name;
      return hit;
    }
    const i = add({ id: `topic:${k}`, label: LABELS[k] ?? name, type: 'topic' });
    byKey.set(k, i);
    return i;
  };

  /* Notes first, so topics with a note's name resolve to the note. */
  const notes = await getCollection('notes');
  const noteIdx: [number, string[]][] = [];
  const noteTags: [number, string[]][] = [];
  for (const n of notes) {
    const label = noteTitle(n);
    const rel = (n.filePath ?? '').split('src/content/notes/')[1] ?? '';
    const folders = rel.split('/').slice(0, -1);
    const i = add({ id: `note:${n.id}`, label, type: 'note', href: `/notes/${n.id}`, sub: noteGroup(n, 'src/content/notes'), desc: excerpt(n.body) });
    if (!byKey.has(key(label))) byKey.set(key(label), i);
    noteIdx.push([i, folders]);
    noteTags.push([i, (n.data.tags ?? []) as string[]]);
    bodies.push([i, n.body ?? '']);
  }
  for (const [i, folders] of noteIdx) {
    // Note → its folder → the parent folder. A folder named like a note (Git/Git.md, Go/Go.md) is that note.
    let child = i;
    for (let d = folders.length - 1; d >= 0; d--) {
      const f = topic(folders[d]);
      if (f < 0) break;
      link(child, f);
      child = f;
    }
  }

  for (const p of await posts()) {
    const i = add({ id: `post:${p.id}`, label: p.data.title, type: 'post', href: `/writing/${p.id}`, sub: 'Writing', desc: p.data.description ?? excerpt(p.body) });
    bodies.push([i, p.body ?? '']);
  }

  const prs = await projects();
  for (const p of prs) {
    const i = add({ id: `project:${p.id}`, label: p.data.title, type: 'project', href: projectHref(p) ?? '/projects', sub: p.data.status, desc: p.data.summary });
    if (!byKey.has(key(p.data.title))) byKey.set(key(p.data.title), i);
    bodies.push([i, p.body ?? '']);
  }

  const lc = await getCollection('leetcode');
  for (const n of lc) {
    // Problems join by technique (their tags), not by difficulty: a hub per level would just be a big star.
    const level = noteGroup(n, 'src/content/leetcode').toLowerCase();
    const i = add({ id: `leetcode:${n.id}`, label: noteTitle(n), type: 'leetcode', href: `/leetcode/${n.id}`, sub: level, desc: excerpt(n.body) });
    for (const t of (n.data.tags ?? []) as string[]) { const ti = topic(t); if (ti >= 0) link(i, ti); }
    bodies.push([i, n.body ?? '']);
  }

  for (const [i, tags] of noteTags) for (const t of tags) { const ti = topic(t); if (ti >= 0) link(i, ti); }

  /* Tags, stacks and a post's project (after all pages exist, so they resolve to pages where they can). */
  for (const p of await posts()) {
    const i = byHref.get(`/writing/${p.id}`)!;
    for (const t of p.data.tags) { const ti = topic(t); if (ti >= 0) link(i, ti); }
    if (p.data.project) { const pi = nodes.findIndex((n) => n.id === `project:${p.data.project}`); if (pi >= 0) link(i, pi); }
  }
  for (const p of prs) {
    const i = nodes.findIndex((n) => n.id === `project:${p.id}`);
    for (const s of p.data.stack) { const ti = topic(s); if (ti >= 0) link(i, ti); }
  }

  /* Explicit links and mentions of notes. */
  const mentionable = nodes
    .map((n, i) => ({ n, i }))
    .filter(({ n }) => n.type === 'note' && !NO_MENTION.has(key(n.label)) && n.label.length >= 3)
    .map(({ n, i }) => {
      const words = n.label.replace(/[/-]/g, ' ').split(/\s+/).filter(Boolean).map(esc).join('[\\s-]*');
      // Short names (HTTP, Git) only in their own casing; longer ones in any case and plural.
      const re = n.label.length <= 4 ? new RegExp(`\\b${words}\\b`) : new RegExp(`\\b${words}(?:e?s)?\\b`, 'i');
      return { i, re };
    });
  for (const [i, body] of bodies) {
    const { paths, wiki } = links(body);
    for (const p of paths) { const j = byHref.get(p); if (j !== undefined) link(i, j); }
    for (const w of wiki) { const j = byKey.get(key(w)); if (j !== undefined) link(i, j); }
    const text = prose(body).replace(/^#\s+.*$/m, ' '); // the page's own title is not a mention
    for (const m of mentionable) if (m.i !== i && m.re.test(text)) link(i, m.i);
  }

  /* A topic only one page uses connects nothing: drop it, and repeat, since that can strand its parent folder. */
  let pairs = [...edges].map((e) => e.split('-').map(Number) as [number, number]);
  const keep = nodes.map(() => true);
  for (let changed = true; changed;) {
    changed = false;
    const deg = nodes.map(() => 0);
    for (const [a, b] of pairs) { deg[a]++; deg[b]++; }
    nodes.forEach((n, i) => { if (keep[i] && n.type === 'topic' && deg[i] < 2) { keep[i] = false; changed = true; } });
    pairs = pairs.filter(([a, b]) => keep[a] && keep[b]);
  }
  const at = new Map<number, number>();
  const kept = nodes.filter((_, i) => keep[i] && at.set(i, at.size));
  return { nodes: kept, links: pairs.map(([a, b]) => [at.get(a)!, at.get(b)!]) };
}
