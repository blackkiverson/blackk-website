# blackk.website

Portfolio for Samuel Onyebuchi-Igbokwe. Astro, static output, no UI framework
and no CSS framework.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built output
```

## Weight

| Page | HTML (gzip) | CSS (gzip) | JS (gzip) |
|---|---|---|---|
| Home | ~4.9 kB | ~4.3 kB | 1.1 kB |
| Case study | ~6.8 kB | ~3.1 kB | 1.1 kB |

The only JavaScript is Astro's link prefetcher, a ~20-line theme toggle, and
the cursor orb. Everything else is HTML and CSS.

The orb stands down entirely on touch devices, under `prefers-reduced-motion`,
and under `forced-colors`, leaving the native cursor untouched. Its core dot
tracks the true pointer position with no easing, so pointing accuracy is
unaffected; only the halo trails.

## Structure

```
src/
├── data/
│   ├── site.ts      profile, experience, education, capabilities
│   └── work.ts      case study index: headlines, evidence, stack, ordering
├── styles/
│   ├── tokens.css   the whole design system, ~130 lines
│   └── global.css   reset, typography primitives, layout utilities
├── components/      Header, Footer, WorkRow, Cover, Figure, Arrow
├── layouts/         Base, CaseStudy
└── pages/
    ├── index.astro
    ├── about.astro
    ├── 404.astro
    └── work/        one file per case study
```

## Editing

**Reordering the work list** — change the array order in `src/data/work.ts`.
It is currently ordered by strength of evidence, not by preference.

**Changing a headline or a metric** — `src/data/work.ts`. The `tier` field on
each piece of evidence is an editorial marker recording how much weight the
number actually carries. It is never rendered.

**Adding a case study** — add an entry to `projects` in `work.ts`, then create
`src/pages/work/<slug>.astro` using an existing one as the template.

**Changing the type scale, colours or spacing** — `src/styles/tokens.css`.
Nothing else hard-codes a value.

## Images

Drop PNGs or JPGs into `public/images/` using these exact filenames. Any file
that is missing renders as a designed placeholder rather than a broken image,
so the site stays deployable while assets are still being gathered.

```
confety-cover.png        confety-app.png
outout-cover.png         outout-nav.png         outout-screens.png
axe-cover.png            axe-dashboard.png      axe-lesson-runner.png
axe-lesson-builder.png   axe-ai-import.png      axe-tenant-branding.png
axe-grading-queue.png
hum-cover.png            portrait.png
```

Recommended: 1600px on the long edge, exported at 2x then resized. Covers are
cropped to 4:3 on the index and 16:9 on case study pages.

## Deploy

Vercel picks this up with no configuration: framework preset Astro, build
command `npm run build`, output `dist`.

```bash
npx vercel        # preview
npx vercel --prod # production
```

Point `blackk.website` at the project in the Vercel dashboard. `astro.config.mjs`
already has the canonical site URL set for the sitemap.

## Design system

Type, palette and scale are matched to the reference site
(carolynnieberding.com), measured off its stylesheet rather than eyeballed:

| Element | Reference | Here |
|---|---|---|
| Name | 60px / 700 / −2px tracking | `--t-6` maxes at 60px, `--ls-display: -0.033em` |
| Headline | 32px / 700 / uppercase | `--t-3` maxes at 32px, `.h3` uppercase |
| Eyebrow | 14px / 700 / 0.16em / uppercase | `--t-eyebrow`, `--ls-eyebrow` |
| CTA | 700, white on dark | `.btn` on `--solid` |
| Page | warm cream | `--paper: #f4f0eb` |
| Text | charcoal | `--ink: #2f2f2f` |
| Accent | crimson | `--accent: #dd295c` |

- **Typeface is Satoshi**, loaded from Fontshare. It is the reference's face.
- **Each project owns a pastel tint** (`pink`, `mint`, `blue`, `lavender`),
  set once in `src/data/work.ts` and carried through to its case study page.
  Four stacked cards read as four distinct things rather than a table.
- **Uppercase is reserved for short display strings.** Long explanatory
  sentences stay sentence case, as on the reference. Anything set in caps is
  a name, a headline, a label or a button.
- **Measure is capped at 65 characters** (`--measure`), the middle of the
  50–75 band in [Baymard's line-length research](https://baymard.com/blog/line-length-readability).
  Nothing exceeds 76ch, under the 80 WCAG 1.4.8 sets as the ceiling. Set in
  `ch` so the measure tracks the typeface, not a guessed pixel width.
- **Every ink colour is contrast-checked** and annotated in `tokens.css`.
  The reference's own muted grey (#7f8080) only reaches 3.5:1, so `--ink-3`
  is darkened to #676767 (4.9:1) for body copy and #7f8080 kept as
  `--ink-faint` for large text and rules only.
- **Case studies lead with outcomes, not output.** Every published figure is
  queried from the relevant product database, not estimated. Editorial notes
  and unpublished findings are kept outside this repo.

## Screenshots still wanted

One placeholder is live on the site: the Confety in-app figure. Notion had a
cover image for Confety but no interface shots.

| Filename | What to shoot | Why this one |
|---|---|---|
| `confety-app.png` | The event listing and the ticket purchase flow, side by side on a phone frame | Sits under "What I built". The case study claims signed QR tickets and a one-tap sign-in; the reader should see them. |

Two more that would strengthen it, both optional:

| Filename | What to shoot |
|---|---|
| `confety-ticket.png` | A generated ticket with its QR code, and the door-scanner confirming it. This is the product's whole reason to exist and there is currently no picture of it. |
| `confety-organiser.png` | The organiser dashboard: ticket creation, sales, PostHog numbers. Balances an otherwise attendee-only story. |

To add one:

```bash
cp ~/Desktop/confety-app.png public/images/
./scripts/optimise-images.sh   # converts to WebP, moves the original to assets-src/
npm run build
```

No code change needed. Images are referenced without an extension, so the
WebP is picked up automatically and the placeholder disappears.

Shoot at 2x on a clean device: no notifications, real content rather than
lorem, and battery and signal looking normal. Crop to the app, not the whole
desktop.
