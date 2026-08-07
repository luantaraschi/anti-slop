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
