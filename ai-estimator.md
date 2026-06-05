1. Redesigned 7-Step Question Flow
Step 1 — What are you building? (multi-select)
Label: "Select everything that's part of your project"
Options:

Customer-facing Web Application
Mobile App (iOS & Android)
Admin / Back-office Portal
SaaS Platform (multi-tenant, subscriptions)
API / Backend / Microservices
AI / ML Product or Feature
Desktop App (Windows / Mac / Linux)
Cross-platform App (single codebase, all devices)
Browser Extension / Plugin
UI/UX Design & Prototyping Only

Add a helper line under each option — clients don't always know the vocabulary:

SaaS Platform: "Users sign up, pay monthly, each gets their own workspace"
API / Backend: "The engine behind your product — data processing, integrations, business logic"
Cross-platform App: "One codebase that runs on web, iOS, Android (React Native, Flutter)"
Admin Portal: "Internal dashboard for your team to manage users, content, operations"

Step 2 — What industry is this for? (single-select)
Label: "This helps us estimate compliance, integrations, and domain complexity"
Options:

FinTech / Payments / Banking
HealthTech / Telemedicine
InsurTech
PropTech / Real Estate
E-commerce / Marketplace
Logistics / Supply Chain / Field Ops
Legal / GovTech / Compliance
HR / Recruitment / Workforce
EdTech / Learning
SaaS / Developer Tools
Media / Entertainment / Social
Other (free text)

Keep this single-select. Industry is genuinely singular per project.
Step 3 — Core features (multi-select, conditional on Step 1)
Label: "What does your product need to do?"
This is where conditional logic matters most. Show a universal base plus deliverable-specific feature sets.
Universal features (always shown):

User authentication & role-based access
Third-party integrations (payment gateways, CRMs, ERPs, etc.)
Real-time notifications (push, email, SMS)
Search & filtering
Reporting & analytics dashboard
Multi-language / localization
File upload & document management

Conditional features by Step 1 selection:
If SaaS Platform selected:

Multi-tenant architecture
Subscription billing & plan management
Usage metering & limits
Tenant-level customization / white-labeling
Self-service onboarding flow

If Mobile App or Cross-platform App selected:

Offline mode & data sync
Camera / barcode / QR scanning
GPS / location services
Biometric login (Face ID / fingerprint)
App store submission & management

If AI/ML selected:

Custom ML model training
Natural language processing / chatbot
Computer vision / image analysis
Recommendation engine
AI-powered search or classification

If Admin Portal selected:

Content management (CMS)
User / account management
Audit logs & activity tracking
Bulk operations (import/export)
Workflow / approval chains

If Desktop App selected:

System tray / background processes
Local file system access
Hardware integration (printers, scanners, peripherals)
Auto-update mechanism

If API / Backend selected:

API documentation (Swagger/OpenAPI)
Webhook support
Rate limiting & API key management
Message queues / async processing
Data migration from legacy systems

If Browser Extension selected:

Cross-browser support (Chrome, Firefox, Edge, Safari)
Content injection / page modification
Background scripts & persistent state

Step 4 — Design expectations (single-select)
Label: "What level of design and UX do you need?"

Basic / Functional — Clean UI using a component library, functional but not custom. "It works, it's professional, it's not flashy."
Polished / Branded — Custom design system, your brand identity, responsive, considered UX flows. "Looks like a real product from day one."
Premium / Design-led — Custom illustrations, animations, micro-interactions, delightful UX. "Design is a competitive advantage."
We already have designs — Figma/Sketch files ready, just need build. "Hand us the files."

Step 5 — Scale & integration context (new step, replaces nothing — this is the missing question)
Label: "Help us understand the environment"
Sub-questions:
Expected users at launch?

Under 100 (internal tool / pilot)
100–1,000
1,000–10,000
10,000+

Do you have existing systems to integrate with?

No, building from scratch
Yes, 1–2 systems (e.g., Stripe, Salesforce)
Yes, complex integration landscape (3+ systems, legacy APIs, data migration)

Is there an existing product being replaced or rebuilt?

No, this is net-new
Yes, rebuilding / modernizing an existing product
Yes, and we need data migration from the old system

This step is critical. A greenfield app for 50 internal users is a fundamentally different estimate than a migration from a legacy system to a SaaS platform for 10K users.
Step 6 — Timeline (single-select, conditional ranges)
Label: "When do you need this?"
The ranges should adapt based on deliverable count from Step 1:
If 1 deliverable selected:

ASAP (4–8 weeks)
Standard (8–14 weeks)
Flexible (14–22 weeks)
No fixed deadline

If 2–3 deliverables selected:

Accelerated (8–14 weeks, parallel teams)
Standard (14–22 weeks)
Phased (22–32 weeks, sequential delivery)
No fixed deadline

If 4+ deliverables selected:

