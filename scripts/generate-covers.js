const fs = require('fs');
const path = require('path');

const CATEGORIES = {
  'Engineering': { accent: '#3B82F6', tagClass: 'tag-blue' },
  'AI/ML': { accent: '#A855F7', tagClass: 'tag-purple' },
  'Product': { accent: '#F59E0B', tagClass: 'tag-amber' },
  'Business': { accent: '#10B981', tagClass: 'tag-emerald' },
  'Cloud': { accent: '#06B6D4', tagClass: 'tag-cyan' },
  'Mobile': { accent: '#E11D48', tagClass: 'tag-rose' }
};

// List of all 41 slugs
const POSTS = [
  // Original 31
  { slug: 'how-we-built-fraudshield-real-time-ml-fraud-detection-at-scale', category: 'AI/ML' },
  { slug: 'angular-vs-react-in-2025-enterprise-guide', category: 'Engineering' },
  { slug: 'microservices-vs-monolith-what-we-learned-from-30-migrations', category: 'Engineering' },
  { slug: 'next-js-15-app-router-performance-optimization-guide', category: 'Engineering' },
  { slug: 'building-offline-first-mobile-apps-with-flutter', category: 'Mobile' },
  { slug: 'postgresql-performance-tuning-for-saas-applications', category: 'Engineering' },
  { slug: 'why-llm-powered-features-are-now-table-stakes-for-saas', category: 'AI/ML' },
  { slug: 'building-a-rag-pipeline-for-enterprise-knowledge-bases', category: 'AI/ML' },
  { slug: 'computer-vision-for-quality-control-in-manufacturing', category: 'AI/ML' },
  { slug: 'fine-tuning-llms-when-it-makes-sense-and-when-it-does-not', category: 'AI/ML' },
  { slug: 'from-idea-to-mvp-in-8-weeks-the-nimblesl-sprint-framework', category: 'Product' },
  { slug: 'claimwise-how-ocr-ml-reduced-insurance-processing-time-by-60-percent', category: 'Product' },
  { slug: 'product-analytics-that-actually-drive-decisions', category: 'Product' },
  { slug: 'the-true-cost-of-software-development-in-bangladesh', category: 'Business' },
  { slug: 'designing-for-enterprise-5-lessons-from-50-plus-projects', category: 'Business' },
  { slug: 'how-to-evaluate-offshore-software-development-partners', category: 'Business' },
  { slug: 'staff-augmentation-vs-managed-teams-which-is-right-for-your-startup', category: 'Business' },
  { slug: 'aws-vs-gcp-vs-azure-enterprise-cloud-decision-framework', category: 'Cloud' },
  { slug: 'kubernetes-in-production-lessons-from-50-deployments', category: 'Cloud' },
  { slug: 'zero-downtime-database-migrations-in-production', category: 'Cloud' },
  { slug: 'serverless-vs-containers-cost-analysis-for-saas', category: 'Cloud' },
  { slug: 'typescript-strict-mode-patterns-for-large-codebases', category: 'Engineering' },
  { slug: 'react-query-vs-swr-vs-rtk-query-data-fetching-comparison', category: 'Engineering' },
  { slug: 'api-design-rest-vs-graphql-vs-trpc-for-modern-saas', category: 'Engineering' },
  { slug: 'react-native-vs-flutter-in-2025-which-to-choose', category: 'Mobile' },
  { slug: 'app-store-optimization-aso-guide-for-developers', category: 'Mobile' },
  { slug: 'building-multi-tenant-saas-architecture-complete-guide', category: 'Engineering' },
  { slug: 'web-security-checklist-for-saas-founders-and-developers', category: 'Engineering' },
  { slug: 'fintech-app-development-guide-compliance-and-architecture', category: 'Business' },
  { slug: 'how-to-build-a-design-system-from-scratch', category: 'Product' },
  { slug: 'ci-cd-pipeline-best-practices-for-enterprise-teams', category: 'Cloud' },
  // New 10
  { slug: 'building-ai-agents-with-gemini-and-langchain', category: 'AI/ML' },
  { slug: 'scaling-nextjs-to-10-million-page-views', category: 'Engineering' },
  { slug: 'react-native-new-architecture-in-production', category: 'Mobile' },
  { slug: 'mastering-postgresql-row-level-security-for-saas', category: 'Cloud' },
  { slug: 'ui-ux-design-principles-for-technical-dashboards', category: 'Product' },
  { slug: 'why-bangladesh-is-the-next-software-outsourcing-hotspot', category: 'Business' },
  { slug: 'securing-web-apps-with-zero-trust-architecture', category: 'Engineering' },
  { slug: 'deploying-kubernetes-clusters-with-terraform', category: 'Cloud' },
  { slug: 'computer-vision-pipelines-for-retail-analytics', category: 'AI/ML' },
  { slug: 'how-we-design-scalable-apis-with-trpc-and-zod', category: 'Engineering' }
];

const outputDir = path.join(__dirname, '../public/images/blog/posts');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate simple deterministic hash from string to seed the layout
function getHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

