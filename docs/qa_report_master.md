# QA Master Report

## Run Configuration

- policy_note: `As of 2026-03-11, transcription front matter no longer stores last_updated. Per-document update timing is managed in tmp/qa_status.json via last_processed_at. Historical entries below may still mention the retired field.`

- run_id: `20260311_gemini12_local`
- target_root: `data`
- mode: `public (no-push override by user)`
- batch_size: `12`
- batch_count: `1`
- first_gate_command: `pdftotext` quality probe, then `pdftoppm + tesseract + gemini-3.1-pro-preview` OCR recovery compare when needed
- script_check_command: `not run in this batch`
- confidential_deploy_command: `N/A`

## Inventory Summary

- scanned_at: `2026-03-11T06:45:00+07:00`
- total_document_sets: `12 selected for this run`
- incomplete_document_sets: `12`
- selected_for_this_run:
  - `911-TB-DHVN_Foreign Language Certificate Submission VJU2024`
  - `323-QD-DHVN_Q1 2025 Budget Execution Disclosure`
  - `1259-HD-DHVN_End-of-Semester Exam Organization Guidance S1 2023-2024`
  - `24-2023-ND-CP_Decree on Base Salary`
  - `2459-QD-DHQGHN_Amendment to Masters Training Regulation`
  - `2486-QD-DHQGHN_Amendment to Undergraduate Admission Regulation`
  - `1592-QD-DHVN_Budget Estimate Disclosure 2025`
  - `01-2024-TT-BGDDT_Standards for Higher Education Institutions`
  - `04-2016-TT-BGDDT_Quality Standards for HE Programs`
  - `04-2020-TT-BGDDT_Foreign Cooperation in Education`
  - `17-2021-TT-BGDDT_Standards for Higher Education Programs`
  - `18-2021-TT-BGDDT_Doctoral Admission and Training Regulation`

## Document Results

