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
            keys[current] = match.group(2).strip()
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


def main(root):
    errors = check_frontmatter((root / "SKILL.md").read_text(encoding="utf-8"))
    for error in errors:
        print(error)
    print("{} problem(s)".format(len(errors)))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main(Path(__file__).resolve().parent.parent))
