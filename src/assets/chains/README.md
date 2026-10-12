# Hotel chain logos

One SVG per chain, named by the chain in lower case: `marriott.svg`, `hilton.svg`, `ihg.svg`, `hyatt.svg`, `accor.svg`.
The collection header inlines it and paints it in the page's ink colour, so a single-colour file works best.
A chain without a file falls back to its name as a wordmark.

`marriott.svg` and `hilton.svg` come from Simple Icons; `hyatt.svg`, `ihg.svg` and `accor.svg` from Wikimedia Commons. The marks are the brands' trademarks.
Add the chain to `WORDMARKS` in `src/components/ChainLogo.astro` when a file already spells the chain's name,
so the name isn't printed twice.