POSTS.forEach(post => {
  const catInfo = CATEGORIES[post.category] || { accent: '#3B82F6' };
  const color = catInfo.accent;
  
  // Custom seed values
  const seed = getHash(post.slug);
  const numNodes = 10 + (seed % 15);
  const offsetAngle = (seed % 360) * Math.PI / 180;
  
  // Generate distinct SVGs containing abstract networks
  let elements = '';
  
  // Background mesh
  elements += `<rect width="1200" height="675" fill="#0A0E1A" />`;
  
  // Add dark grid overlay
  elements += `<g opacity="0.07">`;
  for (let x = 0; x < 1200; x += 40) {
    elements += `<line x1="${x}" y1="0" x2="${x}" y2="675" stroke="#ffffff" stroke-width="1" />`;
  }
  for (let y = 0; y < 675; y += 40) {
    elements += `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="#ffffff" stroke-width="1" />`;
  }
  elements += `</g>`;
  
  // Ambient glow circle
  elements += `<circle cx="600" cy="337" r="350" fill="${color}" opacity="0.12" filter="blur(80px)" />`;
  elements += `<circle cx="${400 + (seed % 400)}" cy="${200 + (seed % 270)}" r="250" fill="#06B6D4" opacity="0.08" filter="blur(60px)" />`;
  
  // Draw random geometric background matching theme
  const shapeType = seed % 3;
  if (shapeType === 0) {
    // Cyber Grid structure
    elements += `<g opacity="0.15" stroke="${color}" stroke-width="1.5">`;
    for (let r = 80; r < 400; r += 60) {
      elements += `<circle cx="600" cy="337" r="${r}" fill="none" />`;
    }
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
      const x2 = 600 + Math.cos(angle + offsetAngle) * 450;
      const y2 = 337 + Math.sin(angle + offsetAngle) * 450;
      elements += `<line x1="600" y1="337" x2="${x2}" y2="${y2}" />`;
    }
    elements += `</g>`;
  } else if (shapeType === 1) {
    // Abstract digital isometric cubes
    elements += `<g opacity="0.2">`;
    for (let j = 0; j < 5; j++) {
      const cx = 350 + (seed * (j + 1) * 37) % 500;
      const cy = 200 + (seed * (j + 1) * 43) % 275;
      const size = 30 + (seed * (j + 1)) % 50;
      elements += `<polygon points="${cx},${cy - size} ${cx + size * 0.86},${cy - size * 0.5} ${cx + size * 0.86},${cy + size * 0.5} ${cx},${cy + size} ${cx - size * 0.86},${cy + size * 0.5} ${cx - size * 0.86},${cy - size * 0.5}" fill="none" stroke="${color}" stroke-width="2" />`;
      elements += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy + size}" stroke="${color}" stroke-width="1.5" />`;
      elements += `<line x1="${cx}" y1="${cy}" x2="${cx + size * 0.86}" y2="${cy - size * 0.5}" stroke="${color}" stroke-width="1.5" />`;
      elements += `<line x1="${cx}" y1="${cy}" x2="${cx - size * 0.86}" y2="${cy - size * 0.5}" stroke="${color}" stroke-width="1.5" />`;
    }
    elements += `</g>`;
  } else {
    // Wavy tech connections
    elements += `<path d="M 0 337 Q 300 ${200 + (seed % 200)} 600 337 T 1200 337" fill="none" stroke="${color}" stroke-width="3" opacity="0.25" />`;
    elements += `<path d="M 0 237 Q 400 ${350 + (seed % 150)} 800 237 T 1200 237" fill="none" stroke="#22D3EE" stroke-width="2" opacity="0.18" />`;
  }
  
  // Generating Network Nodes
  const nodes = [];
  for (let i = 0; i < numNodes; i++) {
    const angle = (i / numNodes) * Math.PI * 2 + offsetAngle;
    const r = 150 + ((seed * (i + 1) * 23) % 180);
    nodes.push({
      x: 600 + Math.cos(angle) * r,
      y: 337 + Math.sin(angle) * r,
      size: 4 + ((seed * (i + 1) * 11) % 8)
    });
  }
  
  // Draw connection lines between nodes
  elements += `<g opacity="0.3" stroke="${color}" stroke-width="1">`;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const distSq = Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2);
      if (distSq < 70000) { // connect close nodes
        elements += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}" />`;
      }
    }
  }
  elements += `</g>`;
  
  // Draw nodes
  nodes.forEach((node, idx) => {
    elements += `<circle cx="${node.x}" cy="${node.y}" r="${node.size}" fill="#0A0E1A" stroke="${color}" stroke-width="2" />`;
    if (idx % 3 === 0) {
      elements += `<circle cx="${node.x}" cy="${node.y}" r="${node.size - 2}" fill="${color}" />`;
      elements += `<circle cx="${node.x}" cy="${node.y}" r="${node.size + 6}" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.5" />`;
    }
  });

  // Glowing center portal
  elements += `<circle cx="600" cy="337" r="15" fill="${color}" opacity="0.8" />`;
  elements += `<circle cx="600" cy="337" r="25" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5" />`;
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">${elements}</svg>`;
  
  // Save as SVG file!
  fs.writeFileSync(path.join(outputDir, `${post.slug}.svg`), svg);
  console.log(`Generated cover for ${post.slug}`);
});

console.log('All 41 cover SVG graphics generated successfully!');
