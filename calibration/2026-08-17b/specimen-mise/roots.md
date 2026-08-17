# Mise — the four roots

This file exists because root 1 has no value to sit beside. Every other decision
in this tree is recorded at the value itself, in the file that holds it.

---

## Root 1 — what the product concretely is

**Mise, a shift board for restaurant kitchens.** It shows one service at a time:
who is on which station, who has not confirmed, and where the gaps are.

### Inventory — the only source the copy may draw on

**Objects**

- Service. One at a time. Has a date, a start time, and a forecast cover count.
- Station. Exactly five: larder, grill, sauce, pass, pastry.
- Cook. Has stations they are signed off for. Cannot be placed on a station
  they are not signed off for.
- Placement. A cook on a station for a service. Has a state.

**States a placement can be in**

- Placed, cook confirmed.
- Placed, cook has not answered.
- Placed, cook declined.

**Actions**

- The head chef drags a cook onto a station.
- The cook gets a message on their phone.
- The cook confirms or declines from their phone.

**Figures**

- 4 to 9 cooks in a typical service.
- Confirmations due 48 hours before service.
- Labour cost, shown against the service's forecast covers, changing as the
  board changes.
- Rotas run to 14 days out and no further.

**Explicitly not the product**

- Payroll.
- Anything beyond 14 days out.

**Under-specified by the brief — asked, not guessed**

1. *Certifications.* The brief says Mise "knows each cook's stations and their
   certifications" but names no certificate. Rather than invent one, this build
   models the sign-off per station — which the brief does describe, and which is
   the thing the placement rule actually gates on — and names no certificate
   anywhere. If real certificates exist (food safety, allergen, HACCP), they are
   a second axis this screen does not show. **This needs an answer before ship.**
2. *What "declined" does to a placement.* The brief says a cook declines but not
   whether they leave the station or sit on it declined until the chef moves
   them. This build keeps them on the station, struck through, because a decline
   the board hides is a gap nobody sees. **Confirm this is how a kitchen wants
   it.**
3. *How you reach another service.* "One service at a time" implies others
   exist; nothing says how you get to them. This build renders no navigation
   rather than invent a stepper. See the reduction pass note in `app/page.tsx`.
4. *Whether a confirmation survives a move.* If a chef moves a confirmed cook
   from grill to sauce, is that cook still confirmed? This build resets them to
   awaiting, reasoned at `move()` in `lib/service.ts`. **Confirm.**

**Forbidden by the brief, and absent here**

Cook names beyond generic first names. Testimonials. Any metric beyond those
listed above.

Rates and hours are placeholder operating data, not claims: they are the inputs
the labour figure is computed from, and the brief asks for realistic placeholder
data. Labour-per-cover is not a new metric — it is the arithmetic that the
brief's own word "against" denotes, over two figures the brief supplies.

---

## Root 2 — the voice

Terse and operational, the register of a kitchen at 5pm. Short sentences. No
pleasantries. It never apologises and it never explains twice.

**The sentence every line is tested against:**

> Could a sous chef say this out loud at 5pm, once, without looking up?

That test kills "Please confirm your team before publishing", "Oops — something
went wrong", and "Here you can see your labour costs". It passes "sauce short 1"
and "calls close in 9h".

---

## Root 3 — the visual temperature

Sober and instrumental, but not austere. Read fast, under pressure, in a hot
room, at arm's length, sometimes on a wall screen at the pass.

**Legibility at distance beats refinement.** Where the two conflict, distance
wins — and it does conflict, in at least three places recorded in this tree: the
panel boundary, the short-station badge, and the absence of any shadow.

---

## Root 4 — the density

Very dense. One service, every station, every gap, on one laptop screen with no
scrolling. Every pixel is doing work.

Audience: head chefs and sous chefs, on a laptop in a kitchen office, or a
screen mounted on the pass.
