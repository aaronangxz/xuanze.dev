import { getCollection } from 'astro:content';
import { posts } from './content';

/**
 * Where the old Docusaurus site's URLs (2022–2023) live now. Google still lists some of them, so each gets a
 * redirect page (src/pages/[...legacy].astro) instead of a 404, and search results and old links land on the
 * page that replaced it. Derived from the content, so it stays right as notes and posts are added.
 *
 *   /blog/<slug>, /blog/YYYY/MM/DD/<slug>        → /writing/<slug>
 *   /docs/leetcode/<level>/<Title>, /docs/<level>/<Title>   → /leetcode/<level>/<n>-<title>
 *   /docs/notes/<…>/<Name>                       → /notes/<…>/<name>, matched by file name
 *   section pages (/blog, /docs, archives, tags, Docusaurus samples) → the section's index
 */
export async function legacyRedirects(): Promise<Map<string, string>> {
  const to = new Map<string, string>();

  for (const p of await posts()) to.set(`blog/${p.id}`, `/writing/${p.id}`);
  to.set('blog/2022/06/17/how-long-is-a-second', '/writing/how-long-is-a-second');
  to.set('blog/2022/06/17/redis-set-or-hash', '/writing/redis-set-or-hash');
  for (const p of ['blog', 'blog/archive', 'blog/tags', 'blog/page/2', 'blog/welcome', 'blog/first-blog-post', 'blog/long-blog-post', 'blog/mdx-blog-post']) to.set(p, '/writing');

  // LeetCode files are "<n>. <Title>.md"; Docusaurus dropped the number from the URL.
  for (const e of await getCollection('leetcode')) {
    const [level, file] = (e.filePath ?? '').split('/').slice(-2);
    const title = file.replace(/\.md$/, '').replace(/^\d+\.\s*/, '');
    to.set(`docs/leetcode/${level}/${title}`, `/leetcode/${e.id}`);
    to.set(`docs/${level}/${title}`, `/leetcode/${e.id}`);
  }

  // Notes kept their folders but some moved (Infrastructure/Redis → Infrastructure/Database/Redis), so match on the file name.
  const notes = new Map((await getCollection('notes')).map((e) => [(e.filePath ?? '').split('/').pop()!.replace(/\.md$/, '').toLowerCase(), `/notes/${e.id}`]));
  for (const old of LEGACY_NOTES) {
    const href = notes.get(old.split('/').pop()!.toLowerCase());
    if (href) to.set(`docs/notes/${old}`, href);
  }
  for (const p of ['docs', 'docs/intro', 'docs/tags', 'docs/notes', 'docs/leetcode']) to.set(p, '/notes');

  return to;
}

/** The old site's note pages, under /docs/notes/. */
const LEGACY_NOTES = [
  'Algorithms/Graph/BFS', 'Algorithms/Graph/DFS', 'Algorithms/Hash Functions', 'Algorithms/Searching/BinarySearch',
  'Algorithms/Sorting/BubbleSort', 'Algorithms/Sorting/HeapSort', 'Algorithms/Sorting/InsertionSort', 'Algorithms/Sorting/MergeSort',
  'Algorithms/Sorting/OverView', 'Algorithms/Sorting/QuickSort', 'Algorithms/Sorting/SelectionSort',
  'Algorithms/Tree/InOrder', 'Algorithms/Tree/PostOrder', 'Algorithms/Tree/PreOrder',
  'CICD/GitHubActions', 'CS fundamentals/Multi Threading', 'Data Structures/linkedlist', 'Data Structures/queues', 'Data Structures/stacks',
  'Git', 'Infrastructure/Database/Redis', 'Infrastructure/MessageQueue/Kafka', 'Infrastructure/Redis', 'Infrastructure/Scaling',
  'Languages/Go', 'Languages/Go/GoConcurrency', 'Networking/HTTP', 'Networking/Network', 'Networking/TCPUDP', 'Networking/WhenYouVisitURL',
  'Others', 'System Design/Database', 'System Design/FailureHandling', 'System Design/LoadBalancer', 'System Design/RandomIdGenerator',
  'System Design/RateLimiter', 'System Design/Terms', 'System Design/URLShortener', 'System Design/Wallet',
];
