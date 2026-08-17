# Round 1, the plugin shell — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the repository into a plugin that exposes skills under `skills/`, with the auditor moved inside it and behaving exactly as it does today.

**Architecture:** The auditor's `SKILL.md` and its `references/` move together into `skills/anti-slop/`, keeping the skill directory self-contained so a bare filename in the invocation table still resolves beside the file that cites it. `scripts/validate.py` learns the new location in `main()`, the only function that touches the filesystem. No tell, no fixture and no report rule changes.

**Tech Stack:** Python 3 with `pytest` as the only dependency; Markdown for the catalog; Claude Code plugin manifests in `.claude-plugin/`.

**Spec:** `docs/specs/2026-08-17-anti-slop-plugin-design.md`

## What the three open questions turned out to be

The spec left three questions for this plan. All three are answered, empirically,
against the official `superpowers` plugin at version 6.3.0 installed on this
machine — a real plugin exposing fourteen skills.

1. **Several skills in one plugin live under `skills/<name>/SKILL.md`.** Verified
   by listing `superpowers/6.3.0/skills/`, which holds fourteen such directories,
   with `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` at the
   plugin root and `source: "./"` in the marketplace entry — the same two files
   this repository already has.
2. **A skill may cite files outside its own directory,** by relative path. Three
   official skills do it: `executing-plans/SKILL.md:14` cites
   `../using-superpowers/references/`, `writing-skills/SKILL.md:12` cites
   `../using-superpowers/references/codex-tools.md`, and
   `subagent-driven-development/SKILL.md:454` cites
   `../requesting-code-review/code-reviewer.md`. **This plan does not use that
   freedom.** Keeping `references/` inside the skill directory means `SKILL.md`
   needs no edit at all, which serves "the auditor unchanged" better than any
   argument about sharing. Rounds 2 and 4 can reach in with `../anti-slop/`
   when they need the catalog, which is the idiom the official plugin already
   uses.
3. **The documented clone install breaks, and is replaced rather than patched.**
   `git clone … ~/.claude/skills/anti-slop` works today only because `SKILL.md`
   sits at the repository root. A personal skill is one directory holding one
   `SKILL.md`, so a repository exposing three skills cannot be installed that
   way whatever the layout. Task 2 rewrites the section to lead with the plugin
   install and offers copying the single skill directory as the one-skill path —
   which works precisely because Task 1 keeps `references/` inside it.

## Global Constraints

- **Nothing in the catalog changes.** No tell is added, removed, renumbered or
  reworded. No fixture is edited. No report rule moves.
- **The moved files are byte-identical.** `SKILL.md` and every file under
  `references/` must hash the same before and after the move, except for the
  single frontmatter version bump in Task 2.
- **`python scripts/validate.py` prints `0 problem(s)`** and the two coverage
  lines, unchanged: `11 of 41 appear in no row` and `17 of 41 have no forbid row`.
- **`python -m pytest tests/` passes**, at 32 tests before Task 1 and 34 after.
- **Only `main()` touches the filesystem.** The module docstring in
  `scripts/validate.py:1-5` states this and it stays true; every other function
  takes text and returns a list of error strings.
- **`pytest` stays the only dependency.**
- Commit messages: lowercase conventional prefix, imperative, body explaining
  why. End with `Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>`.

## File Structure

| Path | Responsibility | Change |
|---|---|---|
| `skills/anti-slop/SKILL.md` | the audit procedure | moved from root, content untouched |
| `skills/anti-slop/references/*.md` | the 41-tell catalog | moved from root `references/`, untouched |
| `scripts/validate.py` | structural check | `main()` learns the new paths |
| `tests/test_validate.py` | validator's tests | two tests added for `main()` |
| `fixtures/` | calibration specimens | untouched, stays at repo root |
| `calibration/`, `docs/`, `BACKLOG.md` | records | untouched |
| `README.md` | install and layout | install section rewritten, tree diagram updated |
| `.claude-plugin/plugin.json` | plugin manifest | version bumped |

`fixtures/`, `scripts/`, `tests/`, `calibration/` and `docs/` stay at the
repository root. That matches the reference implementation, which keeps `tests/`,
`scripts/` and `docs/` at the plugin root alongside `skills/`.

---

### Task 1: Move the auditor into the plugin's skills directory

