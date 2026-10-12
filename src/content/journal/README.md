# Journal

Optional notes, a rating and photos for any hotel or flight on the Life side. Pages exist for every
hotel and flight already; a journal entry fills in the "notes" part of the page.

```
src/content/journal/hotels/sofitel-legend-metropole-hanoi/index.md
src/content/journal/hotels/sofitel-legend-metropole-hanoi/lobby.jpg
src/content/journal/flights/2026-09-13-sq21/index.md
```

The folder name is the last part of the page's URL: `/life/hotels/<slug>` or `/life/flights/<yyyy-mm-dd-flight>`
(for example `/life/flights/2026-09-13-sq21`).

```md
---
rating: 4.5          # 0–5, halves allowed. Leave out for no rating.
title: The breakfast alone is worth it   # optional one-liner
photos:
  - src: ./lobby.jpg
    alt: The lobby at night
    caption: Optional caption
---

A few paragraphs of Markdown. Short is fine.
```

Photos can be any size; the build resizes them. JPG or PNG straight from the phone works.