### doc_id: `911/TB-ĐHVN`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material; prior pdftotext output unusable`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `323/QĐ-ĐHVN`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `OCR degraded some table cells, but markdown reconstruction accepted`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `1259/HD-ĐHVN`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `Markdown is only a skeletal summary; body, tables, procedures, appendices largely missing`
- fixes_applied: `None`
- final_status: `blocked`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result FAIL; requires full VI retranscription`

### doc_id: `24/2023/NĐ-CP`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material; previous signature-metadata-only extraction was bypassed`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `2459/QĐ-ĐHQGHN`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `Document number may be OCR-misread as 2454; needs source confirmation`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result WARN`

### doc_id: `2486/QĐ-ĐHQGHN`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material; OCR misread document number as 2496 but markdown accepted`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `1592/QĐ-ĐHVN`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `01/2024/TT-BGDĐT`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `Tail note duplication and inconsistent Section V table formatting`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result WARN`

### doc_id: `04/2016/TT-BGDĐT`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `04/2020/TT-BGDĐT`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `17/2021/TT-BGDĐT`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

### doc_id: `18/2021/TT-BGDĐT`

- target_root: `data`
- processed_files: `*_source.pdf`, `*_transcription.md`
- checks_run: `Gemini first gate via OCR recovery`
- issues_found: `None material in compared range; markdown remains consistent through later appendices`
- fixes_applied: `None`
- final_status: `partial`
- deployment_status: `not attempted (user requested no push)`
- notes: `Gemini result PASS`

## Filename Normalization Log

- old_path: `none`
  new_path: `none`
  reason: `no rename applied in this run`
  applied: `false`

## Batch Execution Summary (auto)

- batch_id: `gemini12_local_20260311`
- started_at: `2026-03-11T06:45:00+07:00`
- finished_at: `2026-03-11T08:10:00+07:00`
- processed_doc_ids:
  - `911/TB-ĐHVN`
  - `323/QĐ-ĐHVN`
  - `1259/HD-ĐHVN`
  - `24/2023/NĐ-CP`
  - `2459/QĐ-ĐHQGHN`
  - `2486/QĐ-ĐHQGHN`
  - `1592/QĐ-ĐHVN`
  - `01/2024/TT-BGDĐT`
  - `04/2016/TT-BGDĐT`
  - `04/2020/TT-BGDĐT`
  - `17/2021/TT-BGDĐT`
  - `18/2021/TT-BGDĐT`
- completed: `0`
- partial: `11`
- blocked: `1`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 Translation-Structure Audit for 30 Complete Sets

### Scope

- Reprocessed all 30 document sets currently marked `complete`.
- Applied the newly added translation-structure QA rule requiring alignment with the source-language transcription for heading structure and enumerated article structure.

### Actions

- Ran a structure audit across the 30 complete sets, comparing VI source transcriptions against EN/JA translations for chapter/article counts.
- Normalized chapter heading levels in:
  - `17/2021/TT-BGDĐT` EN/JA
  - `18/2021/TT-BGDĐT` EN/JA
- Restored one missing circular-level article in `18/2021/TT-BGDĐT` JA.
- Re-ran `scripts/check_disclaimer_issuer_link.js` on `data`; no disclaimer-link mismatches were found.
- Refreshed `tmp/qa_status.json:last_processed_at` for all 30 complete sets.

### Results

#### Structure audit
- Result: `30 COMPLETE`
- Notes:
  - All 30 complete sets now pass the chapter/article structure consistency audit.
  - `774/QLCL-KĐCLGD` was treated as an official-letter/appendix format where chapter counting is not applicable; no structural omission was found.
  - Heuristic sentence/list-count scans were used only as secondary review aids because literal counts can diverge from VI in forms, tables, and translated punctuation. No clear omission requiring demotion from `complete` remained in this batch.

### Batch Summary

- batch_id: `translation_structure_audit_30_20260311`
- processed_doc_ids:
  - `911/TB-ĐHVN`
  - `323/QĐ-ĐHVN`
  - `24/2023/NĐ-CP`
  - `2459/QĐ-ĐHQGHN`
  - `2486/QĐ-ĐHQGHN`
  - `1592/QĐ-ĐHVN`
  - `01/2024/TT-BGDĐT`
  - `04/2016/TT-BGDĐT`
  - `04/2020/TT-BGDĐT`
  - `17/2021/TT-BGDĐT`
  - `18/2021/TT-BGDĐT`
  - `/HD-ĐHVN`
  - `1010/TB-ĐHVN`
  - `2184-TB-DHNN`
  - `259/HD-ĐHVN`
  - `304/HD-ĐHVN`
  - `473/QĐ-ĐHVN`
  - `4618/QĐ-ĐHQGHN`
  - `50/ĐHVN-KT&ĐBCL`
  - `700/QĐ-ĐHVN`
  - `78/2022/QĐ-TTg`
  - `840/ĐHVN-ĐT`
  - `DHVN-TB-984`
  - `WEB-TTTS2026-VJU`
  - `483/HD-ĐHVN`
  - `628/QĐ-ĐHQGHN`
  - `DHVN-KT&DBCL-826`
  - `1274/HD-KT&ĐBCL`
  - `774/QLCL-KĐCLGD`
  - `1541/CV-ĐHVN-KT&ĐBCL`
- completed: `30`
- partial: `0`
- blocked: `0`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 Untracked Inventory Intake Batch

### Scope

- Expanded the `data/` inventory beyond the previously tracked status records.
- Processed all remaining untracked document groups that were present in the repository at the time of this run.
- The repository contained 58 document groups in total, so the requested 60-group target could not be reached from current inventory.

### Actions

- Scanned 23 untracked groups and classified them by contract readiness.
- Added missing `SOURCE_NOTE` blocks to:
  - `08/2021/TT-BGDĐT`
  - `111/2013/TT-BTC`
  - `1132/QĐ-ĐHVN` (main regulation set)
  - `1534/HD-ĐHVN` Annex Templates English Format
  - `3626/QĐ-ĐHQGHN`
  - `3636/QĐ-ĐHQGHN`
- Standardized legacy JA disclaimer labels in:
  - `3626/QĐ-ĐHQGHN`
  - `3636/QĐ-ĐHQGHN`
  - `3638/QĐ-ĐHQGHN`
  - `38/2013/TT-BGDĐT`
  - `4391/QĐ-ĐHQGHN`
  - `4455/QĐ-ĐHQGHN`
  - `5115/QĐ-ĐHQGHN`
  - `5292/QĐ-ĐHQGHN`
- Added disclaimer blocks to the `1534-HD-DHVN_Annex Templates Layout Guide` VI/EN/JA files.
- Re-ran `scripts/check_disclaimer_issuer_link.js` on `data`; no disclaimer-link mismatches were found.
- Added new status records for 19 previously untracked `doc_id` values.

### Results

#### Newly status-tracked as `partial`
- `08/2021/TT-BGDĐT`
- `111/2013/TT-BTC`
- `2085/QLCL-KĐCLGD`
- `23/2021/TT-BGDĐT`
- `3626/QĐ-ĐHQGHN`
- `3636/QĐ-ĐHQGHN`
- `3638/QĐ-ĐHQGHN`
- `BGDDT-TT-2013-38`
- `39/2020/TT-BGDĐT`
- `4391/QĐ-ĐHQGHN`
- `4455/QĐ-ĐHQGHN`
- `4998/QĐ-BGDĐT`
- `5115/QĐ-ĐHQGHN`
- `5292/QĐ-ĐHQGHN`
- `86/2021/NĐ-CP`

#### Newly status-tracked as `blocked`
- `1132/QĐ-ĐHVN`
  - Appendix EN/JA translations remain unfinished.
- `1534/HD-ĐHVN`
  - Thesis and Graduation Project Guidelines group still lacks a source PDF and complete source-note contract.
- `DHVN-HD-1534`
  - Layout Guide group has no source PDF in the repository.
- `30/2018/TT-BGDĐT`
  - Only the VI file exists and no source PDF / EN / JA files are present.

#### Alias / duplicate-base notes
- `826-KTDBCL-DHVN_Public Report 2024-2025` is already covered by tracked status `DHVN-KT&DBCL-826`.
- `911-TB-DHVN_Foreign Language Certificate Submission VJU2024` is already covered by tracked status `911/TB-ĐHVN` via legacy alias handling.
- `1132/QĐ-ĐHVN` and `1534/HD-ĐHVN` each span multiple base groups; status was set from the least-complete member for safety.

### Batch Summary

- batch_id: `untracked_inventory_intake_20260311`
- processed_groups: `23`
- newly_added_status_records: `19`
- total_inventory_groups_present: `58`
- completed: `0`
- partial: `15`
- blocked: `4`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-12 Final Gemini Translation Audit Batch (6)

### Scope

- Ran the new final-stage Gemini translation consistency audit for 6 document sets that had already passed earlier QA gates and still had `final_translation_audit_status = pending`.
- Inputs for each audit: glossary, Vietnamese source transcription, English translation, and Japanese translation.

### Actions

- Used `gemini-3.1-pro-preview` for the final translation audit.
- Audited these 6 document sets:
  - `/HD-ĐHVN`
  - `01/2024/TT-BGDĐT`
  - `04/2016/TT-BGDĐT`
  - `04/2020/TT-BGDĐT`
  - `1010/TB-ĐHVN`
  - `1274/HD-KT&ĐBCL`
- Stored raw Gemini outputs under `tmp/final_audit_*.json`.

### Results

#### `/HD-ĐHVN`
- Result: `WARN`
- Notes: Structural fidelity is strong, but Gemini flagged repeated glossary violations for `chuẩn đầu ra`, `Ban Giám hiệu`, and official program names (`EMJM`, `BICA`, `BGDI`) in both EN and JA.

#### `01/2024/TT-BGDĐT`
- Result: `FAIL`
- Notes: Gemini flagged severe structural deviations and hallucinations in Section IV and Section V tables for both EN and JA. This set no longer satisfies the final translation gate.

#### `04/2016/TT-BGDĐT`
- Result: `PASS`
- Notes: Gemini reported strong fidelity and glossary compliance for both EN and JA.

#### `04/2020/TT-BGDĐT`
- Result: `PASS`
- Notes: Gemini reported accurate legal meaning and acceptable glossary alignment, with only minor non-blocking terminology deviations.

#### `1010/TB-ĐHVN`
- Result: `WARN`
- Notes: Gemini flagged glossary and role-term inconsistencies, including `Hiệu trưởng` rendered as `Principal` instead of `Rector`, and multiple JA term deviations.

#### `1274/HD-KT&ĐBCL`
- Result: `WARN`
- Notes: Gemini judged the translations accurate overall but found minor glossary inconsistencies, especially in department abbreviations and some JA terminology.

### Batch Summary

- batch_id: `final_gemini_translation_audit_6_20260312`
- processed_doc_ids:
  - `/HD-ĐHVN`
  - `01/2024/TT-BGDĐT`
  - `04/2016/TT-BGDĐT`
  - `04/2020/TT-BGDĐT`
  - `1010/TB-ĐHVN`
  - `1274/HD-KT&ĐBCL`
- pass: `2`
- warn: `3`
- fail: `1`
- deployment_result: `not attempted (push disabled by user)`
- summary: `Gemini 3.1 OCR recovery completed for 12 sets; PASS=9, WARN=2, FAIL=1; no Gemini 3.1 quota-limit event occurred`

## 2026-03-11 Gemini Batch 24 (No-Push Run)

### Scope

- `000-HD-DHVN_Foreign Language Certificate Guidelines`
- `1010-TB-DHVN_English Certificate Submission VJU2025`
- `1541-CV-DHVN-KTDBCL_End-of-Course Exam Organization Notice S1 2025-2026`
- `2184-TB-DHNN_VNU-TESTS Language Assessment Plan`
- `259-HD-DHVN_Annex 1 Certificate Equivalency Table`
- `259-HD-DHVN_Annex 2 JLPT Authorization Letter Template`
- `259-HD-DHVN_Foreign Language Certificate Guidelines VJU2020-2021`
- `304-HD-DHVN_Learning Outcome Recognition and Credit Transfer`
- `473-QD-DHVN_Academic Advisory Work Regulations`
- `4618-QD-DHQGHN_Scholarship Management and Use`
- `50-2026-KH-DHVN_VJU Quality Assurance Plan 2026`
- `700-QD-DHVN_Anti-Plagiarism Regulations`
- `78-2022-QD-TTCP_QA and Accreditation Program 2022-2030`
- `840-DT-DHVN_Academic Calendar 2025-2026 Annex 1 VJU2025`
- `840-DT-DHVN_Academic Calendar 2025-2026 Annex 2 VJU2024-2023`
- `840-DT-DHVN_Academic Calendar 2025-2026 Annex 3 VJU2022-2020`
- `840-DT-DHVN_Academic Calendar 2025-2026 Annex 4 Masters-PhD`
- `984-TB-DHVN_Foreign Language Certificate Submission VJU2023`
- `WEB-TTTS2026-VJU_Undergraduate Admissions Information 2026`
- `483-HD-DHVN_Practical Internship Guidance`
- `628-QD-DHQGHN_Educational Quality Assurance Regulation`
- `826-KTDBCL-DHVN_Public Report 2024-2025`
- `1274-HD-KTDBCL_End-of-Course Exam Guidance S1 2025-2026`
- `774-CV-BGDDT_Adjustment to Appendices CV-2085`

### Method

- Followed local AI Instruction constraints with `push` disabled by user override.
- For each set, tried `pdftotext` first and switched to `pdftoppm + tesseract` OCR when extracted text was not useful.
- Compared extracted source text against VI markdown using `gemini-3.1-pro-preview`.
- No Gemini 3.1 quota-limit or rate-limit event occurred in this batch.

### Results


#### 000-HD-DHVN_Foreign Language Certificate Guidelines
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 内容の欠落や意味のズレはありません。原文で「3. Một số thông tin cần lưu ý」「4. Tổ chức thực hiện」となっていた連番の誤りが、Markdown側で正しく「4」「5」に修正されています。; LAYOUT_NOTES: ヘッダーや署名欄がHTMLタグで綺麗に配置され、複数の複雑な表や委任状（英語フォーム）もMarkdownフォーマットで正確に再現されています。
- Next action: 承認（対応不要）

#### 1010-TB-DHVN_English Certificate Submission VJU2025
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし。ソーステキストのすべての内容（本文、条件、注釈など）が欠落なく正確にMarkdownへ転記されています。; LAYOUT_NOTES: 原本の箇条書き、署名ブロック、および「Phụ lục 1（基準の対照表）」「Phụ lục 2（27の認定機関リスト）」の2つの複雑な表がMarkdownテーブルとして忠実かつ綺麗に再現されています。
- Next action: 承認（アクション不要）

#### 1541-CV-DHVN-KTDBCL_End-of-Course Exam Organization Notice S1 2025-2026
- Result: `WARN`
- Method: `pdftotext` direct extraction
- Notes: RESULT: WARN; MISSING_OR_DRIFT: 分割された2つ目の表（No.65〜196）において「Phòng chờ」の列見出しが脱落しており、データが「Ghi chú」列にずれている。; LAYOUT_NOTES: 長大な表を複数のMarkdown表に分割して記述しているが、表ごとに列見出しの一貫性（列数や名称）が失われている。
- Next action: 分割された各表の列構成を統一し、データのズレを修正する。

#### 2184-TB-DHNN_VNU-TESTS Language Assessment Plan
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 内容の欠落や意味の乖離は見られません。署名部分に「(đã ký)」が補足されていますが、適切な処理です。; LAYOUT_NOTES: 元テキストの表組がMarkdownのテーブルとして正しく構造化され、見出しや箇条書きも適切にフォーマットされています。
- Next action: なし

#### 259-HD-DHVN_Annex 1 Certificate Equivalency Table
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし。元の情報がすべて正確に転記されている。; LAYOUT_NOTES: 表の構造が正確にMarkdown形式（表組み）で再現され、読みやすさが向上している。
- Next action: 承認して次のプロセスへ進む。

#### 259-HD-DHVN_Annex 2 JLPT Authorization Letter Template
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 本文の欠落や意味の乖離はなし。フロントマター（メタデータ）とAI生成の免責事項が追加されている。; LAYOUT_NOTES: 見出し、入力フォームの点線、英語のレターフォーマットがMarkdownで適切に構造化・再現されている。
- Next action: 承認（アクション不要）

#### 259-HD-DHVN_Foreign Language Certificate Guidelines VJU2020-2021
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 原文の最後のセクション番号の誤り（「3. Một số thông tin...」）がMarkdownでは「4. Một số thông tin...」と論理的に修正されており、実質的な内容の欠落はありません。; LAYOUT_NOTES: ヘッダー、署名欄がHTMLタグ（div）で適切にレイアウトされ、複数の表組みもMarkdownテーブルとして正確に再現されています。
- Next action: なし

#### 304-HD-DHVN_Learning Outcome Recognition and Credit Transfer
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 内容の欠落や大きな乖離なし。; LAYOUT_NOTES: 申請書フォーム（付録）はマークダウンのテーブルや箇条書きを用いて適切に構造化・再現されている。
- Next action: 承認（アクション不要）

#### 473-QD-DHVN_Academic Advisory Work Regulations
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 特になし。すべての条文、付録の書類フォーマット、および表のデータが正確に転記されています。; LAYOUT_NOTES: YAMLフロントマターと免責事項が追加されていますが、本文の章立て、箇条書き、署名欄のレイアウト、および付録2の表形式への変換は適切に再現されています。
- Next action: 承認して公開可能。

#### 4618-QD-DHQGHN_Scholarship Management and Use
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし; LAYOUT_NOTES: 元文書のヘッダー配置（左右分割）や各条項のフォーマット、斜体による「根拠（Căn cứ）」部分の装飾などが適切に再現されている。
- Next action: 承認

#### 50-2026-KH-DHVN_VJU Quality Assurance Plan 2026
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 元テキストの明らかな段落番号の誤植（1.の直後の「4.1」「4.2」等）が「1.1」「1.2」へ適切に修正されており、内容の欠落や意味の逸脱はありません。; LAYOUT_NOTES: 元テキストの複雑な表組みがMarkdownのテーブル構文を用いて非常に綺麗かつ正確に構造化されています。
- Next action: NONE

#### 700-QD-DHVN_Anti-Plagiarism Regulations
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 原本で「Chương IV」が2回連続している誤記が、Markdownでは「Chương V」と正しく修正されています。意味的な欠落やズレはありません。; LAYOUT_NOTES: YAMLメタデータと免責事項が追加され、誓約文の引用ブロック化、署名箇所の画像代替テキスト配置など適切な構造化が行われています。
- Next action: 特になし

#### 78-2022-QD-TTCP_QA and Accreditation Program 2022-2030
- Result: `PASS`
- Method: OCR recovery (`pdftoppm + tesseract`)
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 内容の欠落や大きな逸脱はありません。OCRのノイズや文字化けも正確にベトナム語として補正されています。; LAYOUT_NOTES: 条文の階層構造、箇条書き、および署名・宛先ブロックがMarkdownの適切なフォーマットで美しく再現されています。
- Next action: 承認（アクション不要）

#### 840-DT-DHVN_Academic Calendar 2025-2026 Annex 1 VJU2025
- Result: `FAIL`
- Method: `pdftotext` direct extraction
- Notes: RESULT: FAIL; MISSING_OR_DRIFT: The entire schedule table (items 1 to 31) detailing the academic calendar for Semester 1, Semester 2, and Summer Semester is completely missing.; LAYOUT_NOTES: The markdown only contains the document title, disclaimer, and footnotes, completely dropping the core tabular data.
- Next action: Re-transcribe the document ensuring the table is accurately extracted and formatted as a Markdown table.

#### 840-DT-DHVN_Academic Calendar 2025-2026 Annex 2 VJU2024-2023
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 特になし。メタデータ（文書番号など）もFrontmatterに適切に格納されており、テーブル内の情報もすべて正確に転記されています。; LAYOUT_NOTES: 原本の複雑な表レイアウト（ヘッダー行「Học kỳ 1」「Học kỳ 2」「Học kỳ hè」による分割など）が、Markdownのセクションとテーブル構造を用いて非常に綺麗に整理・再現されています。
- Next action: 承認 (Approve)

#### 840-DT-DHVN_Academic Calendar 2025-2026 Annex 3 VJU2022-2020
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 文書番号（Số: 840/ĐHVN-ĐT）と署名日時が本文からYAMLメタデータに移動しています。また、YAMLフロントマターと免責事項・ソース注記が追加されています。; LAYOUT_NOTES: 元PDFで1つだった表を、「Học kỳ 1」「Học kỳ 2」「Học kỳ hè và Tốt nghiệp」のセクションごとに3つのMarkdownテーブルに分割して綺麗に再構成しています。
- Next action: 特になし（現在のMarkdownテキストをそのまま採用可能）。

#### 840-DT-DHVN_Academic Calendar 2025-2026 Annex 4 Masters-PhD
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし。Markdownはソーステキストの内容を忠実に再現している。; LAYOUT_NOTES: 表の構造がMarkdownのテーブルで正確かつ読みやすく表現されている。原文の不整合（ナンバリングや英語訳の誤り）に対してHTMLコメントで補足が付与されており、非常に高品質。
- Next action: 承認（そのまま使用可能）

#### 984-TB-DHVN_Foreign Language Certificate Submission VJU2023
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 特になし。ソーステキストの全内容が正確にMarkdownに反映されています。; LAYOUT_NOTES: 表（Phụ lục 1の資格対応表）や番号付きリスト（Phụ lục 2の教育機関一覧）がMarkdownのテーブルおよびリスト記法で適切かつ綺麗に構造化されています。
- Next action: 修正不要。現在のMarkdownをそのまま採用します。

#### WEB-TTTS2026-VJU_Undergraduate Admissions Information 2026
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし。元のテキストにある数式の欠落部分に対して有用な注釈が追加されているが、全体として内容は非常に忠実に再現されている。; LAYOUT_NOTES: 見出し、リスト、および多数の複雑な表が適切にマークダウン形式で構造化されている。
- Next action: 承認。

#### 483-HD-DHVN_Practical Internship Guidance
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし。ソーステキストにあった連番の抽出エラー（「12.」が連続するなど）は、Markdown側で正しく「2.」「3.」と修正されています。; LAYOUT_NOTES: 各種フォームやチェックボックス（`[ ]`）、表が適切なMarkdown要素を用いてきれいに構造化・再現されています。
- Next action: 承認（修正不要）

#### 628-QD-DHQGHN_Educational Quality Assurance Regulation
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 文書冒頭に標準的な公文書のヘッダー（文書番号、日付）が補完されており、ソーステキストに見られるOCRのノイズ（「lƣợng」など）は適切に修正されています。; LAYOUT_NOTES: マークダウンの見出し（#、##）を使用して章や条の階層が明確にフォーマットされており、付録も適切に構造化されています。
- Next action: None

#### 826-KTDBCL-DHVN_Public Report 2024-2025
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: 組織図（Hình 1）が箇条書きリストとして表現されていますが、内容を適切に構造化して表現しています。一部の文書番号の略称が手修正されています（ĐHVN -> VJU）。; LAYOUT_NOTES: 全体的に適切なMarkdownのマークアップ（見出し、太字、表など）が施されており、可読性が高く良好な変換です。
- Next action: 特になし。このまま完了とします。

#### 1274-HD-KTDBCL_End-of-Course Exam Guidance S1 2025-2026
- Result: `PASS`
- Method: `pdftotext` direct extraction
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし; LAYOUT_NOTES: 申請書や試験のテンプレート（付録3a、3b、6、8など）のレイアウトを維持するためにコードブロックが適切に使用されています。
- Next action: なし

#### 774-CV-BGDDT_Adjustment to Appendices CV-2085
- Result: `PASS`
- Method: OCR recovery (`pdftoppm + tesseract`)
- Notes: RESULT: PASS; MISSING_OR_DRIFT: なし。MarkdownはOCRのノイズや誤字を適切に修正し、原文の内容を正確に反映しています。; LAYOUT_NOTES: 表、見出し、リストがMarkdown形式で正しく構造化され、視認性が向上しています。
- Next action: 承認する

## Batch Execution Summary (auto)

- batch_id: `gemini24_local_20260311`
- started_at: `2026-03-11T08:20:00+07:00`
- finished_at: `2026-03-11T10:20:00+07:00`
- processed_doc_ids:
  - `/HD-ĐHVN`
  - `1010/TB-ĐHVN`
  - `1541/CV-ĐHVN-KT&ĐBCL`
  - `2184-TB-DHNN`
  - `259/HD-ĐHVN`
  - `259/HD-ĐHVN`
  - `259/HD-ĐHVN`
  - `304/HD-ĐHVN`
  - `473/QĐ-ĐHVN`
  - `4618/QĐ-ĐHQGHN`
  - `50/ĐHVN-KT&ĐBCL`
  - `700/QĐ-ĐHVN`
  - `78/2022/QĐ-TTg`
  - `840/ĐHVN-ĐT`
  - `840/ĐHVN-ĐT`
  - `840/ĐHVN-ĐT`
  - `840/ĐHVN-ĐT`
  - `DHVN-TB-984`
  - `WEB-TTTS2026-VJU`
  - `483/HD-ĐHVN`
  - `628/QĐ-ĐHQGHN`
  - `DHVN-KT&DBCL-826`
  - `1274/HD-KT&ĐBCL`
  - `774/QLCL-KĐCLGD`
- completed: `0`
- partial: `23`
- blocked: `1`
- deployment_result: `not attempted (push disabled by user)`
- summary: `Gemini 3.1 first-gate completed for 24 sets; PASS=22, WARN=1, FAIL=1; no quota-limit event occurred`

## 2026-03-11 Recent QA Closure Batch

### Scope

- `1010-TB-DHVN_English Certificate Submission VJU2025`
- `1274-HD-KTDBCL_End-of-Course Exam Guidance S1 2025-2026`
- `1592-QD-DHVN_Budget Estimate Disclosure 2025`

### Actions

- Re-audited the recent-document priority bucket under the current `repo-qa` skill order.
- Verified YAML, disclaimer, and source-note coverage for the three selected sets.
- Normalized `1274` EOF source markers from `SOURCE` to `SOURCE_NOTE` in VI/EN/JA and updated `last_updated` to `2026-03-11`.
- Ran `scripts/check_disclaimer_issuer_link.js` on the 9 files; no mismatches were found.

### Results

#### 1010-TB-DHVN_English Certificate Submission VJU2025
- Result: `COMPLETE`
- Notes: First-gate already passed; YAML, disclaimer, and source-note contract satisfied across VI/EN/JA.

#### 1274-HD-KTDBCL_End-of-Course Exam Guidance S1 2025-2026
- Result: `COMPLETE`
- Notes: First-gate already passed; source-note marker normalized to current contract in all three language files.

#### 1592-QD-DHVN_Budget Estimate Disclosure 2025
- Result: `COMPLETE`
- Notes: First-gate already passed; YAML, disclaimer, and source-note contract satisfied across VI/EN/JA.

### Remaining Recent Blockers

- `50-2026-KH-DHVN_VJU Quality Assurance Plan 2026`: EN/JA still contain `[PENDING TRANSLATION]` placeholders, so the set is not QA-passable.
- `1541-CV-DHVN-KTDBCL_End-of-Course Exam Organization Notice S1 2025-2026`: Gemini result remains `WARN` due to split-table header drift.
- `840-DT-DHVN_Academic Calendar 2025-2026 Annex 1 VJU2025`: Gemini result remains `FAIL` because the core schedule table is missing.
- `323-QD-DHVN_Q1 2025 Budget Execution Disclosure`, `826-KTDBCL-DHVN_Public Report 2024-2025`, `WEB-TTTS2026-VJU_Undergraduate Admissions Information 2026`: legacy YAML/disclaimer conventions still need normalization before these can be closed under the current contract.

### Batch Summary

- batch_id: `recent_closeout_20260311`
- processed_doc_ids:
  - `1010/TB-ĐHVN`
  - `1274/HD-KT&ĐBCL`
  - `1592/QĐ-ĐHVN`
- completed: `3`
- partial: `0`
- blocked: `0`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 Recent Translation Closure

### Scope

- `50-2026-KH-DHVN_VJU Quality Assurance Plan 2026`

### Actions

- Replaced the EN/JA placeholder files with full translations based on the current VI transcription.
- Updated `last_updated` in EN/JA to `2026-03-11`.
- Rechecked the 3-file set for disclaimer/source-note contract and issuer-link consistency.

### Result

#### 50-2026-KH-DHVN_VJU Quality Assurance Plan 2026
- Result: `COMPLETE`
- Notes: `[PENDING TRANSLATION]` markers removed from EN/JA; file-contract checks passed for VI/EN/JA; disclaimer issuer-link check returned no mismatches.

### Batch Summary

- batch_id: `recent_translation_closeout_20260311`
- processed_doc_ids:
  - `50/ĐHVN-KT&ĐBCL`
- completed: `1`
- partial: `0`
- blocked: `0`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 Recent Contract Normalization Batch

### Scope

- `1541-CV-DHVN-KTDBCL_End-of-Course Exam Organization Notice S1 2025-2026`
- `323-QD-DHVN_Q1 2025 Budget Execution Disclosure`
- `826-KTDBCL-DHVN_Public Report 2024-2025`
- `WEB-TTTS2026-VJU_Undergraduate Admissions Information 2026`

### Actions

- Normalized `1541` EOF source markers from `SOURCE` to `SOURCE_NOTE` in VI/EN/JA and updated `last_updated` to `2026-03-11`.
- Added current-contract metadata keys (`doc_id`, `date`, `department`, `type`, `restricted`) to the legacy-schema sets `323`, `826`, and `WEB-TTTS2026` while preserving existing historical keys.
- Added the standardized disclaimer block to all 9 files in `323`, `826`, and `WEB-TTTS2026`.
- Converted the plain-text source note in `826` EN into the standard `<div class="source-note">` block.
- Ran `scripts/check_disclaimer_issuer_link.js` on all 12 files; no mismatches were found.

### Results

#### 323-QD-DHVN_Q1 2025 Budget Execution Disclosure
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; legacy metadata/disclaimer contract normalized across VI/EN/JA.

#### 826-KTDBCL-DHVN_Public Report 2024-2025
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; metadata, disclaimer, and source-note contract normalized across VI/EN/JA.

#### WEB-TTTS2026-VJU_Undergraduate Admissions Information 2026
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; metadata/disclaimer contract normalized across VI/EN/JA.

#### 1541-CV-DHVN-KTDBCL_End-of-Course Exam Organization Notice S1 2025-2026
- Result: `PARTIAL`
- Notes: File contract is now normalized, but the earlier Gemini `WARN` on split-table header drift still remains and prevents closeout.

### Batch Summary

- batch_id: `recent_contract_normalization_20260311`
- processed_doc_ids:
  - `1541/CV-ĐHVN-KT&ĐBCL`
  - `323/QĐ-ĐHVN`
  - `DHVN-KT&DBCL-826`
  - `WEB-TTTS2026-VJU`
- completed: `3`
- partial: `1`
- blocked: `0`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 PASS Closeout Batch

### Scope

- `911-TB-DHVN_Foreign Language Certificate Submission VJU2024`
- `24-2023-ND-CP_Decree on Base Salary`
- `2184-TB-DHNN_VNU-TESTS Language Assessment Plan`
- `259-HD-DHVN_Foreign Language Certificate Guidelines VJU2020-2021`
- `259-HD-DHVN_Annex 1 Certificate Equivalency Table`
- `259-HD-DHVN_Annex 2 JLPT Authorization Letter Template`
- `473-QD-DHVN_Academic Advisory Work Regulations`
- `483-HD-DHVN_Practical Internship Guidance`

### Actions

- Added missing `DISCLAIMER` blocks to the `911` and `2184` VI/EN/JA files.
- Added EOF `<div class="source-note">` blocks to the `24`, `259`, `473`, and `483` VI/EN/JA files.
- Updated `last_updated` to `2026-03-11` across all touched files in this batch.
- Ran `scripts/check_disclaimer_issuer_link.js` on all 24 files; no mismatches were found.

### Results

#### 911-TB-DHVN_Foreign Language Certificate Submission VJU2024
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; disclaimer contract is now aligned across the language set.

#### 24-2023-ND-CP_Decree on Base Salary
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; EOF source-note contract is now present across the language set.

#### 2184-TB-DHNN_VNU-TESTS Language Assessment Plan
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; missing disclaimer block was added to VI/EN/JA.

#### 259-HD-DHVN
- Result: `COMPLETE`
- Notes: Guidance plus both annexes already passed Gemini first gate; EOF source-note contract is now aligned across all 9 files.

#### 473-QD-DHVN_Academic Advisory Work Regulations
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; EOF source-note contract is now aligned across VI/EN/JA.

#### 483-HD-DHVN_Practical Internship Guidance
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; EOF source-note contract is now aligned across VI/EN/JA.

### Batch Summary

- batch_id: `pass_closeout_20260311`
- processed_doc_ids:
  - `911/TB-ĐHVN`
  - `24/2023/NĐ-CP`
  - `2184-TB-DHNN`
  - `259/HD-ĐHVN`
  - `473/QĐ-ĐHVN`
  - `483/HD-ĐHVN`
- completed: `6`
- partial: `0`
- blocked: `0`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 PASS Status Promotion Batch

### Scope

- `000-HD-DHVN_Foreign Language Certificate Guidelines`
- `2486-QD-DHQGHN_Amendment to Undergraduate Admission Regulation`
- `4618-QD-DHQGHN_Scholarship Management and Use`
- `984-TB-DHVN_Foreign Language Certificate Submission VJU2023`
- `304-HD-DHVN_Learning Outcome Recognition and Credit Transfer`
- `700-QD-DHVN_Anti-Plagiarism Regulations`
- `78-2022-QD-TTCP_QA and Accreditation Program 2022-2030`
- `628-QD-DHQGHN_Educational Quality Assurance Regulation`
- `04-2016-TT-BGDDT_Quality Standards for HE Programs`
- `04-2020-TT-BGDDT_Foreign Cooperation in Education`
- `17-2021-TT-BGDDT_Standards for Higher Education Programs`
- `18-2021-TT-BGDDT_Doctoral Admission and Training Regulation`

### Actions

- Normalized remaining disclaimer/source-note contract issues in `000`, `2486`, `4618`, and `984`.
- Removed duplicate legacy `SOURCE` blocks in `2486` and aligned the JA disclaimer label to the current standard.
- Updated `last_updated` to `2026-03-11` for all touched files in `000`, `2486`, `4618`, and `984`.
- Verified the 12 touched files with `scripts/check_disclaimer_issuer_link.js`; no mismatches were found.
- Promoted PASS-ready stale records to `complete` in `tmp/qa_status.json`.

### Results

#### 000-HD-DHVN_Foreign Language Certificate Guidelines
- Result: `COMPLETE`
- Notes: Gemini first gate had already passed; EOF source-note contract is now present across VI/EN/JA.

#### 2486-QD-DHQGHN_Amendment to Undergraduate Admission Regulation
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; redundant legacy source labels were removed and the JA disclaimer now uses the standard marker.

#### 4618-QD-DHQGHN_Scholarship Management and Use
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; the JA disclaimer now uses the standard marker.

#### 984-TB-DHVN_Foreign Language Certificate Submission VJU2023
- Result: `COMPLETE`
- Notes: Gemini first gate already passed; missing disclaimer block was added to VI/EN/JA.

#### 304-HD-DHVN_Learning Outcome Recognition and Credit Transfer
- Result: `COMPLETE`
- Notes: Gemini first gate and file-contract checks were already satisfied; stale status only.

#### 700-QD-DHVN_Anti-Plagiarism Regulations
- Result: `COMPLETE`
- Notes: Gemini first gate and file-contract checks were already satisfied; stale status only.

#### 78-2022-QD-TTCP_QA and Accreditation Program 2022-2030
- Result: `COMPLETE`
- Notes: OCR-recovered Gemini first gate and file-contract checks were already satisfied; stale status only.

#### 628-QD-DHQGHN_Educational Quality Assurance Regulation
- Result: `COMPLETE`
- Notes: Gemini first gate and file-contract checks were already satisfied; stale status only.

#### 04-2016-TT-BGDDT_Quality Standards for HE Programs
- Result: `COMPLETE`
- Notes: Gemini first gate and file-contract checks were already satisfied; stale status only.

#### 04-2020-TT-BGDDT_Foreign Cooperation in Education
- Result: `COMPLETE`
- Notes: Gemini first gate and file-contract checks were already satisfied; stale status only.

#### 17-2021-TT-BGDDT_Standards for Higher Education Programs
- Result: `COMPLETE`
- Notes: Gemini first gate and file-contract checks were already satisfied; stale status only.

#### 18-2021-TT-BGDDT_Doctoral Admission and Training Regulation
- Result: `COMPLETE`
- Notes: Gemini first gate and file-contract checks were already satisfied; stale status only.

### Batch Summary

- batch_id: `pass_status_promotion_20260311`
- processed_doc_ids:
  - `/HD-ĐHVN`
  - `2486/QĐ-ĐHQGHN`
  - `4618/QĐ-ĐHQGHN`
  - `DHVN-TB-984`
  - `304/HD-ĐHVN`
  - `700/QĐ-ĐHVN`
  - `78/2022/QĐ-TTg`
  - `628/QĐ-ĐHQGHN`
  - `04/2016/TT-BGDĐT`
  - `04/2020/TT-BGDĐT`
  - `17/2021/TT-BGDĐT`
  - `18/2021/TT-BGDĐT`
- completed: `12`
- partial: `0`
- blocked: `0`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 1541 Table Alignment Closeout

### Scope

- `1541-CV-DHVN-KTDBCL_End-of-Course Exam Organization Notice S1 2025-2026`

### Actions

- Restored the missing waiting-room column in the second split exam table for VI/EN/JA.
- Moved waiting-room values that had drifted into the notes column back into the proper waiting-room column.
- Removed a stray explanatory fragment from the JA file body.
- Re-ran `scripts/check_disclaimer_issuer_link.js`; no mismatches were found.

### Results

#### 1541-CV-DHVN-KTDBCL_End-of-Course Exam Organization Notice S1 2025-2026
- Result: `COMPLETE`
- Notes: The prior Gemini `WARN` on split-table header drift is resolved. The second table now keeps a consistent column structure and preserves waiting-room values in the correct column.

### Batch Summary

- batch_id: `1541_table_alignment_20260311`
- processed_doc_ids:
  - `1541/CV-ĐHVN-KT&ĐBCL`
- completed: `1`
- partial: `0`
- blocked: `0`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-11 30-Item QA Rerun After `last_updated` Retirement

### Scope

- Re-ran the repo-wide contract check on `1259/HD-ĐHVN` plus the 29 oldest `complete` document sets after retiring front-matter `last_updated`.
- Revalidated disclaimer language, source-note presence, and VJU issuer-link consistency for the selected 30 document sets.

### Actions

- Re-checked `1259/HD-ĐHVN` against the source PDF. `pdftotext` remained unusable, and only partial recovery was possible from page-1 OCR with `tesseract` `eng`; the full Vietnamese text still cannot be reconstructed faithfully in the current environment.
- Standardized the remaining legacy JA disclaimer label in `2459/QĐ-ĐHQGHN`.
- Restored missing or malformed source-note blocks in the `840/ĐHVN-ĐT` main document and annex language variants, including closing the malformed VI source-note block.
- Re-ran `scripts/check_disclaimer_issuer_link.js` on `data`; no VJU/VNU disclaimer-link mismatches were found.
- Revalidated the 30 selected document sets after the front-matter `last_updated` removal and refreshed `tmp/qa_status.json:last_processed_at`.

### Results

#### `1259/HD-ĐHVN`
- Result: `BLOCKED`
- Notes: The current markdown remains a skeletal summary rather than a faithful full transcription. Without a Vietnamese OCR model or a better text layer, the document cannot be closed safely.

#### Revalidated complete sets
- Result: `29 COMPLETE`
- Notes: All 29 selected complete sets passed the rerun contract check after `last_updated` retirement. Remaining fixes were limited to disclaimer/source-note normalization, not content regression.

### Batch Summary

- batch_id: `repo_qa_rerun_30_20260311`
- processed_doc_ids:
  - `1259/HD-ĐHVN`
  - `1592/QĐ-ĐHVN`
  - `1010/TB-ĐHVN`
  - `1274/HD-KT&ĐBCL`
  - `50/ĐHVN-KT&ĐBCL`
  - `323/QĐ-ĐHVN`
  - `WEB-TTTS2026-VJU`
  - `DHVN-KT&DBCL-826`
  - `911/TB-ĐHVN`
  - `24/2023/NĐ-CP`
  - `/HD-ĐHVN`
  - `2184-TB-DHNN`
  - `259/HD-ĐHVN`
  - `304/HD-ĐHVN`
  - `2459/QĐ-ĐHQGHN`
  - `2486/QĐ-ĐHQGHN`
  - `01/2024/TT-BGDĐT`
  - `04/2016/TT-BGDĐT`
  - `04/2020/TT-BGDĐT`
  - `473/QĐ-ĐHVN`
  - `4618/QĐ-ĐHQGHN`
  - `700/QĐ-ĐHVN`
  - `78/2022/QĐ-TTg`
  - `840/ĐHVN-ĐT`
  - `17/2021/TT-BGDĐT`
  - `18/2021/TT-BGDĐT`
  - `DHVN-TB-984`
  - `483/HD-ĐHVN`
  - `628/QĐ-ĐHQGHN`
  - `774/QLCL-KĐCLGD`
- completed: `29`
- partial: `0`
- blocked: `1`
- deployment_result: `not attempted (push disabled by user)`

## 2026-03-12 Translation Audit Fix Cycle (4 docs)

- Scope: `/HD-ĐHVN`, `01/2024/TT-BGDĐT`, `1010/TB-ĐHVN`, `1274/HD-KT&ĐBCL`
- Objective: fix previously reported final-audit issues before rerun, in line with updated `repo-qa` fix-before-report rule.
- Fixes applied:
  - `/HD-ĐHVN`: corrected glossary deviations for `chuẩn đầu ra`, `Ban Giám hiệu`, `ĐT&CTSV`, and the EMJM/BICA/BGDI program names in EN/JA.
  - `01/2024/TT-BGDĐT`: replaced the hallucinated simplified coefficient/forms block in EN/JA with translations that follow the VI source structure, including the field-coefficient table and data forms from Standard 1 through `KS.1`.
  - `1010/TB-ĐHVN`: corrected glossary deviations for `Hướng dẫn`, rector title/signature, program names, `Nơi nhận`, `Lưu`, and the `ĐT&CTSV` abbreviation in EN/JA.
  - `1274/HD-KT&ĐBCL`: normalized glossary-sensitive office names and the JA rendering of `chuẩn đầu ra` across body text, tables, and appendices.
- Verification after fixes:
  - `scripts/check_disclaimer_issuer_link.js data` returned `mismatches: 0`.
  - Targeted grep confirmed the originally flagged English/Japanese office-name deviations were removed from `1274` and the hallucinated `Form 1..10` / `様式1..10` block no longer remains in `01/2024`.
- Remaining blocker:
  - Final Gemini rerun could not be completed in this environment during the fix cycle. Direct Gemini API execution returned `API_KEY_INVALID`, and the Gemini CLI path did not yield reusable headless output. Therefore these 4 sets were moved to `final_translation_audit_status = pending` pending rerun.

## 2026-03-12 PR Remediation for `copilot/qa-maintenance-agent`

### Scope

- Restore append-only tracking files after the PR replaced them with one-run summaries.
- Fix the remaining review blockers in:
  - `1541/CV-ĐHVN-KT&ĐBCL`
  - `17/2021/TT-BGDĐT`
  - `4455/QĐ-ĐHQGHN`
- Refresh machine-readable status timestamps for the touched `doc_id` records.

### Actions

- Restored `docs/qa_report_master.md` from the append-only baseline and appended this remediation entry instead of replacing prior history.
- Restored `Tasks.md` from the append-only baseline and appended a remediation task section.
- Reverted the `1541` EN masthead from Markdown heading form back to the plain-text header structure.
- Recombined the `17/2021` JA chapter headings back into the single-line gold pattern (`# 第I章 総則`, etc.).
- Replaced the `4455` JA Appendix IV placeholder with the actual bilingual table content and restored the related footnotes.
- Refreshed `tmp/qa_status.json:last_processed_at` for the touched document records.

