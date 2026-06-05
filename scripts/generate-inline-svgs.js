const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/images/blog/posts');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. FraudShield Architecture
const fraudShieldSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <rect width="800" height="450" fill="#0A0E1A" rx="12" />
  <g opacity="0.05" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="50" x2="800" y2="50" />
    <line x1="0" y1="150" x2="800" y2="150" />
    <line x1="0" y1="250" x2="800" y2="250" />
    <line x1="0" y1="350" x2="800" y2="350" />
  </g>
  <!-- Glows -->
  <circle cx="200" cy="225" r="150" fill="#3B82F6" opacity="0.08" filter="blur(50px)" />
  <circle cx="600" cy="225" r="150" fill="#06B6D4" opacity="0.08" filter="blur(50px)" />
  
  <!-- Nodes / Boxes -->
  <g fill="#0F1629" stroke="#3B82F6" stroke-width="2">
    <!-- Client Ingestion -->
    <rect x="50" y="180" width="120" height="90" rx="8" />
    <!-- Kafka Queue -->
    <rect x="230" y="180" width="120" height="90" rx="8" />
    <!-- ML GPU Engine -->
    <rect x="420" y="100" width="140" height="90" rx="8" />
    <!-- Decision & Rules -->
    <rect x="420" y="260" width="140" height="90" rx="8" />
    <!-- Action Layer -->
    <rect x="630" y="180" width="120" height="90" rx="8" />
  </g>
  
  <!-- Arrows / Connections -->
  <g stroke="#34D399" stroke-width="2" fill="none">
    <path d="M 170 225 L 220 225" marker-end="url(#arrow)" />
    <path d="M 350 225 L 390 225 L 390 145 L 410 145" marker-end="url(#arrow)" />
    <path d="M 350 225 L 390 225 L 390 305 L 410 305" marker-end="url(#arrow)" />
    <path d="M 560 145 L 600 145 L 600 225 L 620 225" marker-end="url(#arrow)" />
    <path d="M 560 305 L 600 305 L 600 225 L 620 225" marker-end="url(#arrow)" />
  </g>
  
  <!-- Marker Definition -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34D399" />
    </marker>
  </defs>
  
  <!-- Text Labels -->
  <g fill="#F1F5F9" font-family="monospace" font-size="12" text-anchor="middle">
    <text x="110" y="220" font-weight="bold">TRANSACTION</text>
    <text x="110" y="240">INGESTION</text>
    
    <text x="290" y="220" font-weight="bold">APACHE</text>
    <text x="290" y="240">KAFKA</text>
    
    <text x="490" y="140" font-weight="bold">ML MODEL</text>
    <text x="490" y="160">XGBoost &amp; LSTM</text>
    
    <text x="490" y="300" font-weight="bold">DECISION ENGINE</text>
    <text x="490" y="320">Rule &amp; Limit Checks</text>
    
    <text x="690" y="220" font-weight="bold">ACTION LAYER</text>
    <text x="690" y="240">Block / Flag / Allow</text>
  </g>
  <g fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">
    <text x="200" y="210">10k req/s</text>
    <text x="390" y="210">&lt; 10ms</text>
    <text x="595" y="210">Verdict</text>
  </g>
