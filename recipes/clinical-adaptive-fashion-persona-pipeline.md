# Clinical Adaptive Fashion Persona Pipeline

## Purpose

Combines CDC data, local healthcare CSV records, Hugging Face clinical notes, and breast-cancer research RSS to build quality-checked adaptive-fashion persona evidence. The business question is: what signals from these specific sources are reliable enough for a human boss to use in clinical persona synthesis decisions?

## Source Inventory

| Source Node | Node Type | Source URL or Path | Human Check |
|---|---|---|---|
| Fetch data.cdc.gov source | `n8n-nodes-base.httpRequest` | `https://data.cdc.gov/resource/hksd-2xuw.json?$limit=100` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch datasets-server.huggingface.co source | `n8n-nodes-base.httpRequest` | `https://datasets-server.huggingface.co/rows?dataset=AGBonnet%2Faugmented-clinical-notes&config=default&split=train&offset=0&limit=100` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Fetch sciencedaily.com source | `n8n-nodes-base.httpRequest` | `https://www.sciencedaily.com/rss/health_medicine/breast_cancer.xml` | Confirm source is allowed, current, and rate-safe before live fetch. |
| Read/Write Files from Disk | `n8n-nodes-base.readWriteFile` | `/Users/rakshakrishnamoorthy/.n8n-files/kaggle_healthcare.csv` | Confirm local file exists in the Madison repo or replace machine-specific path. |
| Extract from File | `n8n-nodes-base.extractFromFile` | `[TO DO] Source not explicit in n8n node.` | Human must identify or replace this source before first real run. |

## Node Classification

| Node Name | Node Type | Classification |
|---|---|---|
| When clicking 'Execute workflow' | `n8n-nodes-base.manualTrigger` | conductor |
| Fetch data.cdc.gov source | `n8n-nodes-base.httpRequest` | ingest |
| Code: Parse CDC | `n8n-nodes-base.code` | gigo |
| Code: Parse Kaggle | `n8n-nodes-base.code` | gigo |
| Fetch datasets-server.huggingface.co source | `n8n-nodes-base.httpRequest` | ingest |
| Code: Parse HuggingFace | `n8n-nodes-base.code` | gigo |
| Fetch sciencedaily.com source | `n8n-nodes-base.httpRequest` | ingest |
| Code: Parse RSS | `n8n-nodes-base.code` | gigo |
| Code: Merge + Quality Check | `n8n-nodes-base.code` | gigo |
| Code: Summary Report | `n8n-nodes-base.code` | gigo |
| Read/Write Files from Disk | `n8n-nodes-base.readWriteFile` | ingest |
| Extract from File | `n8n-nodes-base.extractFromFile` | ingest |
| Merge | `n8n-nodes-base.merge` | conductor |
| Code: Generate HTML Report | `n8n-nodes-base.code` | gigo |
| Read/Write Files from Disk1 | `n8n-nodes-base.readWriteFile` | tool |
| Sticky Note | `n8n-nodes-base.stickyNote` | conductor |

## Inputs

| Input | Type | Source | Required? |
|---|---|---|---|
| Original n8n workflow JSON | JSON | `pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json` | Yes |
| Fetch data.cdc.gov source | Source payload | `https://data.cdc.gov/resource/hksd-2xuw.json?$limit=100` | Yes |
| Fetch datasets-server.huggingface.co source | Source payload | `https://datasets-server.huggingface.co/rows?dataset=AGBonnet%2Faugmented-clinical-notes&config=default&split=train&offset=0&limit=100` | Yes |
| Fetch sciencedaily.com source | Source payload | `https://www.sciencedaily.com/rss/health_medicine/breast_cancer.xml` | Yes |
| Read/Write Files from Disk | Source payload | `/Users/rakshakrishnamoorthy/.n8n-files/kaggle_healthcare.csv` | Yes |
| Extract from File | Source payload | `[TO DO] Source not explicit in n8n node.` | Yes |

## Existing Persona Categories To Preserve

The current pipeline should keep its clinically grounded persona categories:

- Post-mastectomy
- Alopecia
- Diabetes
- Adaptive mobility
- Cancer recovery

These categories are useful as the first clinical-persona layer, but they should not be treated as product opportunities by themselves. The next version should translate personas into overlapping functional needs, reimbursement paths, purchase constraints, and style gaps.

