# States

The axis that asks whether the interface exists off the path that was
demonstrated. Surface asks whether anyone decided, Craft whether anyone looked,
Words what the copy says, Finish what a browser checks. This one asks a
question none of the four reaches: what happens when the request fails, when
the reader arrives from a link, when the click cannot be taken back.

Its evidence is a branch that is missing rather than a value that is wrong. So
the reading is different from Surface's: there is no theme file where someone
records that the error state should not exist. The evidence that someone
decided is the branch itself, somewhere in the tree — a project that handles
one failure and misses another is an oversight, and a project that handles none
never considered the case.

**A demo path is not a defect.** These tells fire on a product, not on a
prototype that says it is one. A tree whose own code declares it a sketch or a
Storybook story is out of scope, the same way F12 releases a placeholder inside
one.

That release is about what a file says of itself, not about where it sits. A
calibration corpus is read as the shipped product it imitates — this catalog's
own fixtures are audited by this axis, and an exemption keyed to the directory
name would make the corpus unable to test the axis that lives in it.

### S1 — A request with no failure branch

**Signal**  A `fetch`, a query, or a mutation whose failure has nowhere to go: no `.catch`, no `try`/`catch` around the `await`, no error field read from a query hook, and no error boundary above the component. Count the request sites that handle a failure against the ones that don't.

**Principle**  The network fails, and it fails most for the readers with the worst connection. A figure that silently stops updating reads as a figure that stopped changing, which is worse than an error: the reader believes the stale number. This is the branch that separates an interface built for a demo from one built for a Tuesday.

**Fix**  A failure branch that says the request failed and says what the reader can do — retry, wait, or read the last known value knowing it is last known. Keeping the stale value is fine; keeping it silently is not.

**Not slop when**  Nothing in the tree performs a request, so the condition never arises; the failure is genuinely handled above, by an error boundary or a query client's shared handler that this callsite inherits; or the project handles failure at its other request sites, leaving this one an oversight.

### S2 — State the URL never learns

**Signal**  A value that names the view — a filter, a tab, a sort order, a page number, a selected record — held in component state, with nothing reading or writing **that value** to the address. Evaluate it once per value rather than once per tree: a project can put one thing in the address and leave another out, and the tell fires on the one left out.

Whether a panel is open is not such a value, and it is not a site. The exemption below forgives it anyway, which made earlier readings of this Signal a trap: an auditor who found an expanded panel in component state had a fire that looked well evidenced and was wrong.

The three cures the second clause names are not interchangeable, and the Principle's three costs are why. Search params and a route segment cure the refresh and the pasted link; only a history entry cures the back button. A value written to the address with `replace` rather than `push` has paid two of the three and still owes the third, and this tell reports the half that is missing rather than passing the whole.

**Principle**  A view the reader cannot send to a colleague is a view that exists once. Refresh loses it, the back button does not undo it, and the link they paste opens something else. The test is whether the value answers "what am I looking at" — a filter does, and a hover preview does not.

**Fix**  Put the state that names the view in the address and leave the rest in the component. Two kinds of state, two homes, chosen per value rather than per convenience.

**Not slop when**  Every piece of state in the tree is genuinely ephemeral — a hover, a transient toast, an unsent draft, whether a menu is open; the surface is a step in a flow that deliberately owns its own history; or the project puts comparable state in the address elsewhere and this view fell outside it.

### S3 — An action that cannot be taken back or stopped

**Signal**  A handler performing a delete, a revoke, an archive, a cancel or an overwrite, reached in one click, with no confirmation between the click and the call and no undo affordance anywhere in the path. Separately: a control that submits a mutation and stays live through its own request, with nothing bound to a pending state.

**Principle**  Two different costs, one absence behind both. The unconfirmed destruction costs the reader something they cannot get back. The unguarded submit costs them a duplicate, and in between it tells them nothing happened, so they press again.

**Fix**  A confirmation, or an undo window, for anything that destroys — one or the other, rarely both. A pending state on anything that mutates, bound before the request starts rather than after.

**Not slop when**  The action is trivially reversible on its own — a bookmark, a mute, a toggle that flips back; the destruction already routes through a shared confirmation the callsite sits inside; the mutation is idempotent, so a second press costs nothing; or the project guards its other destructive actions and mutating controls, leaving this one an oversight.