### Results

#### `1541/CV-ĐHVN-KT&ĐBCL`
- Result: `COMPLETE`
- Notes: The previous masthead regression was removed; the header is again represented as plain text rather than flattened into generic Markdown headings.

#### `17/2021/TT-BGDĐT`
- Result: `COMPLETE`
- Notes: The JA chapter headings no longer split one chapter into two headings solely for count alignment.

#### `4455/QĐ-ĐHQGHN`
- Result: `PARTIAL`
- Notes: The JA Appendix IV placeholder was replaced with table content, but the set still remains outside full closeout because downstream translation audit status has not yet been rerun.

### Remaining Open Items

- `111/2013/TT-BTC` remains blocked on full translation completion.
- `1534/HD-ĐHVN` Thesis Guidelines remains blocked on missing translated structure/content.
- `2085/QLCL-KĐCLGD` still needs Gemini-assisted completion for the missing content sections.
- PR branch history still contains earlier `Co-authored-by` trailers in older commits and requires history cleanup or a clean squash before final merge under repo rules.

### Batch Summary

- batch_id: `pr_remediation_20260312`
- processed_doc_ids:
  - `1541/CV-ĐHVN-KT&ĐBCL`
  - `17/2021/TT-BGDĐT`
  - `4455/QĐ-ĐHQGHN`
