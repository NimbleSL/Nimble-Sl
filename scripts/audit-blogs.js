const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/lib/data/posts');
const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.ts'));

const report = [];

files.forEach(file => {
  const filePath = path.join(postsDir, file);
  const code = fs.readFileSync(filePath, 'utf8');
  
  // Extract fields using regex
  const titleMatch = code.match(/title:\s*[`"'](.*)[`"']/);
  const slugMatch = code.match(/slug:\s*['"](.*)['"]/);
  const categoryMatch = code.match(/category:\s*['"](.*)['"]/);
  const coverImageMatch = code.match(/coverImage:\s*['"](.*)['"]/);
  
  // Extract content markdown
  const contentMatch = code.match(/content:\s*`([\s\S]*)`/);
  
  const title = titleMatch ? titleMatch[1] : file;
  const slug = slugMatch ? slugMatch[1] : '';
  const category = categoryMatch ? categoryMatch[1] : '';
  const hasCover = coverImageMatch ? 'Yes' : 'No';
  
  let content = '';
  if (contentMatch) {
    content = contentMatch[1];
  }
  
  // Word count of the markdown content
  const cleanContent = content.trim().replace(/\\`/g, '`').replace(/\\\${/g, '${');
  const words = cleanContent.split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  
  // Checks
  const hasInline = cleanContent.includes('![') ? 'Yes' : 'No';
  const hasProcess = (cleanContent.includes('1. ') || cleanContent.includes('Step-by-Step') || cleanContent.includes('Step 1')) ? 'Yes' : 'No';
  const hasTable = cleanContent.includes('|') ? 'Yes' : 'No';
  const hasCTA = cleanContent.includes('## Building something similar?') || cleanContent.includes('Try it yourself') || cleanContent.includes('AI Project Estimator') || cleanContent.includes('Schedule a Free Audit') ? 'Yes' : 'No';
  
  // Quality & Status Assessment
  let quality = 'Good';
  let issues = [];
  
  if (wordCount < 800) {
    quality = 'Needs Fix';
    issues.push(`Low word count (${wordCount} words, target 800-1000)`);
  } else if (wordCount > 1000) {
    quality = 'Needs Fix';
    issues.push(`High word count (${wordCount} words, target 800-1000)`);
  }
  
  if (hasInline === 'No') {
    quality = 'Needs Fix';
    issues.push('Missing inline image/diagram');
  }
  
  if (hasCTA === 'No') {
    quality = 'Needs Fix';
    issues.push('Missing contextual CTA at the end');
  }
  
  // Determine if it is in the user's must-have lists
  // User's Must-Haves:
  const isPriorityList = [
    'how-to-build-a-fintech-app-in-2026-complete-guide',
    'how-much-does-it-cost-to-build-a-healthcare-app',
    'how-much-custom-software-cost-in-2026-honest-pricing-guide',
    'react-native-vs-flutter-vs-native-which-to-choose-in-2026',
    'react-vs-angular-vs-vue-for-enterprise-apps-2026-comparison'
  ];
  
  report.push({
    title,
    slug,
    wordCount,
    hasCover,
    hasInline,
    hasProcess,
    hasTable,
    hasCTA,
    category,
    quality,
    issues: issues.length > 0 ? issues.join(', ') : 'None'
  });
});

// Write markdown report
let md = `# NimbleSL Blog Audit Report\n\n`;
md += `This report lists the status of all **${report.length}** blog posts currently in the codebase against the new content rules.\n\n`;
md += `| Title | Slug | Words | Cover | Inline | Process | Table | CTA | Category | Quality | Issues |\n`;
md += `| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n`;

report.forEach(r => {
  md += `| ${r.title} | \`/blog/${r.slug}\` | ${r.wordCount} | ${r.hasCover} | ${r.hasInline} | ${r.hasProcess} | ${r.hasTable} | ${r.hasCTA} | ${r.category} | **${r.quality}** | ${r.issues} |\n`;
});

fs.writeFileSync(path.join(__dirname, '../public/blog-audit-report.md'), md);
console.log('Successfully generated public/blog-audit-report.md!');
