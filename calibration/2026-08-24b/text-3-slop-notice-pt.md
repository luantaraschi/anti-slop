# text-3-slop-notice-pt

## What I judged the document to be, and who reads it

An internal law-office memo (`comunicado`) from a colleague, Joana, to the
firm's other lawyers ("Prezados colegas"), announcing that the Tribunal has
rolled out a new electronic filing system and telling the office what to
expect: a short adaptation deadline, training coming, support available, a
gradual migration starting with the more complex cases. Register: formal
internal correspondence, not marketing copy and not a public notice — the
salutation, the "venho por meio deste comunicado" opening, and the
"Atenciosamente, Joana" close are the fixed forms of Brazilian business
correspondence, not chatbot residue, and I left them alone on that basis
(`vocabulary-pt.md`'s note that these are conventions, not residue).

Root 1 (the author's voice) went unanswered: no earlier writing sample from
Joana was supplied, so the rewrite is plain within the register rather than
matched to a documented habit of hers. Flagging that here since nobody was
available mid-task to supply one.

## The note I would have delivered

Este é um comunicado interno, e a maior parte dele é reforço em vez de
informação: a mudança real (novo sistema do Tribunal, prazo curto, treinamento,
suporte, migração gradual) cabe em poucas frases, e o resto — o "divisor de
águas", os especialistas sem nome, o fecho sobre o futuro promissor — não
acrescenta nada que o leitor possa usar. A reescrita mantém a saudação, a
assinatura e todos os fatos, e corta o que só decorava.

## Tells that fired, with the text that caused each

**H1 — significance nobody measured** (fired twice)
- "que representa um verdadeiro divisor de águas para a rotina do escritório"
- "reafirma nosso compromisso com a excelência"

**H3 — promotional adjective with no fact behind it**
- "uma solução robusta que promete otimizar significativamente o fluxo de trabalho"

**H4 — authority with no name**
- "Especialistas apontam que a curva de aprendizado de sistemas dessa natureza costuma ser significativa"

**H6 — a conclusion that would end any text** (fired twice, both exact vocabulary-list matches)
- "Em suma, trata-se de um passo importante..."
- "o futuro é promissor e temos certeza de que, juntos, superaremos mais este desafio com excelência"

**T2 — the negative parallelism**
- "Não se trata apenas de uma mudança técnica — trata-se de uma verdadeira transformação na forma como atuamos."

**T4 — the bolded header list**
- "**Prazo:** O prazo de adaptação é curto..." / "**Treinamento:** O treinamento será disponibilizado..." / "**Suporte:** O suporte estará disponível..." — each bold stub restated by the sentence after it.

**T7 — announcing the writing instead of writing**
- "Vamos entender o que muda." (exact match to the vocabulary-pt.md T7 entry)

**G1 — the watched vocabulary**
- Cluster in one ~300-character paragraph: "transição **eficaz**", "é **fundamental**", "costuma ser **significativa**", "antecipação é **crucial**" — four watched words tight together. Plus "robusta", "otimizar", "significativamente" earlier, and "viabilizando" later.

**G2 — anything rather than the verb to be**
- "que representa um verdadeiro divisor de águas"

**G4 — the participle pile-on** (fired twice, the axis's own strongest signal: two gerunds in one sentence)
- "proporcionando mais agilidade e garantindo maior segurança"
- "contemplando primeiramente... sempre buscando minimizar impactos e viabilizando uma adaptação mais tranquila" (three gerunds in one sentence)

**G6 — filler that says the same thing at greater length**
- "Vale ressaltar que", "a fim de", "Cabe salientar ainda que" — all three are exact entries in `vocabulary-pt.md`'s G6 list.

**G10 — the adverbial frame**
- "será realizada de forma gradual"

**M1 — dashes at generator frequency** (borderline; see Q1 below)
- Five em dashes across the document's roughly 33 clause joints (≈15.2%), four of the five fusing two independent clauses where a full stop or semicolon would sit: "escritório — uma mudança", "eletrônico — uma solução robusta", "técnica — trata-se de uma verdadeira transformação", "moderno — o futuro é promissor". Only "Pense assim — cada dia..." reads as a genuine aside.

**M3 — boldface applied by the paragraph**
- Three separate bolded phrases in one paragraph, none a defined term: "**transição eficaz**", "**significativa**", "**antecipação é crucial**".

**M5 — every word of a heading capitalised**
- "# Comunicado Importante: Mudanças No Sistema De Peticionamento Eletrônico" (No, De capitalised) and "## Principais Pontos" — title case, which Portuguese does not use natively, so `vocabulary-pt.md` treats this as a stronger tell here than in English.

**P4 — coaching the reader**
- "Lembre-se: prazo é prazo. Pense assim — cada dia de atraso..." — both "Lembre-se:" and "Pense assim" are exact `vocabulary-pt.md` P4 entries, stacked in the same two sentences.

## Question 1 — rules I had to supply that a tell does not contain

**M1's threshold arithmetic.** The tell says: "Count instead what share of the
text's clause joints are dashes... sentence breaks, commas, semicolons and
colons," fired "when that share is above the threshold... **and** no other
punctuation habit is visible." Nothing in that sentence says whether a colon
after a bolded list label ("**Prazo:**") is a "clause joint" of the same kind
as a colon in running prose. I counted it as one. That decision set the
denominator at 33 joints against 5 dashes — 15.15%, a hair over the stated
"approximately 15%." Excluding the three list-colons from the count (a
defensible reading, since they are list markup rather than prose punctuation)
gives 5/27 ≈ 18.5%, a clearer fire. Either reading clears the line here, but
the tell's own wording does not say which denominator is correct, and on a
document this short the choice moves the number by three and a half points —
enough to matter on a text sitting closer to the line.

**M1's "no other punctuation habit visible."** The tell gives no test for what
counts as a competing habit. This text uses commas and colons correctly
elsewhere (in the bullet list, in ordinary clause-joining), which could read
as "another habit is visible" and spare the dashes. I supplied the rule that
what matters is not whether other marks appear anywhere in the text, but
whether the dashes themselves are doing more than one job — and four of the
five are fusing independent clauses where a full stop or semicolon belongs, so
I treated that internal skew as satisfying the second half of the test rather
than the presence of unrelated commas elsewhere. The tell's own words do not
draw that line; I drew it.

**T1's silence on a text with only one enumeration.** T1 fires "when three is
the most common count and no section departs from it" — a test that
presupposes more than one grouping to compare. This document has exactly one
list of three items and no other countable groupings. I supplied the rule
that a single triad, with nothing to compare it against, cannot establish
"the most common count across the text," and declined to fire T1. The tell
does not say what to do with n=1.

**Choosing which axis owns "Não se trata apenas de uma mudança técnica —
trata-se de uma verdadeira transformação."** This sentence matches T2's
negative-parallelism shape (`vocabulary-pt.md`'s own T2 entry, "não se trata
apenas de X, mas de Y") and also carries H1's unmeasured-significance move
("verdadeira transformação," unbacked by any stated fact). Nothing in the
catalog says whether a sentence matching two signals should be counted once or
twice. I supplied the rule that the sentence's grammatical shape decides which
axis owns it (T2, here), and treated the significance claim as riding inside
that single finding rather than firing H1 a third time on the same words.

**Extending G9's field-convention exemption to an office memo.** "Ser
disponibilizado" (para o treinamento) is a passive with an easily inferable
actor. G9's stated exemption names "scientific writing" and "the court...
in a legal document," not internal administrative announcements. I supplied
the extension by analogy — treating a single, low-stakes passive in a routine
office notice as the same kind of convention — rather than finding that
exemption written down for this genre. I did not fire G9; naming this because
the decision not to fire also needed a rule the tell didn't hand me.

## Question 2 — for every tell that did not fire, which of three ways did it decline

**Condition never arose (25 tells):** H2 (no citation list or follower count),
H5 (no guess dressed as fact), H7 (closest candidate, "prazo é prazo," does
not match any listed aphorism formula), H8 (no deeper-truth frame), H9 (no
research-gap paragraph), T3 (no "from X to Y" range), T5 (the heading is not
followed by a restating line), T6 (no challenges-and-prospects section), T8
(no run of three-plus short declarative fragments), G3 (the system is named
consistently, not cycled through synonyms), G5 (no stacked hedges), G7 (no
nominalisation-with-weak-verb pattern), G8 (no run of stacked paragraph-head
connectives), M2 (no curly quotes present at all), M4 (no emoji), M6 (no
decorative bullets or arrows), P1 (no chatbot residue), P2 (no sycophancy), P3
(no fake-candid opener), P6 (no diff-referential prose).

**Condition arose and a `Not slop when` clause excused it (2 tells):** T9 (the
document is short enough that paragraph-length spread cannot be measured — the
axis file states this exemption by name), P5 (the genre is a procedural
internal announcement, not opinion, review or recommendation, so the axis's
own register exemption applies; separately, the document's actual failure mode
is the opposite of P5's — it over-asserts rather than staying neutral, so
P5's signal was never really a candidate here).

**Condition arose and the text had already done the right thing (1 tell,
by extension rather than a stated exemption):** G9 — the passive
"será disponibilizado" is present and the actor is omittable-by-convention,
so I read the text as already having made a defensible choice for its genre,
as discussed in Q1 above.

**Condition arose weakly and was declined for insufficient repetition (1
tell):** T1 — one triad exists (the bullet list) but the tell requires
"three" to be the *dominant* count across the text, which a single instance
cannot establish.

## Question 3 — does the rewrite state any fact, name, number, date, quotation or citation not in the source

No. I checked the rewrite against the source clause by clause. Every fact
carried over: the Tribunal implemented a new e-filing system; its stated goals
were a faster workflow and more security in case processing; the change
affects office routine; the adaptation deadline is short (no date is given in
the source, and none is invented in the rewrite); training is coming soon;
support is available; migration is gradual, complex cases first, the rest
after, to reduce impact; each day of delay in filing costs margin; the letter
is from Joana to "Prezados colegas." Nothing invented was added — no system
name, no date, no numbers, no new claims.

One judgment call worth surfacing rather than smoothing over: the sentence
"a curva de aprendizado... costuma ser exigente" drops the source's
"Especialistas apontam que" attribution and lets the claim stand as the
writer's own, per H4's stated fix ("state the claim as the writer's and let
it stand on its argument"). No new fact was added — the underlying claim
(learning curve is demanding) was already in the source — but the *source of
the assertion* changed, from a named-but-empty "especialistas" to Joana
herself. That is the fix the tell prescribes, not an invention, but it is a
change to who is asserting the sentence, and the honest thing is to say so
rather than let it pass as a purely mechanical cut.

## git diff

```diff
diff --git a/document.md b/document.md
index 26601d8..85f7ff3 100644
--- a/document.md
+++ b/document.md
@@ -1,41 +1,22 @@
-# Comunicado Importante: Mudanças No Sistema De Peticionamento Eletrônico
+# Comunicado: mudanças no sistema de peticionamento eletrônico
 
 Prezados colegas,
 
-Venho por meio deste comunicado compartilhar uma atualização que representa um
-verdadeiro divisor de águas para a rotina do escritório — uma mudança que
-reafirma nosso compromisso com a excelência.
+Venho por meio deste comunicado informar sobre uma mudança no sistema de peticionamento eletrônico, que afeta a rotina do escritório.
 
-Vamos entender o que muda.
+O Tribunal implementou o novo sistema para agilizar o fluxo de trabalho e dar mais segurança à tramitação dos autos.
 
-O Tribunal implementou um novo sistema de peticionamento eletrônico — uma
-solução robusta que promete otimizar significativamente o fluxo de trabalho,
-proporcionando mais agilidade e garantindo maior segurança na tramitação dos
-autos. Não se trata apenas de uma mudança técnica — trata-se de uma verdadeira
-transformação na forma como atuamos.
+## Principais pontos
 
-## Principais Pontos
+- O prazo de adaptação é curto.
+- O treinamento será disponibilizado em breve.
+- O suporte estará disponível para dúvidas.
 
-- **Prazo:** O prazo de adaptação é curto e exige atenção de todos.
-- **Treinamento:** O treinamento será disponibilizado em breve.
-- **Suporte:** O suporte estará disponível para eventuais dúvidas.
+É importante acessar o novo ambiente com antecedência: a curva de aprendizado desse tipo de sistema costuma ser exigente.
 
-Vale ressaltar que, a fim de garantir uma **transição eficaz**, é fundamental
-que todos acessem o novo ambiente com antecedência. Especialistas apontam que a
-curva de aprendizado de sistemas dessa natureza costuma ser **significativa**,
-razão pela qual a **antecipação é crucial**.
+A migração dos processos será gradual: primeiro as ações mais complexas, depois as demais, para reduzir o impacto.
 
-Cabe salientar ainda que a migração dos processos será realizada de forma
-gradual, contemplando primeiramente as ações de maior complexidade e,
-posteriormente, as demais, sempre buscando minimizar impactos e viabilizando uma
-adaptação mais tranquila.
-
-Lembre-se: prazo é prazo. Pense assim — cada dia de atraso no cadastro é um dia
-a menos de margem.
-
-Em suma, trata-se de um passo importante rumo a um escritório mais moderno — o
-futuro é promissor e temos certeza de que, juntos, superaremos mais este desafio
-com excelência.
+**Cada dia de atraso no cadastro reduz a margem de prazo.**
 
 Atenciosamente,
```