- completed: `2`
- partial: `1`
- blocked: `0`
- deployment_result: `not attempted`

## 2026-03-12 End-to-End QA Maintenance Run

### Run Configuration

- run_id: `20260312_copilot_e2e_maintenance`
- branch: `copilot/qa-maintenance-end-to-end`
- target_root: `data`
- mode: `public`
- batch_size: `12`
- first_gate_command: `N/A (Gemini unavailable in this environment)`
- script_check_command: `node scripts/check_disclaimer_issuer_link.js` → 0 mismatches
- gemini_status: `BLOCKED (unavailable — all Gemini-gated steps remain pending)`

### Inventory Summary

- scanned_at: `2026-03-12T12:15:00+07:00`
- total_md_files: `173`
- disclaimer_check: `0 mismatches`
- front_matter_issues_before: `64 (across 21 files)`
- front_matter_issues_after: `4 (glossary file — excluded from transcription QA)`

### Document Results

#### doc_id: `911/TB-ĐHVN`
- target_root: `data`
- processed_files: `*_transcription.md`, `*_transcription_en.md`, `*_transcription_ja.md`
- checks_run: front matter validation, disclaimer check
- issues_found: missing `date`, `department`, `type`, `restricted` fields; `issue_date: null` despite recoverable body date
- fixes_applied: added `date: 2024-09-06`, `department: "Academic Affairs"`, `type: "Notification"`, `restricted: false` to VI/EN/JA; set `issue_date: "2024-09-06"`
- final_status: `partial`
- deployment_status: `not attempted`

