import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))

import validate


GOOD_FRONTMATTER = """---
name: audit
description: |
  Audit an interface for the marks of work nobody finished. Use when a UI looks
  AI-generated or vibecoded, when reviewing a landing page or dashboard before
  shipping, or when asked to audit the surface, the craft, the words, or the
  finish of a React, Tailwind or shadcn project.
license: MIT
---

# audit
"""


def test_parse_frontmatter_reads_folded_description():
    fm = validate.parse_frontmatter(GOOD_FRONTMATTER)
    assert fm["name"] == "audit"
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
        "  shipping, or when asked to audit the surface, the craft, the words, or the\n"
        "  finish of a React, Tailwind or shadcn project.",
        "Reviews interfaces.",
    )
    errors = validate.check_frontmatter(text)
    assert any("triggers" in e for e in errors)


def test_check_frontmatter_requires_the_craft_trigger():
    # The brief's literal replace targets ("or finish of a" / "surface, the
    # words,") don't survive as contiguous substrings once "the craft" sits
    # between "surface," and "the words," in the real four-axis description.
    # This does the same job directly: strip only the craft mention, leaving
    # the other three triggers (vibecoded, AI-generated, audit) intact, so
    # the resulting error can only be about the missing craft trigger.
    text = GOOD_FRONTMATTER.replace(
        "the surface, the craft, the words, or the",
        "the surface, the words, or the",
    )
    errors = validate.check_frontmatter(text)
    assert any("craft" in e for e in errors)


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


TWO_TELLS = """# Finish

### F1 — No lang attribute

**Signal**  The root `<html>` element ships without `lang`.

**Principle**  Screen readers pick a voice from it.

**Fix**  Set `lang` on the root element.

**Not slop when**  the page is a fragment embedded in a host document.

### F2 — A title nobody revisited

**Signal**  Every route ships the same `<title>`.

**Principle**  A repeated title distinguishes nothing in the history.

**Fix**  Give each route a title of its own.

**Not slop when**  only one real route exists and it wrote its own title.
"""


def test_collect_tells_keeps_successive_tells_apart():
    tells = validate.collect_tells(TWO_TELLS)
    assert list(tells) == ["F1", "F2"]
    assert tells["F1"]["title"] == "No lang attribute"
    assert tells["F2"]["title"] == "A title nobody revisited"
    assert "screen readers" in tells["F1"]["body"].lower()
    assert "screen readers" not in tells["F2"]["body"].lower()
    assert "history" in tells["F2"]["body"].lower()
    assert "history" not in tells["F1"]["body"].lower()


def test_check_tells_accepts_two_complete_tells():
    assert validate.check_tells(TWO_TELLS, "references/finish.md") == []


def test_check_duplicate_tell_ids_accepts_distinct_ids():
    assert validate.check_duplicate_tell_ids(TWO_TELLS, "references/finish.md") == []


def test_check_duplicate_tell_ids_reports_a_repeated_id():
    text = TWO_TELLS.replace("### F2 —", "### F1 —")
    errors = validate.check_duplicate_tell_ids(text, "references/finish.md")
    assert errors == ["references/finish.md: F1 is defined more than once"]


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
    assert errors == ["SKILL.md: references/motion.md exists but it is never cited"]


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


def test_check_fixture_ids_reports_an_unknown_id_a_fixture_forbids():
    known = {"A3", "F2"}
    errors = validate.check_fixture_ids(FIXTURE_TABLE, known)
    assert errors == [
        "fixtures/README.md: slop-dashboard expects unknown id A1",
        "fixtures/README.md: clean-dashboard forbids unknown id A1",
    ]


def test_check_fixture_ids_reports_a_malformed_id_without_skipping_the_row():
    table = FIXTURE_TABLE.replace(
        "| `slop-dashboard` | expect | A1, A3, F2 |",
        "| `slop-dashboard` | expect | A1, X7, F9 |",
    )
    errors = validate.check_fixture_ids(table, {"A1", "A3"})
    assert errors == [
        "fixtures/README.md: slop-dashboard expects malformed id X7",
        "fixtures/README.md: slop-dashboard expects unknown id F9",
    ]


def test_check_fixture_ids_reports_a_lowercase_id():
    table = FIXTURE_TABLE.replace("A1, A3, F2", "A1, A3, f2")
    errors = validate.check_fixture_ids(table, {"A1", "A3", "F2"})
    assert errors == ["fixtures/README.md: slop-dashboard expects malformed id f2"]


def test_check_fixture_ids_reports_an_empty_table():
    errors = validate.check_fixture_ids("# Fixtures\n\nnone yet\n", {"A1"})
    assert errors == ["fixtures/README.md: no expectation rows found"]