## Possible Directions: Backward-Design Market Research Extension

The current source mix is useful for building clinically grounded personas, but it is not enough to decide what adaptive-fashion products are viable. Market-size estimates for adaptive clothing are too aggregated to guide product decisions. The better question is condition-level product opportunity: which users share functional needs, which products can be reimbursed or bought with HSA/FSA funds, and which style gaps are large enough to matter.

### Direction 1: Chest Access And Soft Front Panel

Conditions served: post-mastectomy, chemotherapy port access, shoulder or rotator-cuff recovery, arthritis, and older women who cannot comfortably reach behind the back.

Shared requirements:

- Front closure
- Soft chest or scar-area panel
- Upper-chest pocket or access point
- Loose neckline

Human checks:

- Confirm whether the persona records distinguish mastectomy, active treatment, port access, and recovery stage.
- Check Medicare, insurance, and mastectomy-bra coverage before assuming retail price sensitivity.
- Add `[TO DO]` source rows for Medicare DME reimbursement and mastectomy bra coverage.

Product direction: a style-forward front-closure top with soft chest panel, internal port or prosthesis-compatible pocketing, and a purchase flow that understands reimbursement.

### Direction 2: Waistband-Free Device And Abdomen Access

Conditions served: insulin pump and CGM users, ostomy patients, post-abdominal surgery, postpartum and pregnant users, and people with IBS/Crohn's.

Shared requirements:

- No tight waistband pressing on abdomen
- Upper-hip or abdomen access panel
- Non-restrictive midsection
- Comfort while seated for long periods

Human checks:

- Preserve the diabetes persona, but expand it from diagnosis into device-wearing context: CGM, insulin pump, tubing, skin irritation, and clothing-access friction.
- Add `[TO DO]` source rows for HSA/FSA eligibility databases, CGM/pump user forums, ostomy communities, and product reviews.
- Separate medical-device access needs from general comfort claims.

Product direction: HSA/FSA-eligible device-friendly bottoms with soft waistband, discreet access panel, and seated-comfort cut.

### Direction 3: One-Hand And Low-Dexterity Closures

Conditions served: stroke survivors, Parkinson's disease, MS, ALS, limited dexterity broadly, and hand/wrist surgery recovery.

Shared requirements:

- No small buttons or fine-motor fasteners
- Magnetic, velcro, or large-tab closures
- One-hand operation
- Long need duration for progressive or chronic conditions

Human checks:

- Add `[TO DO]` source rows for dexterity-focused condition data and product-review evidence.
- Keep this direction separate from cancer-recovery personas unless the records actually show hand/arm mobility constraints.
- Review magnetic closures for safety and contraindications before product recommendation.

Product direction: mainstream-looking shirts, jackets, and tops with low-dexterity closures and non-medical styling.

### Direction 4: Seated Fit And Mobility

Conditions served: wheelchair users, mobility impairment, pressure sore prevention, catheter/toileting access needs, and people who sit for extended periods.

Shared requirements:

- Higher back rise and lower front rise
- No back pockets or pressure points
- No inner seam pressure on thighs
- Side zippers or access for toileting/catheter needs where appropriate
- Longer back hem and shorter front hem

Human checks:

- Preserve adaptive-mobility personas, but require co-design evidence before making product claims.
- Add `[TO DO]` source rows for wheelchair user interviews, style-preference surveys, and product-return/review data.
- Separate functional fit from fashion identity; both matter.

Product direction: style-first seated-fit pants co-designed with wheelchair users, positioned as fashion rather than medical equipment.

### Direction 5: Sensory And Texture-Sensitive Clothing

Conditions served: autism spectrum, ADHD, fibromyalgia, sensory processing disorder, chronic pain, and users who experience distress from tags, seams, fabric texture, or tight elastic.

Shared requirements:

- Tagless construction
- Flat seams or seamless construction
- Soft, predictable fabrics
- Consistent sizing
- No tight elastic or scratchy fibers

Human checks:

- Add `[TO DO]` source rows for sensory-friendly adult clothing reviews and community-language research.
- Avoid relying on diagnosis labels alone; many buyers will search for "sensory-friendly," "ultra-soft," or "no tags" rather than "adaptive."
- Check adult-market evidence separately from children's sensory clothing.

