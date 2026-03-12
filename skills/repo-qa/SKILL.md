---
name: repo-qa
description: Repository-specific QA orchestration for VJU Project document sets. Use this on the first task in this repository during a conversation, and whenever the user asks for repository maintenance or quality assurance in this repository.
---

# Repo QA

Use this skill for document QA and repository maintenance work in this repository.

## Trigger Conditions
Use this skill when any of the following is true:

1. This is the first task performed in this repository during the current conversation.
2. The user asks for repository maintenance in this repository.
3. The user asks to perform quality assurance, document QA, PDF↔MD checking, transcription repair, or batch QA in this repository.

## First-Invocation Briefing
On the first invocation of this skill in the current conversation, do not jump straight into file work.

Before any substantial action:
1. Send a short English message explaining what you are about to inspect or change.
2. State the expected workflow briefly, for example inventory, rename handling, Gemini first-gate, QA, and report/status updates.
3. Then begin execution.

If the same conversation invokes this skill again, you may omit this briefing unless the task scope changes materially.

## Load Order
1. Read `references/vju-project.md`.
2. Read only the sections of `docs/QA_CHECKLIST.md` needed for the current task.
3. If the current runtime is GitHub Copilot, immediately load and follow `children/copilot-qa/SKILL.md` for the execution handoff pattern.
4. Inspect the configured scripts and target files before making decisions.

## Core Rules
- Keep user-facing updates in Japanese.
- Keep repository-facing names and commit messages in English.
- Do not rewrite history.
- Serialize Git operations.
- Prefer deterministic checks and scripts before model judgment.
- Keep one consolidated report file and one machine-readable status file.
- If the current runtime is GitHub Copilot, use the child skill to package and delegate large QA batches there.
- If Gemini cannot be called, do not stop the whole run unless the current document is blocked on Gemini and no other eligible work remains. Continue with renames, metadata fixes, contract fixes, report/status updates, and other non-Gemini work.
- Treat `docs/qa_report_master.md` and `Tasks.md` as append-only operational history. Add new run sections without replacing earlier sections.
- Always update `STATUS_PATH` for touched `doc_id` records when a run claims QA progress.
- Never add AI co-author trailers such as `Co-authored-by` to commit messages in this repository.

## Required Inputs
Before execution, resolve or confirm these values:

- `TARGET_ROOT`: `data` or `confidential`
- `MODE`: `public` or `confidential`
- `REPORT_PATH`: normally `docs/qa_report_master.md`
- `STATUS_PATH`: normally `tmp/qa_status.json`
- `FIRST_GATE_COMMAND`
- `SCRIPT_CHECK_COMMAND`
- `CONFIDENTIAL_DEPLOY_COMMAND`
- `GENERATION_FALLBACK_NOTES`

If a required command or file contract is missing, report the blocker briefly and stop.

## Batch Defaults
- Default `BATCH_COUNT=1`
- Default `BATCH_SIZE=12`
- Unless the user explicitly sets a smaller number, keep processing up to 12 eligible document sets in the current priority bucket before stopping for a normal batch boundary.

## Workflow
Run the work in this order:

1. Precheck
2. Inventory
3. Mandatory filename normalization
4. Missing transcription generation
5. First-gate PDF-to-Markdown cross-check
6. Script checks
7. QA fixes
8. Review after fixes
9. Final Gemini translation consistency audit
10. Report update
11. Status update
12. Batch-level deploy

## Precheck
- Confirm the target root and mode are consistent.
- Confirm report and status files exist; initialize from templates if needed.
- If the target root is missing in the working tree, recover only required files from `HEAD` into a temporary run directory.
- Verify that batch limits and stop conditions are set before starting.
- Verify whether `STATUS_PATH` is gitignored or otherwise non-committable. If it is local-only state, do not claim that a PR includes it; update it locally when possible and report separately that the status update is not part of the tracked diff.

## Inventory
- Detect document sets by `*_source.pdf` and `*_transcription*.md`.
- Treat a set as incomplete if any expected transcription is missing, any required check has not passed, or the status file does not mark it `complete`.
- Prioritize `data` over `confidential` when both have pending work.
- Within the selected root, apply this exact priority order:
  1. Safe filename renames that are required.
  2. Documents issued within the last 3 months.
  3. Unfinished Gemini-required work.
  4. QA work for items not yet passed.
  5. If all files are already quality-checked, re-process the 12 oldest checks.

## Filename Normalization
- Build a plan before renaming anything.
- Check collisions, root moves, and doc-id changes.
- Apply only safe path-local renames immediately.
- Record renames in the report.
- Re-run inventory after any rename that affects detection.

## Transcription Generation
- Generate missing transcription files before QA.
- Measure extraction quality first.
- If source fidelity is uncertain, use safe placeholders and explicitly preserve the risk in reporting.
- Follow the repository conventions for YAML front matter, disclaimer block, body content, and source note.
- Do not store document update timestamps in transcription front matter. Manage update timing only in `STATUS_PATH` via `last_processed_at` and, when needed, in report entries.
- Verify that disclaimer language matches the file language; do not leave English disclaimer text in VI or JA files.

