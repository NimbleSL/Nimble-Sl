Strategy: AI pricing না, Rule-based pricing + AI recommendation
AI কে price decide করতে দিও না — সে inconsistent দেবে। বরং:
AI এর কাজ: User এর input দেখে recommend করবে কী কী build করতে হবে, estimated effort কত mandays, কোন technology লাগবে — analysis only।
Price calculation: Fixed formula, তোমার rate card অনুযায়ী, frontend এ বা backend এ calculate হবে — AI touch করবে না।
তোমার Rate Card (internal, user দেখবে না)
RoleBD/Local rateInternational rateJunior dev$10/hr$20/hrMid dev$12/hr$22/hrSenior dev$15/hr$25/hrLead/Architect$18/hr$30/hrUI/UX Designer$12/hr$22/hrQA$10/hr$18/hrPM$12/hr$22/hr
কিন্তু user কে hourly rate দেখাবে না — শুধু project-based pricing দেখাবে। "$15,500" না "$10/hour × 200 hours"।
Location detection — কীভাবে
IP থেকে location detect করে internally pricing adjust করবে:
Bangladesh/South Asia IP → Local rate card apply
US/UK/EU/AU/CA IP → International rate card apply
Middle East/SEA → Mid-tier rate (international এর 80%)
User কে জানাবে না যে location-based pricing হচ্ছে। সে শুধু final project price দেখবে।
কীভাবে কাজ করবে — flow
Step 1: User selects project type + features
         ↓
Step 2: Frontend detects IP → gets country (free API: ipinfo.io)
         ↓
Step 3: API call to Groq → AI analyzes requirements →
        Returns: recommended modules, estimated mandays per module,
        team composition, timeline
        (AI does NOT calculate price)
         ↓
Step 4: Backend calculates price:
        mandays × 8 hours × rate_per_hour(based on IP location)
        + complexity multipliers
        + technology premiums
         ↓
Step 5: User sees project-based price with breakdown:
        "Frontend Development — $4,500"
        "Backend & API — $6,000"
        "AI Integration — $3,000"
        Total: $13,500
        (NO hourly rate shown anywhere)
Pricing কেমন দেখাবে user কে
ধরো একটা mobile app project:
Bangladesh client দেখবে:
Mobile App Development
├── UI/UX Design          — $800 - $1,200
├── Frontend (React Native) — $2,500 - $3,500
├── Backend & API          — $3,000 - $4,000
├── Testing & QA           — $800 - $1,200
├── Project Management     — $500 - $800
└── Deployment & Setup     — $400 - $600
    ─────────────────────
    Total: $8,000 - $11,300
US client same project দেখবে:
Mobile App Development
├── UI/UX Design          — $1,800 - $2,500
├── Frontend (React Native) — $5,000 - $7,500
├── Backend & API          — $6,500 - $8,500
├── Testing & QA           — $1,800 - $2,500
├── Project Management     — $1,200 - $1,800
├── Deployment & Setup     — $800 - $1,200
    ─────────────────────
    Total: $17,100 - $24,000
দুইজনেই satisfied — BD client দেখবে affordable, US client দেখবে "wow, this is 1/5th of US agency rates!"
Market comparison section (US client কে দেখাবে)
How we compare:
US Agency        — $80,000 - $150,000
US Freelancer    — $30,000 - $50,000  
NimbleSL         — $17,100 - $24,000  ← "Best value"
এই comparison টা শুধু international client কে দেখাবে (IP based), BD client কে এটা দেখানোর দরকার নাই।
Groq prompt কেমন হবে
AI কে শুধু effort estimation করতে বলবে, price না:
"Based on these requirements, estimate:
1. What modules need to be built (list each)
2. Estimated mandays per module (Junior/Mid/Senior split)
3. Recommended team composition
4. Suggested timeline
5. Risk factors that could increase effort

DO NOT calculate pricing. Return structured JSON only."
তারপর তোমার backend এই JSON নিয়ে rate card × mandays দিয়ে price calculate করবে — consistent, predictable, location-aware।
এই approach কেমন লাগলো? Confirm করলে Claude Code এর জন্য full implementation prompt বানিয়ে দিই।You said: ahe banao and also pdf tao bhalo moto korte boilo and ei chat ei dao prompt ta alada md file banab anaahe banao and also pdf tao bhalo moto korte boilo and ei chat ei dao prompt ta alada md file banab ana12:50 AMClaude responded: এই নাও — Claude Code এ paste করো:Orchestrated comprehensive prompt reconstruction with enhanced featuresOrchestrated comprehensive prompt reconstruction with enhanced featuresএই নাও — Claude Code এ paste করো:

