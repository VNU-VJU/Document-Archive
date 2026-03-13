---
name: copilot-qa
description: Deprecated compatibility wrapper for older repo-qa prompts. Prefer the runtime children `codex-qa` and `gemini-qa`.
---

# Copilot QA

This child skill remains only for backward compatibility with older prompts.

## Current Rule
- Do not use this as the primary runtime child for new repo-qa work.
- New runtime-specific behavior lives in:
  - `skills/repo-qa/children/codex-qa/SKILL.md`
  - `skills/repo-qa/children/gemini-qa/SKILL.md`

## Compatibility Behavior
- If an older prompt explicitly names this child, follow the parent `repo-qa` contract.
- Preserve append-only history in `docs/qa_report_master.md` and `Tasks.md`.
- Keep `tmp/qa_status.json` synchronized for touched `doc_id`s.
- Do not stop after a tiny sample.
- Do not add AI co-author trailers.
