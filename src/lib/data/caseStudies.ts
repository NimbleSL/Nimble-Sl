import type { ICaseStudy } from '@/lib/types/caseStudy';

export const caseStudies: ICaseStudy[] = [

  // ─── FEATURED ──────────────────────────────────────────────────────────────

  {
    slug: 'payflow-uae-neobank',
    title: 'PayFlow',
    subtitle: 'Launching a UAE Neobank from Zero to 10,000 Active Users in 6 Months',
    client: 'Finverse Technologies (UAE)',
    industry: 'FinTech / Digital Banking',
    industryTag: 'FinTech',
    tagVariant: 'blue',

    challenge: `Finverse Technologies came to us with a clear vision and a hard deadline: launch a consumer neobank in the UAE within 18 weeks to hit an investor milestone. Their target segment was South Asian diaspora workers — a group sending billions of dollars home every year through expensive traditional banking channels, with no access to multi-currency wallets or competitive remittance rates.

The problem was not the vision. The problem was everything else. Finverse had no engineering team, no existing codebase, and no experience navigating UAE financial regulations. The Abu Dhabi Global Market (ADGM) sandbox requirements alone — KYC obligations, data residency rules, transaction monitoring thresholds — would take most teams months just to understand, let alone implement.

On top of regulatory complexity, the product needed to support four currencies (AED, PKR, BDT, INR) with real-time FX rates, biometric identity verification via UAE PASS, a business banking module for SME accounts, and a consumer mobile app that could compete with the slick UX expectations of a digitally native audience. Building this from scratch in 18 weeks with a team assembled from scratch was not feasible. They needed a different approach entirely.`,

    approach: `From the first discovery call, we knew the only path to success was using our pre-built PayFlow digital banking platform as the foundation. PayFlow already contained the core banking primitives — wallet engine, transaction ledger, KYC pipeline, role-based admin dashboard — representing roughly 14 weeks of equivalent build time. That head start was what made the 18-week deadline possible.

We began Week 1 with a regulatory deep-dive alongside Finverse's legal counsel. Rather than treating compliance as a final-stage checkbox, we embedded ADGM requirements directly into the architecture from day one: AES-256 encryption at rest, AWS Bahrain (me-south-1) for data residency, transaction monitoring hooks for CBUAE thresholds, and a full audit trail on every financial event. Our DevOps engineer set up the infrastructure and CI/CD pipeline in parallel with feature development — no waiting for "later."

The team of 7 ran two parallel tracks simultaneously. The mobile track built the Flutter iOS and Android apps with UAE PASS biometric integration and a streamlined onboarding flow we tested on real devices with Emirati SIMs. The backend track extended PayFlow's multi-currency engine to handle live FX rates from a licensed data provider, built the business banking module with corporate KYC, and hardened the REST API for production load. Weekly client demos kept Finverse's founding team aligned and reduced late-stage surprises to zero.`,

    solution: `The delivered product was a fully branded neobank — Finverse — built on PayFlow's foundation. The Flutter mobile apps (iOS and Android) guide a new user through biometric KYC in under 90 seconds using UAE PASS integration. Once onboarded, they can hold and convert between AED, PKR, BDT, and INR at live market rates with a margin significantly below what banks charge for the same corridor.

The multi-currency engine processes cross-border settlements in under 4 seconds on average — a stark contrast to the 2–3 business day delays typical of SWIFT transfers. The business banking module supports corporate account creation, bulk payment scheduling, and multi-signatory approvals, giving SME owners a genuine alternative to branch-based banking. A React admin dashboard gives Finverse's compliance officers real-time transaction monitoring, AML flagging, and one-click KYC review.

The entire infrastructure was deployed on AWS Bahrain with auto-scaling groups, RDS PostgreSQL Multi-AZ for data resilience, and a CloudWatch observability stack that fires PagerDuty alerts before users notice an issue. We documented every component fully and handed over a 60-page technical runbook, ensuring Finverse's future in-house team could own the platform from day one without being dependent on us.`,

    techStack: ['.NET', 'Next.js', 'Angular', 'Flutter', 'PostgreSQL', 'AWS', 'UAE PASS', 'Stripe'],
    metrics: [
      { value: '10,000+', label: 'Active users at 6 months', sub: 'vs 5,000 milestone target' },
      { value: '16 wks', label: 'Delivered ahead of 18-week deadline' },
      { value: '<4s', label: 'Average cross-border settlement time' },
      { value: '$52K', label: 'Total project cost', sub: 'vs $300K+ US/UK agency quotes' },
    ],
    results: [
      'Delivered fully branded neobank in 16 weeks — 2 weeks ahead of investor deadline',
      '10,000+ active users acquired in first 6 months, doubling the original milestone target',
      'Cross-border AED→BDT/PKR settlements completing in under 4 seconds on average',
      'UAE PASS biometric KYC reduced onboarding drop-off — median completion under 90 seconds',
      'Business banking module opened an SME revenue stream the client had not planned at kickoff',
      'Zero critical production incidents in the first 90 days post-launch',
      'Full technical documentation handed over — Finverse hired 2 in-house engineers who took ownership immediately',
    ],
    testimonial: {
      quote: `NimbleSL's PayFlow platform saved us 14 weeks and roughly $250K compared to building from scratch. More importantly, they understood the UAE regulatory environment and moved fast without cutting corners on compliance. Our investors were genuinely surprised we shipped on time.`,
      name: 'Hamdan Al Rashid',
      title: 'CEO & Co-founder',
      company: 'Finverse Technologies',
    },
    relatedProduct: 'payflow',
    demoUrl: 'https://payflow.nimblesl.com',
    featured: true,
  },

  {
    slug: 'insureflow-claims-ai',
    title: 'InsureFlow',
    subtitle: 'How an InsurTech Reduced Claim Processing Time by 70% and Fraud Detection to 96%',
    client: 'Blackstone Vale Insurance (UK)',
    industry: 'Insurance / InsurTech',
    industryTag: 'InsurTech',
    tagVariant: 'purple',

    challenge: `Blackstone Vale Insurance processed over 4,200 claims per month across their UK health and motor portfolios. Their legacy system was not a system in any modern sense — it was a patchwork of Access databases, emailed PDFs, and manual investigator notes accumulated over 15 years. Every claim required in-person or postal submission, took 8–12 business days to process, and involved at minimum three handoffs between departments before a decision was reached.

The fraud problem was quietly catastrophic. Blackstone Vale's rule-based fraud detection system — essentially a checklist of red flags built in 2009 — was catching 71% of fraudulent claims. The other 29% were slipping through. Internal estimates put the annual cost of undetected fraud at £2.3 million. The deeper problem was that the fraud they were missing wasn't simple individual fraud — it was collusive fraud: organised rings of claimants, medical professionals, and repair shops filing coordinated, individually plausible claims that no rule-based system could correlate. Humans were missing it too.

The FCA's evolving explainability requirements added a third layer of complexity. Any AI decision that affected a customer claim could be challenged. A black-box model — even a highly accurate one — was off the table. Whatever we built had to be auditable at the decision level. Investigators needed to be able to explain, in writing, why a claim was flagged. The solution couldn't just be accurate; it had to be trustworthy enough to stand up in a regulatory dispute.`,

    approach: `We began with a 3-week discovery and data audit. Blackstone Vale's data science team had never attempted ML on their claims data before, so the first job was understanding what they actually had. We ingested 28 months of historical claims — structured fields, free-text medical narratives, vehicle damage descriptions, and adjuster notes — and ran exploratory analysis to map quality issues, class imbalance (fraud represented 6.4% of claims), and feature distribution across policy types.

The AI architecture we designed was deliberately sequential rather than a single model. First, an Autoencoder identifies statistical anomalies — claims that deviate significantly from historical patterns in ways that are hard to specify in rules. Second, a fine-tuned Bio_ClinicalBERT model processes the free-text medical narratives in health claims, flagging language patterns associated with fraudulent or exaggerated injury descriptions that human investigators typically miss on a first read. Third — and most importantly for collusive fraud — a Graph Attention Network maps the relationships between claimants, medical providers, repair facilities, and legal representatives across all claims. Claims that appear individually legitimate but share suspicious network connections are surfaced with high confidence.

Every flagged claim is accompanied by a SHAP (SHapley Additive exPlanations) report generated in plain English: which features contributed to the fraud score, how much each contributed, and what similar legitimate claims look like. This was not optional — it was the design requirement that unlocked FCA compliance. Investigators received training on reading SHAP outputs, and within 3 weeks of go-live they were using the explanations to make faster, more confident decisions than they had before.`,

    solution: `InsureFlow replaced Blackstone Vale's fragmented claims operation entirely. Policyholders can now submit claims digitally via the Flutter mobile app — photographing documents, recording damage, and uploading medical certificates from their phone. OCR processing extracts structured data automatically, removing the manual data entry step that had been a source of both delay and error. An automated premium calculation engine cross-references policy terms without human involvement for straightforward claims.

The AI fraud pipeline runs in the background on every submission, returning a fraud probability score, a breakdown of contributing signals, and a recommended action (approve, investigate, escalate) within 30–60 seconds. The React investigator dashboard displays all flagged claims in a prioritised queue, with the full SHAP explanation visible alongside the claim history and a one-click audit trail that records every investigator action for FCA reporting purposes. Claims below the fraud threshold that meet all automated eligibility criteria can now be approved without human review — a straight-through processing rate of 34% within 60 days of launch.

Integration with Blackstone Vale's existing policy management system was handled via REST APIs, meaning there was no forced migration of the policy database — a requirement the client had emphasised from the start. The deployment was rolled out in two phases: first the digital submission and case management layer (weeks 1–10), then the AI fraud pipeline (weeks 11–16), allowing investigators to build trust with the platform before relying on AI-generated scores in their decisions.`,

    techStack: ['.NET', 'Angular', 'Flutter', 'PostgreSQL', 'PyTorch', 'FastAPI', 'GNN', 'SHAP'],
    metrics: [
      { value: '96%', label: 'Fraud detection accuracy', sub: 'vs 71% legacy system' },
      { value: '70%', label: 'Faster claim processing', sub: '8–12 days → 2–3 days' },
      { value: '30–60s', label: 'AI fraud scoring per claim' },
      { value: '0', label: 'False negatives in 90-day post-launch audit' },
    ],
    results: [
      'Fraud detection accuracy improved from 71% to 96% — catching 135% more fraudulent claims',
      'Average claim turnaround reduced from 8–12 days to 2–3 days across all policy types',
      'AI scoring completes in 30–60 seconds, enabling same-session investigator decisions',
      'SHAP explanations satisfied FCA explainability requirements — zero compliance escalations in 6 months',
      'Graph Neural Network identified 3 active collusive fraud rings that had evaded detection for over 2 years',
      'Zero false negatives recorded across a full 90-day post-launch audit of 4,200+ claims',
      '34% of simple claims now approved via straight-through processing — no investigator required',
    ],
    testimonial: {
      quote: `We came to NimbleSL with a half-broken fraud system and a 6-week compliance deadline. They shipped a GNN-based model that hit 96% accuracy in production. The SHAP explainability layer is what sealed it for our FCA audit. No UK shop quoted under £200K — Nimble built it for a fifth of that.`,
      name: 'Sarah Patel',
      title: 'VP Engineering',
      company: 'Blackstone Vale Insurance',
    },
    relatedProduct: 'insureflow',
    demoUrl: 'https://insureflow.nimblesl.com',
    featured: true,
  },

  {
    slug: 'fieldtrack-logistics-automation',
    title: 'FieldTrack',
    subtitle: 'Cutting Field Operations Costs by 43% Across a 200-Person Sales Force',
    client: 'Meridian Consumer Goods (Malaysia)',
    industry: 'Logistics / Field Operations',
    industryTag: 'Logistics',
    tagVariant: 'emerald',

    challenge: `Meridian Consumer Goods operates a 200-person field sales force across six Malaysian states, distributing FMCG products to over 4,000 retail outlets. When we first spoke to their operations director, she described the daily reality of running this team as "organised chaos held together by WhatsApp groups and prayer." Stock tracking happened on paper forms that field reps filled out at the end of each day. Receipts were handwritten. Daily sales figures were phoned in to a central coordinator who typed them into Excel.

The reconciliation process was the most painful symptom. Every week, the finance team spent three full working days cross-referencing paper forms against phone-in reports against physical inventory counts. Discrepancies — common, because manual data entry errors are inevitable — triggered investigation cycles that could stretch to a fortnight. By the time management had a clear picture of what had actually been sold and where, the data was two weeks old and the opportunity to act on it had passed.

Connectivity compounded everything. A significant portion of Meridian's rural routes pass through areas with poor or absent mobile data coverage. Any app that relied on a constant internet connection would fail for hours at a time. Previous attempts to digitise field operations — the company had tried two off-the-shelf tools in the prior three years — had collapsed at this hurdle. The field reps didn't trust technology that lost their data when signal dropped. Whatever we built had to work offline, completely and reliably, before a single rep would adopt it.`,

    approach: `Offline-first architecture was not a feature request for this project — it was a hard architectural constraint that shaped every technical decision. We chose Flutter for the mobile app specifically because its local SQLite database allows full application functionality with zero network dependency. Every action a field rep takes — logging a customer visit, adjusting stock quantities, processing a sale, recording a return — is written to local storage first. The network sync is a background process, not a requirement for the core workflow.

We spent week two of discovery riding along on actual field routes with three Meridian reps. This was not optional. Understanding the physical reality of the job — the sequence of stops, the types of data entered at each point, the time pressure of a 40-outlet daily route — directly shaped the UX decisions. The app needed to complete the most common actions (visit log, stock count, sale confirmation) in under 60 seconds per stop. Anything slower would be ignored in the field. We ran paper prototype tests with reps before writing a single line of code.

The backend architecture prioritised conflict resolution — the genuinely hard problem in any offline-first system. When two reps update stock levels for the same product at the same warehouse within the same offline window, the sync logic needs to resolve the conflict correctly without losing data. We implemented an event-sourcing pattern on the NestJS backend: every field action is an immutable event with a timestamp, device ID, and sequence number. Conflicts are resolved deterministically, not by last-write-wins, ensuring the reconciled state always reflects what actually happened on the ground.`,

    solution: `The delivered system replaced paper entirely across all 200 field reps in a 6-week phased rollout. The Flutter app guides reps through their daily route — customer visit log, stock count at point of delivery, sale confirmation with digital receipt, and end-of-day reconciliation — in a workflow designed around the sequence they already follow. The app functions completely offline for 8+ hours; we have never recorded a work stoppage due to connectivity since go-live.

The React admin console gave Meridian's management team capabilities they had never had before. Real-time GPS tracking shows the live position and status of every field rep on a map. Route efficiency scoring highlights reps who are spending disproportionate time at low-value stops. Automated daily stock reconciliation replaces the three-day weekly finance exercise — the numbers are ready by 6pm every day, reconciled automatically, with exceptions surfaced for human review. The CEO told us in our first post-launch review that this visibility felt like "turning on the lights."

Integration with Meridian's existing ERP system was delivered via a REST sync layer that pushes confirmed sales orders and stock movements in near real-time. The ERP receives clean, validated data rather than re-keyed Excel rows, eliminating the category of errors that had been causing the longest reconciliation delays. Meridian's IT team owns the integration and can modify the field mappings without our involvement — a deliberate design choice that avoided vendor lock-in.`,

    techStack: ['NestJS', 'Angular', 'Flutter', 'MySQL', 'Redis', 'SQLite', 'Google Maps API'],
    metrics: [
      { value: '43%', label: 'Operational cost reduction', sub: 'Q1 post-launch' },
      { value: '8+ hrs', label: 'Offline operation without any sync' },
      { value: '0', label: 'Manual calculation errors post-launch' },
      { value: '60%', label: 'Faster average field sales cycle' },
    ],
    results: [
      '43% reduction in operational costs measured in Q1 post-launch versus the same quarter prior year',
      'Finance team\'s 3-day weekly reconciliation process replaced by same-day automated reports',
      'Zero manual calculation or stock entry errors recorded since go-live — full automation of reconciliation',
      'Real-time GPS tracking gave management route visibility they had never had in 12 years of operation',
      '60% faster average field sales cycle — digital order processing eliminated end-of-day batch reporting',
      '8+ hour offline operation with zero recorded work stoppages due to connectivity failures',
      'ERP integration eliminated all re-keying of field data — clean data in, clean ERP out',
    ],
    relatedProduct: 'fieldtrack',
    demoUrl: 'https://fieldtrack.nimblesl.com',
    featured: true,
  },

  // ─── SUPPORTING ─────────────────────────────────────────────────────────────

  {
    slug: 'nimbleerp-manufacturing',
    title: 'NimbleERP',
    subtitle: 'Unifying Operations Across 4 Factories for a Bangladesh Manufacturer',
    client: 'Apex Garments Group (Bangladesh)',
    industry: 'Enterprise / Manufacturing',
    industryTag: 'Enterprise',
    tagVariant: 'amber',

    challenge: `Apex Garments Group runs four garment manufacturing factories across Dhaka and Gazipur with a combined workforce of 400+ workers. For over a decade, each factory had accumulated its own operational tools in isolation: payroll in Excel spreadsheets, raw material inventory in an ageing local Windows application, procurement decisions tracked through WhatsApp threads between supervisors, and finance managed in a licensed desktop accounting package from 2011. No two factories used the same system. No system talked to any other.

The consequences were visible at every level of the organisation. The Managing Director spent the first two weeks of every quarter compiling a consolidated performance report by manually requesting data exports from each factory, cleaning the inconsistencies, and building the final document in Excel himself. A process that should have been a 30-minute dashboard view consumed over two weeks of management bandwidth every quarter. Meanwhile, inventory discrepancies between factories — fabric and trim ordered by one factory and consumed by another without formal transfer records — were creating ghost stock positions that confused procurement and inflated reported costs.

Vendor payment delays had become a reputational problem. Suppliers had begun adding a premium to their quotes to compensate for Apex's unpredictable payment cycles — a direct consequence of procurement approvals happening informally over WhatsApp, purchase orders being lost in email threads, and the finance team having no reliable view of outstanding commitments until invoices arrived. The Managing Director put it simply: "We have a real business. We just can't see it."`,

    approach: `We chose NimbleERP over a bespoke build for a straightforward reason: the core manufacturing ERP modules — HR, inventory, procurement, and finance — are the same across 80% of garment factories. Customisation for Apex's specific workflows could be handled through configuration and targeted module extensions, not a ground-up build. This reduced the implementation timeline from an estimated 18–24 months to 18 weeks.

The first four weeks were spent entirely on process mapping, not software. Our implementation lead and a business analyst visited each factory, interviewed department heads, and documented the actual workflows — not what the org chart said should happen, but what actually happened. This revealed several Apex-specific requirements that the standard NimbleERP configuration didn't cover: BGMEA compliance reporting (mandatory for RMG exporters), worker PF (Provident Fund) and gratuity calculations under Bangladesh Labour Law, and a multi-factory fabric transfer process with quantity reconciliation. These were built as NimbleERP extensions before implementation began.

The migration strategy was phased factory by factory over six weeks to avoid disrupting production. Factory 1 went live in week 9 and ran in parallel with the old Excel system for two weeks to validate data integrity. Once the Managing Director had confirmed the numbers matched, Excel was retired for that factory and we moved to Factory 2. This phased approach meant that at no point was the entire business running on untested software simultaneously — a risk Apex's board had specifically flagged as a non-starter.`,

    solution: `NimbleERP now serves as the single source of truth for every operational function across all four factories. The HR module manages 400+ worker records including contracts, leave, attendance (integrated with biometric terminals at each factory gate), and payroll with fully automated PF, gratuity, and income tax calculations. Payroll that previously took the HR team four days to process now closes in under 4 hours at month end.

The inventory module operates with recipe-level BOMs (Bills of Materials) for each product style. When production planning allocates fabric to an order, the inventory position updates immediately and triggers reorder alerts when stock falls below the defined minimum. The multi-factory transfer process — previously conducted via WhatsApp — is now a formal workflow with digital transfer notes, quantity confirmation by the receiving factory, and automatic reconciliation in both factories' inventory ledgers.

The finance module provides the Managing Director with a consolidated cross-factory P&L, cash flow forecast, and outstanding commitments dashboard accessible from his mobile device. The quarterly report that previously took two weeks to compile is now a 10-second page load. Vendor payments are triggered automatically when procurement approvals reach final sign-off — no more delays from lost emails or missed WhatsApp messages. Suppliers received notice of the change and three have since lowered their quoted rates, citing improved payment reliability.`,

    techStack: ['.NET', 'Next.js', 'Angular', 'Flutter', 'PostgreSQL', 'Azure'],
    metrics: [
      { value: '4', label: 'Factories unified on one platform' },
      { value: '2 wks → 2 hrs', label: 'Quarterly reporting time' },
      { value: '0', label: 'Payroll errors in 12 months post-launch' },
      { value: '18 wks', label: 'Full implementation timeline' },
    ],
    results: [
      'All 4 factories unified on NimbleERP — single source of truth for inventory, HR, and finance',
      'Quarterly consolidated reporting reduced from 2 weeks to under 2 hours',
      'Zero payroll errors across 400+ workers across 12 months post-launch',
      'Vendor payment delays eliminated — procurement cycle time reduced by 65%',
      'Inventory stockouts reduced by 40% through MRP-based automated reorder alerts',
      'Three suppliers reduced quoted rates following improvement in payment reliability',
      'Implementation completed in 18 weeks with zero factory production downtime',
    ],
    testimonial: {
      quote: `We'd been told ERP implementation takes 2 years and millions of dollars. NimbleSL's NimbleERP was live across all 4 factories in 18 weeks. The quarterly reporting that used to consume 2 weeks of my management team's time now takes 2 hours.`,
      name: 'Karim Chowdhury',
      title: 'Managing Director',
      company: 'Apex Garments Group',
    },
    relatedProduct: 'nimbleerp',
    demoUrl: 'https://nimbleerp.nimblesl.com',
    featured: false,
  },

  {
    slug: 'botstudio-insurance-support',
    title: 'BotStudio',
    subtitle: 'Deflecting 68% of Tier-1 Support Tickets with an AI Chatbot — Without Losing Human Trust',
    client: 'CoverSure Digital (Australia)',
    industry: 'AI / InsurTech',
    industryTag: 'AI/ML',
    tagVariant: 'rose',

    challenge: `CoverSure Digital's 12-person support team was processing over 800 inbound queries per week across web chat, email, and a newly launched WhatsApp Business channel. The volume itself was not the problem — the problem was the composition of that volume. When we analysed their ticket data from the prior 6 months, 68% of all queries fell into just 12 categories: policy status checks, renewal date lookups, premium calculation requests, claim document checklists, cancellation process enquiries, and variations on "how do I...?" questions answerable directly from their public documentation.

These queries were consuming the majority of a skilled 12-person team's working hours. Agents with the knowledge to handle complex dispute escalations and sensitive claim investigations were spending most of their day answering the same questions they had answered the day before. Average first-response time had crept to 4.5 hours — acceptable for a complex query, deeply frustrating for a customer who simply wants to know their renewal date. A customer satisfaction survey showed response time as the top-cited frustration, ahead of even claim outcomes.

The 60% of queries arriving outside business hours — evenings, weekends, Australian public holidays — received no response until the next morning. For a digital-first insurer, this was inconsistent with the brand promise. CoverSure had looked at off-the-shelf chatbot platforms and found them inadequate: they required extensive manual intent mapping, produced brittle responses that broke under slight rephrasing, and had no mechanism for maintaining context across a multi-turn conversation. The CEO wanted something that felt like talking to a knowledgeable team member, not navigating a decision tree.`,

    approach: `The first three weeks were spent entirely on data work, not bot development. We ingested 18,000 historical support conversations, labelled them by query type, mapped the resolution path for each category, and identified the 40 most common answer patterns. This corpus became the training foundation. We also processed CoverSure's full policy documentation library — 3,200 pages across 14 product variants — through a document chunking and embedding pipeline so the bot could retrieve and cite specific policy terms when answering coverage questions.

BotStudio's NLP engine uses a retrieval-augmented approach rather than a purely generative one. For factual queries — policy lookups, renewal dates, premium calculations — the bot retrieves the answer directly from CoverSure's policy database or document library. This is critical: a purely generative bot will occasionally confabulate plausible-sounding but incorrect answers, which in an insurance context could constitute a mis-selling event. By grounding responses in retrieved facts, we eliminate that risk category entirely. The generative layer handles natural language formatting and follow-up, not answer creation.

Confidence thresholds were designed conservatively. Any query where the bot's confidence falls below 85% triggers an automatic handoff to a human agent — the bot says "I want to make sure you get the right answer on this one, so I'm going to connect you with a specialist" rather than guessing. We tracked handoff rates weekly and used them as the primary training signal, systematically closing the gaps until the 60-day deflection target of 65% was reached and exceeded.`,

    solution: `BotStudio was deployed simultaneously across CoverSure's web chat widget, WhatsApp Business API, and an email-to-chat routing layer that converts incoming email queries into live chat sessions. All three channels share the same NLP engine and conversation context, so a customer who starts a query on WhatsApp can continue it on web without repeating themselves — a capability CoverSure's previous support stack couldn't offer on any channel.

The admin console gives CoverSure's support team full visibility into bot performance without requiring technical knowledge. Conversation logs are grouped by topic and outcome. Missed or mishandled queries are surfaced in a review queue where agents can record the correct response — this directly feeds the training loop, improving accuracy without requiring a separate data science process. Weekly performance reports are auto-generated and emailed to the support manager with deflection rate, CSAT, handoff reasons, and volume by channel.

The human agents' workflow changed significantly. Their queue now contains only the queries that genuinely require human judgment: complex claims, coverage disputes, complaints, and sensitive personal circumstances. Response times for these queries improved because agents are no longer interrupted by trivial lookups. In the 90-day post-launch review, CoverSure's support manager noted that two agents who had previously been considering leaving due to the repetitive nature of the work had reversed that decision — the job had, in their words, "become interesting again."`,

    techStack: ['Python', 'FastAPI', 'Angular', 'PostgreSQL', 'WhatsApp Business API', 'BotStudio NLP Engine'],
    metrics: [
      { value: '68%', label: 'Tier-1 ticket deflection rate', sub: 'within 60 days' },
      { value: '45 sec', label: 'Average first-response time', sub: 'vs 4.5 hrs before' },
      { value: '24/7', label: 'Coverage including weekends' },
      { value: '4.6 / 5', label: 'Post-chat CSAT score' },
    ],
    results: [
      '68% of Tier-1 support queries fully resolved by the bot — no agent involvement required',
      'Average first-response time reduced from 4.5 hours to 45 seconds across all channels',
      '24/7 coverage across web, WhatsApp, and email — the 60% of out-of-hours queries now receive instant responses',
      'Human agents freed entirely for complex cases — first-response time on escalated queries also improved',
      'Post-chat CSAT score of 4.6/5 — customers consistently rate the bot interaction positively',
      'WhatsApp channel alone handled 310+ queries per week within 30 days of launch',
      'Two agents who had considered leaving reversed that decision — job satisfaction improved with higher-value work',
    ],
    relatedProduct: 'botstudio',
    demoUrl: 'https://botstudio.nimblesl.com',
    featured: false,
  },

  {
    slug: 'realtydesk-proptech-platform',
    title: 'RealtyDesk',
    subtitle: 'Building a 360° Property Ecosystem with Sub-Second Search Across 25,000 Listings',
    client: 'Undisclosed (Southeast Asia)',
    industry: 'Real Estate / PropTech',
    industryTag: 'PropTech',
    tagVariant: 'cyan',

    challenge: `The client had spent six months and a significant portion of their seed funding with a previous development agency before coming to us. The previous vendor had delivered a partially functional listing portal — static search, no mobile app, no agent verification, and a backend architecture that the client's new CTO described as "technically a website from 2014." The product had been demoed to investors with the promise of launching within 60 days. It wasn't close to launchable.

The real challenge was not rebuilding the portal — it was building the right thing quickly and well. The client's market insight was correct and defensible: property buyers in their target Southeast Asian market bounced between four or five fragmented platforms to research a property, verify an agent, source interior services, and arrange legal documentation. No single platform unified these touchpoints. But the opportunity window was closing: a well-funded competitor had announced a similar product at a regional property conference three months earlier.

The technical requirements were genuinely demanding. The search experience needed to return geo-filtered results across 25,000+ listings in under one second — not because it was a nice-to-have, but because internal A/B testing from comparable markets showed that search response times above 1.5 seconds caused a 40% drop in query completion. Agent and buyer verification needed to happen digitally, fast, and in a way that built trust without creating onboarding friction. And the AI recommendation engine needed to produce relevant suggestions from day one — before the platform had accumulated the behavioural data that typically trains recommendation systems.`,

    approach: `We made four architectural decisions in week one that shaped the entire build. First, Elasticsearch at the core of property search — not a traditional database query. PostgreSQL handles data persistence; Elasticsearch handles every user-facing search, with geo-bounding, multi-filter, and full-text support indexed and optimised for sub-second response. This separation meant we could tune search performance independently from the transactional data layer.

Second, an eKYC integration for agent and buyer verification with a target of under 2 minutes for median completion. We evaluated three eKYC providers against document processing accuracy, API reliability, and local ID document coverage. The selected provider handled the target market's national ID and passport formats with over 97% first-attempt accuracy and an API SLA of 99.9% uptime. Verification is embedded in the onboarding flow, not tacked on as a separate step — reducing the psychological friction of the compliance requirement.

Third, a cold-start recommendation strategy. A pure collaborative filtering engine has nothing to learn from on day one. We seeded the recommendation engine with content-based similarity scores — property attributes, location, price band, property type — allowing the system to make relevant suggestions before any user behaviour data existed. As real behavioural signals accumulated (searches, saved properties, enquiries), the engine transitioned to hybrid recommendations over the first 6 weeks post-launch. The 3x engagement lift over browse-only was measured at the 6-week mark, not day one.

Fourth, a human-in-the-loop moderation system for listing quality. Automated photo quality scoring (blurry, insufficient coverage, misleading crops), duplicate detection, and price anomaly flagging handle the majority of quality issues. Borderline cases surface to a moderation queue staffed by the client's team. This two-layer approach kept listing quality at 98% without requiring a full-time moderation team for every submission.`,

    solution: `RealtyDesk delivered the Angular web application, Flutter iOS and Android mobile apps, .NET microservices backend, Elasticsearch search cluster, and a React moderation and analytics dashboard across 22 weeks. The property search delivers sub-1-second results across 25,000+ live listings with filters across property type, geo-radius, price band, bedroom count, amenities, and agent rating — all applied simultaneously without search latency.

The agent marketplace module allows verified agents to create rich profiles, manage their listing portfolio, and respond to buyer enquiries through an in-app messaging system. Agent ratings aggregate from verified transaction completions — not self-reported or gaming-prone. Buyers see agent response time, listing accuracy score, and verified transaction count before initiating contact, creating transparency that increases enquiry-to-viewing conversion.

The interior services and legal consultation modules were delivered as marketplace extensions within the same app. Interior designers and property lawyers create service listings; buyers can shortlist and request quotes without leaving the platform. For the client, these modules created two new revenue streams — commission on interior service bookings and lead-generation fees to legal firms — that had not been in the original scope but were added in a 2-week sprint after the platform validated interest during beta testing.`,

    techStack: ['.NET', 'Next.js', 'Angular', 'Flutter', 'Elasticsearch', 'PostgreSQL', 'eKYC API'],
    metrics: [
      { value: '<1s', label: 'Geo-search response time', sub: '25,000+ live listings' },
      { value: '3x', label: 'Engagement lift from AI recs', sub: 'vs browse-only at 6 wks' },
      { value: '<2 min', label: 'Median eKYC completion time' },
      { value: '98%', label: 'Listing quality via moderation' },
    ],
    results: [
      'Sub-1-second property geo-search across 25,000+ active listings at launch',
      'AI recommendations increased per-session engagement 3x versus browse-only at 6-week mark',
      'Median eKYC completion under 2 minutes — agent onboarding 4x faster than originally projected',
      '98% listing quality score maintained by two-layer automated + human moderation system',
      'Interior and legal marketplace modules added in a 2-week sprint — two new revenue streams from day one',
      'Delivered in 22 weeks replacing a failed prior-agency build in 6 months',
      'Platform architecture validated to 100,000+ listings without re-indexing or re-architecture',
    ],
    relatedProduct: 'realtydesk',
    demoUrl: 'https://realtydesk.nimblesl.com',
    featured: false,
  },

  {
    slug: 'shopnest-multivendor-marketplace',
    title: 'ShopNest',
    subtitle: 'From Concept to 200-Vendor Marketplace in 16 Weeks — Ready to Scale to 10,000',
    client: 'TradeHub Commerce (Canada)',
    industry: 'E-Commerce / Marketplace',
    industryTag: 'E-Commerce',
    tagVariant: 'blue',

    challenge: `TradeHub's founding team had identified a genuine gap: the South Asian diaspora in Canada — nearly 1.8 million people — had no curated online marketplace for authentic artisan goods, regional food products, and cultural items from their home countries. Platforms like Amazon and Etsy existed but offered no curation, poor discoverability for niche ethnic products, and no understanding of the trust signals that matter to this community. TradeHub wanted to fill that gap with a marketplace that felt made for its audience.

The business model required multi-vendor architecture with automatic commission splitting — vendors would set their prices, TradeHub would take a platform fee, and Stripe would split the payment at the point of transaction without manual reconciliation. Canadian GST/HST compliance was non-negotiable: tax rates vary by province, product category, and whether the vendor is GST-registered. A marketplace that miscalculates tax on any transaction was a legal liability, not just an operational inconvenience.

TradeHub had gathered vendor interest through a pre-launch waitlist — 400 potential sellers across Canada, the UK, and Bangladesh. Their target was 100 vendors live at launch. They had been quoted $400,000 and 18 months by two Toronto-based agencies. They couldn't wait 18 months, and the funding didn't support $400,000. When they found us through a referral from another founder, their question was direct: "Can you build this for less, faster, without compromising on the tax compliance and payment architecture we need?" The answer was yes.`,

    approach: `We scoped the project in a single 4-hour session and committed to a 16-week delivery timeline. ShopNest's multi-vendor marketplace architecture handled the core commerce infrastructure — product catalogue, vendor storefronts, order management, reviews, and the admin console. The extension work specific to TradeHub was well-defined: Stripe Connect for split payments, the Canadian tax engine, and the curation workflow for the pre-launch vendor waitlist.

The Canadian tax engine was the most technically nuanced piece of the project. GST/HST rates vary by province (Ontario charges 13% HST; Alberta charges 5% GST; Quebec applies 14.975% total). Product category exemptions add another layer — basic groceries are zero-rated; prepared foods are taxable. Vendor GST registration status affects whether input tax credits can be applied. We built a tax calculation service that ingests the buyer's shipping province, the product category codes from each order line, and the vendor's GST registration status, and returns the correct tax amount for every jurisdiction in under 100 milliseconds. The output feeds both the checkout display and Stripe's tax reporting for vendor tax remittance.

Stripe Connect's split payment architecture required careful orchestration. When a buyer places a multi-vendor order, the checkout creates a single payment intent, Stripe routes the funds to each vendor's connected account minus the platform fee, and the payout schedule is configured per vendor. We implemented a 7-day rolling payout to give TradeHub a dispute resolution window before funds become final. The vendor onboarding flow for Stripe Connect — including ID verification, business type selection, and bank account linking — was embedded directly into the seller registration process with real-time validation to prevent incomplete registrations.`,

    solution: `The delivered platform includes the Next.js/React storefront with server-side rendering for SEO performance, a React Native mobile app for iOS and Android, the NestJS/PostgreSQL backend, Stripe Connect payment infrastructure, the Canadian tax engine, and a vendor management console. The storefront's SSR implementation achieves first meaningful paint under 1.2 seconds, critical for organic search performance in a competitive e-commerce category.

Vendor onboarding takes under 20 minutes: business details, product catalogue (with CSV bulk upload), Stripe Connect linking, and a 24-hour curation review by TradeHub's team. The curation step — not present in most marketplace templates — was a deliberate TradeHub brand decision: every vendor is manually reviewed before going live, maintaining the "authenticated artisan" positioning. We built the curation queue as an admin module with approve/reject/request-info actions and automated email notifications to vendors at each stage.

The buyer experience is built around discovery: curated collections, seller stories, region-of-origin filtering, and a "newly arrived" feed that surfaces new vendors within 48 hours of approval. The loyalty programme issues points on purchases that convert to platform credits — managed as a ledger within the backend, not a third-party integration, to avoid the commission costs of external loyalty platforms. The architecture has been tested at 10x the current vendor load; scaling to 10,000 vendors requires infrastructure upgrades, not code changes.`,

    techStack: ['NestJS', 'Next.js', 'Angular', 'Flutter', 'PostgreSQL', 'Stripe Connect', 'Redis', 'AWS'],
    metrics: [
      { value: '200+', label: 'Vendors onboarded at launch', sub: 'target was 100' },
      { value: '16 wks', label: 'Time to go-live' },
      { value: '4,500+', label: 'SKUs live on day one' },
      { value: '$38K', label: 'Total project cost', sub: 'vs $400K+ bespoke quotes' },
    ],
    results: [
      '200+ vendors onboarded at launch — double the original milestone target',
      '4,500+ SKUs live on day one with full provincial tax-compliant checkout',
      'Stripe Connect automated commission splits — zero manual payout calculations since launch',
      'Next.js SSR: first meaningful paint under 1.2s across all category pages',
      'Platform architecture validated to 10,000+ vendors without re-platforming',
      'Delivered in 16 weeks for $38K — against a $400K+ quote from Toronto agencies',
      'Loyalty programme handled natively — zero third-party commission costs',
    ],
    relatedProduct: 'shopnest',
    demoUrl: 'https://shopnest.nimblesl.com',
    featured: false,
  },

  {
    slug: 'restodesk-restaurant-chain',
    title: 'RestoDesk',
    subtitle: 'Bringing a 35-Branch Restaurant Chain Online — POS, Kitchen, and Inventory Unified',
    client: 'Spice Garden Group (Bangladesh)',
    industry: 'Food & Beverage / Restaurant Tech',
    industryTag: 'F&B',
    tagVariant: 'rose',

    challenge: `Spice Garden Group operates 35 restaurant branches across Dhaka and Chittagong. When their CEO first described the operational state of the business to us, the picture was consistent: paper Kitchen Order Tickets (KOTs) that got lost, misread, or delayed in busy service periods; a decade-old POS at each branch that could not communicate with any other system; no centralised inventory tracking; and zero real-time visibility into which branches were performing, which were struggling, and why.

The food cost problem was the most financially damaging. Industry standard for an F&B operation in Bangladesh is 28–32% food cost as a percentage of revenue. Spice Garden's internal estimate — and they were not certain of it — was 35–40%. Inventory was tracked by kitchen managers on paper at the beginning and end of each day, with no recipe-level costing to correlate what was purchased against what was sold. Wastage, theft, and over-portioning were all happening, but there was no data to quantify where or how much. Management guessed at the problem; they couldn't measure it.

Online ordering represented a different category of missed opportunity. Spice Garden had no delivery app presence beyond Pathao Food, where they paid a 25–30% commission on every order. They had no owned digital channel. Customers who wanted to order directly — which many preferred for regular orders and catering requests — had no option but to call a branch and hope someone picked up. The CEO's stated goal was straightforward: "I want to know what's actually happening in my restaurants, and I want to own the customer relationship."`,

    approach: `We proposed RestoDesk over a bespoke build for the same reason we always do: 80% of the functional requirements of a restaurant management system are identical across F&B operators. The unique elements — Spice Garden's menu structure, bKash/Nagad payment integration for the Bangladesh market, their specific wastage tracking workflow, and the multi-branch reporting format the CEO needed — were handled as configuration and lightweight extensions.

The rollout strategy was the most important decision of the project. Deploying all 35 branches simultaneously would have been operationally reckless. We agreed on a pilot: two branches in Gulshan, chosen because they represented the two extremes of Spice Garden's volume range (one high-traffic, one moderate). The pilot ran for three weeks. Kitchen staff and floor managers received hands-on training during service — not classroom training, which gets forgotten. We stationed a RestoDesk implementation specialist at each branch for the first week to resolve issues in real time. The pilot produced 11 product adjustments, most of them small UX improvements identified by kitchen staff during actual service. Those adjustments were shipped before the wider rollout began.

Recipe-level inventory costing was the technically and operationally complex piece. It required building a costing database: every menu item broken down into ingredient quantities, linked to purchase unit prices from the most recent supplier invoices. When a sale is processed through the POS, the system automatically deducts the theoretical ingredient usage from inventory. The gap between theoretical and actual inventory — measured at each branch closing — is waste. This gives management a precise waste figure by ingredient, by branch, and by shift rather than the previous end-of-day guess.`,

    solution: `RestoDesk went live across all 35 branches over a 14-week phased rollout with zero branch downtime during transition. Each branch runs React-based POS terminals on tablets (with a desktop option for the cashier station), kitchen KDS screens that display orders in real time and track ticket times, and a branch manager mobile app on Flutter for real-time stock checks and shift reporting.

The online ordering channel launched three weeks after the initial POS rollout, once kitchen operations had stabilised on the new system. The Flutter mobile app (iOS and Android) allows customers to order for delivery or collection, track order status in real time, and earn loyalty points on purchases. bKash and Nagad are fully integrated for cashless payment — the primary digital payment preference in the Bangladeshi market. Within 60 days of launch, the owned digital channel was processing 280+ orders per week across all branches, contributing 28% of total revenue without the 25–30% commission Pathao was taking.

The central analytics dashboard — the piece the CEO had been waiting for — provides real-time P&L by branch, food cost percentage by branch and by ingredient, ticket time performance, waste variance, and daily sales against target. The CEO reviews it from his phone every morning before leaving for the office. In the first 30 days, the dashboard identified four underperforming branches where food cost was running at 38–42% — two due to over-portioning, two due to a specific supplier's ingredient weight inconsistency. Both were corrected within the month. The overall food cost reduction of 19% was reached within 90 days.`,

    techStack: ['.NET', 'Next.js', 'Angular', 'Flutter', 'PostgreSQL', 'bKash API', 'Nagad API'],
    metrics: [
      { value: '35', label: 'Branches on one platform', sub: '14-week rollout' },
      { value: '19%', label: 'Food cost reduction', sub: 'within 90 days' },
      { value: '3x', label: 'Online order revenue', sub: 'vs zero before launch' },
      { value: '<90 days', label: 'Full ROI on platform cost' },
    ],
    results: [
      'All 35 branches unified on RestoDesk in 14 weeks with zero branch downtime during transition',
      'Food cost reduced by 19% within 90 days through recipe-level inventory tracking and waste alerts',
      'Owned online ordering channel now contributes 28% of total revenue — with zero commission fees',
      'KDS integration reduced average ticket time from 18 minutes to 11 minutes across all branches',
      'CEO dashboard identified 4 underperforming branches within 30 days — issues corrected the same month',
      'Full ROI on platform investment achieved within 90 days through food cost savings alone',
      'Two suppliers identified as supplying underweight ingredients — renegotiated or replaced',
    ],
    testimonial: {
      quote: `Before RestoDesk we were guessing on inventory and had no idea which branches were actually profitable. Nimble rolled us out across all 35 branches in 14 weeks and the food cost savings alone paid for the whole project in 3 months.`,
      name: 'Shafiq Rahman',
      title: 'CEO',
      company: 'Spice Garden Group',
    },
    relatedProduct: 'restodesk',
    demoUrl: 'https://restodesk.nimblesl.com',
    featured: false,
  },
];
