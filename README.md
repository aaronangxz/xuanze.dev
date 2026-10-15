# xuanze.dev

Personal site of Ang Xuan Ze. Two sides: **Work** (projects, writing, notes) and **Life** (travel, running).
Built with [Astro](https://astro.build); deployed to GitHub Pages on every push to `master`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Adding and editing content

You never need to touch the design or code to change content. Edit a file, push, and the site redeploys.

| What | Where | Notes |
| --- | --- | --- |
| Name, hero, email, links, experience, About page | `src/site.config.ts` | One file for everything about you |
| Blog posts | `src/content/writing/<slug>.md` | Front matter: `title`, `date`, `tags`, optional `description`, `project`, `draft: true` |
| Projects / case studies | `src/content/projects/<slug>.mdx` | Front matter feeds the side panel and search. Projects with `href` link out instead of getting a page |
| Study notes | `src/content/notes/<Group>/<Note>.md` | Title comes from the first `# Heading` |
| LeetCode | `src/content/leetcode/<easy\|medium\|hard>/<n>. <Title>.md` | |
| Flights and hotels | Export from Flighty and AwayBook, then `node scripts/travel-import.mjs --flights <csv> --stays <csv>` | Writes `src/data/travel/travel.json` without booking refs, gates or room numbers. City pins, brand tags and stays to skip live in `src/data/travel/config.json`; the import stops and names anything missing |
| Runs on the map | `src/data/travel/runs.json` | Outdoor runs away from Singapore, from Strava (reduced polyline) |
| Hotel and flight notes, ratings, photos | `src/content/journal/{hotels,flights}/<slug>/index.md` | See `src/content/journal/README.md`. Pages exist for every hotel and flight; an entry fills in their notes |
| Races | `src/content/life/races.yaml` | One bib per race; `pb: true` adds the stamp |
| Running totals and PBs | `src/content/life/running.json` | Snapshot from Strava |
| Polaroids, "Everything else" | `src/content/life/polaroids.yaml`, `shelf.yaml` | |

The ⌘K search, the Life "Where to?" search, the stats and the city strip are all generated from these files.

### Keeping the graph connected

`/graph` maps every note, post, project and LeetCode solution, and it is built from these files on each build.
A new page joins the graph through:

- **Tags.** `tags:` in the front matter of notes, posts and LeetCode solutions, and `stack:` on projects.
  Reuse names that already exist (the graph page lists the biggest topics). A tag spelled like a note's title links to
  that note, so `tags: [Redis]` connects a post to the Redis note. Case, spaces and a trailing "s" don't matter:
  `Stack` and `Stacks` are the same.
- **LeetCode:** tag the technique (`Two Pointers`, `Hash Table`, `Dynamic Programming`, `Depth First Search`…), not the
  difficulty.
- **Links and mentions.** A markdown link to another page, an Obsidian-style `[[Note title]]`, or just naming a note in
  the text ("…stored in Redis…") links the two.
- **Folders.** A note joins its folder (`notes/System Design/…`), and each subfolder joins its parent.

A topic that only one page uses is left off the graph, since it connects nothing.

### Drafted text

Some case-study paragraphs were drafted for you and are wrapped in `<Draft>…</Draft>`. They show a dashed
"Draft" label on the site until you confirm the wording and remove the wrapper.
Anything in `[brackets]` is a placeholder. See `CONTENT-TODO.md` for the full list.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `master`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain comes from `public/CNAME`.
