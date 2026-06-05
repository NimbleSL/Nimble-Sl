const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/lib/data/posts');
const blogIndexFile = path.join(__dirname, '../src/lib/data/blog.ts');

const files = fs.readdirSync(postsDir)
  .filter(file => file.endsWith('.ts'))
  .map(file => file.replace('.ts', ''));

// Order posts: put featured first, then order by date or dynamically.
// Let's just generate the list of imports.
let importsContent = '';
let arrayItems = '';

files.forEach((file, index) => {
  const varName = `post_${index}`;
  importsContent += `import { post as ${varName} } from './posts/${file}';\n`;
  arrayItems += `  ${varName},\n`;
});

const content = `// This file is dynamically generated. Do not edit directly.
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  accent: string;
  tagClass: string;
  featured?: boolean;
  coverImage?: string;
  content: string;
}

export const CATEGORIES = ['All', 'Engineering', 'AI/ML', 'Product', 'Business', 'Cloud', 'Mobile'] as const;

${importsContent}
export const blogPosts: BlogPost[] = [
${arrayItems}];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, count = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.category === category && p.slug !== slug)
    .slice(0, count);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
`;

fs.writeFileSync(blogIndexFile, content);
console.log('Successfully generated src/lib/data/blog.ts!');
