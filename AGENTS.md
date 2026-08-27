## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project conventions

- **British English.** No em dashes anywhere in copy: use colons, commas or
  full stops. En dashes only for ranges (`2024–present`).
- **No CSS framework and no UI framework.** All styling is hand-written CSS
  driven by the tokens in `src/styles/tokens.css`. Do not add Tailwind.
- **The design references carolynnieberding.com.** Satoshi throughout, bold
  uppercase headlines, warm cream `#f4f0eb`, charcoal `#2f2f2f`, crimson
  `#dd295c`, and a pastel tint per project. Keep changes inside that language.
- **Uppercase is for short display strings only**: names, headlines, labels,
  buttons. Explanatory sentences stay sentence case.
- **Zero client JavaScript** beyond Astro's prefetcher and the theme toggle in
  `src/layouts/Base.astro`. Do not add a framework island without a reason
  that could not be solved in CSS.
- **Measure is capped at 65ch** (`--measure`) and must never exceed 76ch.
  This is sourced from Baymard's line-length research and WCAG 1.4.8.
- **Contrast.** `--ink-3` is the muted floor for body copy (4.9:1 light,
  5.7:1 dark). `--ink-faint` is 3.5:1 and is for large text and rules only,
  never body copy. Never introduce a lighter text colour on `--paper`.
- **Heading order.** Case study bodies start at `h2` under the layout's `h1`.
  Visual size comes from the `.h2`/`.h3`/`.h4` classes, never from the tag.
- **Images** live in `public/images/`, referenced without an extension.
  `src/lib/images.ts` resolves the best available format and falls back to a
  designed placeholder when a file is missing. Run
  `./scripts/optimise-images.sh` after dropping new PNGs in.
- **Claims.** Never add a metric that is not sourced. Every figure on the site
  is queried from the relevant product database. If you cannot point at the
  query, do not publish the number.
