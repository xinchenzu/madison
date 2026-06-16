# Chapter 5 — Data Pipelines and Workflow Automation
*Every external dependency is a contract. Every contract will change.*

---

## Learning Objectives

By the end of this chapter, you will be able to:

1. **Define** a data pipeline as a chain of contracts rather than a chain of code, and explain why the distinction matters for reliability.
2. **Identify** the four categories of data pipeline (ETL, stream-processing, workflow-automation, inference) and match each to the appropriate use case.
3. **Explain** the Apollo/Reddit case as a model of pipeline fragility cascading into brand damage, and apply the same pattern to two additional historical cases.
4. **Design** an n8n workflow with a scheduled trigger, at least one external data source, a transformation step, and a verifiable output destination.
5. **Document** every external dependency in a pipeline using the contracts framework: what the dependency provides, what it costs, what its failure mode is, and what the degraded mode is.
6. **Build** error handling and degraded modes into a live n8n workflow so that a contract failure produces graceful degradation rather than a crash.

---

## Prerequisites

This chapter assumes:

- You have completed the Career PRD in Chapter 4 — the contracts discipline introduced here is the same discipline, applied to technical infrastructure rather than product requirements.
- You have basic comfort with web APIs: you know what an HTTP request is, you have made at least one API call in code, and you have encountered a rate limit or authentication error at least once.
- You have a terminal and Docker installed, or access to a cloud hosting account. (The n8n setup walkthrough below covers both paths.)