## Checks And Review
- Run the first-gate cross-check before other QA checks.
- Run script-based checks before manual or model-driven review.
- Use the repo checklist for layout, disclaimer, metadata, translation, and rendering consistency.
- If any check or review step finds a fixable problem such as structural drift, hallucination, omission, terminology mismatch, metadata defects, disclaimer mismatch, or source-note defects, attempt the correction before reporting the result to the user.
- After applying a fix, rerun the relevant check whenever feasible and report both the fix applied and any remaining unresolved issues.
- When processing translation files, verify that heading count, bullet/list item count, and sentence count remain aligned with the source-language transcription; do not accept silent omissions or structural shrinkage.
- Do not satisfy heading-count checks by splitting one heading into multiple headings or by promoting layout text into headings unless the source structure truly requires it.
- Preserve layout fidelity when repairing structure. Official two-column headers, centered title blocks, and signature areas must remain layout-faithful rather than being flattened into convenient Markdown headings.
- Do not apply large content reconstruction, appendix insertion, or bulk table generation from inference alone. If the source content is missing in the target translation and cannot be verified safely against the source or glossary, leave the document `partial` or `blocked` and record the gap instead of fabricating completion.
- Treat heading-count mismatches as a review signal, not proof by themselves. Confirm the semantic position and source structure before editing. Do not rely on naive positional or count-only comparison when translations reorder or merge visible labels.
- The final translation audit must use Gemini with at least these inputs: glossary, source-language transcription, and the target translation under review.
- The final Gemini translation audit is the last QA gate. Do not run it if any earlier step is incomplete or if the document still lacks required fixes, metadata, source note, or upstream fidelity checks.
- If the final Gemini translation audit finds structural drift, hallucination, omissions, mistranslations, or glossary violations, fix the translation first when it is safe to do so, then rerun the audit before closing the document or reporting batch completion.
- Record the final Gemini translation audit outcome explicitly in the status/progress tracker.
- Keep fixes isolated per `doc_id` when committing.
- If Gemini is available and the current document depends on Gemini for recovery or first-gate completion, complete that portion before downstream QA for that document.
- If Gemini is unavailable, mark only the affected document step as pending or blocked, record the reason, and continue with other eligible documents or non-Gemini tasks in the same batch.

## Reporting Contract
`REPORT_PATH` must contain these sections:

- `# QA Master Report`
- `## Run Configuration`
- `## Inventory Summary`
- `## Document Results`
- `## Filename Normalization Log`
- `## Batch Execution Summary (auto)`

Each document result entry must include:

- `doc_id`
- target root
- processed files
- checks run
- issues found
- fixes applied
- final status
- deployment status

## Status Contract
`STATUS_PATH` must track one record per `doc_id` with:

- `doc_id`
- `target_root`
- `qa_status`
- `generation_status`
- `review_status`
- `final_translation_audit_status`
- `last_processed_at`
- `report_updated`

`last_processed_at` is the authoritative per-document update timestamp. Do not add or maintain `last_updated` in document front matter.

If `STATUS_PATH` is gitignored or local-only, keep it updated for local execution but do not describe it as part of the tracked PR diff. In that case, tracked evidence must still be reflected in `REPORT_PATH` and `Tasks.md`.

## Completion Rule
Mark a document `complete` only when:

- required source and transcription files exist
- first-gate cross-check passed
- script checks passed
- required metadata, disclaimer, and source note are present, and transcription front matter does not carry `last_updated`
- final Gemini translation consistency audit passed using glossary + source transcription + target translation
- report entry was written
- status entry was updated

Otherwise mark it:

- `partial` if useful work was completed but open gates remain
- `blocked` if safe continuation is not possible

When reporting a `partial` or `blocked` result, explicitly separate:

- issues that were fixed during the run
- issues that remain open
- why the remaining issues could not be fixed safely in the same run

## Git And Deploy
- Commit after script-check results, file fixes, report/status updates, and batch summary updates.
- Use English commit messages.
- Push or deploy once per completed batch, not after every document.
- In `confidential` mode, never use `git push`; run the configured confidential deploy command instead.

## Self-Check Gate
Before declaring a batch complete, pushing, or marking a PR ready for review:

1. Verify `docs/qa_report_master.md` preserved prior history and appended the new run.
2. Verify `Tasks.md` preserved prior history and appended the new run.
3. Verify `STATUS_PATH` was updated for every touched `doc_id`.
4. Verify no touched transcription file gained `last_updated` in front matter.
5. Verify no fix introduced layout regressions in official headers, centered blocks, appendices, or signature sections.
6. Verify no placeholder text remains in any section now presented as completed content.
7. Verify commit messages do not contain AI co-author trailers.
8. Verify no large untranslated section was silently replaced by inferred or placeholder-heavy content and then reported as complete.

If any self-check item fails, do not mark the work complete, do not mark the PR ready for review, and do not push. Report the failed self-check explicitly and fix it first.

## Stop Conditions
Continue working in priority order until one of these happens:

1. Gemini 3.1-series usage hits a quota limit or rate-limit that blocks continued work.
2. Codex or Claude token budget is estimated to be at or below 50% remaining.
3. Priority rule 5 is active and the 12-file refresh batch is complete.

If Gemini quota or rate-limit is hit, do not stop the whole run automatically. Stop only Gemini-dependent steps, continue other eligible work, and record which documents remain pending because Gemini was unavailable. Stop the whole batch only when no more non-Gemini-safe work remains, or another stop condition is hit.

If a stop condition is hit, do not start a new document-set. Finish only in-progress work, update the report and status files, and record the stop reason in the batch summary.

## Expected Deliverables
At the end of a run, leave:

- updated document files if fixes were applied
- updated `REPORT_PATH`
- updated `STATUS_PATH`
- one concise Japanese batch summary to the user
