# xuanze.dev

Personal site on Astro. See README.md for where each kind of content lives and how to build.

## Tagging new content (keeps /graph connected)

`/graph` (src/lib/graph.ts) links pages through their tags, so every new or edited note, post, project or LeetCode
solution should be tagged as comprehensively as is accurate. Tag what the page is actually about, not only its headline
subject.

- Give every note, post and LeetCode solution a `tags:` list in its front matter, and every project its full `stack:`.
  Aim for 3–6 tags; never leave a page untagged.
- Reuse existing tag names before inventing new ones. Check the current topics on /graph or in other pages' front matter
  (e.g. Hash Table, Two Pointers, Recursion, Trees, Stack, Linked List, Dynamic Programming, System Design, Database,
  Cache, Redis, Go, MySQL, PostgreSQL).
- Tag with a note's title to link to that note: `Redis`, `Hash Functions`, `URL Shortener`, `Depth First Search`,
  `In-Order Traversal`, `Load Balancer`, `Go Concurrency`… Matching ignores case, spaces and a trailing "s".
- LeetCode: tag the techniques used (data structure + approach), never the difficulty.
- Posts: tag the technologies and concepts involved, and set `project:` when the post is about one of the projects.
- Where a page builds on another, link it in the text (a markdown link or `[[Note title]]`).
- A tag used by only one page is dropped from the graph, so prefer shared vocabulary over one-off tags.
- After adding content, run `npm run build` and check the new page has sensible neighbours on /graph.