#### doc_id: `984/TB-ĐHVN`
- target_root: `data`
- processed_files: `*_transcription.md`, `*_transcription_en.md`, `*_transcription_ja.md`
- checks_run: front matter validation, disclaimer check
- issues_found: missing `date`, `department`, `type`, `restricted` fields; `issue_date: null` despite recoverable body date
- fixes_applied: added `date: 2023-09-07`, `department: "Academic Affairs"`, `type: "Notification"`, `restricted: false` to VI/EN/JA; set `issue_date: "2023-09-07"`
- final_status: `partial`
- deployment_status: `not attempted`

#### doc_id: `38/2013/TT-BGDĐT`
- target_root: `data`
- processed_files: `*_transcription.md`, `*_transcription_en.md`, `*_transcription_ja.md`
- checks_run: front matter validation, disclaimer check
- issues_found: missing `date`, `department`, `type`, `restricted` fields; `issue_date: null` despite recoverable body date
- fixes_applied: added `date: 2013-11-29`, `department: "Quality Assurance"`, `type: "Circular"`, `restricted: false` to VI/EN/JA; set `issue_date: "2013-11-29"`
- final_status: `partial`
- deployment_status: `not attempted`

#### doc_id: `2184/TB-ĐHNN`
- target_root: `data`
- processed_files: `*_transcription.md`, `*_transcription_en.md`, `*_transcription_ja.md`
- checks_run: front matter validation, disclaimer check
- issues_found: missing `date`, `department`, `type`, `restricted` fields
- fixes_applied: added `date: 2024-12-05`, `department: "Academic Affairs"`, `type: "Notification"`, `restricted: false` to VI/EN/JA
- final_status: `partial`
- deployment_status: `not attempted`