AI Project Estimator — Complete Rebuild Spec
Overview
আমাদের existing Project Estimator (/tools/project-estimator) পুরোটা rebuild করতে হবে। Current flow তে trust issues আছে, UX heavy, PDF unprofessional। নিচের spec follow করে rebuild করো। Existing design language আর site এর সাথে consistent রাখবে।

CHANGE 1: Steps 8 থেকে 5 এ কমাও
নতুন step flow:
Step 1 — What are you building?

Project type (multi-select, existing 10 options রাখো)
Industry (single select, existing 12 options রাখো)
দুইটা একই screen এ, side by side বা stacked

Step 2 — What features do you need?

Conditional feature groups (existing logic রাখো — SaaS/Mobile/AI/Admin/API based on step 1 selection)
এটা current system এ ভালো আছে, change দরকার নাই

Step 3 — Project details

Scale: How many users at launch? (existing 4 options)
Timeline: When do you need it? (existing 5 options, keep "Not sure yet")
Integrations: Any existing systems to connect? (existing 3 options)
Design: Do you have existing designs? → 3 options only: "Yes, ready to use" / "Partial (some wireframes/mockups)" / "No, need everything from scratch"
চারটা একই screen এ, compact layout

Step 4 — Tell us more (optional)

Free text description area
Placeholder: "Describe your project vision, any specific requirements, or references to similar apps you like..."
Label: "Any additional details? (optional)"
Min character requirement remove করো — truly optional করো

Step 5 — Get your estimate

Name (required)
Email (required)
Phone (optional)
Company name (optional)
[Get My Estimate →] button
Small text: "We'll also send this estimate to your email"

IMPORTANT: Budget step completely REMOVE করো। Estimator এর কাজ price TELL করা, user কে জিজ্ঞেস করা না কত দিতে চায়।

CHANGE 2: IP-based location detection for pricing
Detection:
Page load হলেই silently IP detect করো। Free API use করো:
javascript// On page load, detect location
const response = await fetch('https://ipapi.co/json/');
const data = await response.json();
const country = data.country_code;
const region = getRegion(country);
Region mapping:
javascriptfunction getRegion(countryCode) {
  const LOCAL = ['BD', 'IN', 'PK', 'LK', 'NP', 'MM'];
  const INTERNATIONAL = ['US', 'CA', 'GB', 'AU', 'NZ', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI', 'CH', 'AT', 'BE', 'IE', 'SG', 'JP', 'KR', 'IL'];
  const MIDTIER = ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'MY', 'TH', 'VN', 'PH', 'ID', 'TR', 'ZA', 'NG', 'KE', 'EG', 'MX', 'BR', 'AR', 'CL', 'CO'];
  
  if (LOCAL.includes(countryCode)) return 'local';
  if (INTERNATIONAL.includes(countryCode)) return 'international';
  if (MIDTIER.includes(countryCode)) return 'midtier';
  return 'midtier'; // default
}
Rate cards (internal, NEVER show to user):
javascriptconst RATE_CARDS = {
  local: {
    junior: 10,    // $/hr
    mid: 12,
    senior: 15,
    lead: 18,
    designer: 12,
    qa: 10,
    pm: 12
  },
  midtier: {
    junior: 16,
    mid: 18,
    senior: 21,
    lead: 25,
    designer: 18,
    qa: 15,
    pm: 18
  },
  international: {
    junior: 20,
    mid: 22,
    senior: 25,
    lead: 30,
    designer: 22,
    qa: 18,
    pm: 22
  }
};
User কে কোথাও hourly rate দেখাবে না। শুধু project-based total price দেখাবে।

CHANGE 3: AI role change — effort estimation only, NO pricing
Groq API call এর নতুন system prompt:
You are a senior technical project estimator for a software development agency. 

Given the user's project requirements, analyze and return a structured effort estimation in JSON format.

YOUR JOB:
- Analyze what modules/components need to be built
- Estimate effort (in mandays) per module
- Break down team composition needed per module
- Suggest a realistic timeline
- Identify risk factors

YOU MUST NOT:
- Calculate any pricing or costs
- Mention hourly rates
- Suggest budget ranges
- Reference any currency amounts

RESPOND ONLY WITH THIS JSON STRUCTURE (no markdown, no backticks, no preamble):

