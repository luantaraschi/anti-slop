# Fixtures

Four hand-built specimens the catalog is calibrated against: two products, a
dashboard and a landing page, each built twice — once as work nobody finished,
once as work somebody decided. Run the skill against a fixture and compare what
it reports with the row below.

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

Two things to know before reading a result. These are source specimens: no
package manager, no build, no binary assets, so a tell that depends on
generated output — F10's sitemap and robots — cannot be represented here and is
out of scope for all four. And `slop-landing` keeps Vite's `<title>Vite +
React</title>` while being a single-route page, which sits exactly on F2's
"Not slop when"; if the skill reports F2 there, the boundary in F2 needs the
decision, not this fixture.
