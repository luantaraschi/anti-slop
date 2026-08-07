# Fixtures

Four hand-built specimens the catalog is calibrated against: two products, a
dashboard and a landing page, each built twice — once as work nobody finished,
once as work somebody decided. Run the skill against a fixture and compare what
it reports with the row below.

Read each directory as a shipped product, not as this repo's test code. The
tells that exempt a test fixture, a Storybook story, or a documentation sample —
F12 says so in as many words — do not apply inside these four directories. A
placeholder in `slop-landing` is a placeholder on a published page.

An `expect` row lists the ids the fixture was built to carry: every one of them
has code in that directory a reader can point to as its cause. A `forbid` row
lists the ids that must not fire: each has visible evidence of intent — a named
palette in `theme.extend`, a declared type scale, a `components/ui/` that
differs from stock — and a tell that fires anyway is a tell to fix, not a
fixture to fix.

| Fixture | Kind | IDs |
|---|---|---|
| `slop-dashboard` | expect | A1, A3, A4, A5, A6, A10, F1, F2, F11, W3 |
| `slop-landing` | expect | A2, A7, A8, W1, W7, F3, F4, F5, F12 |
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

Three places where a fixture and the catalog disagree on purpose. Each is a
question for the catalog, not a defect to fix in the fixture.

**F10, and what a source specimen can say.** These four have no package manager,
no build step and no binary assets. The absence of a sitemap and a robots file is
observable here, the same way the absence of a favicon is observable in
`slop-landing`. What is not observable is the difference between a site that
shipped without them and a specimen that never had a build to generate them, so
F10 is out of scope for all four — not because the format cannot express an
absence, but because this particular absence carries no signal.

**F2 on `slop-landing`.** It keeps Vite's `<title>Vite + React</title>` while
being a single-route page, which is F2's signal and F2's "Not slop when" at the
same time. Its row does not list F2. If the skill reports F2 there, the boundary
in F2 needs the decision, not this fixture.

**A10 on `slop-dashboard`.** A10's signal is a conjunction: a `components/ui/`
identical to stock shadcn *and* no domain component anywhere. `slop-dashboard`
satisfies the first half — `components/ui/button.tsx` and `card.tsx` are stock,
not a line changed — but not the second, because `StatCard` and `InvoiceTable`
are domain-named wrappers. A10 is expected there on the strength of the untouched
`components/ui/` alone. A skill reading the conjunction literally will decline to
report it, and that is the question: whether A10's signal should stay a
conjunction, or whether an untouched `components/ui/` suffices on its own. Note
what rides on the answer — "no domain component anywhere" is the clause
`clean-dashboard` leans on hardest to disarm A10, so if the conjunction stays,
only the `ui/` half of the signal separates the two dashboards.