{
  "projectSummary": "Brief 2-line summary of what will be built",
  "modules": [
    {
      "name": "UI/UX Design",
      "description": "What this module covers",
      "mandays": { "low": 8, "high": 12 },
      "teamComposition": { "designer": 1 },
      "complexity": "medium"
    },
    {
      "name": "Frontend Development",
      "description": "...",
      "mandays": { "low": 20, "high": 30 },
      "teamComposition": { "senior": 1, "mid": 1 },
      "complexity": "high"
    }
    // ... more modules
  ],
  "totalMandays": { "low": 60, "high": 90 },
  "suggestedTimeline": "8-12 weeks",
  "teamSize": "3-4 developers + 1 designer + 1 QA + 1 PM",
  "riskFactors": [
    "Third-party API integration complexity",
    "AI model training data requirements"
  ],
  "recommendations": [
    "Consider phased delivery for faster time-to-market",
    "Start with core features, add AI module in phase 2"
  ],
  "phases": [
    {
      "name": "Phase 1 — Core Platform",
      "modules": ["UI/UX Design", "Frontend Development", "Backend & API"],
      "timeline": "4-6 weeks",
      "mandaysPercent": 55
    },
    {
      "name": "Phase 2 — Advanced Features",
      "modules": ["AI Integration", "Analytics Dashboard"],
      "timeline": "3-4 weeks",
      "mandaysPercent": 30
    },
    {
      "name": "Phase 3 — Polish & Launch",
      "modules": ["Testing & QA", "Deployment", "Documentation"],
      "timeline": "2-3 weeks",
      "mandaysPercent": 15
    }
  ]
}

IMPORTANT ESTIMATION RULES:
- Minimum total mandays: 25 (any project)
- SaaS platforms: minimum 50 mandays
- AI/ML components: add 15-25 mandays
- Mobile + Web: multiply by 1.4 (shared backend, separate frontends)
- 3+ integrations: add 10-15 mandays
- Scale 10K+ users: add 10-15 mandays for architecture
- Regulatory industries (FinTech, HealthTech): add 15-20 mandays for compliance
- Always suggest phasing if total > 50 mandays

CHANGE 4: Price calculation — backend, rule-based
After AI returns effort estimation, calculate price on backend:
javascriptfunction calculatePricing(aiResponse, region) {
  const rates = RATE_CARDS[region];
  const modules = aiResponse.modules;
  
  const pricedModules = modules.map(module => {
    const team = module.teamComposition;
    
    // Calculate blended rate for this module's team
    let totalRate = 0;
    let teamCount = 0;
    Object.entries(team).forEach(([role, count]) => {
      totalRate += (rates[role] || rates.mid) * count;
      teamCount += count;
    });
    const blendedRate = totalRate / teamCount;
    
    // Calculate module cost
    const hoursPerManday = 8;
    const costLow = Math.round((module.mandays.low * hoursPerManday * blendedRate) / 500) * 500;
    const costHigh = Math.round((module.mandays.high * hoursPerManday * blendedRate) / 500) * 500;
    
    return {
      ...module,
      costRange: { low: costLow, high: costHigh }
    };
  });
  
  const totalLow = pricedModules.reduce((sum, m) => sum + m.costRange.low, 0);
  const totalHigh = pricedModules.reduce((sum, m) => sum + m.costRange.high, 0);
  
  // Apply minimum floors
  const floors = {
    local: { default: 3000, saas: 8000 },
    midtier: { default: 8000, saas: 18000 },
    international: { default: 15000, saas: 30000 }
  };
  
  return {
    modules: pricedModules,
    total: { low: Math.max(totalLow, floors[region].default), high: totalHigh },
    region: region // internal, don't expose to user
  };
}
Minimum floors:
RegionAny projectSaaS/ComplexLocal (BD/IN)$3,000$8,000Mid-tier (ME/SEA)$8,000$18,000International (US/UK/EU)$15,000$30,000

CHANGE 5: Results page — detailed, trust-building
Results page layout:
Top — Project summary:

"Your [Project Type] Estimate"
AI generated 2-line summary
Suggested timeline
Recommended team size

Middle — Price breakdown (the main event):
Show a clean table/card list:
Module                          Effort          Cost
─────────────────────────────────────────────────────
UI/UX Design                    8-12 days       $1,500 - $2,500
Frontend Development            20-30 days      $5,000 - $7,500
Backend & API                   25-35 days      $6,500 - $8,500
AI/ML Integration               12-18 days      $3,500 - $5,000
Testing & QA                    8-12 days       $1,500 - $2,500
Project Management              6-10 days       $1,200 - $2,000
Deployment & DevOps             4-6 days        $800 - $1,200
─────────────────────────────────────────────────────
Total                           83-123 days     $20,000 - $29,200
প্রতিটা module row expandable করো — click করলে details দেখাবে (কী কী include আছে)।
Phased pricing tab:
Results page এ two toggle tabs দেখাও:

