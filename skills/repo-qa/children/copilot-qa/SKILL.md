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
   - append to `docs/qa_report_master.md` instead of rewriting history
   - append to `Tasks.md` instead of rewriting history
   - keep `last_updated` out of transcription front matter
   - fix safe issues before reporting
   - check whether `tmp/qa_status.json` is gitignored before claiming it as part of a PR diff
4. Ask Copilot to report fixable findings and any remaining blockers separately.
5. If Gemini-dependent steps cannot run in Copilot, instruct Copilot to continue with all other safe work and leave the Gemini-gated step recorded as pending or blocked.
6. Instruct Copilot not to use AI co-author trailers in commit messages.
7. Instruct Copilot not to mark a PR ready for review unless all required self-checks pass.

## Recommended Copilot Prompt Shape
Include:

1. Target root and batch size
2. Current priority bucket
3. The exact file/status/report contracts
4. The required fix-before-report rule
5. A rule to continue non-Gemini work if Gemini is unavailable
6. A rule that report/task files are append-only and prior history must be preserved
7. A rule that `tmp/qa_status.json` must be updated for touched `doc_id`s
8. A rule that structural fixes must not break layout fidelity or game heading counts by splitting one heading into several
9. A rule that large missing sections must not be reconstructed from inference alone; leave them blocked if they cannot be verified safely
10. A rule that heading-count mismatches require semantic confirmation, not naive count-only repair
11. A strict self-check gate before `Ready for review`
12. A request for one summarized outcome covering:
   - processed `doc_id`s
   - fixes applied
   - checks run
   - remaining Gemini-gated items

## Required Self-Check For Copilot
Copilot must verify all of the following before declaring completion:

1. `docs/qa_report_master.md` preserved previous history and appended the new run.
2. `Tasks.md` preserved previous history and appended the new run.
3. `tmp/qa_status.json` was updated for all touched `doc_id`s.
   - If it is gitignored, Copilot must say so explicitly and must not claim it is included in the PR.
4. No touched transcription front matter gained `last_updated`.
5. Heading fixes did not flatten two-column headers, centered title blocks, or other layout-sensitive structures.
6. No placeholder text remains inside sections now represented as completed content.
7. No commit message contains `Co-authored-by`.
8. No large translated section was reconstructed from inference alone and then reported as complete.

If any self-check item fails:
- Copilot must not mark the PR ready for review.
- Copilot must state which self-check failed.
- Copilot must continue fixing until the self-check passes or a real blocker is reached.

## Do Not
- Do not split one logical batch into many tiny Copilot prompts unless the first response proves it is necessary.
- Do not let Copilot treat Gemini unavailability as a reason to halt unrelated work.
- Do not weaken `repo-qa` completion semantics.
- Do not replace `docs/qa_report_master.md` or `Tasks.md` with a run-local summary.
- Do not claim QA completion without updating `tmp/qa_status.json`.
- Do not claim that `tmp/qa_status.json` is part of a PR when it is gitignored.
- Do not inflate heading counts by splitting a single source heading into multiple headings unless the source genuinely has that hierarchy.
- Do not convert official letterhead or two-column state/issuer headers into Markdown convenience headings.
- Do not generate long missing appendix or table content from inference alone just to close a structural gap.
