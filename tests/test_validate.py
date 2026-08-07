import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))

import validate


GOOD_FRONTMATTER = """---
name: anti-slop
description: |
  Audit an interface for the marks of work nobody finished. Use when a UI looks
  AI-generated or vibecoded, when reviewing a landing page or dashboard before
  shipping, or when asked to audit surface, words, or finish.
license: MIT
---

# anti-slop
"""


def test_parse_frontmatter_reads_folded_description():
    fm = validate.parse_frontmatter(GOOD_FRONTMATTER)
    assert fm["name"] == "anti-slop"
    assert "vibecoded" in fm["description"]
    assert not fm["description"].startswith("|")
    assert fm["description"].startswith("Audit an interface")
    assert fm["license"] == "MIT"


def test_parse_frontmatter_returns_none_without_delimiters():
    assert validate.parse_frontmatter("# anti-slop\n\nno frontmatter here\n") is None


def test_check_frontmatter_accepts_a_good_header():
    assert validate.check_frontmatter(GOOD_FRONTMATTER) == []


def test_check_frontmatter_reports_missing_license():
    text = GOOD_FRONTMATTER.replace("license: MIT\n", "")
    errors = validate.check_frontmatter(text)
    assert any("license" in e for e in errors)


def test_check_frontmatter_reports_a_description_without_triggers():
    text = GOOD_FRONTMATTER.replace(
        "Audit an interface for the marks of work nobody finished. Use when a UI looks\n"
        "  AI-generated or vibecoded, when reviewing a landing page or dashboard before\n"
        "  shipping, or when asked to audit surface, words, or finish.",
        "Reviews interfaces.",
    )
    errors = validate.check_frontmatter(text)
    assert any("triggers" in e for e in errors)


GOOD_TELL = """# Finish

### F1 — No lang attribute

**Signal**  The root `<html>` element ships without `lang`.

**Principle**  Screen readers pick a voice from it.

**Fix**  Set `lang` on the root element.

**Not slop when**  the page is a fragment embedded in a host document.
"""


def test_collect_tells_indexes_by_id():
    tells = validate.collect_tells(GOOD_TELL)
    assert list(tells) == ["F1"]
    assert tells["F1"]["title"] == "No lang attribute"
    assert "screen readers" in tells["F1"]["body"].lower()


def test_check_tells_accepts_a_complete_tell():
    assert validate.check_tells(GOOD_TELL, "references/finish.md") == []


def test_check_tells_reports_a_missing_field():
    text = GOOD_TELL.replace(
        "**Not slop when**  the page is a fragment embedded in a host document.\n", ""
    )
    errors = validate.check_tells(text, "references/finish.md")
    assert errors == ["references/finish.md: F1 is missing **Not slop when**"]


def test_check_tells_reports_a_file_with_no_tells():
    errors = validate.check_tells("# Finish\n\nnothing here\n", "references/finish.md")
    assert errors == ["references/finish.md: no tells found"]


def test_check_tells_rejects_a_malformed_id():
    text = GOOD_TELL.replace("### F1 —", "### Finish1 —")
    errors = validate.check_tells(text, "references/finish.md")
    assert errors == ["references/finish.md: no tells found"]


SKILL_BODY = """
| `anti-slop` | A, B, C | `surface.md`, `words.md`, `finish.md`, `molds.md` |
| `anti-slop surface` | A | `surface.md`, `molds.md` |
"""


def test_check_references_accepts_a_matching_set():
    available = {"surface.md", "words.md", "finish.md", "molds.md"}
    assert validate.check_references(SKILL_BODY, available) == []


def test_check_references_reports_a_cited_file_that_is_absent():
    available = {"surface.md", "words.md", "finish.md"}
    errors = validate.check_references(SKILL_BODY, available)
    assert errors == ["SKILL.md: cites references/molds.md, which does not exist"]


def test_check_references_reports_a_file_nobody_cites():
    available = {"surface.md", "words.md", "finish.md", "molds.md", "motion.md"}
    errors = validate.check_references(SKILL_BODY, available)
    assert errors == ["references/motion.md exists but SKILL.md never cites it"]


FIXTURE_TABLE = """# Fixtures

| Fixture | Kind | IDs |
|---|---|---|
| `slop-dashboard` | expect | A1, A3, F2 |
| `clean-dashboard` | forbid | A1, A3 |
"""


def test_check_fixture_ids_accepts_known_ids():
    known = {"A1", "A3", "F2"}
    assert validate.check_fixture_ids(FIXTURE_TABLE, known) == []


def test_check_fixture_ids_reports_an_unknown_id():
    known = {"A1", "A3"}
    errors = validate.check_fixture_ids(FIXTURE_TABLE, known)
    assert errors == ["fixtures/README.md: slop-dashboard expects unknown id F2"]


def test_check_fixture_ids_reports_an_empty_table():
    errors = validate.check_fixture_ids("# Fixtures\n\nnone yet\n", {"A1"})
    assert errors == ["fixtures/README.md: no expectation rows found"]