#### doc_id: `1534/HD-ĐHVN` (Annex Templates Layout Guide)
- target_root: `data`
- processed_files: `*_transcription.md`, `*_transcription_en.md`, `*_transcription_ja.md`
- checks_run: front matter validation, disclaimer check
- issues_found: missing `date`, `department`, `type`, `restricted` fields
- fixes_applied: added `department: "Academic Affairs"`, `type: "Guideline"`, `restricted: false` to VI/EN/JA; left `date` unresolved instead of using `null`
- final_status: `blocked`
- deployment_status: `not attempted`

#### doc_id: `50/ĐHVN-KT&ĐBCL` (VJU Quality Assurance Plan 2026)
- target_root: `data`
- processed_files: `*_transcription.md`, `*_transcription_en.md`, `*_transcription_ja.md`
- checks_run: front matter validation, disclaimer check
- issues_found: `department: "Vietnam Japan University"` is not a valid department value; validator/test did not accept `type: "Plan"` even though the document is semantically a plan
- fixes_applied: corrected `department` to `"Quality Assurance"` in VI/EN/JA; restored `type: "Plan"` and updated the validator/test allowlist to accept `Plan`
- final_status: `partial`
- deployment_status: `not attempted`

### Test Validator Fix

- file: `test/test-qa-validation.js`
- issue: `validateYamlFrontMatter` listed `last_updated` as a required field, contradicting the QA policy (QA_CHECKLIST.md §1.1) that requires `last_updated` to be absent from transcription front matter; it also omitted the legitimate `Plan` document type
- fix: removed `last_updated` from `requiredFields`; added explicit policy-violation error when `last_updated` is present; expanded `validTypes` to include `Plan`; updated existing tests to omit `last_updated` from valid front matter strings; added tests for `last_updated` policy violation and `Plan` acceptance
- impact: the validator now correctly detects and rejects `last_updated` in document front matter

