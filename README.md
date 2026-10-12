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
| Flights | `src/content/life/flights.yaml` | `featured: true` also prints a boarding pass (max 3) |
| Hotels | `src/content/life/stays.yaml` | `photo: /life/<file>.jpg` with the image in `public/life/` |
| Races | `src/content/life/races.yaml` | One bib per race; `pb: true` adds the stamp |
| Running totals and PBs | `src/content/life/running.json` | Snapshot from Strava |
| Polaroids, "Everything else" | `src/content/life/polaroids.yaml`, `shelf.yaml` | |

The ⌘K search, the Life "Where to?" search, the stats and the city strip are all generated from these files.

### Drafted text

Some case-study paragraphs were drafted for you and are wrapped in `<Draft>…</Draft>`. They show a dashed
"Draft" label on the site until you confirm the wording and remove the wrapper.
Anything in `[brackets]` is a placeholder. See `CONTENT-TODO.md` for the full list.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `master`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain comes from `public/CNAME`.