If you are arriving without API experience, spend an hour with any free public API — the [Open-Meteo weather API](https://open-meteo.com/) requires no authentication and returns clean JSON — before continuing. The concepts in this chapter will make more sense after you have felt an API break under you.

---

## Why this chapter matters

Every tool you build in the Madison sequence — the Intelligence Agent, the Content Agent, the Research Agent — runs on a pipeline. The pipeline is what keeps the tool alive between the user's requests. It is what pulls fresh data, processes it through the AI layer, and writes results somewhere your product can use them.

You will spend roughly equal time in this course building the AI layer (Chapter 6) and building the pipeline that feeds it (this chapter). Most students underinvest in the pipeline because it feels like plumbing — unglamorous infrastructure compared to the language-model work. That is a mistake. The pipeline is where products die. Not from bad AI. From broken contracts upstream.

This chapter is also the place where the brand argument from Chapter 1 connects to the technical build sequence. A pipeline failure is a brand failure. Understanding why — and designing so that upstream failures do not become your product's failure — is engineering judgment and brand judgment at the same time.

---

## Part 1: What "Data Pipeline" Actually Means

The phrase *data pipeline* has, like most technical terms, multiple jobs. Before you can build one, you need to know which kind you are building — because the tooling, the failure modes, and the design discipline differ by type.

### The four categories

**ETL pipeline.** Extract, Transform, Load. The classical data-engineering pattern: pull data from sources, clean and reshape it, write it to a warehouse. SQL-heavy, batch-oriented, designed for large datasets that need to be reliable over years. The tools here are Airflow, dbt, Fivetran, Spark. Mature, well-understood, often run by dedicated data-engineering teams at large companies.

**Stream-processing pipeline.** Kafka, Flink, Spark Streaming. Continuous flows of events processed in near-real-time — think a payment fraud-detection system processing ten thousand transactions per second, or a social platform ingesting user behavior to update a recommendation model. High throughput, low latency, high operational complexity. Not where you are starting.

**Workflow-automation pipeline.** n8n, Zapier, Make. Visual node graphs that connect APIs, transform data, schedule tasks, and glue services together. Lighter than ETL, more general than stream processing. The right tool for small teams building products that depend on several external services. This is what you will build.

**Inference pipeline.** An LLM call, followed by embedding, followed by vector store retrieval, followed by a response. The newest member of the family, often assembled in Python with LangChain or LlamaIndex, sometimes embedded directly inside a workflow-automation tool. In Madison's architecture, the inference pipeline runs *inside* the workflow-automation pipeline — it is a step, not a separate system.

The Madison Intelligence Agent is a workflow-automation pipeline with an inference step. Its own README describes the workflow as forty-plus nodes in n8n connecting RSS feeds, the Google News API, Reddit, GPT-4o-mini, and Google Sheets. RSS ingestion → deduplication → LLM scoring → Sheet write. That is types 3 and 4 working together.

Your pipeline for this chapter will be the same shape: smaller, but architecturally identical.

### What unifies all four: the contract structure

Here is the principle that applies across all four types, and the one I want you to hold onto for the rest of this chapter.

A pipeline is not a piece of code. A pipeline is a *chain of contracts*.

Between every component in your pipeline — every node, every API call, every database write — there is a contract: how data flows, how often, in what shape, at what cost, subject to what rate limits, governed by what terms of service. The pipeline runs as long as every contract holds. The pipeline breaks when one contract fails — silently, loudly, or expensively, depending on how well you designed for it.

This is the definition I will use for the rest of this chapter, and the one I want you to use when you think about your own build:

> **A data pipeline is a chain of contracts, each owned by someone else, each subject to change without your consent.**

That last clause is the part engineering curricula tend to omit. The contracts are not yours. You depend on them; you do not control them. Designing a good pipeline means designing for the day a contract changes — not pretending it will not.

![Five-node pipeline diagram showing one contract failing and the downstream node degrading rather than crashing](images/05-data-pipelines-and-workflow-automation-fig-01.png)
*Figure 5.1 — A pipeline as a chain of contracts*| Type | Tools | Throughput / Frequency | Typical Use Case | Used in Madison? |
|---|---|---|---|---|
| **ETL** | Airflow · dbt · Fivetran | Batch | Large-dataset warehouse loads — analytics back-end | No |
| **Stream** | Kafka · Flink | Continuous | Real-time fraud detection, low-latency event processing | No |
| **Workflow automation** | n8n · Zapier · Make | Scheduled or event-driven | API glue + orchestration across SaaS endpoints | Yes |
| **Inference** | LangChain · LlamaIndex | On-demand | LLM calls + vector retrieval inside a workflow | Yes (as a step inside the workflow-automation pipeline) |

*Figure 5.2*


---

## Part 2: The Apollo Case — Pipeline Fragility as Brand Failure

On May 31, 2023, Christian Selig — the developer of Apollo, the most-beloved third-party Reddit app — published a number.

Reddit had announced new API pricing in April: $0.24 per 1,000 API calls. Selig had done the math. In the previous month, Apollo had made roughly seven billion API requests. Multiplying out: Apollo would owe Reddit approximately $20 million per year.

Apollo was a one-developer shop with revenue measured in the hundreds of thousands. Twenty million was not a price adjustment. It was a kill order, delivered with three months' notice. On June 8, Selig announced Apollo would shut down on June 30. Reddit Is Fun and ReddPlanet followed. On June 12, thousands of subreddits went dark in protest. By July, the third-party Reddit ecosystem that had existed for over a decade was effectively gone.

Apollo was not a bad pipeline. By most measures, it was an excellent one — performant, well-designed, beloved by users who had paid for it. What killed it was not the code. It was the contract.

### What the Apollo case teaches

There are several ways to read this story. The common technical reading is: "Apollo depended too heavily on a single external API." That is true, and we will return to it. But I want you to read it first as a brand story, because that is where the lesson lives for you.

When Reddit broke Apollo, public sympathy went to Selig. He had been transparent about the math — he published his calculations, walked through the numbers, explained exactly what had changed and why it made the product economically unviable. His transparency made the breakage legible. His reputation as a developer was — if anything — strengthened by the episode.

But Apollo *the product* still died. Users who had paid for Apollo's premium features lost their tool in thirty days. The brand damage to the *product* was total, even as the brand benefit to the *person* was real.

Most student builders do not have Selig's transparency or Selig's existing audience. When your pipeline breaks because an upstream service changes its terms, your users do not see "upstream contract failure." They see "this tool stopped working." The brand damage flows to the name on the front page — which is yours.

There is also an asymmetry worth naming: the upstream actor that caused the failure (Reddit) received diffuse reputational damage spread across a large company. The downstream tools that failed (Apollo, RIF, ReddPlanet) received concentrated, immediate, product-killing damage. Damage flows downhill in a contract chain.

This is the brand argument for pipeline discipline. You are not building a pipeline just because clean architecture is good practice. You are building a pipeline with explicit contracts and degraded modes because a pipeline failure is a brand failure, and the brand that pays is yours.

| Actor | Type of Damage | Duration |
|---|---|---|
| **Reddit** (upstream) | Diffuse reputational damage spread across a platform with hundreds of millions of users | Months-long blowback that recovered |
| **Apollo** (downstream) | Product death + total user loss within thirty days | Permanent |
| **Christian Selig** (personally) | Net positive — public sympathy, transparency rewarded, developer reputation strengthened | Ongoing — the personal brand benefit compounds even as the product is gone |

*Figure 5.3*

![Horizontal timeline of the Reddit API pricing change and its downstream cascade, April through July 2023](images/05-data-pipelines-and-workflow-automation-fig-04.png)
*Figure 5.4 — From contract change to product death — sixty days*### A worked pattern: three platform-API ruptures

The Apollo story is not unique. The same pattern has played out repeatedly across platforms, and the downstream damage is always concentrated in the same place: the products that depended on the contract.

**Reddit, June 2023.** Already covered. Seven-billion-call-per-month usage, new pricing at $0.24 per thousand calls, $20M/year implied cost, three-month shutdown. Third-party ecosystem dismantled. Reddit's stated rationale: monetize the API ahead of a public offering.

**Twitter, February 2023.** Twitter deprecated its free API tier, introducing new tiers starting at $100 per month for severely limited access and $42,000 per month for the enterprise tier that academic researchers had previously used at no cost. Hundreds of third-party tools — sentiment dashboards, archive bots, research instruments, Twitter clients — broke overnight or pivoted away from Twitter entirely. The brand damage to Twitter (by then rebranded as X) was real but diffuse across a platform with hundreds of millions of users; the brand damage to third-party tools was immediate and terminal for many.

**Heroku, November 2022.** Heroku ended its free tier, deprecating the free dyno that had hosted hundreds of thousands of student projects and side tools. Many tools built by students — tools that users had linked to, bookmarked, recommended — went offline because nobody renewed them on a paid plan. The user-facing failure was: "this app is no longer available." The upstream cause was a platform changing its pricing structure.

Three different industries, three different upstream actors, the same pattern. The platform makes a unilateral change; downstream products break; downstream users blame the tool, not the platform; brand damage flows to the smallest, most vulnerable actors in the chain.

Your pipeline will depend on at least one external service. That service's contract will change at some point. The question this chapter asks you to answer before you build is: *when it changes, what does your product do?*

---

## Part 3: Signaling Theory — The Machinery

### The contract documentation habit

The first discipline to install: document every external dependency before you build on it.

Not in a separate wiki nobody will read. In the workflow itself — as a node description, a README section, or a comment in the code. One sentence per dependency: *what this service gives us, what it costs, what the rate limit is, what the terms of service allow.*

This practice does three things. First, it forces you to confront the dependency consciously before you are dependent on it. The moment you write "Reddit API — 100 requests per minute per OAuth client, no cost currently, terms allow third-party clients, subject to change" you have acknowledged that "subject to change" is part of the contract. Second, it makes the contract visible to anyone who later works on the pipeline (including future-you, who will have forgotten). Third, it gives you a checklist to review when something breaks — you can scan the contracts document and quickly identify which dependency is likely at fault.

The Madison Intelligence Agent's repository includes this kind of documentation in its README. Study it before you write your own — not to copy it, but to see what information a well-documented pipeline contract looks like.

### The degraded mode requirement

The second discipline: every critical external dependency must have a degraded mode.

A *degraded mode* is the answer to: "What does my product do when this contract fails?"

"It crashes" is an answer. It is also a brand decision — you have decided that a contract failure in this dependency means your product stops working entirely. That may be acceptable for some dependencies. For others, it is not.

Better answers, in increasing order of robustness:

- **Informative failure.** The product detects the contract failure and shows the user a clear message about what is unavailable and why, rather than an opaque error. The user understands that *the tool* is not broken — *a service the tool depends on* is. This is what Selig did, and it is the minimum viable degraded mode.
- **Partial degradation.** The feature that depends on the broken contract is disabled; the rest of the product continues to work. If your tool has a "recent Reddit posts" feature and Reddit's API breaks, that feature shows "unavailable" while everything else continues.
- **Fallback source.** The dependency is replaced by an alternative when it fails. If Reddit's API breaks, fall back to Reddit RSS mirrors. If OpenAI's API is over rate limit, queue the request and retry with exponential backoff rather than returning an error.
- **Graceful staleness.** The product continues to serve the last successful result from before the contract failure, with a timestamp indicating when it was last updated. Stale data is usually better than no data, as long as the staleness is visible.

For your pipeline in this chapter, you are required to design and implement at least one of these for at least one critical dependency. The choice of which level is yours, but the choice must be documented.

### The contract monitoring habit

The third discipline: monitor the contracts, not just the workflow execution.

A workflow can be running successfully — every node returns 200, every connection passes data — while the underlying contract is silently degrading. Rate limits creep down. Pricing tiers shift. Schema fields are deprecated without announcement. Terms of service are updated.

You want alerts on contract-level events, not just on execution failures. n8n has error-workflow hooks for execution failures. External services typically have changelogs, status pages, and pricing-alert systems. OpenAI has billing alerts; many APIs have status pages with incident histories. Wire these up. A five-minute setup that routes an API's status-page RSS feed into your monitoring channel will tell you about a contract change before it crashes your pipeline.

| Discipline | What It Catches | How to Implement in n8n |
|---|---|---|
| **Document the contract** | Contract existence, terms, rate limits, and the explicit acknowledgement that the contract is *subject to change* | One-sentence note in the README and in each external-call node's description field — what the service gives, what it costs, what the rate limit is, what the terms allow |
| **Design a degraded mode** | What happens when a contract fails — keeps the failure from becoming a product death | Error-output port on the failing node + a fallback node that returns the degraded result (cached value, alternate source, or informative failure) |
| **Monitor the contract** | Silent contract drift — rate-limit creep, schema deprecation, pricing changes, ToS updates the workflow has no way to detect from a 200 response | Status-page RSS feed piped into your alerting channel + billing alerts on the upstream service + workflow-failure hook for execution-level errors |

*Figure 5.5*

| Mode Name | What It Does | Minimum Implementation | When to Use It |
|---|---|---|---|
| **Informative Failure** | Detects the contract failure and shows the user a clear message about what is unavailable and why, instead of an opaque error | Error output node + user-facing message string | All pipelines — the minimum bar |
| **Partial Degradation** | Disables the feature that depends on the broken contract; the rest of the product continues to work | Conditional branch after the error output that hides or grays out the affected feature | When only one feature depends on the failed contract |
| **Fallback Source** | Replaces the broken source with an alternative when the primary fails (RSS mirror, alt API, queued retry) | Second HTTP Request node wired to the error path of the first | When a genuine alternative data source exists for the same information |
| **Graceful Staleness** | Continues to serve the last successful result, with a visible timestamp indicating staleness | Cache node holding the last good result + UI element showing "last updated at …" | When stale data is meaningfully better than no data — most informational products |

*Figure 5.6*


---

## Part 4: n8n — The Workflow Automation Layer

n8n is an open-source workflow automation platform — fair-code licensed, self-hostable, with 400-plus pre-built integrations and the ability to run JavaScript or Python at any node. The Community Edition is free for self-hosted use via Docker; the Cloud version starts at €20 per month for managed hosting. For the build in this chapter, either works. Self-hosted gives you more control and costs nothing; cloud gives you less setup friction.

### The three core concepts

**Nodes** are operations. A node can be a webhook trigger, an HTTP request, a database write, a function that transforms data, an LLM completion call, a conditional branch, a loop, a delay — anything that takes input and produces output. Every step in your workflow is a node.

**Connections** are edges between nodes. Data flows along connections from an output port to an input port. The shape of the data changes as it passes through nodes — raw JSON from an API call becomes a cleaned object at a transformation node, becomes a row at a Sheet-write node. Connections make the data shape visible at each step.

**Workflows** are named graphs of nodes and connections, with a trigger — schedule, webhook, manual execution — that starts the chain. A workflow has a defined start and (usually) a defined end: a written result, a sent message, a downstream API call. Workflows can be exported as JSON, version-controlled, and shared.

### The independence property

The most important property n8n gives you is that each node is *independently replaceable*.

In a single Python script that makes ten API calls, processes data, and writes to a database, the dependencies are interwoven. Swapping one API for another may require touching half the file. Testing one step requires running the whole script. When a contract changes, the failure point is not obviously localized.

In an n8n workflow, every dependency is a node with a clearly defined input and output. When OpenAI raises its prices, you swap the OpenAI node for a Claude node. When Reddit's API breaks your ingestion step, you swap the Reddit node for an RSS-feed node or remove the dependency entirely — without touching the transformation or output nodes. The visual graph forces the contracts to be explicit, which means you can reason about them before they fail and isolate them when they do.

This is not a claim that n8n is superior to Python for all purposes. It is a claim about the learning objective here: making the contracts visible so you build with awareness of what you depend on. A Python pipeline can achieve the same result with sufficient discipline. n8n makes the discipline structural rather than optional.

![Side-by-side comparison of a Python script with interwoven dependencies and an n8n workflow with each contract as a separately-labeled, replaceable node](images/05-data-pipelines-and-workflow-automation-fig-07.png)
*Figure 5.7 — Python script vs. n8n workflow*![Annotated mockup of the n8n node editor — node panel, node with input/output ports, connection between nodes, and the description field where contracts are documented](images/05-data-pipelines-and-workflow-automation-fig-08.png)
*Figure 5.8 — The n8n node editor*### Setting up n8n

**Self-hosted (Docker):**

```bash
docker volume create n8n_data

docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
```

Navigate to `http://localhost:5678`. Create an account on first launch. Your workflows persist in the `n8n_data` volume.

**Cloud:**

Create an account at [n8n.io](https://n8n.io). The free trial is sufficient for this chapter. Note that the cloud instance will have the same interface as the self-hosted version — switching between them requires only exporting and re-importing the workflow JSON.

### Your first workflow: anatomy

Open n8n and create a new workflow. You are going to build the following chain:

```
[Schedule Trigger] → [HTTP Request: RSS Feed] → [Code: Transform + Deduplicate] → [Google Sheets: Write Row]
```

This is the minimal pipeline that does real work: it runs on a schedule, pulls fresh data from an external source, transforms it into a structured form, and writes it somewhere you can verify.

**Node 1 — Schedule Trigger.** Add a Schedule Trigger node. Set it to run every hour. This is your pipeline's heartbeat — the contract with *time* that says "this runs regularly." Document it: "Runs hourly; if n8n is down, the run is skipped and not retried unless you add a catch-up mechanism."

**Node 2 — HTTP Request.** Add an HTTP Request node. Set it to GET a public RSS feed. The [Hacker News RSS feed](https://news.ycombinator.com/rss) (`https://news.ycombinator.com/rss`) is a good starting point: no authentication, stable schema, low rate-limit risk. This is your first external contract. Document it in the node description: "Hacker News RSS — no auth required, no rate limit documented, stable Atom format since 2006, risk: low."

**Node 3 — Code (Transform).** Add a Code node (JavaScript). Write a function that takes the RSS items, extracts the fields you care about (title, link, timestamp), deduplicates by URL, and returns a clean array of objects. Here is a minimal starting point:

```javascript
const items = $input.all();
const seen = new Set();
const cleaned = [];

for (const item of items) {
  const url = item.json.link;
  if (!seen.has(url)) {
    seen.add(url);
    cleaned.push({
      title: item.json.title,
      url: item.json.link,
      published: item.json.pubDate,
      processed_at: new Date().toISOString()
    });
  }
}

return cleaned.map(c => ({ json: c }));
```

**Node 4 — Google Sheets.** Add a Google Sheets node. Connect your Google account using n8n's credential manager. Point the node at a sheet you have created. Set the operation to Append Row. Map the fields from Node 3 (title, url, published, processed_at) to columns in the sheet.

Run the workflow manually. Open the sheet. Verify that rows appeared. If they did, you have a working pipeline.

### Worked Example: Reading the Madison Intelligence Agent's Workflow

Open `pantry/madison/Intelligence-Agent/n8n_workflow.json` in a text editor or import it into your n8n instance.

Trace the data flow:

1. **Trigger** — a schedule node, configured to run every six hours.
2. **Ingestion** — multiple parallel branches, each pulling from a different source: RSS feeds, Google News API, Reddit API. Each branch is a separate HTTP Request node. Each external dependency is isolated. If the Reddit node fails, the RSS branches continue.
3. **Deduplication** — a Code node that hashes item URLs and filters items already seen in a previous run, using a Google Sheet as a lightweight seen-URL store.
4. **LLM Scoring** — an OpenAI node that sends each new item's title and description to GPT-4o-mini with a prompt that returns a relevance score and a summary. This is the inference step running *inside* the workflow.
5. **Output** — a Google Sheets node that appends scored items to the main content Sheet, and a second node that writes a run-log entry with the timestamp and item count.

What Madison's workflow does that your first pipeline does not: it has parallel ingestion branches (so no single source is a single point of failure), it uses a seen-URL store (so items are not duplicated across runs), and it has a run log (so you can see when the workflow ran and what it produced, independently of whether the workflow is currently running).

These are the design choices you should be studying, not the node count. Each choice is a response to a failure mode: parallel branches answer "what if one source goes down?"; the seen-URL store answers "what if an item appears in multiple sources?"; the run log answers "how do I know if the pipeline ran today?"

Your pipeline in this chapter does not need all of these. It needs to be shaped like Madison's — trigger, ingestion, transformation, output, with documented contracts and at least one degraded mode.

![Madison Intelligence Agent workflow architecture — schedule trigger, parallel ingestion branches, deduplication, LLM scoring, dual outputs](images/05-data-pipelines-and-workflow-automation-fig-09.png)
*Figure 5.9 — Madison Intelligence Agent architecture*| Design Choice | Failure Mode It Addresses | What Happens Without It |
|---|---|---|
| **Parallel ingestion branches** | A single source goes down or rate-limits | Entire pipeline stalls waiting for one dead API; daily output is empty |
| **Seen-URL store** | The same item appears in multiple sources | Same item is scored and written multiple times, inflating apparent results and wasting LLM calls |
| **Run log** | The pipeline silently stops running (cron daemon dies, credentials expire, scheduler skipped) | No visibility into whether the workflow executed today — you find out when a downstream user complains |
| **Six-hour schedule (not real-time)** | Rate-limit exhaustion on high-frequency sources and runaway LLM cost | Hitting API caps mid-day, getting throttled or billed unexpectedly, and producing degraded output for the rest of the window |

*Figure 5.10*


---

## Part 5: Building for Contract Failure

You have a working pipeline. Now harden it.

### Adding error handling

n8n has two mechanisms for error handling: **node-level error outputs** and **error workflows**.

Every node in n8n can be configured to have an error output in addition to its normal output. Connect the error output of your HTTP Request node to a Code node that logs the error and returns a fallback value. This is how you implement degraded mode at the node level.

```javascript
// Fallback node after a failed HTTP Request
return [{
  json: {
    error: true,
    message: "RSS fetch failed — returning empty item list",
    fallback: [],
    timestamp: new Date().toISOString()
  }
}];
```

For pipeline-level error handling, go to Workflow Settings in n8n and set an Error Workflow — a separate workflow that runs whenever the main workflow fails. A minimal error workflow sends you a notification (email, Slack, webhook) with the workflow name, the node that failed, and the error message. This is your contract-monitoring hook.

### Breaking the pipeline deliberately

Before this chapter's exercises, do this: break one of your contracts deliberately, and observe what happens.

Disconnect your API key. Point the HTTP Request node at a URL that returns 404. Comment out the deduplication logic so items are written twice. In each case, watch what the workflow does.

This practice — deliberate failure injection — is how you learn what your degraded modes actually do, as opposed to what you think they do. Most pipeline bugs surface not when the happy path runs but when an unexpected input arrives. The only way to know your error handling works is to trigger the errors intentionally before users do it accidentally.

Fix each break so the workflow fails gracefully. The criterion for graceful failure: the user-facing product continues to work (possibly in a degraded state), and you receive an alert that tells you exactly what failed.

### Choosing stable contracts

One judgment call this chapter cannot make for you: which external services to depend on at all.

The Apollo case suggests a heuristic: prefer contracts that have been stable for a long time, that are maintained by multiple parties rather than a single platform, and that do not depend on the platform's business model remaining aligned with your use.

RSS and Atom feeds satisfy all three criteria. They have been stable since the early 2000s. They are implemented by thousands of services independently. No single platform can unilaterally change the specification in a way that breaks your pipeline. They are limited — RSS gives you titles, links, descriptions, timestamps, and little else — but they are stable.

Twitter's API, Reddit's API, and Heroku's free tier failed all three criteria. Each was controlled by a single platform. Each was cheap or free because the platform had not yet monetized the capability. Each was changed unilaterally when the business model shifted.

The strategic trade-off is real: richer contracts are usually less stable, and more stable contracts are usually less rich. RSS is stable but limited. The Twitter academic API, when it existed, was rich but fragile. There is no formula that resolves this trade-off for every product. There is only the discipline of making the choice consciously, documenting it, and building degraded modes for the contracts you know are fragile.

---

## Integration: Pipeline as Brand Asset

Let me close the technical argument with the brand argument, because they are the same argument.

Your pipeline is not infrastructure separate from your product. It *is* your product, from the perspective of reliability. The data your tool surfaces — how fresh it is, how accurate, how consistently available — is part of the product experience. A pipeline that runs silently and reliably is invisible to the user, which is exactly what you want. A pipeline that fails is immediately visible, and the user sees *your product fail*, not the upstream contract that broke.

The design disciplines from Part 3 — document the contracts, build degraded modes, monitor the contracts — are not just technical practices. They are the practices that determine whether your product survives an upstream change. Apollo had none of them specifically designed for Reddit's API pricing change because that particular failure mode was genuinely unpredictable in its magnitude, though not in its possibility.

The Creative Engineer from Chapter 1 — the one who Ideates, Builds, Brands, and Ships — builds the pipeline that is still running six months after launch, because they designed for the contracts they do not control.

![Three-level stack — contract documentation (why), degraded mode design (what), contract monitoring (how)](images/05-data-pipelines-and-workflow-automation-fig-11.png)
*Figure 5.11 — Pipeline disciplines as a three-level stack*| Pipeline Property | Brand Consequence |
|---|---|
| **Silent, reliable execution** | Product feels trustworthy — the user never thinks about the infrastructure |
| **Undocumented dependency breaks** | The user sees *your product* fail, not the upstream service that actually broke the contract |
| **Informative failure mode** | The user understands what happened and why; the brand survives the incident, sometimes strengthened by it (the Selig effect) |
| **No degraded mode** | The user loses trust in the product entirely — the brand pays the full cost of an upstream change you did not control |
| **Run log + monitoring** | You catch failures before users do — brand-damaging incidents become internal incidents you fix before anyone outside notices |

*Figure 5.12*


---

## Exercises

### Warm-Up

**W1.** In two sentences, explain the difference between a *pipeline as code* and a *pipeline as a chain of contracts*. Why does the distinction matter for reliability?
*(Tests Objective 1 — core definition comprehension)*

**W2.** Name the four categories of data pipeline introduced in Part 1. For each, write one sentence describing the appropriate use case and one sentence describing a use case where it would be the wrong choice.
*(Tests Objective 2 — pipeline taxonomy)*

**W3.** Read the Apollo/Reddit case summary in Part 2. In three sentences: what was the contract, who owned it, and why did the downstream product fail even though the downstream product itself was well-built?
*(Tests Objective 3 — contract-failure comprehension)*

---

### Application

**A1.** Build the four-node n8n pipeline described in Part 4 (Schedule → RSS fetch → Transform → Sheets write). Run it successfully. Then document the three external contracts it depends on using the format introduced in Part 3: what the service provides, what it costs, what its rate limit is, and what your degraded mode is. Submit the workflow JSON and the contracts document.
*(Tests Objectives 4 and 5 — live pipeline build with documentation)*

**A2.** Add error handling to the HTTP Request node in your pipeline: wire its error output to a fallback node that logs the error and returns an empty item list rather than crashing the workflow. Trigger the error deliberately by pointing the node at a bad URL. Document what happened and verify the workflow continued gracefully.
*(Tests Objective 6 — degraded mode implementation)*

**A3.** Apply the contract-stability heuristic from Part 5 to a product you use regularly. Identify two external contracts that product depends on — one that scores well on stability (controlled by multiple parties, long history, not dependent on a single platform's business model) and one that scores poorly. Justify each assessment. (200 words.)
*(Forces application of the stability heuristic outside the chapter's provided examples)*

**A4.** The Twitter API rupture in February 2023 affected academic researchers differently from commercial tool developers. For academic researchers, the Twitter academic API had been free and provided data access that was used for peer-reviewed research. For commercial developers, the API had been free at low volumes, incentivizing building tools that depended on it. Write a 200-word analysis: was the brand damage to these two groups symmetric? Which group had better degraded modes available to them, and why?
*(Applies the pipeline-fragility-as-brand-failure argument to a second case with a twist — asymmetry between user types)*

---

### Synthesis

**S1.** A classmate argues: "The Apollo case is a business failure, not a pipeline-design failure. No pipeline design could have saved Apollo if Reddit was going to charge $20 million per year. The lesson is: don't depend on platforms that can charge you whatever they want, not: build better pipelines." Evaluate this argument. Is it correct? Partially correct? What does it get right and what does it miss? (300 words.)
*(Tests whether the student can distinguish the brand argument from the technical argument — and hold both simultaneously)*

**S2.** You are advising a student who is building a social-media sentiment dashboard for a specific platform. The platform currently offers a free API tier. Apply all three disciplines from Part 3 — contract documentation, degraded mode design, contract monitoring — to their pipeline. What would you tell them to document, what degraded modes would you design, and what monitoring would you wire up? (400 words.)
*(Integrates all three disciplines into a novel design problem)*

**S3.** The Chapter 1 brand argument (Spence signaling, four verbs, archetype) and the Chapter 5 pipeline argument both treat reliability as a strategic asset. Write a 300-word synthesis: how does a well-designed pipeline support or undermine the Brand and Ship verbs from the four-verb framework? Use at least one specific example — from the Apollo case or from your own build.
*(Cross-chapter integration — connects pipeline discipline to the Creative Engineer brand argument)*

---

### Challenge

**C1.** The chapter argues that RSS is a more stable contract than platform APIs because it is maintained by multiple parties and not dependent on a single business model. Design a counter-argument: are there conditions under which a platform API would be a *more* stable contract than RSS? What would those conditions look like? Be specific — name a hypothetical or real API, describe the conditions, and explain why the stability calculus would differ. (400 words.)
*(Stress-tests the stability heuristic — pushes toward conditions where the rule breaks)*

**C2.** The degraded-mode taxonomy in Part 3 has four levels: informative failure, partial degradation, fallback source, and graceful staleness. Design a fifth degraded mode that does not fit neatly into any of these four categories. Describe a pipeline and a contract-failure scenario where your fifth mode would be the best response, and explain why the existing four levels would be insufficient. (400 words.)
*(Open-ended — tests whether the student has understood the design principle deeply enough to extend it)*

---

## LLM Exercise — Self-as-Project

**Project:** Self-as-Project
**What you're building this chapter:** A **Career Pipeline** spec — the workflow that takes you from "discovers an opportunity" to "signs an offer," with documented contracts and degraded modes at each stage.
**Tool:** Claude Project (the same project you opened in Chapter 1) for the design pass; Cowork for building the actual tracking spreadsheet.

**The Prompt:**

```
Design my job-search pipeline using the Chapter 5 framework: every external
dependency is a contract; every contract can break; every break needs a
degraded mode.

The pipeline has eight stages. For each stage, document:
  - What enters
  - What exits
  - What external contract it depends on
  - What failure mode would break it
  - What my degraded mode is

Stages to map:

1. DISCOVERY. How opportunities reach me: job boards, LinkedIn alerts,
   referrals, recruiter cold-outreach, my own published work.

2. QUALIFICATION. The PRD-filter pass from Chapter 4: does this role fit
   my Career PRD's IN list? Yes/no decision, documented.

3. APPLICATION. Resume tailoring, cover note, portfolio link, network
   warm-up — the actual work of applying.

4. NETWORK ACTIVATION. Reaching out to anyone I know at the company
   before or during the application.

5. INTERVIEW PREPARATION. Research, talking points, technical practice.

6. INTERVIEW EXECUTION. The conversation itself and follow-up notes.

7. NEGOTIATION. Offer, counter, accept or decline.

8. ONBOARDING / TRANSITION. First thirty days at the new role, or
   post-decline cleanup if I turned it down.

For each stage:
  - Input?
  - Output?
  - External contract it depends on? (Example: "LinkedIn's recruiter
    messaging works"; "the company's ATS parses my PDF correctly";
    "my reference at Company X is reachable and willing.")
  - Most likely failure mode?
  - Degraded mode?

Then recommend three tools or systems that would automate or augment this
pipeline. Options: Notion database, Airtable tracker, Cowork-managed
spreadsheet, n8n workflow, custom Claude Project. For each tool, name the
specific stage(s) it would help and what the setup cost is.

Output a Markdown document called "Career Pipeline — [my name]" with the
eight stages mapped and the tool recommendations.
```

**What this produces:** A documented pipeline you can build a tracking system around. Many students stall at Stage 5 (interview preparation) without realizing it — the pipeline view exposes where the bottleneck actually lives. The contracts document from this exercise also forces you to see your job search as a system with failure modes, not just a list of applications you have sent.

**How to adapt:** If you are not currently job-searching, replace the eight stages with the equivalent for your goal. PhD application: discovery → qualification → personal-statement drafting → recommender activation → submission → interview → decision. Research grant: opportunity identification → fit assessment → proposal drafting → reviewer activation → submission → revision → notification. The framework transfers; the stage labels change.

**Preview of next chapter:** Chapter 6 builds an AI-powered career-search assistant on top of this pipeline — the intelligence layer that turns the raw job-opportunity data your pipeline surfaces into scored, ranked, personalized leads.

---

## Chapter Summary

Before this chapter, "data pipeline" probably meant "the script that pulls the data." After this chapter, it means something more specific and more useful: *a chain of contracts you do not own, each of which can change without your consent.*

Here is what you can now do that you could not before:

- **Define** a pipeline in contract terms, not code terms, and explain why that framing changes how you design.
- **Recognize** pipeline fragility as brand risk — the Apollo pattern, where upstream contract failure becomes your product's failure in the eyes of your users.
- **Build** a working n8n workflow with a trigger, an external data source, a transformation step, and a verified output destination.
- **Document** external dependencies as contracts with known costs, rate limits, and failure modes.
- **Design** degraded modes so that contract failures produce graceful degradation rather than crashes.

The one idea from this chapter that matters most: **your pipeline is a brand asset, and every undocumented external dependency is a liability you have not yet priced.**

The common mistake to watch for: building the happy path and skipping error handling because "it works in testing." Testing is always the happy path. Production is where the contracts fail. The pipeline that works in testing and breaks in production is the pipeline that was never designed for the day Reddit changed its pricing.

The Feynman test: can you explain to someone with no software background why Apollo failed even though it was well-built? If you can — if you can convey the contract-chain structure and the downstream brand damage — you understand this chapter.

---

## Connections Forward

Chapter 6 adds the AI-intelligence layer to the pipeline you built here. The n8n workflow becomes the scaffold; the LLM call becomes a node in it. The contracts discipline from this chapter extends to the inference pipeline: OpenAI's API has a rate limit, a price, and terms of service. It is a contract like any other. Document it; design a degraded mode; monitor it.

The question this chapter raised but did not resolve: how do you choose between a rich-but-fragile contract and a limited-but-stable one? Chapter 6 will push on this specifically in the context of LLM provider choice — the trade-off between capability and reliability has a direct analog in the model-selection decision you will make for your intelligence layer.

The question this chapter leaves entirely open: what does pipeline design look like at scale — beyond one developer's n8n instance? The canonical reference is Martin Kleppmann's *Designing Data-Intensive Applications*, second edition. You will not need it for the build sequence in this course. You will need it the moment you move beyond it.

---

**What would change my mind:** Strong evidence that students learn pipeline-design skills better through code-first frameworks (Python plus a few well-chosen libraries) than through visual workflow tools like n8n. The current pedagogical claim is that visual workflows make the contracts structurally visible in a way that script-based pipelines require deliberate discipline to achieve. That claim is plausible but not settled by evidence I have seen. If you find a study, bring it.

**Still puzzling:** The trade-off between contract-stability and feature-richness when choosing external services has no clean rule of thumb. RSS is stable but limited. Twitter's academic API, when it existed, was rich but fragile. The formula "prefer stability" is right as a default and wrong in specific cases — a product that genuinely requires rich social-data has no stable-contract alternative. I do not yet have a principled framework for when to accept the fragile-but-rich contract and when to walk away. Open problem.

---

*Tags: data-pipeline · n8n · workflow-automation · reddit-api · apollo · pipeline-fragility · external-contracts · degraded-mode · brand-reliability · ETL · inference-pipeline · madison-intelligence-agent · INFO-7375*

---

## AI Wayback Machine

The ideas in this chapter didn't appear from nowhere. **Joan Robinson** developed the formal economics of imperfect competition in the 1930s — the math of markets where one party has dominant power because the other parties have nowhere else to go. *Monopsony*, the term she coined, is exactly the structure of the Apollo–Reddit relationship: one buyer (the platform), many sellers (the third-party developers), no realistic alternative. Robinson's argument is that under monopsony the dominant party can change the contract terms unilaterally, capturing surplus that would be split under genuine competition. Apollo experienced that capture in real time, in 2023, with three months' notice. The chapter's design disciplines — document the contract, build degraded modes, monitor for drift — are how a pipeline survives life inside someone else's monopsony.

![Joan Robinson, c. 1940s. AI-generated portrait based on a public domain photograph (Wikimedia Commons).](images/joan-robinson.jpg)
*Joan Robinson, c. 1940s. AI-generated portrait based on a public domain photograph.*

**Run this:**

```
Who was Joan Robinson, and how does her concept of *monopsony* connect to the platform-vs-third-party-developer dynamic the Apollo case illustrates — where the upstream party can change the contract unilaterally because the downstream party has no realistic alternative? Keep it to three paragraphs. End with the single most surprising thing about her career or ideas.
```

→ Search **"Joan Robinson economist"** on Wikipedia after you run this. See what the model got right, got wrong, or left out.

**Now make the prompt better.** Try one of these:

- Ask it to explain *monopsony* in plain language, as if you've never taken an economics course
- Ask it to compare Robinson's analysis of dominant-buyer markets to the platform-API ruptures (Reddit, Twitter, Heroku) named in this chapter
- Add a constraint: "Answer as if you're writing the risk section of a PRD for a tool that depends on a single platform API"

What changes? What gets better? What gets worse?

## Prompts

Use these prompts with Claude to generate interactive D3 v7 versions of the
figures in this chapter. Each produces a standalone HTML file you can open
in a browser and modify freely.

**Prerequisites:** Load `brutalist/D3.md` and `brutalist/DESIGN.md` into
your Claude project context before using these prompts. They define the stack,
naming conventions, color system, and typography the figures use.

---

### Figure 1 — Five-node pipeline diagram showing one contract failing and the...

Create a standalone D3 v7 HTML figure for "Five-node pipeline diagram showing one contract failing and the...". Use a horizontal bar chart with 5 labeled categories and approximate values from 0 to 100. Marks: bars, direct labels, and concise value labels. Channels: category position, quantitative bar length, and color for the primary highlighted item only. Use a zero baseline. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/05-data-pipelines-and-workflow-automation-fig-01.html`

---

### Figure 4 — Horizontal timeline of the Reddit API pricing change and its downstream...

Create a standalone D3 v7 HTML figure for "Horizontal timeline of the Reddit API pricing change and its downstream...". Use a horizontal bar chart with 5 labeled categories and approximate values from 0 to 100. Marks: bars, direct labels, and concise value labels. Channels: category position, quantitative bar length, and color for the primary highlighted item only. Use a zero baseline. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/05-data-pipelines-and-workflow-automation-fig-04.html`

---

### Figure 7 — Side-by-side comparison of a Python script with interwoven dependencies...

Create a standalone D3 v7 HTML figure for "Side-by-side comparison of a Python script with interwoven dependencies...". Use a horizontal bar chart with 5 labeled categories and approximate values from 0 to 100. Marks: bars, direct labels, and concise value labels. Channels: category position, quantitative bar length, and color for the primary highlighted item only. Use a zero baseline. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/05-data-pipelines-and-workflow-automation-fig-07.html`

---

### Figure 8 — Annotated mockup of the n8n node editor

Create a standalone D3 v7 HTML figure for "Annotated mockup of the n8n node editor". Use a horizontal bar chart with 5 labeled categories and approximate values from 0 to 100. Marks: bars, direct labels, and concise value labels. Channels: category position, quantitative bar length, and color for the primary highlighted item only. Use a zero baseline. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/05-data-pipelines-and-workflow-automation-fig-08.html`

---

### Figure 9 — Madison Intelligence Agent workflow architecture

Create a standalone D3 v7 HTML figure for "Madison Intelligence Agent workflow architecture". Use a horizontal bar chart with 5 labeled categories and approximate values from 0 to 100. Marks: bars, direct labels, and concise value labels. Channels: category position, quantitative bar length, and color for the primary highlighted item only. Use a zero baseline. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/05-data-pipelines-and-workflow-automation-fig-09.html`

---

### Figure 11 — Three-level stack

Create a standalone D3 v7 HTML figure for "Three-level stack". Use a horizontal bar chart with 5 labeled categories and approximate values from 0 to 100. Marks: bars, direct labels, and concise value labels. Channels: category position, quantitative bar length, and color for the primary highlighted item only. Use a zero baseline. Include title, desc, role="img", aria-labelledby, ResizeObserver redraw, dark mode CSS variables, and reduced-motion safeguards. Deliver as one HTML file with inline CSS and the D3 7.9.0 CDN.

> Reference implementation: `d3/05-data-pipelines-and-workflow-automation-fig-11.html`
