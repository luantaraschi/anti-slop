"""Structural validation for the anti-slop skill.

Every check takes text and returns a list of error strings. An empty list
means the check passed. Only main() touches the filesystem.
"""

import re
import sys
from pathlib import Path

REQUIRED_KEYS = ("name", "description", "license")
DESCRIPTION_TRIGGERS = ("vibecoded", "AI-generated", "audit", "craft")

# Every skill the plugin exposes, with the words its description has to keep to
# go on firing at the right moment, and whether its references are a catalog of
# tells or prose. The build skill's deriving.md is prose: asking it for tells
# would report a defect where there is none.
SKILLS = {
    "audit": {
        "triggers": DESCRIPTION_TRIGGERS,
        "catalog": True,
    },
    "build": {
        "triggers": ("identity", "generic", "deciding"),
        "catalog": False,
    },
}

_KEY = re.compile(r"^([A-Za-z_][\w-]*):\s*(.*)$")
_FOLD_INDICATORS = {"|", "|-", "|+", ">", ">-", ">+"}

FIELDS = ("**Signal**", "**Principle**", "**Fix**", "**Not slop when**")

FORBIDDEN_CONTENT_CHARACTERS = ("\u2014", "\u2013")
FORBIDDEN_DASH_SEPARATORS = (" - ", " -- ")
SITE_TEXT_SUFFIXES = {".css", ".html", ".js", ".json", ".md", ".svg", ".txt", ".xml"}

_TELL_HEADING = re.compile(r"^### ([AWFCS]\d+) — (.+)$")


def check_forbidden_content_character(text, source):
    """Reject dash punctuation in website copy and README files."""
    return [
        "{}:{}: dash punctuation is forbidden in site and README content".format(
            source, line_number
        )
        for line_number, line in enumerate(text.splitlines(), start=1)
        if any(character in line for character in FORBIDDEN_CONTENT_CHARACTERS)
        or any(separator in line for separator in FORBIDDEN_DASH_SEPARATORS)
        or line.endswith((" -", " --"))
    ]


def content_files(root):
    """Return the text files governed by the no-em-dash content rule."""
    paths = {
        path
        for path in root.rglob("README*")
        if path.is_file()
    }
    for published_directory in ("site", "specimen"):
        site = root / published_directory
        if site.exists():
            paths.update(
                path
                for path in site.rglob("*")
                if path.is_file() and path.suffix.lower() in SITE_TEXT_SUFFIXES
            )
    return sorted(paths, key=lambda path: path.as_posix())


def collect_tells(text):
    """Return every tell in the text, keyed by id, in document order."""
    tells = {}
    current = None
    for line in text.splitlines():
        heading = _TELL_HEADING.match(line)
        if heading:
            current = heading.group(1)
            tells[current] = {"title": heading.group(2).strip(), "body": []}
        elif current is not None:
            tells[current]["body"].append(line)
    for tell in tells.values():
        tell["body"] = "\n".join(tell["body"]).strip()
    return tells


def check_duplicate_tell_ids(text, source):
    """Report any tell id that appears on more than one heading in the text.

    collect_tells() keys by id, so a repeat overwrites its twin and the
    catalog loses a tell silently. This check reads the headings directly so
    that never passes unnoticed.
    """
    seen = set()
    errors = []
    for line in text.splitlines():
        heading = _TELL_HEADING.match(line)
        if not heading:
            continue
        tell_id = heading.group(1)
        if tell_id in seen:
            errors.append(
                "{}: {} is defined more than once".format(source, tell_id)
            )
        seen.add(tell_id)
    return errors


def check_tells(text, source):
    """Report every tell in the text that is missing one of the four fields.

    Containment is by substring, so the fields are accepted in any order and
    anywhere in the tell's body. This check does not police their sequence.
    """
    tells = collect_tells(text)
    if not tells:
        return ["{}: no tells found".format(source)]
    return [
        "{}: {} is missing {}".format(source, tell_id, field)
        for tell_id, tell in tells.items()
        for field in FIELDS
        if field not in tell["body"]
    ]


def parse_frontmatter(text):
    """Return the top-level frontmatter keys, or None if there is no header.

    Folded blocks (``description: |``) are joined into a single line, which is
    all the checks below need.
    """
    if not text.startswith("---\n"):
        return None
    end = text.find("\n---\n", 3)
    if end == -1:
        return None

    keys = {}
    current = None
    for line in text[4:end + 1].splitlines():
        match = _KEY.match(line)
        if match:
            current = match.group(1)
            value = match.group(2).strip()
            keys[current] = "" if value in _FOLD_INDICATORS else value
        elif current and line.strip():
            keys[current] = (keys[current] + " " + line.strip()).strip()
    return keys


def check_frontmatter(
    text, name="audit", triggers=DESCRIPTION_TRIGGERS, source="SKILL.md"
):
    """Check one skill's header against the name and triggers it must carry."""
    frontmatter = parse_frontmatter(text)
    if frontmatter is None:
        return ["{}: missing or malformed frontmatter".format(source)]

    errors = [
        "{}: frontmatter is missing '{}'".format(source, key)
        for key in REQUIRED_KEYS
        if key not in frontmatter
    ]

    declared = frontmatter.get("name")
    if declared is not None and declared != name:
        errors.append(
            "{}: name is '{}', expected '{}'".format(source, declared, name)
        )

    description = frontmatter.get("description", "").lower()
    absent = [t for t in triggers if t.lower() not in description]
    if absent:
        errors.append(
            "{}: description is missing triggers: ".format(source) + ", ".join(absent)
        )
    return errors


