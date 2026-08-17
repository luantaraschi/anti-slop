# anti-slop audit — fixtures/clean-landing

Mode: full audit (Surface, Craft, Words, Finish). References loaded: `surface.md`, `craft.md`, `words.md`, `finish.md`, `molds.md`.

Target read in full: `tailwind.config.ts`, `index.html`, `src/App.tsx`, `src/Hero.tsx`, `public/mark.svg`. Five files, all read.

## Verdict

This is a one-page marketing site for an invoice-reconciliation product, built with a named palette, a two-step radius and type scale tied to that palette, copy that names real banks, real invoice numbers and a real address instead of placeholder text, and a favicon whose three colors are the theme's own `dusk`, `chalk`, and `signal` — nearly every check across all four axes comes back negative, and the only thing left standing is a single absent CSS property on headings and short paragraphs that nothing elsewhere in the tree contradicts.

## Findings

| ID | Finding | Location |
|---|---|---|
| C4 | Headings and short paragraphs carry no `text-wrap: balance` / `text-pretty`, and no instance anywhere in the tree applies either | `src/Hero.tsx:4` (h1, `max-w-3xl`), `src/Hero.tsx:7` (subtitle, `max-w-xl`), `src/App.tsx:36,58,102` (h2s), `src/App.tsx:37,59,103` (paragraphs) |

That is the entire finding list. I could not build a second one without either inventing a tell not in the catalog or flagging something the `Not slop when` clause explicitly exempts — both of which would misrepresent what's actually here.

### Why this one stands

The h1 ("Every invoice your firm sent, reconciled the morning after.") sits at `text-display` (3.25rem) inside a `max-w-3xl` container, and the three section paragraphs sit inside `max-w-xl`/`max-w-2xl` — all short enough, and constrained enough, for the last line to plausibly strand a single word. Nothing in the codebase applies `text-wrap: balance` or `text-pretty` anywhere, so there's no second-door exemption ("the project already handles the same detail correctly somewhere else") to invoke. It's a real absence, not a false positive — but it's also the only one, and it's a nice-to-have polish detail rather than something a visitor would register as broken.

## Considered and declined

Everything below was checked against its tell's `Not slop when` clause and didn't survive, almost always because the codebase supplied the exact evidence the axis asks for:

- **A1 (palette nobody picked)** — `theme.extend.colors` names five colors (`ink`, `iris`, `dusk`, `chalk`, `signal`) that read as chosen for the subject (ledger/ink motif), not Tailwind defaults. Evidence present, tell doesn't fire.
- **A2 (generator gradient)** — Hero uses `from-dusk to-ink`, built from the theme's own named colors, not the purple-to-blue default. Explicitly exempted.
- **A3 (one radius for everything)** — Two radii declared (`control: 6px`, `panel: 14px`), and `control` is applied consistently to interactive elements only.
- **A4 (elevation without a system)** — `shadow-xl` appears exactly once (the primary Hero CTA); the secondary link uses `border` instead. That's a single device per element, not three stacked.
- **A5 (no type scale)** — `theme.extend.fontSize` declares `note`/`body`/`display` with tuned line-heights and letter-spacing.
- **A6 (uniform rhythm)** — Section padding varies by role (Hero `py-24`, content sections `py-20`, footer `py-12`); heading-to-paragraph vs. paragraph-to-list spacing also varies (`mt-3` vs `mt-8`/`mt-10`).
- **A7 (decorative icons)** — no icon library imported anywhere; condition never arises.
- **A8 (template layout)** — Hero has one button, not two, no pill badge; the three body sections carry 4, 5, and 0 (a CTA) items respectively, not a uniform three-card grid.
- **A9 (generic motion)** — the only transition (`transition-shadow duration-200`) names a specific property with a considered duration, not `transition-all`.
- **A10 (primitives hand-rolled)** — no `components/ui/` exists in this fixture; condition never arises.
- **W1–W7 (all Words tells)** — button/link copy names outcomes ("Reconcile your first month", "See what it costs"), no empty/error states exist to check, no implementation-name leakage, no unbacked marketing claims, and the three body sections carry 4/5/1 items respectively rather than a suspicious rule-of-three. Nothing fired.
- **F1–F12 (all Finish tells)** — `lang="en"` present; title is specific and singular; meta description is specific and within range; full OG set present including a real image URL; favicon is a custom SVG using the theme's own palette; exactly one `h1`; no `<img>` tags exist so alt text doesn't apply; `.map()` keys off `entry.id`; no Lorem ipsum, `href="#"`, or TODOs anywhere. F8 (no custom 404) and F10 (no sitemap/robots) were weighed specifically — this fixture has no client router and the footer nav reaches every linked page (Pricing, security, contact), which is the stated exemption for a small, fully-nav-reachable site; I did not flag either.
- **C1, C2, C5–C12** — each requires a condition (nested rounded pairs, an asymmetric icon in a control, a sub-40px target, a content `<img>`, an animated enter/exit, a keyframe-driven interactive state, a `hover:` state paired with no `active:`, dark-mode classes, a `disabled` state, or a color-only status signal) that simply doesn't exist anywhere in these five files. Also specifically weighed: the Hero CTA's `transition-shadow` with no accompanying `hover:` class looked at first like a loose thread, but no control in the tree declares *any* `hover:` state, so C9's uniform-absence exemption applies — it isn't one control singled out for missing treatment, it's the whole site made the same choice.
- **C3 (numbers that jump)** — the one place a number renders (`entry.amount`) already carries `tabular-nums`, despite being a static array with no interval or state update that would strictly require it. Read as evidence of care, not a finding.

## Note on report length

The skill's report rules call for five to ten findings, but this fixture does not have five to ten real ones. Padding this list would mean reporting things the false-positive rule already rules out, which the skill explicitly names as the failure mode to avoid. One finding is the honest count.
