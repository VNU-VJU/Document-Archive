---
name: gemini-qa
description: Gemini-runtime execution rules for repo-qa in the VJU document archive.
---

# Gemini QA

Use this child skill only from `repo-qa` when the current runtime is Gemini.

## Purpose
- Apply the same repository QA contract under a Gemini runtime.
- Keep fidelity and readability above speed.
- Prevent checklist weakening during model-driven review.

## Gemini Runtime Rules
1. Follow the parent `repo-qa` workflow and do not reinterpret checklist failures as acceptable.
2. Re-open `skills/repo-qa/SKILL.md` and the active checklist section roughly every 5 minutes or after major workflow transitions.
3. Use model judgment only after deterministic repository checks where possible.
4. Do not fabricate large missing sections, tables, or appendices from inference alone.
5. If a required capability is unavailable, mark only that step blocked and continue all other safe work.

## Gemini Review Focus
- source fidelity and translation fidelity
- structural consistency across languages
- readability without silent omissions
- layout fidelity in public-document structures
- exact agreement between report claims and final repository state

## Gemini PR Rule
- PR title/body must be in English.
- User-facing summary must be in Japanese.
- Do not add `Co-authored-by`.
- Create a PR when requested, but do not merge unless separately asked.
