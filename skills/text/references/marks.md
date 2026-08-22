# Marks

Did anyone set the punctuation, or did the generator?

Six tells on mechanics. This axis is the one most often mistaken for the whole
job, and it is the smallest, because a mark is the weakest evidence in the
catalog. Every tell here fires on frequency and on the absence of a habit, never
on a single instance.

Note where you are reading this: the headings in these files are `### H1 — Title`
with an em dash, because the catalog's own parser requires one. A mark this
plugin uses in its own structure is not a mark this plugin thinks is wrong. That
is the axis in one line.

### M1 — Dashes at generator frequency

**Signal**  Em dashes, en dashes or spaced double hyphens doing the work of full stops, commas and colons throughout. Do not count them per word: a rate per word cannot separate one deliberate interruption in a short text from a habit, and this catalog's own corpus proved it. Count instead what share of the text's clause joints are dashes, against sentence breaks, commas, semicolons and colons. The tell fires when that share is above the threshold in the vocabulary file **and** no other punctuation habit is visible in the text.

**Principle**  A writer who uses dashes uses them for one thing, usually the interruption. A text that reaches for a dash wherever a joint is needed is a text where the joint was never chosen.

**Fix**  Decide each one on its own. A full stop where two sentences were fused, a comma for a tight aside, a colon before an explanation, parentheses for a true aside, and a dash where the interruption is real. Some survive.

**Not slop when**  a sample of the author's writing uses dashes at that rate, or the project declares a rule about them, in which case follow the rule. Never treat a dash count alone as evidence about a text: on its own it settles nothing.

### M2 — Curly quotation marks

**Signal**  Typographic quotes and apostrophes in a context whose neighbours are straight, particularly inside code, configuration, commit messages or filenames where they break things.

**Principle**  Curly quotes are the default of every word processor and most editors, so on their own they are evidence of nothing. They matter where the surrounding text is straight, because then something else produced them, and they matter absolutely where they break a command.

**Fix**  Match the file. Straight quotes in code and in anything a machine reads. In prose, whichever the rest of the document uses.

**Not slop when**  the document is typeset prose whose convention is curly, and it is curly throughout.

### M3 — Boldface applied by the paragraph

**Signal**  Bold on phrases rather than on terms, several per paragraph, marking emphasis rather than definition. The tell is the rate: when most paragraphs carry bold, none of it emphasises anything.

**Principle**  Emphasis is a contrast, so it only works where most text is not emphasised. Bold applied mechanically is a texture, and the reader stops seeing it by the second page.

**Fix**  Keep bold for the term being introduced and for the one thing per section a scanner must not miss. Delete the rest. Where the emphasis was carrying a real distinction, rewrite the sentence so the word order carries it.

**Not slop when**  the document is reference material where bold marks defined terms consistently, or the project's own style declares the convention.

### M4 — Emoji as furniture

**Signal**  Emoji decorating headings, bullets or section openings, one per item, drawn from the same small set: rocket, lightbulb, check mark, sparkles, fire, target.

**Principle**  The emoji carries no information the heading does not. It is there because the format felt like it wanted one, which is the definition of a mark nobody chose.

**Fix**  Delete them. Where a symbol genuinely encodes status in a table or a list, use one symbol consistently and say what it means.

**Not slop when**  the register is a chat message, a social post or a changelog whose audience expects them, and the author uses them elsewhere too.

### M5 — Every word of a heading capitalised

**Signal**  Title case applied to every heading, including prepositions and articles, in a document whose body is sentence case. In Portuguese and other languages that do not use title case at all, capitalisation of every word in a heading is the same tell and a stronger one.

**Principle**  Title case is a house convention, so applying it everywhere by reflex in a house that does not use it is a mark nobody set. In languages that never use it, it can only have come from a template.

**Fix**  Sentence case, unless the project declares title case, in which case apply it the way its own guide does.

**Not slop when**  the project's style guide requires title case, or the heading is a proper name.

### M6 — Decorative bullets and arrows

**Signal**  Symbols standing in for punctuation and structure: arrows between clauses, check marks and crosses as list markers, box drawing characters framing plain text, bullet separators inside sentences.

**Principle**  A symbol used as a word makes the line unreadable aloud, unreadable by a screen reader, and unsearchable. It reads as structure and carries none.

**Fix**  Words. *Becomes*, *from*, *then*. A plain list marker. Where a symbol genuinely encodes a value in a table, keep one, use it consistently, and give it a key.

**Not slop when**  the symbol is doing real work in a table, a diagram or a terminal transcript, and its meaning is stated.
