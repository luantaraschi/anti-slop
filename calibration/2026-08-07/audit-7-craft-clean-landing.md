# Craft audit — fixtures/clean-landing

Invocation: `anti-slop craft`. Axis: Craft only. Reference loaded: `references/craft.md`.
Target tree (complete, as read):

- `tailwind.config.ts`
- `index.html`
- `src/App.tsx`
- `src/Hero.tsx`
- `public/mark.svg`

No `main.tsx`, no CSS/tokens file, and no other component exists in the tree — the
five files above are the entire product as shipped.

## Verdict

One Craft tell fires: the display heading and the short intro paragraphs carry
neither `text-wrap: balance` nor `text-pretty` anywhere in the tree, and nothing
elsewhere in the project applies either property — so there is no second door to
excuse it. Every other Craft tell is closed by one of the two exemption doors:
most controls in this fixture are plain text, single-radius, single-theme, and
un-animated, so the conditions those tells look for never arise, and the one
numeric column that does exist already carries `tabular-nums`.

## Findings

### C4 — A heading that leaves a word behind

- `src/Hero.tsx:4` — `<h1 className="text-display text-chalk max-w-3xl">Every invoice your firm sent, reconciled the morning after.</h1>`. `text-display` is 3.25rem/1.05 line-height inside a 48rem (`max-w-3xl`) box — long enough to wrap to two or three lines, and nothing constrains where the break falls.
- `src/Hero.tsx:7` — the standfirst paragraph (`text-body text-chalk/70 mt-6 max-w-xl`) is a short, two-clause sentence with no `text-pretty`.
- `src/App.tsx:36,58,102` — the three section headings (`text-2xl`) carry no `text-wrap: balance`.
- `src/App.tsx:38,59,103` — the three section intros (`max-w-xl text-body text-ink/70`, each two sentences) carry no `text-pretty`.

Count: 4 headings, 4 short paragraphs, 0 instances of either property anywhere
in the tree. Neither exemption door applies — headings and short text blocks
are present (door one requires none to exist), and no other heading or
paragraph in the project applies the property (door two requires at least one
correct instance elsewhere). The tell fires uniformly, which reads as the
property never having been reached for at all rather than one missed instance.

## Declined — Door One (condition never arises)

- **C1** — A radius that ignores what it wraps. The theme declares two radii
  (`control: 6px`, `panel: 14px` in `tailwind.config.ts:14`), but `panel` is
  never consumed anywhere in the components, and `rounded-control` is only
  ever applied to standalone buttons (`src/Hero.tsx:13`, `src/App.tsx:110`),
  never nested inside another rounded surface. No nested radius pair exists
  in the tree to judge as concentric or not.
- **C2** — Centered by the box, not by the eye. No control anywhere pairs an
  icon with text; both CTAs (`src/Hero.tsx:11-17`, `src/App.tsx:108-113`) and
  both footer links (`src/App.tsx:119-121`) are text-only. `public/mark.svg`
  is wired only as the `<link rel="icon">` (`index.html:12`) and is never
  rendered inline as a control icon.
- **C5** — A target the size of the drawing. Both CTAs measure well above
  40px once padding and line-height are accounted for (`py-3`/`text-body` on
  `src/Hero.tsx:13-14` ≈ 50px; `py-2.5`/`text-body` on `src/App.tsx:110` ≈
  46px). The footer links (`src/App.tsx:119-121`) are plain inline text with
  no declared small dimension — there is no icon-sized "drawing" for a hit
  area to fall short of.
- **C6** — An image with no edge. No content `<img>` appears anywhere in the
  tree; `public/mark.svg` is a favicon asset (`index.html:12`), not rendered
  content.
- **C7** — Enter and exit weigh the same. No animated enter/exit exists
  anywhere — the only `transition-*` in the tree is `transition-shadow
  duration-200` on the Hero CTA (`src/Hero.tsx:14`), which is a hover
  transition, not a mount/unmount pair.
- **C8** — An animation that cannot change its mind. No `@keyframes`, no
  drawer, panel, or toggle exists anywhere in the tree.
- **C9** — Nothing happens when you press. No element in the tree declares a
  `hover:` state at all (checked both components in full) — the absence of
  `active:` is therefore uniform across the tree rather than a partial
  pairing, which is this tell's own stated exemption.
- **C10** — One theme was ever opened. No `dark:` variant, theme provider, or
  second palette exists anywhere in the tree — there is no dark mode to leave
  half-declared.
- **C11** — Disabled that still looks clickable. No `disabled` attribute, no
  form, no reduced-opacity control exists anywhere in the tree.
- **C12** — Color carrying the meaning alone. The one place status is
  communicated — the morning reconciliation list (`src/App.tsx:42-53`) — uses
  full sentences ("Invoice 1039 is 12,190.00 — 1,190.00 short", "No invoice.
  Recurring since March") for every row, never a bare dot, stripe, or
  label-less badge.

## Declined — Door Two (handled correctly elsewhere)

- **C3** — Numbers that jump. The one numeric column in the tree, the
  reconciliation amounts, already carries the property:
  `src/App.tsx:48` — `className="w-28 text-right text-body tabular-nums"`.
  That is the only site a live/tabular number appears, and it is the site
  that got it right, so the single correctly-handled instance is this tell's
  own evidence that someone looked rather than a gap.