CRAFT_TELL = """# Craft

### C3 — Numbers that jump

**Signal**  A value that changes in place with no `tabular-nums`.

**Principle**  Proportional digits reflow the layout on every tick.

**Fix**  Apply `font-variant-numeric: tabular-nums` where the value changes.

**Not slop when**  No number updates in place, or the project already applies it.
"""


def test_collect_tells_accepts_the_craft_prefix():
    tells = validate.collect_tells(CRAFT_TELL)
    assert list(tells) == ["C3"]
    assert tells["C3"]["title"] == "Numbers that jump"


def test_check_tells_accepts_a_complete_craft_tell():
    assert validate.check_tells(CRAFT_TELL, "references/craft.md") == []


def test_check_duplicate_tell_ids_catches_a_repeated_craft_id():
    text = CRAFT_TELL + "\n### C3 — Numbers that jump again\n\n**Signal**  x\n"
    errors = validate.check_duplicate_tell_ids(text, "references/craft.md")
    assert errors == ["references/craft.md: C3 is defined more than once"]


def test_check_fixture_ids_accepts_a_craft_id():
    table = (
        "| Fixture | Kind | IDs |\n"
        "|---|---|---|\n"
        "| `slop-dashboard` | expect | A1, C3 |\n"
    )
    assert validate.check_fixture_ids(table, {"A1", "C3"}) == []


def test_check_fixture_ids_still_rejects_an_out_of_alphabet_id():
    table = (
        "| Fixture | Kind | IDs |\n"
        "|---|---|---|\n"
        "| `slop-dashboard` | expect | A1, X7 |\n"
    )
    errors = validate.check_fixture_ids(table, {"A1"})
    assert errors == [
        "fixtures/README.md: slop-dashboard expects malformed id X7"
    ]


COVERAGE_TABLE = (
    "| Fixture | Kind | IDs |\n"
    "|---|---|---|\n"
    "| `slop-dashboard` | expect | A1, C3 |\n"
    "| `clean-dashboard` | forbid | A1 |\n"
)


def test_report_coverage_counts_ids_with_no_row_and_no_forbid():
    lines = validate.report_coverage(COVERAGE_TABLE, {"A1", "C3", "W2"})
    joined = "\n".join(lines)
    assert "1 of 3 appear in no row: W2" in joined
    assert "2 of 3 have no forbid row: C3, W2" in joined


def test_report_coverage_is_silent_when_every_id_is_forbidden_somewhere():
    table = (
        "| Fixture | Kind | IDs |\n"
        "|---|---|---|\n"
        "| `clean-dashboard` | forbid | A1, C3 |\n"
    )
    assert validate.report_coverage(table, {"A1", "C3"}) == []


def test_report_coverage_sorts_ids_by_number_not_lexicographically():
    table = (
        "| Fixture | Kind | IDs |\n"
        "|---|---|---|\n"
        "| `slop-dashboard` | expect | A1 |\n"
    )
    lines = validate.report_coverage(table, {"C1", "C2", "C10"})
    joined = "\n".join(lines)
    assert "C1, C2, C10" in joined
    assert "C1, C10, C2" not in joined


def _write_plugin_tree(root):
    """Build the smallest tree main() accepts: every skill the registry names.

    The auditor carries a catalog; the build skill carries prose. main() has to
    accept both shapes, so the fixture has to hold both.
    """
    skill = root / "skills" / "audit"
    (skill / "references").mkdir(parents=True)
    (skill / "SKILL.md").write_text(
        GOOD_FRONTMATTER + "\nReferences to load: `finish.md`\n", encoding="utf-8"
    )
    (skill / "references" / "finish.md").write_text(GOOD_TELL, encoding="utf-8")
    build = root / "skills" / "build"
    (build / "references").mkdir(parents=True)
    (build / "SKILL.md").write_text(
        BUILD_FRONTMATTER + "\nReference: `deriving.md`\n", encoding="utf-8"
    )
    (build / "references" / "deriving.md").write_text(
        "# Deriving\n\nProse, not a catalog. No tell headings here.\n",
        encoding="utf-8",
    )
    (root / "fixtures").mkdir()
    (root / "fixtures" / "README.md").write_text(
        "| `slop-landing` | expect | F1 |\n", encoding="utf-8"
    )


def test_main_accepts_the_plugin_layout(tmp_path, capsys):
    _write_plugin_tree(tmp_path)
    assert validate.main(tmp_path) == 0
    assert "0 problem(s)" in capsys.readouterr().out