Accelerated (14–22 weeks, large team)
Standard (22–32 weeks)
Phased (32–44 weeks, incremental releases)
No fixed deadline

Step 7 — Budget range (single-select, conditional floor)
Label: "What's your expected investment range?"
Adjust the floor based on what was selected:
If UI/UX only or single API: show $10K–$20K as lowest
If single deliverable (web or mobile): show $20K–$35K as lowest
If SaaS or multi-deliverable: show $35K–$55K as lowest
If 4+ deliverables or AI + SaaS: show $55K–$85K as lowest
Always include:

[Dynamic floor] – [floor + 50%]
[floor + 50%] – [floor + 120%]
[floor + 120%] – [floor + 200%]
$150K+ / Enterprise
Not sure yet — help me understand what's realistic

That last option is important. It converts hesitant leads instead of losing them.

2. Conditional Logic Map
Step 1 SelectionStep 3 Features ShownStep 6 Timeline RangesStep 7 Budget FloorUI/UX OnlyUniversal onlyShort (4–8 weeks)$10KSingle deliverableUniversal + 1 conditional setStandard single$20KSaaS + anythingUniversal + SaaS + relevant setsMulti-deliverable$35K3+ deliverablesUniversal + all relevant setsMulti-deliverable$45KAI/ML + SaaS + MobileUniversal + AI + SaaS + Mobile4+ deliverable$55K
The logic is additive: more deliverables → more features shown → longer timelines offered → higher budget floor.

3. Revised AI System Prompt
You are the estimation engine for Nimble Software Lab (nimblesl.com), a custom software
development company based in Gulshan-2, Dhaka, Bangladesh, founded January 2026.

YOUR ROLE: Generate a detailed, honest project cost and timeline estimate based on the
client's inputs. This is NOT a final quote — it's a calibrated range to set expectations
before a discovery call.

COMPANY RATE CARD (blended hourly rates, USD):
- Junior Developer: $12–18/hr
- Mid-level Developer: $18–30/hr
- Senior Developer: $30–45/hr
- Tech Lead / Architect: $40–60/hr
- UI/UX Designer: $20–35/hr
- QA Engineer: $15–25/hr
- Project Manager: $25–40/hr

ESTIMATION RULES:

1. MULTI-DELIVERABLE HANDLING
   The client may have selected multiple deliverables (e.g., Web App + Mobile App + Admin
   Portal + API). You MUST:
   - Estimate each deliverable separately (hours, team, cost range)
   - Then provide a COMBINED total that accounts for shared infrastructure (auth, API layer,
     database, CI/CD) — the combined total should be LESS than the sum of individual estimates
     because shared components aren't built twice
   - Shared infrastructure discount: typically 15–25% off the naive sum, depending on overlap

2. SAAS vs BESPOKE DISTINCTION
   If the client selected "SaaS Platform":
   - Add multi-tenancy architecture (data isolation, tenant management)
   - Add subscription/billing infrastructure (Stripe integration, plan management, usage tracking)
   - Add self-service onboarding, tenant-level config
   - SaaS floor: minimum $35K for even a simple SaaS product
   - SaaS typically adds 30–50% to the base estimate compared to a single-tenant equivalent

   If NOT SaaS:
   - Treat as bespoke/single-tenant build
   - Simpler auth, no billing infrastructure, no tenant isolation

3. COMPLEXITY MULTIPLIERS
   Apply these based on client inputs:
   - AI/ML component: +25–40% (model training, data pipeline, inference infrastructure)
   - Complex integrations (3+ systems): +15–25%
   - Legacy migration with data: +20–30%
   - Premium design: +15–25%
   - High scale (10K+ users at launch): +10–20% (infrastructure, load testing, caching)
   - Offline/sync capability: +15–20%
   - Regulatory industry (FinTech, HealthTech, InsurTech): +10–20% (compliance, audit trails,
     encryption requirements)

4. TIMELINE CALCULATION
   - Base: estimate total hours → divide by team capacity (accounting for parallel work)
   - A 4-person team can deliver ~600–700 productive hours/month
   - Multi-deliverable projects: assume 60–70% parallelization (some things must be sequential)
   - If client selected "ASAP" timeline: flag if estimate exceeds their range, suggest phasing
   - Always recommend MVP-first approach for projects over $50K

5. TEAM COMPOSITION
   Recommend a specific team based on the deliverables:
   - Web App: 1–2 frontend, 1 backend, 0.5 QA, 0.5 PM
   - Mobile App: 1–2 mobile devs (or cross-platform), 0.5 QA
   - SaaS: add 1 senior/architect for multi-tenant design
   - AI/ML: add 1 ML engineer
   - Design: 1 designer for standard, 1–2 for premium
   - For combined projects, show shared roles (1 PM across all, 1 QA across all, etc.)

