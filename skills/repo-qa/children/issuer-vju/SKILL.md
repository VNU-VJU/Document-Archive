---
name: issuer-vju
description: Issuer-specific QA guidance for documents issued by Trường Đại học Việt Nhật / VNU – Vietnam-Japan University when the repository threshold is met.
---

# Issuer VJU

Load this child skill from `repo-qa` for documents issued by:

- `Trường Đại học Việt Nhật`
- `VNU – Vietnam-Japan University`

## Why This Child Exists
This issuer reached the repository threshold for an issuer-specific child skill.

## Current Qualifying VI Sets
- `323/QĐ-ĐHVN`
- `826/VJU-KT&ĐBCL`
- `911/TB-ĐHVN`
- `984/TB-ĐHVN`
- `WEB-TTTS2026-VJU`

## Issuer-Specific Review Focus
1. Disclaimer text must name Vietnam Japan University / Trường Đại học Việt Nhật consistently in the file language.
2. Older VJU notices may have incomplete front matter such as missing `date` or `issue_date`; do not mark them fixed with fake values such as `null`.
3. Public-report and admissions files may use VJU-specific `doc_id` patterns (`.../ĐHVN`, `VJU-...`, `WEB-...`); preserve the real official identifier instead of forcing a different naming convention.
4. Website-origin documents such as `WEB-...` still require the same disclaimer, source note, and readability checks as PDF-origin files.
5. Do not mutate document meaning just to satisfy a validator. If a VJU document is a plan, report, notification, or decision, preserve that semantic type and fix the validator or report flow instead.