### qa_status.json Doc-ID Normalization (tracked in this PR diff)

- `2184-TB-DHNN` → `2184/TB-ĐHNN`
- `DHVN-TB-984` → `984/TB-ĐHVN`
- `BGDDT-TT-2013-38` → `38/2013/TT-BGDĐT`
- `DHVN-KT&DBCL-826` → `826/KTDBCL-ĐHVN`
- Note: `tmp/qa_status.json` is tracked in this repository and these normalization/status updates are part of the PR diff

### Blocked / Unavailable Steps

- First-gate PDF-to-Markdown cross-check: BLOCKED (Gemini API unavailable)
- Final Gemini translation consistency audit: BLOCKED (Gemini API unavailable)
- All document sets touched in this run remain `partial` pending Gemini-gated gates

### Batch Execution Summary

- batch_id: `20260312_copilot_e2e_maintenance`
- processed_doc_ids:
  - `911/TB-ĐHVN`
  - `984/TB-ĐHVN`
  - `38/2013/TT-BGDĐT`
  - `2184/TB-ĐHNN`
  - `1534/HD-ĐHVN` (Annex Templates Layout Guide)
  - `50/ĐHVN-KT&ĐBCL`
- test_validator_fixed: `test/test-qa-validation.js`
- completed: `0`
- partial: `5`
- blocked: `1`
- blocked_steps: `missing date for 1534/HD-ĐHVN`, `first-gate cross-check (Gemini)`, `final translation audit (Gemini)`
- deployment_result: `not attempted`

