# Content to confirm before going live

The design is done; these are the facts only you can fill in. Search the repo for `[` to find placeholders.

## About you (`src/site.config.ts`)
- [ ] Add your résumé as `public/resume.pdf`
- [ ] Swap the generic avatar on the About page for a real headshot (`src/pages/about.astro`, the `.photo.avatar` block)
- [ ] `life.upcoming`: check the official race names, and add a `goal` time if you want one shown

## Case studies (`src/content/projects/`)
- [ ] Avanly and Clozit: one-line `summary`, `period`, `role`, `stack`, and the `<Draft>` blocks. Check `live: https://avanly.io` is the right URL; add a `live` link for Clozit if it has one
- [ ] AffiliateManager (now listed as Inactive): end date in `period`, role, and every `<Draft>` block (problem, decisions, testing, results with real numbers)
- [ ] DataHelperV2: role, period, problem and results
- [ ] Side projects: years in `period`

## Life (`src/content/life/`)
- [ ] `flights.yaml`: trips were reconstructed from Strava locations. Check the airports, add flight numbers, then remove `confirm: true`
- [ ] `stays.yaml`: confirm the two hotels, add more, add photos
- [ ] `polaroids.yaml`: add real photos (`photo: /life/<file>.jpg`), remove `example: true`
- [ ] `shelf.yaml`: reading, on repeat, hawker order
- [ ] `races.yaml`: add bib numbers if you kept them
- [ ] `running.json`: refresh from Strava now and then (or set up the automatic sync)

Once all `example: true` entries are gone, the "placeholders" note on the Life page disappears. Races in `life.upcoming` hide themselves after race day; move them into `races.yaml` with your time.