Product direction: adult sensory-friendly basics framed in comfort and reliability language rather than medicalized adaptive language.

## Better Sources For The Next Data Pipeline

The next version should keep the existing clinical-persona records but add sources that answer product viability questions:

| Research Need | Better Source | Why It Matters | Human Check |
|---|---|---|---|
| Product frustration | Amazon reviews for adaptive clothing categories | Reveals fit, style, price, return, and purchase-process pain | Review samples manually; do not treat star ratings alone as evidence. |
| Organic unmet need language | Reddit and community forums: diabetes, breast cancer, ostomy, wheelchairs, MS | Shows how users describe needs before brands translate them | Respect community rules; avoid extracting private or sensitive stories without care. |
| Reimbursement ceiling | Medicare DME fee schedules and mastectomy bra coverage | Shows price constraints and viable reimbursement paths | Verify codes and state-specific rates before business claims. |
| HSA/FSA eligibility | HSA/FSA product eligibility databases | Changes effective buyer price and purchase behavior | Confirm whether eligibility requires prescription or letter of medical necessity. |
| Workarounds | Community posts about clothing hacks | Shows what users are already solving manually | Treat workarounds as design clues, not proof of universal need. |
| Style gap | Product reviews and co-design sessions | Separates medical utility from fashion identity | Require direct user feedback before final product direction. |

## Backward-Design Product Opportunities To Test

1. Insurance-pathway mastectomy and port-access top: reimbursement infrastructure already exists; gap is style, fit quality, and purchase accessibility.
2. HSA/FSA-eligible device-friendly bottoms: diabetes and ostomy device users have overlapping access and waistband needs; HSA/FSA eligibility can lower effective price.
3. Style-first seated-fit pant: functional products exist, but fashion identity is still poorly served; co-design is the differentiator.

These are not yet verified outputs of the current workflow. They are candidate directions for the next iteration and should be marked `[TO DO] needs source evidence` until the pipeline adds review, forum, reimbursement, and co-design data.

## Phase Gates

1. Source identity gate: verify that `pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json` is the intended workflow and that this recipe title describes the actual work. Test: `test -f "pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json"` and compare the Source Inventory against the original n8n JSON. Human capacity: [PF], [TO].
2. Source permission gate: approve, replace, or mark `[TO DO]` for every URL, API, RSS feed, local file, and machine-specific path. Test: gate decision recorded in `logs/gate-decisions/`; any embedded credential is redacted and migrated to an env var before live use. Human capacity: [EI].
3. Sample ingest gate: run every ingest node in local/sample handoff mode before live requests. Test: `python3 <ingest-script> --no-write` exits successfully and reports `live_call_performed: false`. Human capacity: [PA], [TO].
4. Data-shape gate: raw outputs parse as JSON and contain the fields needed by cleanup. Test: `python3 -m json.tool <raw-output>` plus human spot check of three records. Human capacity: [PA], [IJ].
5. Cleanup rule gate: GIGO outputs expose record count, rejects, duplicates, missing fields, and required-field assumptions. Test: inspect `data/verified/clinical-adaptive-fashion-persona-pipeline/`; if critical fields are undefined, add `[TO DO] define required fields` and stop. Human capacity: [IJ].
6. Claim gate: reports must separate source-backed claims from interpretation. Test: every finding cites source/verified records or is marked `[TO DO] needs evidence`. Human capacity: [IJ], [EI].
7. Live-action gate: file exports, dashboards, emails, model calls, API writes, and local machine paths remain local handoff contracts until explicitly approved. Test: output contract says `approved_for_live_action: false` unless signed off. Human capacity: [EI].

## Steps

