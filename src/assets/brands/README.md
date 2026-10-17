# Hotel brand logos

Shown at the top of a hotel's stamp in place of its brand name (`brandTags` in `src/data/travel/config.json`).
One single-colour SVG per brand, named by the brand in lower case with spaces, punctuation and a leading "The" removed:
`ritzcarlton.svg` for The Ritz-Carlton, `stregis.svg` for St. Regis. A brand without a file keeps its printed name.
The logo is painted in the chain's colour, so any fill in the file is ignored. It sits in a 40×22 box at the top of the stamp;
a wordmark more than 3× wider than tall gets a 58×14 strip across the ring instead, so its letters stay about as tall as the
printed name. A roughly square mark reads best; a thin, widely spaced one (Sofitel's wordmark) is unreadable, so leave it out.
Crop the viewBox to the artwork and keep one path where possible (`fill-rule="evenodd"` for knocked-out marks).

Sources (the marks are the brands' trademarks):

- Simple Icons: `ritzcarlton.svg`, `hiltonhotelsresorts.svg`.
- Wikimedia Commons, cropped to the mark or the main wordmark: `alila.svg` (Alila Hotels and Resorts logo),
  `curiocollectionbyhilton.svg` (Curio by Hilton logo, "CURIO" only), `fourpointsbysheraton.svg` (Four Points Hotels),
  `hamptonbyhilton.svg` (Hampton by Hilton logo, the hexagon with "Hampton" knocked out), `holidayinn.svg` (Holiday Inn by IHG logo, the H),
  `holidayinnexpress.svg` (Holiday Inn Express by IHG logo, the H box), `hyatthotels.svg` (Hyatt Logo), `sheraton.svg` (Sheraton Hotels and Resorts, the laurel S),
  `stregis.svg` (St. Regis Hotels & Resorts logo, the R monogram), `westinhotelsresorts.svg` (Westin Hotels & Resorts logo, "WESTIN" only),
  `whotels.svg` (W Hotels logo, the W).
  Also `aloft.svg` (Aloft Hotels Logo, "aloft" only), `crowneplaza.svg` (Crowne Plaza logo, the emblem),
  `ibis.svg` (Ibis-logo-2019) and `ibisstyles.svg` (Ibis-styles-2019), the pillow with the name knocked out.
- worldvectorlogo: `hyatthouse.svg` (hyatt-house-1, the H), `hyattregency.svg` (hyatt-regency-1, wordmark without the box), `voco.svg`.
- The brands' own sites: `doubletreebyhilton.svg` (hilton.com/modules/assets/svgs/logos/DT.svg, the tree and D),
  `raffles.svg` (raffles.com logo-brand-large.svg, the traveller's palm), `sofitel.svg` (sofitel.accor.com Sofitel_CL_Gold.svg, the interlocking mark).
- Logo images XZ supplied, vectorised automatically (thresholded and traced with potrace, nothing redrawn):
  `hyattcentric.svg` (the two-line wordmark), `jwmarriott.svg` (the griffin), `unboundcollectionbyhyatt.svg` (the UB monogram),
  `parkhyatt.svg`, `courtyard.svg` (without "by Marriott") and `parkroyalcollection.svg` (the "PARKROYAL" wordmark, from the
  PARKROYAL Hotels & Resorts logo, without the rule and tagline).

Without a logo, so they keep their printed name:
- No clean source: The Luxury Collection (only a PGA Tour co-brand file), MGallery and AutoCamp (raster only).
- Sofitel's wordmark is unreadable at stamp size, so its mark is used instead.
