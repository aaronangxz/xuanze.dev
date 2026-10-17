# Hotel brand logos

Shown at the top of a hotel's stamp in place of its brand name (`brandTags` in `src/data/travel/config.json`).
One single-colour SVG per brand, named by the brand in lower case with spaces, punctuation and a leading "The" removed:
`ritzcarlton.svg` for The Ritz-Carlton, `stregis.svg` for St. Regis. A brand without a file keeps its printed name.
The logo is painted in the chain's colour, so any fill in the file is ignored. It sits in a 40×22 box at the top of the stamp:
a roughly square mark reads best, a short wordmark works, and a long thin one (Sofitel's) is unreadable, so leave it out.
Crop the viewBox to the artwork and keep one path where possible (`fill-rule="evenodd"` for knocked-out marks).

Sources (the marks are the brands' trademarks):

- Simple Icons: `ritzcarlton.svg`, `hiltonhotelsresorts.svg`.
- Wikimedia Commons, cropped to the mark or the main wordmark: `alila.svg` (Alila Hotels and Resorts logo),
  `curiocollectionbyhilton.svg` (Curio by Hilton logo, "CURIO" only), `fourpointsbysheraton.svg` (Four Points Hotels),
  `hamptonbyhilton.svg` (Hampton by Hilton logo, the hexagon with "Hampton" knocked out), `holidayinn.svg` (Holiday Inn by IHG logo, the H),
  `holidayinnexpress.svg` (Holiday Inn Express by IHG logo, the H box), `hyatthotels.svg` (Hyatt Logo), `sheraton.svg` (Sheraton Hotels and Resorts, the laurel S),
  `stregis.svg` (St. Regis Hotels & Resorts logo, the R monogram), `westinhotelsresorts.svg` (Westin Hotels & Resorts logo, "WESTIN" only),
  `whotels.svg` (W Hotels logo, the W).
- worldvectorlogo: `hyatthouse.svg` (hyatt-house-1, the H), `hyattregency.svg` (hyatt-regency-1, wordmark without the box), `voco.svg`.

Still without a clean vector source, so they keep their printed name: Hyatt Centric, Park Hyatt, The Unbound Collection by Hyatt,
JW Marriott, The Luxury Collection, MGallery, Raffles, AutoCamp, Sofitel (too thin at stamp size).