**Files:**
- Create: `skills/anti-slop/SKILL.md` (git mv from `SKILL.md`)
- Create: `skills/anti-slop/references/` (git mv from `references/`)
- Modify: `scripts/validate.py:223-232` (`main()`)
- Test: `tests/test_validate.py` (append two tests)

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces: `validate.main(root)` resolves the skill at
  `root/"skills"/"anti-slop"/"SKILL.md"` and its catalog at
  `root/"skills"/"anti-slop"/"references"`. Task 2 and Task 3 rely on those
  paths. Signature and return values are unchanged: `main(root: Path) -> int`,
  `0` when clean and `1` when anything is missing or any check reports an error.

- [ ] **Step 1: Write the two failing tests**

Append to `tests/test_validate.py`. `GOOD_FRONTMATTER` and `GOOD_TELL` already
exist at the top of that file; reuse them rather than writing new fixtures.

```python
def _write_plugin_tree(root):
    """Build the smallest tree main() accepts, in the plugin layout."""
    skill = root / "skills" / "anti-slop"
    (skill / "references").mkdir(parents=True)
    (skill / "SKILL.md").write_text(
        GOOD_FRONTMATTER + "\nReferences to load: `finish.md`\n", encoding="utf-8"
    )
    (skill / "references" / "finish.md").write_text(GOOD_TELL, encoding="utf-8")
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
```

- [ ] **Step 2: Run them and confirm both fail for the right reason**

Run: `python -m pytest tests/test_validate.py -k "plugin_layout or repo_root" -v`

Expected: both FAIL. The first fails because `main()` looks for `SKILL.md` at the
root, finds nothing, and returns `1`. The second fails because `main()` accepts
the root layout today and returns `0`. If either passes at this point, the test
is not measuring the move — stop and fix the test before touching `main()`.

- [ ] **Step 3: Move the files with git, preserving history**

```bash
mkdir -p skills/anti-slop
git mv SKILL.md skills/anti-slop/SKILL.md
git mv references skills/anti-slop/references
```

- [ ] **Step 4: Point `main()` at the new location**

In `scripts/validate.py`, replace the first block of `main()`:

```python
def main(root):
    skill = root / "skills" / "anti-slop" / "SKILL.md"
    references = skill.parent / "references"
    absent = [
        "{}: not found under {}. Run this from the plugin's checkout.".format(
            label, root
        )
        for label, path in (
            ("skills/anti-slop/SKILL.md", skill),
            ("skills/anti-slop/references/", references),
        )
        if not path.exists()
    ]
```

Everything after that block is unchanged: `skill.read_text`,
`references.glob("*.md")`, the `molds.md` skip, and
`fixture_readme = root / "fixtures" / "README.md"` all keep working, because
`references` is now derived from `skill.parent` and `fixtures/` did not move.

Leave the message strings inside `check_references()` alone. They read
`references/{}` and are cosmetic labels, and existing tests assert them
verbatim.

- [ ] **Step 5: Run the full suite and the validator**

Run: `python -m pytest -q` — Expected: `34 passed`.

Run: `python scripts/validate.py` — Expected, exactly:

```
coverage: 11 of 41 appear in no row: A9, C2, C6, F6, F7, F8, F9, F10, W2, W4, W5
coverage: 17 of 41 have no forbid row: A8, A9, C2, C6, F5, F6, F7, F8, F9, F10, F11, F12, W2, W4, W5, W6, W7
0 problem(s)
```

- [ ] **Step 6: Prove the moved files are byte-identical**

```bash
git show HEAD:SKILL.md | sha256sum
sha256sum skills/anti-slop/SKILL.md
for f in surface craft words finish molds; do
  git show "HEAD:references/$f.md" | sha256sum
  sha256sum "skills/anti-slop/references/$f.md"
done
```

Expected: each pair matches. A mismatch means the move edited content, which
this round forbids. Investigate before continuing.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -F - <<'EOF'
refactor: move the auditor into the plugin's skills directory

A plugin exposes its skills at skills/<name>/SKILL.md, verified against the
official superpowers plugin, which holds fourteen of them. The auditor moves
there so the repository can carry the build and launch skills the design
calls for without three SKILL.md files fighting over one root.

references/ moves with it rather than staying shared at the root. The
invocation table cites bare filenames, so a catalog beside the file that
cites it needs no edit to SKILL.md at all — and a self-contained skill
directory is also what makes installing the auditor alone still possible.

main() is the only function that touches the filesystem, so it is the only
one that changed. The catalog, the fixtures and the report rules are
untouched, and the moved files hash identically.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
EOF
```

---

### Task 2: Make the package tell the truth about itself

**Files:**
- Modify: `README.md` (the `## Install` section and the layout tree under `## How it works`)
- Modify: `.claude-plugin/plugin.json:3` (version)
- Modify: `skills/anti-slop/SKILL.md:10` (frontmatter `metadata.version`)