[Full Build] — total price at once
[Phased Delivery] — broken into 2-3 phases with per-phase pricing

Phased view:
Phase 1 — Core Platform (4-6 weeks)          $11,000 - $15,000
  └ UI/UX Design, Frontend, Backend & API
  
Phase 2 — Advanced Features (3-4 weeks)      $5,500 - $8,000
  └ AI/ML Integration, Analytics Dashboard
  
Phase 3 — Polish & Launch (2-3 weeks)        $3,500 - $6,200
  └ Testing & QA, Deployment, Documentation
"Start with Phase 1 — launch faster, expand later" message।
Market comparison (international clients only — check region):
How this compares:
US Development Agency     $80,000 - $150,000
US/EU Freelancers         $35,000 - $60,000
NimbleSL (you save 60-70%) $20,000 - $29,200  ← highlighted
এই section শুধু international IP হলে দেখাবে। Local/midtier IP হলে এই section hide করো।
Bottom CTAs:

[Download Detailed Estimate (PDF) →] (primary, large)
[Book a Free Consultation →] (secondary)
[Refine My Estimate →] (tertiary — goes back to edit inputs)

Risk factors & recommendations:

AI এর risk factors আর recommendations গুলো collapsible section এ দেখাও
"What could affect pricing" header এ


CHANGE 6: Live estimate sidebar
Wizard চলাকালীন right side এ একটা floating estimate preview দেখাও:
Your Estimate (updating live)
─────────────────────────
Selected: Mobile App + Admin Panel
Industry: FinTech

Running estimate:
$15,000 - $25,000

Breakdown so far:
  Mobile App:  $8K - $12K
  Admin Panel: $5K - $8K
  FinTech premium: +$2K - $5K

This updates as you select options.

এটা step 1 select করার পরেই দেখাবে
প্রতিটা selection এ update হবে (rule-based calculation, AI call ছাড়াই — rough estimate)
Final step এ AI call হবে detailed analysis এর জন্য
Mobile এ এটা bottom sticky bar হিসেবে দেখাবে: "Estimated: $15K-25K ▲" tap করলে expand হবে

Live estimate calculation (rough, pre-AI):
javascriptconst BASE_COSTS = {
  local: {
    'Mobile App': [5000, 8000],
    'Web Application': [4000, 7000],
    'SaaS Platform': [8000, 15000],
    'E-commerce': [5000, 9000],
    'Admin Dashboard': [3000, 5000],
    'API / Backend': [3000, 6000],
    'AI / ML Product': [6000, 12000],
    'Landing Page / Marketing Site': [1000, 2000],
    'MVP / Prototype': [3000, 5000],
    'Chrome Extension / Plugin': [2000, 4000]
  },
  midtier: { /* 1.8x of local */ },
  international: { /* 2.5x of local */ }
};

// Multipliers
const INDUSTRY_MULTIPLIERS = {
  'FinTech / Banking': 1.15,
  'Healthcare / Pharma': 1.15,
  'default': 1.0
};

const SCALE_MULTIPLIERS = {
  'Under 1,000': 1.0,
  '1,000 - 10,000': 1.1,
  '10,000 - 100,000': 1.2,
  '100,000+': 1.35
};

CHANGE 7: PDF generation — professional
window.print() DELETE করো। Proper PDF বানাও।
Option A (recommended): jsPDF + autoTable
bashnpm install jspdf jspdf-autotable
Option B: @react-pdf/renderer
PDF layout:
Page 1:
┌─────────────────────────────────────────────┐
│  [NimbleSL Logo]         Prepared: Jun 5, 2026  │
│                                                  │
│  PROJECT ESTIMATE                                │
│  ─────────────────                               │
│  Prepared for: [Client Name]                     │
│  Email: [Client Email]                           │
│  Company: [Company Name]                         │
│                                                  │
│  Project: Mobile App + Admin Dashboard           │
│  Industry: FinTech / Banking                     │
│  Timeline: 8-12 weeks                            │
│  Team Size: 4-5 members                          │
│                                                  │
│  ┌──────────────────────────────────────┐        │
│  │  ESTIMATED INVESTMENT                │        │
│  │  $20,000 — $29,200                   │        │
│  └──────────────────────────────────────┘        │
│                                                  │
│  Project Summary:                                │
│  [AI generated summary — 3-4 lines]              │
│                                                  │
└──────────────────────────────────────────────────┘

