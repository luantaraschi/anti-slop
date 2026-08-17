# Chorus — the four roots

Written before any code. Root 1 is the only source the copy on this page is
allowed to draw on; a line that cannot be traced to a bullet below does not
ship. Roots 2, 3 and 4 are recorded here because the theme file cites them by
number and a reader needs somewhere to resolve the citation.

---

## Root 1 — what the product concretely is

**One sentence.** Chorus is a booking tool for independent music venues: a venue
lists the nights it has open, touring bands search by route and date and send an
offer, and the venue accepts, counters, or passes.

### Capabilities

- A venue lists the nights it has open.
- A touring band searches by **route and date**.
- A band sends an **offer** on a listed night.
- The venue **accepts, counters, or passes**.
- From the accepted offer Chorus generates the **performance contract** and the
  **settlement sheet** — so neither side rebuilds both in email.
- Settlement is one of three shapes, and Chorus computes all three:
  - **door split**
  - **guarantee**
  - **guarantee versus percentage**

### Figures — the complete list

| Figure | Value |
|---|---|
| Venues on the platform | 2,400 |
| Countries | 31 |
| Offers a typical touring band sends to book a 12-date run | 40 |
| Length of that run | 12 dates |
| Price to the venue | nothing |
| Price to the band | 1.5% of the guarantee |
| Cap on that fee | £40 a show |

No other number appears anywhere on this page. There is no number for time
saved, response rate, uptime, or how long the company has existed, because no
such number was given.

### Explicitly not true of the product

- It does **not** sell tickets.
- It does **not** handle payouts.

### Explicitly unavailable to the copy

Testimonials. Venue logos. Band names. Any metric beyond the table above.
The page has no social-proof section for this reason, and that absence is a
consequence of this list rather than a layout choice.

### Audience

Booking agents at independent venues of 150 to 900 capacity, and the people who
book their own tours. Both have done this before. Neither needs the concept of
a tour explained.

---

## Root 2 — the voice

**The test sentence.** *Would a venue manager who has booked three hundred shows
say this out loud, to someone who has also booked three hundred shows, without
selling?*

Direct and a little dry. It assumes the reader has done this before and is tired
of the email thread. Never breathless; the word *revolutionise* and its family
are not in this product's vocabulary. It is allowed to be funny once, and it
spends that once in `HowItWorks.tsx` on the line about passing.

Lines this test rejects: anything that explains what a tour is, anything with
*seamless*, *effortless*, *powerful*, or *the future of*, and any sentence whose
subject is the software rather than the night.

## Root 3 — the visual temperature

**Expressive.** This is a music product and it should look like it has been
somewhere. Saturated, high-contrast, confident.

A gradient, a strong accent, a heavy display face and asymmetry are all
available. None of them is available *unchosen* — each one that appears in this
tree carries its reasoning at the value, and the ones that do not appear carry
theirs too.

## Root 4 — the density

**Generous.** Few things per screen, large type, long scroll. The reader is
deciding whether to trust this, not scanning a table. The body step and every
spacing value on the page are derived from that word; see the arithmetic in
`tailwind.config.ts`.

---

## Where the brief under-specified

Recorded rather than guessed, per the skill's rule that an unanswerable root is
a finding:

1. **Root 1 gives no product-surface detail.** It says a venue "lists the nights
   it has open" but not what a listing contains — capacity, door time, backline,
   what the room pays on. The page therefore shows no screenshot, no mock
   listing and no example settlement sheet, because every one of those would
   have required inventing field names. This is the largest thing the brief did
   not answer, and it cost the page its product shot.
2. **Root 1 gives no currency for the fee other than sterling,** while claiming
   31 countries. The page states the fee exactly as the brief did — 1.5% of the
   guarantee, capped at £40 a show — and does not speculate about conversion.
3. **Root 3 says "expressive" but names no reference.** Resolved by taking the
   subject literally: the accent and the second colour are named for stage
   lighting gel, because that is the saturated colour that actually exists in
   the room this product lives in. That is a judgment, not something the brief
   supplied.
4. **No brand name for the fee, no legal entity, no jurisdiction.** The footer
   therefore carries no company line, no address and no copyright holder, since
   all three would be fabricated.