**Interfaces:**
- Consumes: the paths Task 1 produced.
- Produces: nothing later tasks read programmatically. Task 3 verifies the
  version strings agree.

- [ ] **Step 1: Replace the Install section**

The current section tells the reader to clone into `~/.claude/skills/anti-slop`,
which stops working the moment `SKILL.md` leaves the root. Replace the whole
section body between `## Install` and `## Use` with:

````markdown
Install it as a plugin. From within Claude Code, point a plugin marketplace at
your checkout and install from it:

```
git clone https://github.com/luantaraschi/anti-slop
/plugin marketplace add ./anti-slop
/plugin install anti-slop@anti-slop
```

To install the auditor on its own, without the plugin, copy the one skill
directory where Claude Code looks for personal skills. Its catalog travels
inside it:

```
cp -r anti-slop/skills/anti-slop ~/.claude/skills/anti-slop
```
````

- [ ] **Step 2: Update the layout tree**

In `## How it works`, the diagram maps the repository and no longer matches it.
Replace the block between the opening and closing fences with:

```
skills/anti-slop/ ... the auditor, catalog included
   SKILL.md ......... the procedure: how to rank, what to load, how to report
   |
   +-- references/surface.md  A1-A10   the palette, radius, shadows, type
   +-- references/craft.md    C1-C12   the rendered result
   +-- references/words.md    W1-W7    the copy
   +-- references/finish.md   F1-F12   lang, title, meta, keys
   +-- references/molds.md             recurring shapes across tells
   |
fixtures/ ........... four calibration specimens, two clean, two slop
calibration/ ........ the blind audit reports, as the runs produced them
scripts/validate.py . structural check over the catalog itself
BACKLOG.md .......... what the last round left open, and what gates it
```

- [ ] **Step 3: Bump the version in both places**

The package changed shape and the install instructions changed with it, which is
user-visible even though no tell moved.

In `.claude-plugin/plugin.json`, `"version": "0.2.0"` becomes `"version": "0.3.0"`.

In `skills/anti-slop/SKILL.md`, the frontmatter `version: "0.2.0"` becomes
`version: "0.3.0"`. This is the single permitted departure from Task 1's
byte-identity constraint.

Leave `.claude-plugin/marketplace.json` alone. It carries no version field for
this plugin today, and adding one creates a second place to drift.

- [ ] **Step 4: Check every path the README now claims**

```bash
python - <<'PY'
import pathlib, re
readme = pathlib.Path("README.md").read_text(encoding="utf-8")
for path in sorted(set(re.findall(r"`([\w./-]+\.(?:md|py|json|ts|tsx|svg))`", readme))):
    p = pathlib.Path(path)
    print(("OK   " if p.exists() else "MISS "), path)
PY
```

Expected: every path under `skills/`, `fixtures/`, `scripts/` and the root
resolves. Citations inside the example-output block point at fixture files as
they stood at v1 and are documented as stale in the paragraph beneath it — those
may report `MISS` and are not a defect. Anything else missing is.

- [ ] **Step 5: Run the suite and the validator**

Run: `python -m pytest -q` — Expected: `34 passed`.
Run: `python scripts/validate.py` — Expected: `0 problem(s)` and the two
coverage lines unchanged.

- [ ] **Step 6: Commit**

```bash
git add README.md .claude-plugin/plugin.json skills/anti-slop/SKILL.md
git commit -F - <<'EOF'
docs: install the plugin, not the skill directory

The documented install cloned the repository into ~/.claude/skills/anti-slop,
which worked only while SKILL.md sat at the root. A personal skill is one
directory holding one SKILL.md, so a repository exposing three of them cannot
be installed that way whatever the layout.

The section now leads with the marketplace install and keeps a one-skill path
for people who want the auditor alone — which works because the catalog moved
inside the skill directory rather than staying shared at the root.

The layout diagram claimed a tree the repository no longer has, and now names
calibration/ and BACKLOG.md as well. Version 0.3.0 in the manifest and the
frontmatter: no tell changed, but the package changed shape.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
EOF
```

---

### Task 3: Close the round

**Files:**
- Modify: `docs/specs/2026-08-17-anti-slop-plugin-design.md` (the
  `## Open questions the plan must answer` section)
- Modify: `BACKLOG.md` (a line recording the round)

**Interfaces:**
- Consumes: the answers recorded at the top of this plan and the layout Task 1
  produced.
- Produces: nothing. This task ends the round.

- [ ] **Step 1: Verify the plugin's shape against the reference implementation**