def test_main_does_not_read_a_skill_left_at_the_repo_root(tmp_path, capsys):
    """A SKILL.md at the root is not the auditor once the plugin layout lands."""
    (tmp_path / "references").mkdir()
    (tmp_path / "references" / "finish.md").write_text(GOOD_TELL, encoding="utf-8")
    (tmp_path / "SKILL.md").write_text(
        GOOD_FRONTMATTER + "\nReferences to load: `finish.md`\n", encoding="utf-8"
    )
    assert validate.main(tmp_path) == 1
    assert "not found" in capsys.readouterr().out


BUILD_FRONTMATTER = """---
name: build
description: |
  Decide a product's visual identity and voice before building its interface.
  Use when an interface reads as generic and its palette needs deciding.
license: MIT
---

# build
"""


STATE_TELL = """# States

### S1 — A fetch with nothing behind it

**Signal**  A request whose failure branch does not exist.

**Principle**  The path that is not the demo is still a path a person reaches.

**Fix**  Give the failure a state and say what to do next.

**Not slop when**  nothing in the tree fetches.
"""


def test_collect_tells_accepts_the_state_prefix():
    tells = validate.collect_tells(STATE_TELL)
    assert list(tells) == ["S1"]
    assert tells["S1"]["title"] == "A fetch with nothing behind it"


def test_check_tells_accepts_a_complete_state_tell():
    assert validate.check_tells(STATE_TELL, "references/states.md") == []


def test_check_fixture_ids_accepts_a_state_id():
    table = (
        "| Fixture | Kind | IDs |\n"
        "|---|---|---|\n"
        "| `slop-dashboard` | expect | S1 |\n"
    )
    assert validate.check_fixture_ids(table, {"S1"}) == []


def test_check_fixture_ids_still_rejects_an_id_outside_the_alphabet():
    table = (
        "| Fixture | Kind | IDs |\n"
        "|---|---|---|\n"
        "| `slop-dashboard` | expect | X1 |\n"
    )
    errors = validate.check_fixture_ids(table, {"S1"})
    assert errors == ["fixtures/README.md: slop-dashboard expects malformed id X1"]


def test_report_coverage_sorts_state_ids_by_number():
    table = (
        "| Fixture | Kind | IDs |\n"
        "|---|---|---|\n"
        "| `slop-dashboard` | expect | S1 |\n"
    )
    lines = validate.report_coverage(table, {"S1", "S2", "S10"})
    assert "S2, S10" in "\n".join(lines)


def test_check_frontmatter_accepts_a_second_skill_by_its_own_name():
    errors = validate.check_frontmatter(
        BUILD_FRONTMATTER, "build", ("identity", "generic", "deciding")
    )
    assert errors == []


def test_check_frontmatter_reports_a_name_that_is_not_the_expected_one():
    errors = validate.check_frontmatter(
        BUILD_FRONTMATTER, "audit", validate.DESCRIPTION_TRIGGERS
    )
    assert any("build" in e for e in errors)


def test_check_frontmatter_labels_the_skill_it_is_reporting_on():
    text = BUILD_FRONTMATTER.replace("license: MIT\n", "")
    errors = validate.check_frontmatter(
        text,
        "build",
        ("identity", "generic", "deciding"),
        "skills/build/SKILL.md",
    )
    assert errors == [
        "skills/build/SKILL.md: frontmatter is missing 'license'"
    ]


def test_main_validates_a_second_skill_that_carries_no_catalog(tmp_path, capsys):
    """deriving.md holds no tells, and that is not a defect for this skill."""
    _write_plugin_tree(tmp_path)
    assert validate.main(tmp_path) == 0
    out = capsys.readouterr().out
    assert "no tells found" not in out


def test_main_checks_the_second_skill_frontmatter(tmp_path, capsys):
    """The control above passes vacuously until main() actually reads it."""
    _write_plugin_tree(tmp_path)
    (tmp_path / "skills" / "build" / "SKILL.md").write_text(
        BUILD_FRONTMATTER.replace("license: MIT\n", "")
        + "\nReference: `deriving.md`\n",
        encoding="utf-8",
    )
    assert validate.main(tmp_path) == 1
    assert "license" in capsys.readouterr().out


def test_main_reports_a_reference_the_second_skill_never_cites(tmp_path, capsys):
    _write_plugin_tree(tmp_path)
    build = tmp_path / "skills" / "build" / "references"
    (build / "orphan.md").write_text("# Orphan\n", encoding="utf-8")
    assert validate.main(tmp_path) == 1
    assert "orphan.md" in capsys.readouterr().out