1. Step name: Verify provenance and source intent. Labor: AI plus Human. Script called: none. Input: `pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json`. Output: provenance and title check. Where output goes: `logs/`. Human check: confirm this recipe is named for the work it does and not for a submitter or assignment label.
2. Step name: Fetch data.cdc.gov source. Labor: AI with Human gate. Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-data-cdc-gov-source.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
3. Step name: Code: Parse CDC. Labor: AI with Human gate. Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-cdc.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
4. Step name: Code: Parse Kaggle. Labor: AI with Human gate. Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-kaggle.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
5. Step name: Fetch datasets-server.huggingface.co source. Labor: AI with Human gate. Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-datasets-server-huggingface-co-source.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
6. Step name: Code: Parse HuggingFace. Labor: AI with Human gate. Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-huggingface.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
7. Step name: Fetch sciencedaily.com source. Labor: AI with Human gate. Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__fetch-sciencedaily-com-source.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
8. Step name: Code: Parse RSS. Labor: AI with Human gate. Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-parse-rss.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
9. Step name: Code: Merge + Quality Check. Labor: AI with Human gate. Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-merge-quality-check.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
10. Step name: Code: Summary Report. Labor: AI with Human gate. Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-summary-report.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
11. Step name: Read/Write Files from Disk. Labor: AI with Human gate. Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__read-write-files-from-disk.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
12. Step name: Extract from File. Labor: AI with Human gate. Script called: `scripts/ingest/clinical-adaptive-fashion-persona-pipeline__extract-from-file.py`. Input: prior step output or approved local sample. Output: ingest result JSON. Where output goes: `data/raw/`. Human check: confirm source URL/path, allowed live access, credential handling, and sample-vs-live boundary.
13. Step name: Code: Generate HTML Report. Labor: AI with Human gate. Script called: `scripts/gigo/clinical-adaptive-fashion-persona-pipeline__code-generate-html-report.py`. Input: prior step output or approved local sample. Output: gigo result JSON. Where output goes: `data/verified/`. Human check: inspect cleanup assumptions, rejects, duplicates, missing fields, and critical-field definitions.
14. Step name: Read/Write Files from Disk1. Labor: AI with Human gate. Script called: `scripts/tools/clinical-adaptive-fashion-persona-pipeline__read-write-files-from-disk1.py`. Input: prior step output or approved local sample. Output: tool result JSON. Where output goes: `logs/`. Human check: approve output contract and ensure no live export/write/send occurs without sign-off.
15. Step name: Produce human report. Labor: AI with Human review. Script called: none; conductor fills `reports/templates/clinical-adaptive-fashion-persona-pipeline.md`. Input: run log and verified outputs. Output: decision report. Where output goes: `reports/generated/`. Human check: read sources, findings, anomalies, `[TO DO]` gaps, and decisions before treating findings as evidence.

## Human Review Checklist

- Confirm the title and purpose match what the workflow actually does.
- Confirm each source is approved, still reachable, and appropriate for the intended use.
- Replace machine-specific local paths with Madison repo paths or mark `[TO DO] replace source`.
- Replace any credential embedded in the original n8n JSON with an environment variable before live use.
- Inspect at least three raw records and three verified records before accepting a run.
- Review duplicate, rejected, and missing-field counts.
- Confirm the final report separates evidence from interpretation.
- Confirm no live export, API call, file write outside the repo, or credentialed action occurs without approval.

## Output Contract

### Agent output

The agent output goes to `logs/clinical-adaptive-fashion-persona-pipeline-[DATE].json` and contains `workflow`, `source_json`, `source_inventory`, `mode`, `steps_completed`, `records_seen`, `rejects`, `duplicates`, `handoffs`, `flags`, `todo_items`, `stop_conditions`, and `generated_at`.

### Human report

The human report goes to `reports/generated/clinical-adaptive-fashion-persona-pipeline-[DATE].md`. It surfaces the source list, cleanup changes, supported claims, `[TO DO]` gaps, and decisions that require a human boss.

## Stop Conditions

- Stop if the recipe title or purpose does not match the original workflow intent.
- Stop if `pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json` is missing or cannot be parsed.
- Stop if a source URL/path is unknown, stale, private, machine-specific, credential-bearing, or not approved; add `[TO DO] replace source` and halt live mode.
- Stop if the workflow does not define critical fields for validation; add `[TO DO] define required fields` before production.
- Stop if GIGO outputs do not expose record counts, rejects, duplicates, or missing fields.
- Stop if a final claim is not traceable to source or verified records.
- Stop if generated reports would expose credentials, private tokens, private local paths, or unapproved personal data.
- Stop if any live model, database, email, dashboard, file export, or API write is requested without explicit human approval.

## Provenance

Original workflow JSON: `pantry/krishnamoorthyraksha_333078_41797107_KrishnaMoorthy_Raksha_A3_Workflow-1.json`