</svg>
`;

// 2. React vs Angular Comparison Radar/Core Matrix
const reactVsAngularSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <rect width="800" height="450" fill="#0A0E1A" rx="12" />
  <circle cx="400" cy="225" r="150" fill="#06B6D4" opacity="0.08" filter="blur(50px)" />
  
  <!-- Grid Axis -->
  <line x1="400" y1="50" x2="400" y2="400" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
  <line x1="150" y1="225" x2="650" y2="225" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
  
  <circle cx="400" cy="225" r="60" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
  <circle cx="400" cy="225" r="120" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
  <circle cx="400" cy="225" r="180" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
  
  <!-- Angular Polygon -->
  <polygon points="400,105 540,225 400,345 300,225" fill="rgba(239,68,68,0.1)" stroke="#EF4444" stroke-width="2.5" />
  
  <!-- React Polygon -->
  <polygon points="400,165 600,225 400,285 240,225" fill="rgba(59,130,246,0.1)" stroke="#3B82F6" stroke-width="2.5" />
  
  <!-- Labels -->
  <g fill="#F1F5F9" font-family="monospace" font-size="12" font-weight="bold">
    <text x="400" y="35" text-anchor="middle">ARCHITECTURAL CONSISTENCY</text>
    <text x="400" y="425" text-anchor="middle">FLEXIBILITY &amp; SPEED OF DEVELOPMENT</text>
    <text x="670" y="230" text-anchor="start">COMMUNITY ECOSYSTEM</text>
    <text x="130" y="230" text-anchor="end">LONG TERM MAINTENANCE</text>
  </g>
  
  <!-- Legend -->
  <rect x="620" y="40" width="12" height="12" fill="#EF4444" />
  <text x="640" y="50" fill="#94A3B8" font-family="monospace" font-size="11">Angular</text>
  
  <rect x="620" y="60" width="12" height="12" fill="#3B82F6" />
  <text x="640" y="70" fill="#94A3B8" font-family="monospace" font-size="11">React + Next.js</text>
</svg>
`;

// 3. Monolith vs Microservices
const microservicesSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <rect width="800" height="450" fill="#0A0E1A" rx="12" />
  <circle cx="200" cy="225" r="120" fill="#3B82F6" opacity="0.08" filter="blur(40px)" />
  <circle cx="600" cy="225" r="120" fill="#10B981" opacity="0.08" filter="blur(40px)" />
  
  <!-- Monolith Layout -->
  <g stroke="#3B82F6" stroke-width="2" fill="#0F1629">
    <rect x="80" y="110" width="240" height="230" rx="8" />
    <rect x="110" y="140" width="180" height="40" rx="4" />
    <rect x="110" y="205" width="180" height="40" rx="4" />
    <rect x="110" y="270" width="180" height="40" rx="4" />
  </g>
  
  <!-- Microservices Layout -->
  <g stroke="#10B981" stroke-width="2" fill="#0F1629">
    <rect x="460" y="110" width="100" height="60" rx="6" />
    <rect x="620" y="110" width="100" height="60" rx="6" />
    <rect x="540" y="225" width="100" height="60" rx="6" />
    <rect x="460" y="340" width="100" height="60" rx="6" />
    <rect x="620" y="340" width="100" height="60" rx="6" />
  </g>
  
  <!-- Connections in Microservices -->
  <g stroke="#10B981" stroke-width="1.5" stroke-dasharray="4" fill="none">
    <line x1="510" y1="170" x2="590" y2="225" />
    <line x1="670" y1="170" x2="590" y2="225" />
    <line x1="590" y1="285" x2="510" y2="340" />
    <line x1="590" y1="285" x2="670" y2="340" />
    <line x1="510" y1="170" x2="670" y2="170" />
    <line x1="510" y1="340" x2="670" y2="340" />
  </g>
  
  <!-- Text -->
  <g fill="#F1F5F9" font-family="monospace" font-size="12" text-anchor="middle">
    <text x="200" y="80" font-weight="bold" font-size="14">MONOLITHIC SYSTEM</text>
    <text x="200" y="165">User Interface</text>
    <text x="200" y="230">Business Logic Layer</text>
    <text x="200" y="295">Data Access Layer</text>
    
    <text x="600" y="80" font-weight="bold" font-size="14">MICROSERVICES SYSTEM</text>
    <text x="510" y="145">Auth API</text>
    <text x="670" y="145">Cart API</text>
    <text x="590" y="260">Gateway</text>
    <text x="510" y="375">Catalog</text>
    <text x="670" y="375">Payment</text>
  </g>