The plugin cannot be installed from a non-interactive shell, so verify what can
be verified: that both manifests parse, that the skill sits where the reference
implementation puts its skills, and that its frontmatter is well formed.

```bash
python - <<'PY'
import json, pathlib, re, sys

problems = []
for name in ("plugin.json", "marketplace.json"):
    path = pathlib.Path(".claude-plugin") / name
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        problems.append("{}: {}".format(name, exc))
        continue
    print(name, "parses")
    if name == "plugin.json":
        for key in ("name", "version", "description"):
            if key not in data:
                problems.append("plugin.json: missing {}".format(key))
        print("  version", data.get("version"))
    else:
        for entry in data.get("plugins", []):
            source = pathlib.Path(entry.get("source", ""))
            print("  plugin", entry.get("name"), "source", entry.get("source"))
            if not source.exists():
                problems.append("marketplace.json: source does not exist")

skills = sorted(p.parent.name for p in pathlib.Path("skills").glob("*/SKILL.md"))
print("skills:", skills)
if skills != ["anti-slop"]:
    problems.append("expected exactly the anti-slop skill, found {}".format(skills))

text = pathlib.Path("skills/anti-slop/SKILL.md").read_text(encoding="utf-8")
if not text.startswith("---\n"):
    problems.append("SKILL.md: frontmatter does not open the file")
if not re.search(r'^\s*version:\s*"0\.3\.0"', text, re.M):
    problems.append("SKILL.md: frontmatter version is not 0.3.0")

for problem in problems:
    print("PROBLEM:", problem)
print("{} problem(s)".format(len(problems)))
sys.exit(1 if problems else 0)
PY
```

Expected: `0 problem(s)`. Both manifests parse, `skills:` reports exactly
`['anti-slop']`, and the version reads `0.3.0` in both files.

- [ ] **Step 2: Close the spec's open questions**

The spec listed three open questions "the plan must answer". Two are answered
and one is deferred. Replace that section's numbered list with the answers,
keeping the `llms.txt` item open and saying which round owns it:

```markdown
## Open questions

1. **Plugin layout — answered, Round 1.** Skills live at
   `skills/<name>/SKILL.md`, and a skill may cite files outside its own
   directory by relative path. Both verified against the official
   `superpowers` plugin at 6.3.0. `references/` moved inside
   `skills/anti-slop/` anyway, which left `SKILL.md` needing no edit and kept
   the skill directory self-contained.
2. **The documented install — answered, Round 1.** It could not be preserved:
   a personal skill is one directory holding one `SKILL.md`. The README now
   leads with the marketplace install and keeps a one-skill copy path.
3. **`llms.txt` — still open, owned by Round 4.** The refusal rests on "a 2024
   convention that never became a standard", written a round ago and never
   rechecked. Verify before launch touches the subject.
```

- [ ] **Step 3: Record the round in the backlog**

`BACKLOG.md` describes what gates the work and groups it by round. Add, under
`## What gates all of it`, a line stating that the shell is done and what it did
not spend:

```markdown
Round 1 of the plugin design shipped the shell on 2026-08-17: the auditor moved
to `skills/anti-slop/` with its catalog, and nothing below moved. It spent no
blind run, which is the point — a restructure that changes no tell needs no
measurement.
```

- [ ] **Step 4: Run everything one last time**

```bash
python -m pytest -q
python scripts/validate.py
git status --short
```

Expected: `34 passed`, `0 problem(s)` with the two unchanged coverage lines, and
a clean tree once Step 5 commits.

- [ ] **Step 5: Commit**

```bash
git add docs/specs BACKLOG.md
git commit -F - <<'EOF'
docs: close Round 1's open questions with what the layout turned out to be

Two of the spec's three open questions are answered against a real plugin
rather than against documentation: skills live at skills/<name>/SKILL.md, and
a skill may cite files outside its own directory. The third, llms.txt's
standing, belongs to the round that builds launch and stays open with an
owner.

The backlog records that this round spent no blind run. A restructure that
changes no tell needs no measurement, and the run it did not spend is still
available to the round that carries the catalog repairs.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
EOF
```

---

## Definition of done

- `skills/anti-slop/SKILL.md` and `skills/anti-slop/references/` exist and hash
  identically to their previous location, apart from the frontmatter version.
- `python -m pytest -q` reports `34 passed`.
- `python scripts/validate.py` reports `0 problem(s)` with the two coverage
  lines unchanged from before the round.
- Both manifests parse and name version `0.3.0`.
- `README.md` documents an install that works against the layout that exists.
- The spec's open questions carry answers or an owner.
- No tell, fixture, or report rule changed.
