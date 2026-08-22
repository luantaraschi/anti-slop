# Vocabulary, English

Data, not a catalog. The tells are in the five axis files and they fire on
patterns; this file holds the words those patterns are made of in English.

Two things to hold onto while reading it.

**A word on a list is not a finding.** Every entry here still has to clear the
rule in four places. *Landscape* in an ecology paper is the field's word.
*Robust* in statistics is a technical term. What fires is a text reaching
repeatedly for several of these at once, in a subject that did not ask for any
of them.

**The lists are open.** They are the words this catalog has seen, not the words
that exist. A word doing the same job as one of these is the same finding, and
a text can fail `G1` on vocabulary no line here anticipated.

## G1, the watched vocabulary

The core set, roughly in order of how reliably each one co-occurs with the
others: delve, crucial, pivotal, robust, seamless, leverage (as a verb),
landscape (abstract), tapestry (abstract), testament, underscore (verb),
highlight (verb), foster, cultivate, intricate, interplay, nuanced, holistic,
myriad, plethora, realm, embark, navigate (abstract), harness (verb), unlock,
elevate, empower, streamline, enhance, facilitate, utilise, endeavour,
paramount, vital, key (adjective), significant, comprehensive, multifaceted,
transformative, groundbreaking, cutting edge, state of the art, game changer,
best in class, world class, next level.

The intensifier tail, which is the same failure in one word: seamlessly,
effortlessly, significantly, dramatically, remarkably, incredibly, truly,
undoubtedly, arguably.

Co-occurrence is the signal. One of these in two thousand words is a word. Six
of them in four hundred is a text nobody chose words for.

## G4, the participles

Tacked onto sentence ends: highlighting, underscoring, emphasising, ensuring,
reflecting, symbolising, showcasing, fostering, cultivating, encompassing,
contributing to, allowing for, enabling, providing, offering, creating,
resulting in, leading to, paving the way for, setting the stage for.

## G6, the filler

in order to · due to the fact that · at this point in time · in the event that
· has the ability to · it is important to note that · it is worth noting that ·
for the purpose of · with regard to · in terms of · a wide range of · a variety
of · when it comes to · the fact of the matter is · in today's world · in an
increasingly

## G7, the nominalisations

carry out an assessment · provide assistance · make a determination · undertake
a review · give consideration to · perform an analysis · conduct an
investigation · take into consideration · make an application · reach a
conclusion

## G10, the compounds

Hyphenated in every position: third-party, cross-functional, client-facing,
data-driven, decision-making, well-known, high-quality, real-time, long-term,
end-to-end, state-of-the-art, user-friendly, cost-effective, results-driven.

Attributive keeps the hyphen. Predicative drops it.

## H1, significance

marks a pivotal moment · stands as a testament to · serves as a reminder ·
underscores the importance of · highlights the significance of · reflects a
broader · represents a shift · a key turning point · the evolving landscape ·
left an indelible mark · deeply rooted in · played a crucial role · paved the
way for · cemented its place

## H3, the promotional adjectives

powerful · seamless · robust · vibrant · rich (figurative) · profound ·
breathtaking · stunning · must-visit · renowned · nestled · in the heart of ·
boasts · unparalleled · unrivalled · bespoke · curated · thoughtfully designed
· meticulously crafted · built for teams that

## H4, the unnamed authorities

experts argue · experts believe · industry reports suggest · observers have
noted · studies show · research indicates · it is widely believed · many argue
· critics have pointed out · analysts expect · several sources

## H5, the speculative fillers

likely · presumably · it is believed that · would have been · appears to have ·
suggests that · maintains a low profile · keeps personal details private ·
prefers to stay out of the spotlight · little is known about

## H6, the send-offs

the future looks bright · exciting times lie ahead · a step in the right
direction · only time will tell · one thing is certain · continues its journey
toward · the possibilities are endless · watch this space

## H7, the aphorism frames

X is the Y of Z · X is not a tool but a mirror · the language of · the currency
of · the architecture of · X becomes a trap · X is a feature, not a bug · the
real product is

## H8, the deeper truth frames

the real question is · at its core · in reality · what really matters is ·
fundamentally · the deeper issue · the heart of the matter · let us be clear ·
make no mistake · here is what nobody tells you

## H9, the search disclaimers

as of my last update · up to my knowledge cutoff · while specific details are
limited · based on available information · not extensively documented in
readily available sources · publicly available information is scarce · further
research would be needed

## T2, the negative parallelisms

not only X but also Y · it is not just about X, it is Y · this is not X, it is
Y · far from being X · rather than merely X. The clipped tail: no guesswork ·
no wasted motion · no surprises · no configuration required · no strings
attached.

## T7, the announcements

let us dive in · let us explore · let us break this down · here is what you
need to know · in this section we will · before we begin · without further ado
· buckle up · first things first

## P1, the chatbot residue

I hope this helps · let me know if · feel free to ask · here is an overview of
· here is a · would you like me to · should I continue · want me to expand ·
certainly · of course

## P2, the sycophancy

great question · excellent point · you are absolutely right · that is a really
interesting way to look at it · I love this question · what a thoughtful

## P3, the fake candid openers

Honestly? · Look, · Here is the thing · The thing is · Let us be honest · Real
talk · Truth be told · Frankly?

## P4, the coaching

you need to understand that · remember, · think of it like · the key takeaway
here is · ask yourself whether · picture this · imagine for a moment

## P6, the diff anchors

this replaces the previous · we have now added · unlike before · this was
updated to · no longer uses · in the new version · previously this was

## M1, the dash threshold

**Measured once, on 2026-08-22, against a corpus of four documents this
repository wrote. Weak evidence. Better than the number it replaced.**

English prose uses the em dash freely and always has, so the mark on its own
settles nothing. What this catalog looks for is the dash as a text's default
joint: doing the work of the full stop, the comma and the colon, in a text where
no other joint was decided either.

**A rate per word does not find that.** The first version of this file gave one:
roughly one dash per two hundred words. Measured against `corpus/`, it separated
nothing. Both clean specimens use exactly one paired interruption on purpose, and
both came out above the threshold, at one dash per 141 and one per 131 words. A
paired interruption is two characters, and a short document is short, so a rate
per word cannot tell one deliberate aposto from a habit.

What separates them is the share of the text's clause joints that the dash
carries. Count roughly: sentence breaks, commas, semicolons, colons, and dashes.
Then ask what fraction of those are dashes.

| Specimen | dashes | one per N words | share of joints |
|---|---|---|---|
| `slop-release-en` | 11 | 31 | 37% |
| `clean-release-en` | 2 | 141 | 8% |
| `slop-notice-pt` | 5 | 51 | 19% |
| `clean-notice-pt` | 2 | 131 | 7% |

The working threshold is a share above roughly 15%, **and** no other punctuation
habit visible in the text. Both halves are still required, and the second is
still carrying most of the weight.

Know what that 15% is. Four documents, all written by the author of the tell
they calibrate, which `docs/calibration-method.md` names as the thing not to do.
It is a floor found by counting rather than a rate reached for, and it is not a
rate from the wild. The first blind round should test it against text this
repository did not write.
