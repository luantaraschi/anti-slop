# Words

Copy inside the interface, not marketing prose. Vocabulary that reads as
generated in any medium belongs to `anti-slop:text`, the plugin's third skill;
W6 hands off to it rather than repeating its catalog. What lives here are the
failures that only exist in a running interface: the label that names the
machine, the button whose verb never comes back, the empty screen that gives no
direction.

The division is by medium, not by quality. This axis reads a label, a toast, an
empty state and an error, and it reports. That skill reads prose and rewrites
it. A landing page has both, and the two run in sequence.

### W1 — Catalog labels

**Signal**  "Get Started", "Learn More", "Submit", "Click here" as button or link text.

**Principle**  A label is the promise of what happens on click. "Submit" describes what the form does, not what the person wants.

**Fix**  Name the outcome: "Create account", "Read the method", "Send invoice".

**Not slop when**  The product is deliberately generic and the label is the actual verb, like "Search" on a search box.

### W2 — A verb that does not survive

**Signal**  A button reads *Publish* and the toast reads "Successfully submitted"; a menu reads *Archive* and the dialog asks "Are you sure you want to remove?"

**Principle**  The interface's vocabulary is the signage for whoever is navigating it. Swapping the verb midway erases the sign.

**Fix**  One verb per action, from the button to the toast to the history entry.

**Not slop when**  The trigger and the confirmation are in different languages, or the register is deliberately different for legal reasons.

### W3 — An empty screen with no direction

**Signal**  "No items found", "Nothing here yet", "No data".

**Principle**  The empty screen is every new user's first contact with the feature. It's an invitation to act, not a count report.

**Fix**  Say what the space is for and offer the first action. Distinguish genuinely empty from filtered-to-nothing.

**Not slop when**  It's a search result, where empty is itself the answer and the obvious action is changing the term.

### W4 — An error that apologizes or says nothing

**Signal**  "Oops! Something went wrong", "An error occurred", "Please try again later".

**Principle**  An error doesn't apologize and doesn't stay vague. Whoever reads it needs to know what happened and what to do now.

**Fix**  Name the failure and the next step. Where the cause is unknown, say what was already preserved.

**Not slop when**  The failure is genuinely unknown, and the text offers a support path with an incident identifier.

### W5 — Implementation names leaking

**Signal**  "Webhook config", "Sync entities", "Manage instances", "Entity ID".

**Principle**  The person is administering notifications, not webhook configuration. Naming by the mechanism forces them to learn the implementation to use the product.

**Fix**  Name by what the person controls and already recognizes.

**Not slop when**  The audience is developers and the webhook is literally the object they're manipulating.

### W6 — Inflated marketing copy

**Signal**  A claim about capability, speed or trust with no fact behind it: "The platform for teams that move fast", "Built on infrastructure your team already trusts". The stock intensifiers are the same failure compressed into one word ("Seamlessly", "Powerful", "Effortlessly", "Take your X to the next level", "Unlock the power of"), but the tell is the unsubstantiated claim, not a fixed list of phrases.

**Principle**  An unbacked claim occupies the place information should hold. Whoever reads it wants to know what the thing does.

**Fix**  Swap for something specific. **Handoff:** run `anti-slop text` on the copy instead of rewriting it here. That skill carries the vocabulary, the exemptions and the fabrication rule this one deliberately does not repeat.

**Not slop when**  The brand voice is openly promotional and the text backs the claim with a verifiable fact.

### W7 — The rule of three

**Signal**  Always three features, always three bullets, always three steps, always three numbers in the stats strip.

**Principle**  Three is the number a generator reaches for when nobody counted. Its repetition across every section is what gives it away.

**Fix**  Count how many things actually exist. Two, if there are two. Five, if there are five.

**Not slop when**  The content really is three things, and other sections on the same page carry different counts.
