# Tasks

## 2026-03-11 repo-qa batch

- [completed] Review remaining non-complete document sets under `repo-qa` priority rules.
- [completed] Apply safe contract fixes and disclaimer-language corrections.
- [completed] Update `tmp/qa_status.json` and `docs/qa_report_master.md` for every closed set.
- [completed] Stop after 30 items were processed in this batch.
- [blocked] `1259/HD-ĐHVN` still requires full VI retranscription because the current markdown is only a skeletal summary and cannot be closed by contract-only fixes.

## 2026-03-11 repo-qa 30-item rerun

- [blocked] Re-checked `1259/HD-ĐHVN` with available OCR recovery; the blocker could not be reduced because only partial page-1 OCR was recoverable in the current environment.
- [completed] Revalidated the 29 oldest `complete` document sets after the front-matter `last_updated` retirement.
- [completed] Updated `tmp/qa_status.json` timestamps for all 30 processed items.
- [completed] Appended one batch entry to `docs/qa_report_master.md` describing the rerun scope and outcomes.

## 2026-03-11 repo-qa translation-structure batch

- [completed] Reprocessed all 30 `complete` document sets under the new translation-structure rule.
- [completed] Normalized chapter heading levels in `17/2021/TT-BGDĐT` and `18/2021/TT-BGDĐT` EN/JA files.
- [completed] Restored the missing circular-level Article 1 in `18/2021/TT-BGDĐT` JA.
- [completed] Re-ran disclaimer-link validation and refreshed `tmp/qa_status.json` for the 30 complete sets.

## 2026-03-11 repo-qa untracked inventory intake

- [completed] Expanded inventory across `data/` and classified the remaining 23 untracked groups.
- [completed] Added missing `SOURCE_NOTE` blocks and normalized legacy JA disclaimer labels for contract-ready groups.
- [completed] Added disclaimer blocks to `1534-HD-DHVN_Annex Templates Layout Guide` VI/EN/JA.
- [completed] Added 19 new `doc_id` records to `tmp/qa_status.json`.
- [blocked] `1132/QĐ-ĐHVN`, `1534/HD-ĐHVN`, `DHVN-HD-1534`, and `30/2018/TT-BGDĐT` still require source or translation completion before they can advance.

## 2026-03-12 repo-qa skill update

- [completed] Added a final Gemini translation consistency audit to `repo-qa` as the last QA gate.
- [completed] Updated `docs/QA_CHECKLIST.md` so the final Gemini translation audit is required and cannot run before earlier steps are complete.
- [completed] Added `final_translation_audit_status` to every record in `tmp/qa_status.json` and initialized existing documents to `pending`.

## 2026-03-12 final Gemini translation audit batch

- [completed] Ran the final Gemini translation consistency audit for `/HD-ĐHVN`, `01/2024/TT-BGDĐT`, `04/2016/TT-BGDĐT`, `04/2020/TT-BGDĐT`, `1010/TB-ĐHVN`, and `1274/HD-KT&ĐBCL`.
- [completed] Stored raw Gemini outputs under `tmp/final_audit_*.json`.
- [completed] Updated `tmp/qa_status.json` with `final_translation_audit_status` and revised `qa_status` / `review_status` where the final gate did not pass.

## 2026-03-12 repo-qa fix-before-report rule

- [completed] Updated `skills/repo-qa/SKILL.md` so any fixable issue found during QA must be corrected before reporting the result to the user.
- [completed] Clarified that final Gemini translation audit findings must trigger a fix-and-rerun loop when safe.
- [completed] Updated `docs/QA_CHECKLIST.md` to require correction and rerun when the final Gemini audit detects structural drift, hallucination, omissions, or terminology defects.

## 2026-03-12 translation audit fix cycle

- [completed] Corrected previously reported glossary/structure issues in `/HD-ĐHVN`, `01/2024/TT-BGDĐT`, `1010/TB-ĐHVN`, and `1274/HD-KT&ĐBCL`.
- [completed] Replaced the hallucinated simplified forms/coefficient block in `01/2024/TT-BGDĐT` EN/JA with source-structure-aligned translations.
- [completed] Re-ran disclaimer/source-note contract validation and confirmed zero mismatches.
- [blocked] Final Gemini rerun could not be completed in this environment because direct Gemini API access returned `API_KEY_INVALID` and the available Gemini CLI path did not return reusable non-interactive output.
- [completed] Reset `final_translation_audit_status` for the 4 corrected sets to `pending` so they can be rerun cleanly later.
- [completed] Applied an extra local glossary-cleanup pass to `/HD-ĐHVN`, `1010/TB-ĐHVN`, and `1274/HD-KT&ĐBCL` to remove residual legacy terms in citations, appendix headings, and LO labels.

## 2026-03-12 repo-qa Copilot child skill

- [completed] Added `skills/repo-qa/children/copilot-qa/SKILL.md` as the GitHub Copilot handoff child skill for heavy repo-qa batches.
- [completed] Updated the parent `repo-qa` skill to delegate to the Copilot child skill when the active runtime is GitHub Copilot.
- [completed] Clarified that Gemini-unavailable steps must not halt unrelated QA work; only the affected gate stays pending or blocked.
