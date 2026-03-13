---
name: codex-qa
description: Codex-runtime execution rules for repo-qa in the VJU document archive.
---

# Codex QA

Use this child skill only from `repo-qa` when the current runtime is Codex.

## Purpose
- Keep Codex runs disciplined and continuous.
- Prevent premature stopping after a small sample.
- Keep report claims tied to the final branch state.

## Codex Runtime Rules
1. Process the repository backlog continuously; do not stop after a small batch unless a real stop condition is reached.
2. Re-open `skills/repo-qa/SKILL.md` and the relevant checklist section roughly every 5 minutes or after a major workflow phase.
3. Base all completion claims on the final file state and final diff, not on intent or intermediate tool output.
4. If one step is blocked by missing capability, continue all other safe repository work.
5. Keep report/status updates aligned with the real file changes.

## Codex Review Focus
- append-only history in `docs/qa_report_master.md`
- append-only history in `Tasks.md`
- synchronized `tmp/qa_status.json`
- no `last_updated` in transcription front matter
- no claim-vs-diff mismatch
- no heading inflation by splitting one logical heading into several
- no layout regression in official headers, title blocks, signatures, appendices, or forms

## Codex PR Rule
- PR title/body must be in English.
- User-facing summary must be in Japanese.
- Do not add `Co-authored-by`.
- Create a PR when requested, but do not merge unless separately asked.
