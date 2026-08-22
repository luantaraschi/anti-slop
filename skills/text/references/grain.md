# Grain

Did anyone choose these words?

Ten tells at the level of the word and the clause. The watched lists that make
several of them concrete live in `vocabulary-en.md` and `vocabulary-pt.md`, not
here, because the pattern is what fires and the words are data. A tell on this
axis is almost never worth firing on one instance: what it detects is a text
reaching repeatedly for whatever was nearest.

### G1 — The watched vocabulary

**Signal**  The text leans on the small set of high frequency words listed for its language: in English *delve*, *crucial*, *robust*, *leverage*, *landscape*, *tapestry*, *underscore*, *foster*, *intricate*, *pivotal*; in Portuguese the equivalents in `vocabulary-pt.md`. Several appear, and they co-occur.

**Principle**  A word nobody chose is a word that would fit any subject. These are the words that survive when a sentence is assembled from the most probable next token rather than from what the writer meant.

**Fix**  Replace each with the word this subject asks for, which is usually shorter and always more specific. Where no replacement is needed, delete.

**Not slop when**  the word is the field's own term, as *robust* in statistics or *landscape* in ecology, or one instance appears in a long text and nothing else on this axis fires.

### G2 — Anything rather than the verb to be

**Signal**  Elaborate substitutes for *is* and *has*: *serves as*, *stands as*, *represents*, *constitutes*, *boasts*, *features*, *offers*, *comes equipped with*.

**Principle**  The plain copula is the most useful verb in the language and the one a generator avoids, because it sounds too simple. The substitute adds syllables and takes away precision.

**Fix**  *Is*. *Has*. Where the substitute carried real meaning, keep the meaning and lose the ceremony.

**Not slop when**  the verb is doing work the copula cannot, as *represents* in a legal or diplomatic sense, or *serves* where something genuinely serves someone.

### G3 — Synonym cycling

**Signal**  One subject named a different way each time it recurs: *the protagonist*, then *the main character*, then *the central figure*, then *the hero*. Same for products, people and concepts.

**Principle**  Repetition penalties produce this and school taught it. The reader has to re establish who is being discussed at every turn, and in technical prose two names for one thing reads as two things.

**Fix**  Pick one name and repeat it. Repetition of a subject's name is invisible; variation is not.

**Not slop when**  the different names carry different information, such as a role in one sentence and a name in another where both matter.

### G4 — The participle pile on

**Signal**  Present participle phrases tacked onto sentence ends to add depth: *highlighting*, *underscoring*, *ensuring*, *reflecting*, *fostering*, *showcasing*, *allowing for*, *contributing to*. In Portuguese the same habit runs through the gerund: *garantindo*, *proporcionando*, *trazendo*, *refletindo*, *destacando*.

**Principle**  The clause adds no actor and no time. It restates the main clause with an interpretive gloss, and it is the single most reliable rhythm in generated prose.

**Fix**  Cut it, or promote it to its own sentence with a subject and a tense, at which point you will usually find it had nothing to say.

**Not slop when**  the participle names a genuinely simultaneous action with the same subject, as *she left, closing the door behind her*.

### G5 — Hedging in layers

**Signal**  Two or more qualifiers on one claim: *could potentially*, *may possibly*, *it might be argued that*, *some evidence suggests it could*, *tends to often*.

**Principle**  One hedge is honest. Stacked hedges say the writer does not know and does not want to say so, and the reader discounts the sentence entirely.

**Fix**  Keep one hedge, the weakest true one, or state the uncertainty plainly as its own clause.

**Not slop when**  each qualifier is doing distinct work, such as one on likelihood and one on scope, and the sentence would be wrong without both.

### G6 — Filler that says the same thing at greater length

**Signal**  Fixed phrases that expand a short word: *in order to*, *due to the fact that*, *at this point in time*, *has the ability to*, *it is important to note that*, *in the event that*, *for the purpose of*, *a wide range of*.

**Principle**  Each one trades a word for four and adds nothing. In quantity they set a pace that reads as official and is merely slow.

**Fix**  *To*. *Because*. *Now*. *Can*. *If*. Delete *it is important to note that* entirely; if it were not important the sentence would not be there.

**Not slop when**  the longer form is required by the genre, as in some legal drafting where *in the event that* has settled meaning.

### G7 — Nominalisation

**Signal**  A verb buried inside a noun and reanimated with a weak one: *carry out an assessment of*, *provide assistance to*, *make a determination*, *undertake a review*, *give consideration to*.

**Principle**  The action is the point and it has been hidden. The sentence gains length and loses its subject.

**Fix**  Use the verb. *Assess*. *Help*. *Decide*. *Review*. *Consider*.

**Not slop when**  the noun is the established term for a thing rather than an action, as *assessment* meaning the document.

### G8 — Connectors stacked at every paragraph head

**Signal**  Consecutive paragraphs opening with a connective: *Additionally*, *Moreover*, *Furthermore*, *In addition*; in Portuguese *Além disso*, *Ademais*, *Outrossim*, *Ainda*. The tell is the run, not the word.

**Principle**  A connective at every head means the paragraphs were generated in sequence rather than ordered. Where the order is real, the reader can feel it without being told at each step.

**Fix**  Delete most of them. Keep the one that marks a genuine turn, and prefer *but* to *however* where it is a turn at all.

**Not slop when**  a single connective marks a real reversal, or the genre is one where explicit linkage carries argumentative weight, as in some legal and academic writing.

### G9 — Passive voice hiding the actor

**Signal**  A passive or a subjectless fragment where the actor matters and is available: *the results are preserved automatically*, *mistakes were made*, *no configuration file needed*, *it was decided that*.

**Principle**  The reader needs to know who does the thing, especially in instructions and in anything with consequences. The passive is where responsibility goes to disappear.

**Fix**  Name the actor and use the active verb. *The system keeps the results*. *You do not need a configuration file*.

**Not slop when**  the actor is unknown, irrelevant or deliberately withheld, or the convention of the field puts the method in the passive, as in scientific writing, or the court rather than the writer is the actor in a legal document.

### G10 — The uniformly hyphenated compound

**Signal**  Compounds hyphenated everywhere regardless of position: *the report is high-quality*, *the team is cross-functional*, *the process is end-to-end*. In Portuguese the parallel habit is the adverbial frame used in place of an adverb or a plain verb: *de forma eficaz*, *de maneira assertiva*, *de forma estratégica*.

**Principle**  People hyphenate inconsistently, mostly before the noun and often not after it. Uniformity across every position is a rule nobody applies by hand.

**Fix**  Keep the hyphen before the noun, drop it after. For the Portuguese form, use the adverb or the verb: *eficazmente*, or better, the verb that made the frame unnecessary.

**Not slop when**  a style guide the project declares requires the hyphen in both positions, or the compound is a fixed term.
