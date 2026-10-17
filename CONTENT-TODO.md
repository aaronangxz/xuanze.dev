# Content to confirm before going live

The project pages are reviewed and have no Draft blocks left. What's still open:

## About
- [ ] Add your résumé as `public/resume.pdf`, then set `resume: '/resume.pdf'` in `src/site.config.ts` (every Résumé link stays hidden until then)

## Life (`src/content/life/`)
- [ ] `polaroids.yaml`: add real photos (`photo: /life/<file>.jpg`) and remove `example: true`. "Everything else" (and the "Other" link) stays hidden until at least one polaroid is real
- [ ] Hotel badges: every brand has a logo except Four Seasons and Ramada Encore (drop SVGs in `src/assets/brands/`, see its README)
- [ ] `running.json`: refresh from Strava now and then (or set up the automatic sync)

Races in `life.upcoming` hide themselves after race day; move them into `races.yaml` with your time.
