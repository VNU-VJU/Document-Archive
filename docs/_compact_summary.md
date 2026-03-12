# Compact Summary — Common QA Orchestrator Skill Setup (2026-03-11)
## Status: Completed

## Decisions (確定事項)
- QA orchestration instruction was rewritten to be provider-agnostic.
- Repo skill was split into common logic and VJU-specific reference data.
- `docs/qa_report_master.template.md` and `docs/qa_status.example.json` are the committed templates.
- The repository skill now lives in `skills/repo-qa/`.
- Sync to Gemini, Codex, and Claude internal skill directories has been verified.

## Pending Tasks (優先度順)
- [P1] Resolve the concrete runtime commands for first-gate checks, script checks, and confidential deployment.
- [P1] Execute one real QA batch with the new skill.
- [P2] Decide whether to upstream this skill into a broader shared skill catalog.

## Key Files & Commands
- `skills/repo-qa/SKILL.md`
- `skills/repo-qa/references/vju-project.md`
- `docs/qa_report_master.template.md`
- `docs/qa_status.example.json`
- `rsync -av --delete --exclude '.DS_Store' "$HOME/AI Rules/Skills/" "$HOME/.codex/skills/"`

## Open Questions / Blockers
- Exact repo commands for first-gate QA and confidential deployment are still undefined.
