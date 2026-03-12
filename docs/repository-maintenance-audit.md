# Repository Maintenance Audit

## Scope
This note records the current repository cleanup decisions for naming, responsibilities, skill candidates, hard-coded paths, and quality checks.

## Applied Changes
- Removed six stray root-level generated files with no repository references:
  - `International`
  - `Student`
  - `on`
  - `Management_transcription.md.heads`
  - `Management_transcription_en.md.heads`
  - `Management_transcription_ja.md.heads`
- Made `scripts/normalize_filenames.js` repository-relative and added `--dry-run`.
- Made `scripts/analyze_pdf_images.py` accept a PDF path as a CLI argument instead of using a hard-coded external file.
- Reduced repository-path hard-coding inside `skills/repo-qa/`.

## Responsibility Review
- `scripts/normalize_filenames.js`
  - Responsibility: rename known legacy document IDs and update direct references.
  - Status: kept, but now safe to inspect with `--dry-run`.
- `scripts/analyze_pdf_images.py`
  - Responsibility: inspect image positions and nearby text in an arbitrary PDF.
  - Status: kept as a reusable utility after removing hard-coded input.
- `skills/repo-qa/`
  - Responsibility: repository QA batch orchestration.
  - Status: kept as the main repo-specific skill.

## Skill Review
- Added: `skills/repo-qa/`
- Consider later only if usage repeats enough:
  - a focused `filename-normalization` skill for bulk document renames
  - a `qa-report-maintenance` skill for report/state upkeep
- Current judgment: no additional repo-specific skill is justified yet.

## Naming Review
- Repository-controlled file and folder names should remain English.
- Email content files, transcription files, and translation files remain exceptions by policy.
- Some legacy PDFs in `data/` still use old or non-English names. They were not mass-renamed in this pass because:
  - some have no confirmed English target title yet
  - some may still be source artifacts for future migration work
  - unsafe batch renames would risk breaking historical mapping

## Remaining Legacy PDF Buckets
- Legacy/unmigrated source PDFs without `_source.pdf`: 32 files
- Vietnamese transcription sets without a matching `_source.pdf`: 4 entries

These should be handled in a dedicated normalization pass with a reviewed mapping table.

## Hard-Coding Review
- Fixed:
  - absolute repository paths in `scripts/normalize_filenames.js`
  - absolute external PDF path in `scripts/analyze_pdf_images.py`
  - absolute repository paths in the repo skill reference
- Intentionally retained:
  - domain restrictions such as `@vju.ac.vn`
  - public site and source URLs in documentation and transcriptions
  - Firebase/browser CDN URLs in `index.html`

## Quality Check Plan
- Run the repository JavaScript test suite.
- Run the filename normalization script in dry-run mode.
- Run a syntax check for the updated Python script.

## Quality Check Results
- Browser test runner: passed `70/70`
- Disclaimer issuer-link check: `0` mismatches
- Filename normalization dry-run: command executed successfully with no active rename candidates from the current hard-coded mapping list
- Translation pair audit:
  - `30-2018-TT-BGDDT_Management of Foreign Students in Vietnam` is missing EN and JA translations

## Follow-Up
- Confirm the actual source PDF mapping for:
  - `30-2018-TT-BGDDT_Management of Foreign Students in Vietnam`
  - `840-DT-DHVN_Academic Calendar 2025-2026`
  - `1534-HD-DHVN_Annex Templates Layout Guide`
  - `1534-HD-DHVN_Thesis and Graduation Project Guidelines`
