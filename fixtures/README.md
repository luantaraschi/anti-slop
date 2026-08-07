# Fixtures

Four hand-built specimens the catalog is calibrated against: two products, a
dashboard and a landing page, each built twice: once as work nobody finished,
once as work somebody decided. Run the skill against a fixture and compare what
it reports with the row below.

Read each directory as a shipped product, not as this repo's test code. The
tells that exempt a test fixture, a Storybook story, or a documentation sample
(F12 says so in as many words) do not apply inside these four directories. A
placeholder in `slop-landing` is a placeholder on a published page.

An `expect` row lists the ids the fixture was built to carry: every one of them
has code in that directory a reader can point to as its cause. A `forbid` row
lists the ids that must not fire: each has visible evidence of intent, such as
a named palette in `theme.extend`, a declared type scale, or a `components/ui/`
that differs from stock. A tell that fires anyway is a tell to fix, not a
fixture to fix.

| Fixture | Kind | IDs |
|---|---|---|
| `slop-dashboard` | expect | A1, A3, A4, A5, A6, A10, F1, F2, F11, W3 |
| `slop-landing` | expect | A2, A7, A8, W1, W6, W7, F2, F3, F4, F5, F12 |
| `clean-dashboard` | forbid | A1, A3, A4, A5, A6, A10, F1, F2, W3 |
| `clean-landing` | forbid | A2, A4, A7, W1, F3, F4 |

`clean-landing` is the sharpest of the four because it carries the dangerous
patterns on purpose: a purple gradient and a `shadow-xl`, both drawn from
colors named in its theme and each used exactly once. A2 and A4 describe those
patterns, and they still must not fire here.

Do not tidy a `slop-*` fixture. The missing `lang`, the keyless `.map()`, the
leftover `Your Company` and the untouched shadcn primitives are the deliverable.
A `slop-*` fixture that has been cleaned up tests nothing.

## Known tensions

Three places where a fixture and the catalog disagreed. Two were open questions
that the calibration below settled, in both cases by changing a tell rather than
a fixture. The third is a standing exclusion and did not move.

**F10, and what a source specimen can say.** These four have no package manager,
no build step and no binary assets. The absence of a sitemap and a robots file is
observable here, the same way the absence of a favicon is observable in
`slop-landing`. What is not observable is the difference between a site that
shipped without them and a specimen that never had a build to generate them, so
F10 is out of scope for all four: not because the format cannot express an
absence, but because this particular absence carries no signal.

**F2 on `slop-landing`, settled 2026-08-07.** It keeps Vite's
`<title>Vite + React</title>` while being a single-route page, which was F2's
signal and F2's "Not slop when" at once, and its row did not list F2. The blind
run reported F2 there anyway, on the strength of the surviving scaffold title
alone, route count notwithstanding. That reading won. F2's exemption now covers a
one-route app that wrote its own title and never covers a framework default, and
F2 is on the row. `clean-dashboard` still disarms F2 on its per-route title
template, and `clean-landing` on a single title that names the product.

**A10 on `slop-dashboard`, settled 2026-08-07.** A10's signal used to be a
conjunction: a `components/ui/` identical to stock shadcn *and* no domain
component anywhere. `slop-dashboard` satisfies the first half
(`components/ui/button.tsx` and `card.tsx` are stock, not a line changed) but not
the second, because `StatCard` and `InvoiceTable` are domain-named. Reading the
conjunction literally, the blind run declined A10, and said in the same breath
that those two components never reuse the primitives they sit next to. That
observation settled it. They are domain-named, not domain-shaped, and a file
called `StatCard` that re-types the classes of the `<Card>` beside it is not
evidence anyone decided anything. The signal is now the untouched
`components/ui/` on its own. The domain-component clause moved into "Not slop
when" and is stated in terms of use rather than naming: a component earns the
exemption by importing and rendering the primitives. What rode on the answer was
`clean-dashboard`, which had leaned on "no domain component anywhere" to disarm
A10. It survives twice over without that clause: `ui/button.tsx` is reworked, so
the signal never fires, and `InvoiceLedger` imports and renders it, so the
exemption holds even if it did.

## Last calibration

**2026-08-07.** Four blind runs, one agent per fixture. Each agent received only
`SKILL.md`, the `references/` files SKILL.md names, and its own target directory.
None could read this file, the repo root `README.md`, or any other fixture, and
none knew the expected answer. Each was told to read its target as a shipped
product.

The counts below are what those four runs produced, before the repairs they
caused. A score taken after the fixes would be a score of the fixes.

- `slop-dashboard`, 9 of the 10 expected ids reported. A10 missing.
- `slop-landing`, 9 of the 9 expected ids reported, plus F2 and W6, which the row
  did not list at the time.
- `clean-dashboard`, 0 of the 9 forbidden ids leaked. The run reported nothing at
  all.
- `clean-landing`, 0 of the 6 forbidden ids leaked. The purple gradient and the
  `shadow-xl` were each declined by name, which is the result this corpus was
  built to get.

Three repairs came out of the three mismatches, none of them to a fixture:

- A10's signal stopped being a conjunction, and its exemption started asking
  whether a component uses the primitives rather than how it is named.
- F2's exemption stopped covering a surviving framework default, so a one-screen
  app no longer gets to ship `Vite + React` in the tab.
- `slop-landing` gained F2 and W6 on its row. W6 needed no tell change: "The
  platform for teams that move fast" (`src/Hero.tsx:14`) and "Built on
  infrastructure your team already trusts" (`src/App.tsx:31`) are both really
  there, and the row was simply short.

One thing worth recording that nothing was changed for. Both dashboard runs
cleared F3, F4, F9 and F10 as a group, by inferring from the product itself, a
per-workspace invoice ledger, that it sits behind authentication. Both reached
the intended verdict, but through domain inference
rather than through code evidence, which is a softer basis than the false
positive rule asks for. A rendered pass against a live URL settles that question
outright, and a rendered pass is out of scope for v1.