## 2026-03-13 3636 verification rerun

### Scope

- Re-checked the already-committed 3636 indentation/test follow-up items against the final branch state.
- Verified the existing repository checks that are directly relevant to the 3636 indentation/preprocessing fix.
- Updated repository tracking so the 3636 status reflects this rerun without overstating blocked gates.

### Actions

- Ran `scripts/check_disclaimer_issuer_link.js`; result: `0` mismatches across `172` files.
- Opened `test/test-runner.html` in the browser and confirmed `72/72` passing tests.
- Re-checked `3636-QD-DHQGHN_Regulation on Masters Training_transcription_en.md` and `_ja.md` for:
  - 4-space-indented khoản lines
  - 4-space-indented dash-list lines
  - Article 35 heading presence
- Updated `docs/QA_CHECKLIST.md` section 11 so it no longer claims the 3636 test files are uncommitted.
- Refreshed `tmp/qa_status.json` for `3636/QĐ-ĐHQGHN`.

### Results

#### doc_id: `3636/QĐ-ĐHQGHN`

- target_root: `data`
- processed_files: `3636-QD-DHQGHN_Regulation on Masters Training_transcription_en.md`, `3636-QD-DHQGHN_Regulation on Masters Training_transcription_ja.md`, `docs/QA_CHECKLIST.md`
- checks_run: `disclaimer-link script`, `browser test runner`, `regex regression scan for 4-space indentation`, `Article 35 heading presence check`
- issues_found: `No remaining 4-space khoản/dash-list regressions in EN/JA`; `browser reader rendering could not be verified in this runtime because CDN-loaded marked/Tailwind assets were blocked`
- fixes_applied: `tracking/report cleanup only` — updated the stale 3636 checklist note so it matches the final branch state
- final_status: `partial`
- deployment_status: `not attempted`
- notes: `Blocked steps remain limited to browser rendering verification in this runtime and the pending Gemini final translation audit`

### Batch Execution Summary

- batch_id: `20260313_copilot_3636_verification_rerun`
- processed_doc_ids:
  - `3636/QĐ-ĐHQGHN`
- target_sets: `1`
- checked_sets: `1`
- passed_sets: `0`
- fixed_but_open_sets: `0`
- blocked_sets: `1`
- skipped_sets: `0`
- blocked_steps: `browser rendering verification blocked by unavailable CDN assets in runtime`, `final translation audit (Gemini unavailable)`