</svg>
`;

// 4. Flutter Sync Loop (Offline First)
const flutterSyncSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <rect width="800" height="450" fill="#0A0E1A" rx="12" />
  <circle cx="400" cy="225" r="140" fill="#A855F7" opacity="0.08" filter="blur(50px)" />
  
  <!-- Circle Loop Path -->
  <circle cx="400" cy="225" r="110" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
  
  <!-- Flow Arrows -->
  <g fill="#A855F7" stroke="#A855F7" stroke-width="2" fill="none">
    <path d="M 400 115 A 110 110 0 0 1 510 225" marker-end="url(#arrow-purple)" />
    <path d="M 510 225 A 110 110 0 0 1 400 335" marker-end="url(#arrow-purple)" />
    <path d="M 400 335 A 110 110 0 0 1 290 225" marker-end="url(#arrow-purple)" />
    <path d="M 290 225 A 110 110 0 0 1 400 115" marker-end="url(#arrow-purple)" />
  </g>
  
  <defs>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#A855F7" />
    </marker>
  </defs>
  
  <!-- Loop Nodes -->
  <g fill="#0F1629" stroke="#A855F7" stroke-width="2">
    <rect x="340" y="80" width="120" height="70" rx="6" />
    <rect x="460" y="190" width="120" height="70" rx="6" />
    <rect x="340" y="300" width="120" height="70" rx="6" />
    <rect x="220" y="190" width="120" height="70" rx="6" />
  </g>
  
  <!-- Text -->
  <g fill="#F1F5F9" font-family="monospace" font-size="11" text-anchor="middle">
    <text x="400" y="115" font-weight="bold">1. LOCAL DB</text>
    <text x="400" y="130">Drift / SQLite</text>
    
    <text x="520" y="225" font-weight="bold">2. SYNC QUEUE</text>
    <text x="520" y="240">Pending Uploads</text>
    
    <text x="400" y="335" font-weight="bold">3. BACKEND API</text>
    <text x="400" y="350">Resolver Service</text>
    
    <text x="280" y="225" font-weight="bold">4. RESOLVER</text>
    <text x="280" y="240">Update State</text>
  </g>
</svg>
`;

// 5. MVP Sprint Phases (8 Weeks Timeline)
const mvpTimelineSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <rect width="800" height="450" fill="#0A0E1A" rx="12" />
  <circle cx="400" cy="225" r="160" fill="#F59E0B" opacity="0.08" filter="blur(60px)" />
  
  <!-- Timeline Base Line -->
  <line x1="80" y1="260" x2="720" y2="260" stroke="rgba(255,255,255,0.15)" stroke-width="4" />
  
  <!-- Weeks progress bars -->
  <!-- Phase 1: W1-2 -->
  <line x1="80" y1="260" x2="240" y2="260" stroke="#F59E0B" stroke-width="8" />
  <!-- Phase 2: W3-6 -->
  <line x1="240" y1="260" x2="560" y2="260" stroke="#E11D48" stroke-width="8" />
  <!-- Phase 3: W7-8 -->
  <line x1="560" y1="260" x2="720" y2="260" stroke="#10B981" stroke-width="8" />
  
  <!-- Phase Nodes -->
  <circle cx="80" cy="260" r="12" fill="#0A0E1A" stroke="#F59E0B" stroke-width="3" />
  <circle cx="240" cy="260" r="12" fill="#0A0E1A" stroke="#F59E0B" stroke-width="3" />
  <circle cx="560" cy="260" r="12" fill="#0A0E1A" stroke="#E11D48" stroke-width="3" />
  <circle cx="720" cy="260" r="12" fill="#0A0E1A" stroke="#10B981" stroke-width="3" />
  
  <!-- Card overlays above nodes -->
  <g fill="#0F1629" stroke-width="1.5">
    <!-- W1-2 Card -->
    <rect x="80" y="60" width="140" height="140" rx="8" stroke="#F59E0B" />
    <!-- W3-6 Card -->
    <rect x="280" y="60" width="200" height="140" rx="8" stroke="#E11D48" />
    <!-- W7-8 Card -->
    <rect x="560" y="60" width="160" height="140" rx="8" stroke="#10B981" />
  </g>
  
  <!-- Labels inside cards -->
  <g font-family="monospace" font-size="11" fill="#F1F5F9" text-anchor="middle">
    <!-- Card 1 -->
    <text x="150" y="95" font-weight="bold" fill="#F59E0B">WEEK 1 - 2</text>
    <text x="150" y="125">Discovery</text>
    <text x="150" y="145">Design Sprint</text>
    <text x="150" y="165">MoSCoW Rules</text>
    
    <!-- Card 2 -->
    <text x="380" y="95" font-weight="bold" fill="#E11D48">WEEK 3 - 6</text>
    <text x="380" y="125">Development Sprints</text>
    <text x="380" y="145">Continuous Integrations</text>
    <text x="380" y="165">Staging Deploys</text>
    
    <!-- Card 3 -->
    <text x="640" y="95" font-weight="bold" fill="#10B981">WEEK 7 - 8</text>
    <text x="640" y="125">QA Auditing</text>
    <text x="640" y="145">Launch Checklist</text>
    <text x="640" y="165">Live Release</text>
  </g>
  
  <!-- Milestone Indicators -->
  <g font-family="monospace" font-size="12" fill="#94A3B8" text-anchor="middle">
    <text x="80" y="300">Start</text>
    <text x="240" y="300">Design Signoff</text>
    <text x="560" y="300">Feature Freeze</text>
    <text x="720" y="300">Production</text>
  </g>
