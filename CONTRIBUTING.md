# Contributing

anti-slop improves when a finding survives contact with real code. A useful contribution brings evidence: a file that triggered a tell, the reason the finding was right or wrong, and the smallest change that makes the rule clearer.

## Choose the right place

Use [Q&A](https://github.com/luantaraschi/anti-slop/discussions/categories/q-a) when you are unsure whether a finding applies. Use [Ideas](https://github.com/luantaraschi/anti-slop/discussions/categories/ideas) for changes that still need a design decision.

Open an issue for a reproducible defect or a proposed catalog change. Small documentation corrections can go straight to a pull request.

## Set up the repository

The validator needs Python and the tests need pytest.

```sh
python -m pip install pytest
python scripts/validate.py
python -m pytest tests/
```

The validator must finish with `0 problem(s)`.

## Change the catalog

Every tell has four fields: Signal, Principle, Fix, and Not slop when. A new tell also needs a free id in the correct axis file.

Before editing a tell, find or build both sides of it:

* an `expect` case where the tell should fire
* a `forbid` case where the exemption should release it

Record those ids in `fixtures/README.md`. If the change affects judgment rather than structure, the next blind calibration run is what measures it. Do not rewrite an old calibration report to match a new rule.

## Report a false positive

Include the finding, its file and line, and the evidence that somebody chose the value. A token, theme entry, primitive, or nearby comment is stronger evidence than intent described after the fact.

The catalog does not ban gradients, pills, cards, or any other visual shape. A false positive report should explain why the implementation is deliberate, not merely why the pattern is common.

## Open a pull request

Keep one subject per pull request. Describe the evidence first, then the rule or code change. If fixtures moved, include the affected expectation rows. If a blind run was part of the work, commit its report without editing the result.

Both validation commands must pass before review.
