# Content to confirm before going live

The design is done; these are the facts only you can fill in. Search the repo for `[` to find placeholders.

## About you (`src/site.config.ts`)
- [ ] `email`: replace `hello@xuanze.dev` with an address you actually read (or set up that mailbox)
- [ ] Add your résumé as `public/resume.pdf`
- [ ] Experience dates: Independent start `[2025]`, TikTok end `[end]`, NUS end `[year]`
- [ ] Add a recent headshot and swap the photo placeholder on the About page (`src/pages/about.astro`)
- [ ] `life.nextRace`: name, date and goal of your next race (shows a countdown)

## Case studies (`src/content/projects/`)
- [ ] AffiliateManager: status, role, period, and every `<Draft>` block (problem, decisions, testing, results with real numbers)
- [ ] DataHelperV2: role, period, problem and results
- [ ] Side projects: years in `period`

## Life (`src/content/life/`)
- [ ] `flights.yaml`: trips were reconstructed from Strava locations. Check the airports, add flight numbers, then remove `confirm: true`
- [ ] `stays.yaml`: confirm the two hotels, add more, add photos
- [ ] `polaroids.yaml`: add real photos (`photo: /life/<file>.jpg`), remove `example: true`
- [ ] `shelf.yaml`: reading, on repeat, hawker order
- [ ] `races.yaml`: add bib numbers if you kept them
- [ ] `running.json`: refresh from Strava now and then (or set up the automatic sync)

Once all `example: true` entries and the bracketed next-race name are gone, the "placeholders" note on the Life page disappears.
