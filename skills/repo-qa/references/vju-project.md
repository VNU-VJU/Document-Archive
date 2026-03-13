# Document Archive Reference For Repo QA

Use this reference only when the task is for this repository.

## Repository Facts
- Public documents live in `data/`.
- Confidential documents live in `confidential/`.
- The default report path is `docs/qa_report_master.md`.
- The default status path is `tmp/qa_status.json`.
- Existing policy and QA rules live in `docs/QA_CHECKLIST.md` and `docs/document_repository_policy.md`.
- Runtime child skills live in:
  - `skills/repo-qa/children/codex-qa/SKILL.md`
  - `skills/repo-qa/children/gemini-qa/SKILL.md`
- Generated issuer child skills live under `skills/repo-qa/children/`.
- The current generated issuer child is `skills/repo-qa/children/issuer-vju/SKILL.md`.
- `docs/qa_report_master.md` and `Tasks.md` are long-running operational history files and must be updated append-only.
- This repository forbids AI co-author trailers in commit messages.
- `.gitignore` currently excludes `tmp/`, but `tmp/qa_status.json` is already a tracked repository file and must be kept in sync.

## Existing Scripts
- Disclaimer detection helper: `scripts/check_disclaimer_issuer_link.js`
- Search index builder: `scripts/build-search-index.js`

If additional commands are needed for first-gate checks or confidential deployment, discover them in the repo and write the resolved commands into the run configuration before starting batch execution.

## Current Document Conventions
- File naming follows `{Document_ID}_{English_Title}_source.pdf` and `{Document_ID}_{English_Title}_transcription[_lang].md`.
- Translation suffixes are `_en.md` and `_ja.md`.
- Repository-facing file names, folder names, branch names, and commit messages must be written in English.

## Report Template
If `docs/qa_report_master.md` is missing, initialize it from:
- `docs/qa_report_master.template.md`

If `tmp/qa_status.json` is missing, initialize it from:
- `docs/qa_status.example.json`

## Checklist Usage
Read only the sections needed for the current work. In most cases:

- For metadata and disclaimer checks, load sections `1.1`, `1.2`, `2`, and `3`.
- For translation QA, load section `4`.
- For browser/rendering QA, load section `5`.
- For regression checks on new documents, load section `8`.

## Work Window Defaults
- Default `BATCH_COUNT=1`
- Default `BATCH_SIZE=30`
- A count-based pause boundary, if used, must be 30 rather than 3 or 12.
- For full-repository runs, processing 30 items is not a stop reason by itself.

## Priority Order
Within the selected target root, use this order:

1. Required safe renames
2. Documents issued within the last 3 months
3. Gemini-required unfinished work
4. Remaining QA work
5. If everything is already quality-checked, re-process the 30 oldest checks

## Completion Semantics
Use:

- `complete` when all required gates passed and report/status updates are written
- `partial` when useful progress exists but some checks remain open
- `blocked` when safe continuation is not possible

## Issuer Child Generation Rule
- Create `document-type × issuer` child skills only when that exact combination has at least 5 source documents.
- If no `document-type × issuer` combination reaches the threshold, fall back to issuer-only generation.
- Create issuer-only child skills only for issuers with at least 5 source documents.
- If the qualifying count is 0, do not create speculative children. Report that 0 is the current correct result.
- Current repository result:
  - qualifying `issuer × type` children: 0
  - qualifying issuer-only children: 1 (`issuer-vju`)

## Failure Modes To Avoid
- Rewriting `docs/qa_report_master.md` into a short one-run summary
- Rewriting `Tasks.md` into a short one-run summary
- Claiming progress without updating `tmp/qa_status.json`
- Claiming that `tmp/qa_status.json` is local-only when the tracked diff actually updates it
- Increasing heading counts by splitting one heading into multiple headings
- Breaking layout fidelity by flattening official two-column headers into Markdown headings
- Filling large missing translated sections by inference alone and reporting them as complete
