"""Structural validation for the anti-slop skill.

Every check takes text and returns a list of error strings. An empty list
means the check passed. Only main() touches the filesystem.
"""

import re
import sys
from pathlib import Path

REQUIRED_KEYS = ("name", "description", "license")
DESCRIPTION_TRIGGERS = ("vibecoded", "AI-generated", "audit")

_KEY = re.compile(r"^([A-Za-z_][\w-]*):\s*(.*)$")
_FOLD_INDICATORS = {"|", "|-", "|+", ">", ">-", ">+"}

FIELDS = ("**Signal**", "**Principle**", "**Fix**", "**Not slop when**")

_TELL_HEADING = re.compile(r"^### ([AWF]\d+) — (.+)$")


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


def check_tells(text, source):
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


def check_frontmatter(text):
    frontmatter = parse_frontmatter(text)
    if frontmatter is None:
        return ["SKILL.md: missing or malformed frontmatter"]

    errors = [
        "SKILL.md: frontmatter is missing '{}'".format(key)
        for key in REQUIRED_KEYS
        if key not in frontmatter
    ]

    name = frontmatter.get("name")
    if name is not None and name != "anti-slop":
        errors.append("SKILL.md: name is '{}', expected 'anti-slop'".format(name))

    description = frontmatter.get("description", "").lower()
    absent = [t for t in DESCRIPTION_TRIGGERS if t.lower() not in description]
    if absent:
        errors.append(
            "SKILL.md: description is missing triggers: " + ", ".join(absent)
        )
    return errors


_REFERENCE = re.compile(r"`([\w-]+\.md)`")


def check_references(skill_text, available):
    """Cross-check the files SKILL.md cites against the files on disk."""
    cited = {
        name
        for name in _REFERENCE.findall(skill_text)
        if name not in ("SKILL.md", "README.md")
    }
    errors = [
        "SKILL.md: cites references/{}, which does not exist".format(name)
        for name in sorted(cited - available)
    ]
    errors += [
        "references/{} exists but SKILL.md never cites it".format(name)
        for name in sorted(available - cited)
    ]
    return errors


def main(root):
    errors = check_frontmatter((root / "SKILL.md").read_text(encoding="utf-8"))
    for reference in sorted((root / "references").glob("*.md")):
        if reference.name == "molds.md":
            continue
        source = "references/{}".format(reference.name)
        errors += check_tells(reference.read_text(encoding="utf-8"), source)
    available = {p.name for p in (root / "references").glob("*.md")}
    errors += check_references(
        (root / "SKILL.md").read_text(encoding="utf-8"), available
    )
    for error in errors:
        print(error)
    print("{} problem(s)".format(len(errors)))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main(Path(__file__).resolve().parent.parent))