6. REFERENCE CALIBRATION
   Use these past projects to calibrate your estimates:
   - PayFlow (FinTech SaaS): $42K–68K, 14–18 weeks, 6-person team
   - ClaimWise (InsurTech): $38K–55K
   - PropNest (PropTech marketplace): $55K–85K
   - FraudShield AI (AI/ML product): $35K–52K
   - FieldOps (Logistics, offline mobile + web): $32K–48K
   - AuthGate (IAM/security): $28K–42K
   - HireSync (HR platform): $30K–45K
   - CaseFlow (Enterprise workflow): $35K–50K

   A project similar in scope to these references should produce a similar estimate.
   A project combining multiple scopes (e.g., marketplace + AI + mobile) should exceed
   the largest single reference.

7. OUTPUT FORMAT
   Structure your response as:

   **Project Summary**: 1–2 sentences describing what the client is building

   **Deliverable Breakdown**:
   For each deliverable:
   - Component name
   - Estimated effort (person-weeks)
   - Key cost drivers
   - Cost range (low–high)

   **Shared Infrastructure**: What's built once and reused (auth, database, API layer, CI/CD,
   hosting setup). Show the savings.

   **Combined Estimate**:
   - Total cost range: $X – $Y
   - Timeline: X–Y weeks
   - Recommended team: [roles and counts]
   - Monthly burn rate: $X–Y/month

   **Phasing Recommendation**: For projects over $40K, suggest an MVP phase (what to build
   first, cost, timeline) and a Phase 2.

   **Assumptions & Risks**: List 3–5 key assumptions. Flag anything that could significantly
   change the estimate (e.g., "If AI model requires custom training data collection, add
   $8K–15K").

   **Next Step**: Always end with: "This is a preliminary estimate. Book a free 30-minute
   discovery call at [link] to refine scope and get a detailed proposal."

8. HONESTY RULES
   - If the client's budget is below what the project realistically costs, say so clearly.
     Suggest what IS achievable within their budget.
   - If the timeline is unrealistic for the scope, say so. Suggest what can ship in that
     timeframe (MVP) and what comes later.
   - Never inflate estimates to match a high budget. Never deflate to match a low budget.
   - Round to the nearest $500. Don't give false precision ($42,847 is absurd).
   - Ranges should be meaningful: low = everything goes smoothly, high = normal complexity
     surprises. The spread should be 40–60% between low and high.

4. Additional Questions to Consider Adding
Between current steps — high-value additions:
"Do you have a technical co-founder or CTO?" (single-select: Yes / No / We have a tech advisor)
→ This changes the engagement model. A non-technical founder needs more PM and architecture guidance, which affects cost.
"What happens after launch?" (single-select)

We need ongoing maintenance & support
We'll handle it in-house
Not sure yet

→ This opens the door to retainer conversations during the discovery call.
"How will users find your product?" (optional, multi-select)

Organic / SEO
Paid acquisition
Enterprise sales (demo → contract)
App store discovery
Internal use only

→ This subtly changes scope. SEO means SSR/SSG matters. App store means store optimization. Enterprise sales means a demo environment.
I'd recommend not adding all of these to the wizard itself — it's already 7 steps. Instead, add the "existing systems" and "user scale" questions (which I folded into Step 5), and save the rest for the discovery call intake form.

5. Logical Gaps and Anti-Patterns in the Current Design
"Full-Stack Platform" is a junk drawer. It means nothing specific to a client. A CEO doesn't think "I need a full-stack platform." They think "I need a product that does X." Kill this option entirely — the multi-select in the new Step 1 replaces it by letting clients describe what they actually need.
Single-select on project type forces clients to under-describe their project. A marketplace founder who selects "Web App" just hid 60% of their project scope from you. Your estimate comes back at $30K, they expect that, and the discovery call becomes an awkward repricing conversation. Multi-select fixes this.
No scale question means a 50-user internal tool and a 50,000-user consumer platform get the same estimate. That's an order-of-magnitude infrastructure difference.
No integration question means greenfield and legacy-migration projects look identical. Data migration alone can be 15–30% of a project's cost.
Budget options without a dynamic floor let clients select "$10K–$20K" for a SaaS + Mobile + AI project. Then either the AI produces an unrealistic estimate (bad for trust) or tells them their budget is insufficient (bad for conversion). A dynamic floor that adjusts based on Step 1 selections manages expectations progressively through the wizard, so by the time they see the estimate, there's no sticker shock.
The current design has no phasing recommendation. Most projects over $40K should be pitched as MVP → Phase 2. This is both better engineering practice and better for conversion — a $25K MVP is easier to greenlight than a $65K full build, and the Phase 2 comes naturally after trust is established.

This should give you enough to rebuild the wizard and the estimation engine. The biggest wins, in order of impact: multi-select Step 1, conditional features in Step 3, the scale/integration Step 5, and the rewritten system prompt that handles compound projects.