</svg>
`;

// 6. Fintech Tokenization Flow (Compliance)
const fintechComplianceSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <rect width="800" height="450" fill="#0A0E1A" rx="12" />
  <circle cx="400" cy="225" r="150" fill="#10B981" opacity="0.08" filter="blur(50px)" />
  
  <!-- Flow Lines -->
  <g stroke="#10B981" stroke-width="2" fill="none">
    <!-- Tokenization call -->
    <path d="M 170 160 L 390 160 L 390 190" marker-end="url(#arrow-green)" />
    <!-- Backend verify -->
    <path d="M 390 270 L 390 320 L 250 320 L 250 200" marker-end="url(#arrow-green)" />
    <!-- Final Charge -->
    <path d="M 250 200 L 590 200 L 590 160 L 610 160" marker-end="url(#arrow-green)" />
  </g>
  
  <defs>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10B981" />
    </marker>
  </defs>
  
  <!-- Component Boxes -->
  <g fill="#0F1629" stroke="#10B981" stroke-width="2">
    <!-- User Client UI -->
    <rect x="50" y="120" width="120" height="80" rx="6" />
    <!-- Payment Processor API (Stripe/Adyen) -->
    <rect x="310" y="190" width="160" height="80" rx="6" />
    <!-- Application Backend DB (No Card Data!) -->
    <rect x="170" y="320" width="160" height="80" rx="6" />
    <!-- double-entry Accounting Ledger -->
    <rect x="610" y="120" width="140" height="80" rx="6" />
  </g>
  
  <!-- Labels -->
  <g fill="#F1F5F9" font-family="monospace" font-size="11" text-anchor="middle">
    <text x="110" y="155" font-weight="bold">USER CLIENT</text>
    <text x="110" y="170">Browser UI</text>
    
    <text x="390" y="225" font-weight="bold">GATEWAY VAULT</text>
    <text x="390" y="240">Generates Token</text>
    
    <text x="250" y="355" font-weight="bold">APP BACKEND</text>
    <text x="250" y="370">Stores Token Only</text>
    
    <text x="680" y="155" font-weight="bold">LEDGER SYSTEM</text>
    <text x="680" y="170">Double-Entry DB</text>
  </g>
  
  <g fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">
    <text x="280" y="150">Submit Card Data</text>
    <text x="235" y="300">Return Token</text>
    <text x="520" y="190">Execute Charge</text>
  </g>
</svg>
`;

// Write all inline SVGs to folder
fs.writeFileSync(path.join(outputDir, 'fraudshield-architecture.svg'), fraudShieldSvg);
fs.writeFileSync(path.join(outputDir, 'react-vs-angular-architecture.svg'), reactVsAngularSvg);
fs.writeFileSync(path.join(outputDir, 'microservices-architecture.svg'), microservicesSvg);
fs.writeFileSync(path.join(outputDir, 'flutter-sync-loop.svg'), flutterSyncSvg);
fs.writeFileSync(path.join(outputDir, 'mvp-sprint-phases.svg'), mvpTimelineSvg);
fs.writeFileSync(path.join(outputDir, 'fintech-architecture.svg'), fintechComplianceSvg);

console.log('Inline SVGs generated successfully!');