Page 2:
┌─────────────────────────────────────────────┐
│  DETAILED BREAKDOWN                              │
│  ─────────────────                               │
│                                                  │
│  Module             Effort       Cost Range      │
│  ──────────────────────────────────────────      │
│  UI/UX Design       8-12 days    $1,500-$2,500   │
│  Frontend Dev       20-30 days   $5,000-$7,500   │
│  Backend & API      25-35 days   $6,500-$8,500   │
│  AI Integration     12-18 days   $3,500-$5,000   │
│  Testing & QA       8-12 days    $1,500-$2,500   │
│  Project Mgmt       6-10 days    $1,200-$2,000   │
│  Deployment         4-6 days     $800-$1,200     │
│  ──────────────────────────────────────────      │
│  TOTAL              83-123 days  $20,000-$29,200 │
│                                                  │
│  PHASED DELIVERY OPTION                          │
│  ─────────────────────                           │
│  Phase 1: Core Platform (4-6 wks)  $11K-$15K    │
│  Phase 2: Advanced (3-4 wks)       $5.5K-$8K    │
│  Phase 3: Launch (2-3 wks)         $3.5K-$6.2K  │
│                                                  │
└──────────────────────────────────────────────────┘

Page 3:
┌─────────────────────────────────────────────┐
│  WHAT'S INCLUDED                                 │
│  ───────────────                                 │
│                                                  │
│  ✓ Complete source code ownership                │
│  ✓ Technical documentation                      │
│  ✓ 30-90 days post-launch support                │
│  ✓ Deployment to your infrastructure             │
│  ✓ Weekly progress updates                       │
│  ✓ Dedicated project manager                     │
│                                                  │
│  RECOMMENDATIONS                                 │
│  ───────────────                                 │
│  • [AI recommendation 1]                         │
│  • [AI recommendation 2]                         │
│  • [AI recommendation 3]                         │
│                                                  │
│  RISK FACTORS                                    │
│  ────────────                                    │
│  • [AI risk factor 1]                            │
│  • [AI risk factor 2]                            │
│                                                  │
│  ─────────────────────────────────────────       │
│                                                  │
│  NEXT STEPS                                      │
│  ──────────                                      │
│  1. Review this estimate                         │
│  2. Book a free consultation call                │
│  3. We refine scope together                     │
│  4. Development begins                           │
│                                                  │
│  Book a call: nimblesl.com/book-consultation     │
│  Email: hello@nimblesl.com                       │
│  WhatsApp: +880 XXXX XXXXX                       │
│                                                  │
│  [NimbleSL Logo]                                 │
│  © 2026 Nimble Software Lab                      │
│  This estimate is valid for 30 days.             │
│                                                  │
└──────────────────────────────────────────────────┘
PDF styling:

NimbleSL brand colors (match website)
Clean, minimal design — not cluttered
Professional font (Inter or Helvetica)
Proper margins (20mm all sides)
Header on each page: NimbleSL logo + page number
Footer on each page: "Confidential — Prepared for [Client Name]"


CHANGE 8: Lead capture + email
Existing FormSubmit.co flow রাখো but enhance:
Email এ যা যাবে:

Client name, email, phone, company
All selected options (project type, features, industry, etc.)
AI generated summary
Estimated price range
Region detected
Timestamp

PDF attachment: Email এ PDF attach করা FormSubmit.co তে possible না, তাই email body তে estimate summary রাখো + "Full PDF was downloaded by the client" note।

CHANGE 9: Context flags — keep but update
Existing context flag system ভালো আছে (SAAS_PLATFORM, AI_ML_COMPONENT, etc.) — রাখো। But AI prompt এ বলবে এগুলো effort estimation এর জন্য, pricing এর জন্য না।

CHANGE 10: Error handling + edge cases

IP detection fail হলে → default to 'midtier' rate
Groq API fail হলে → fallback to rule-based estimation only (BASE_COSTS calculations), show message "Detailed analysis unavailable, showing approximate estimate"
Empty/minimal selection (only 1 project type, no features) → still show estimate but with wider range + message "Add more details for a more accurate estimate"
Mobile responsive — wizard আর results page দুইটাই mobile-friendly হতে হবে


Summary of what to DELETE:

Budget step (step 8) — completely remove
window.open() + window.print() PDF — completely remove
AI calculating price in system prompt — remove pricing rules from AI prompt
Minimum 20 character requirement on description — make it optional

Summary of what to ADD:

IP-based location detection
Rule-based pricing calculation
Detailed module-wise price breakdown on results page
Phased delivery option with per-phase pricing
Market comparison section (international only)
Live estimate sidebar during wizard
Professional PDF generation (jsPDF)
Simplified 5-step wizard

Summary of what to KEEP:

Project type multi-select options (10)
Industry options (12)
Conditional feature groups
Context flag system
FormSubmit.co lead capture
Overall design language matching nimblesl.com