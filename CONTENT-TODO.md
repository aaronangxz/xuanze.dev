# Content to confirm before going live

The project pages are reviewed and have no Draft blocks left. What's still open:

## About
- [ ] Add your résumé as `public/resume.pdf`, then set `resume: '/resume.pdf'` in `src/site.config.ts` (every Résumé link stays hidden until then)

## Life (`src/content/life/`)
- [ ] `polaroids.yaml`: add real photos (`photo: /life/<file>.jpg`) and remove `example: true`, or hide the section
- [ ] Hotel badges: real brand logos for the brands you want (tags come from `brandTags` in `src/data/travel/config.json`)
- [ ] `running.json`: refresh from Strava now and then (or set up the automatic sync)

Once all `example: true` entries are gone, the "placeholders" note on the Life page disappears. Races in `life.upcoming` hide themselves after race day; move them into `races.yaml` with your time.
