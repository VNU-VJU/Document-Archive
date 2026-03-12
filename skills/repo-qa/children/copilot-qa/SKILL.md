---
name: copilot-qa
description: GitHub Copilot handoff pattern for large repo-qa batches in the VJU Project repository.
---

# Copilot QA

Use this child skill only from `repo-qa` when the active runtime is GitHub Copilot.

## Purpose
- Offload heavy batch QA work to GitHub Copilot when that runtime is available.
- Keep the parent `repo-qa` rules, priorities, and reporting contract unchanged.
- Avoid blocking the batch when Gemini is unavailable.

## Handoff Rules
1. Inherit the current `repo-qa` run configuration, priority order, and stop conditions.
2. Package one clear batch request to Copilot instead of many small follow-up prompts whenever possible.
3. Ask Copilot to preserve the repository contracts:
   - update `docs/qa_report_master.md`
   - update `tmp/qa_status.json`
   - keep `last_updated` out of transcription front matter
   - fix safe issues before reporting
4. Ask Copilot to report fixable findings and any remaining blockers separately.
5. If Gemini-dependent steps cannot run in Copilot, instruct Copilot to continue with all other safe work and leave the Gemini-gated step recorded as pending or blocked.

## Recommended Copilot Prompt Shape
Include:

1. Target root and batch size
2. Current priority bucket
3. The exact file/status/report contracts
4. The required fix-before-report rule
5. A rule to continue non-Gemini work if Gemini is unavailable
6. A request for one summarized outcome covering:
   - processed `doc_id`s
   - fixes applied
   - checks run
   - remaining Gemini-gated items

## Do Not
- Do not split one logical batch into many tiny Copilot prompts unless the first response proves it is necessary.
- Do not let Copilot treat Gemini unavailability as a reason to halt unrelated work.
- Do not weaken `repo-qa` completion semantics.