_REFERENCE = re.compile(r"`([\w-]+\.md)`")


def check_references(skill_text, available, source="SKILL.md"):
    """Cross-check the files a SKILL.md cites against the files beside it."""
    cited = {
        name
        for name in _REFERENCE.findall(skill_text)
        if name not in ("SKILL.md", "README.md")
    }
    errors = [
        "{}: cites references/{}, which does not exist".format(source, name)
        for name in sorted(cited - available)
    ]
    errors += [
        "{}: references/{} exists but it is never cited".format(source, name)
        for name in sorted(available - cited)
    ]
    return errors


_FIXTURE_ROW = re.compile(r"^\|\s*`([\w-]+)`\s*\|\s*(expect|forbid)s?\s*\|(.*)\|")
_TELL_ID = re.compile(r"^[AWFCS]\d+$")


def check_fixture_ids(text, known_ids):
    """Every id a fixture names must be well formed and exist in the catalog.

    The row itself is matched permissively and the ids are shaped inside the
    loop, so a typo is reported rather than dropping the whole row out of the
    scan and turning id-checking off in silence.
    """
    errors = []
    rows = 0
    for line in text.splitlines():
        row = _FIXTURE_ROW.match(line.strip())
        if not row:
            continue
        rows += 1
        fixture, kind, ids = row.group(1), row.group(2), row.group(3)
        for tell_id in (part.strip() for part in ids.split(",")):
            if not tell_id:
                continue
            if not _TELL_ID.match(tell_id):
                fault = "malformed"
            elif tell_id not in known_ids:
                fault = "unknown"
            else:
                continue
            errors.append(
                "fixtures/README.md: {} {}s {} id {}".format(
                    fixture, kind, fault, tell_id
                )
            )
    if rows == 0:
        errors.insert(0, "fixtures/README.md: no expectation rows found")
    return errors


def report_coverage(fixture_text, known_ids):
    """Say which catalog ids no fixture exercises. Informative, not an error.

    Closing the gap is not this function's job — printing the number every run
    is, so it stops being prose that ages.
    """
    in_a_row = set()
    forbidden = set()
    for line in fixture_text.splitlines():
        row = _FIXTURE_ROW.match(line.strip())
        if not row:
            continue
        kind, ids = row.group(2), row.group(3)
        named = {part.strip() for part in ids.split(",") if part.strip()}
        in_a_row |= named
        if kind == "forbid":
            forbidden |= named

    total = len(known_ids)
    no_row = sorted(known_ids - in_a_row, key=lambda i: (i[0], int(i[1:])))
    no_forbid = sorted(known_ids - forbidden, key=lambda i: (i[0], int(i[1:])))

    lines = []
    if no_row:
        lines.append(
            "coverage: {} of {} appear in no row: {}".format(
                len(no_row), total, ", ".join(no_row)
            )
        )
    if no_forbid:
        lines.append(
            "coverage: {} of {} have no forbid row: {}".format(
                len(no_forbid), total, ", ".join(no_forbid)
            )
        )
    return lines


def main(root):
    errors = []
    known = set()

    for content_file in content_files(root):
        source = content_file.relative_to(root).as_posix()
        errors += check_forbidden_content_character(
            content_file.read_text(encoding="utf-8"), source
        )

    for name in sorted(SKILLS):
        spec = SKILLS[name]
        skill = root / "skills" / name / "SKILL.md"
        references = skill.parent / "references"
        label = "skills/{}/SKILL.md".format(name)

        absent = [
            "skills/{}/{}: not found under {}. Run this from the plugin's "
            "checkout.".format(name, missing, root)
            for missing, path in (("SKILL.md", skill), ("references/", references))
            if not path.exists()
        ]
        if absent:
            errors += absent
            continue

        skill_text = skill.read_text(encoding="utf-8")
        reference_files = sorted(references.glob("*.md"))
        errors += check_frontmatter(skill_text, name, spec["triggers"], label)

        if spec["catalog"]:
            for reference in reference_files:
                if reference.name == "molds.md":
                    continue
                source = "skills/{}/references/{}".format(name, reference.name)
                text = reference.read_text(encoding="utf-8")
                known |= set(collect_tells(text))
                errors += check_tells(text, source)
                errors += check_duplicate_tell_ids(text, source)

        available = {p.name for p in reference_files}
        errors += check_references(skill_text, available, label)

    fixture_readme = root / "fixtures" / "README.md"
    coverage = []
    if fixture_readme.exists():
        fixture_text = fixture_readme.read_text(encoding="utf-8")
        errors += check_fixture_ids(fixture_text, known)
        coverage = report_coverage(fixture_text, known)
    for error in errors:
        print(error)
    for line in coverage:
        print(line)
    print("{} problem(s)".format(len(errors)))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main(Path(__file__).resolve().parent.parent))
