# Nimble-Sl Design System & Theming Guide

Complete theming, design tokens, and component patterns for building a new `/products` page that matches existing pages.

---

## 1. CSS CUSTOM PROPERTIES (Design Tokens)

### Location: `/src/app/globals.css` (lines 7-90)

#### Brand Colors - EXACT VALUES
```css
/* Dark Mode (Default) */
--color-bg: #0A0E1A;              /* Main background */
--color-surface: #0F1629;           /* Card/surface background */
--color-surface-2: #141925;         /* Secondary surface (darker) */
--color-border: rgba(255, 255, 255, 0.07);  /* Subtle borders */
--color-border-2: rgba(255, 255, 255, 0.12); /* More prominent borders */

/* Text Colors */
--color-text: #F1F5F9;              /* Primary text (white-ish) */
--color-text-2: #94A3B8;            /* Secondary text (gray) */
--color-text-3: #475569;            /* Tertiary text (darker gray) */

/* Accent Colors */
--color-blue: #3B82F6;              /* Primary blue */
--color-blue-2: #60A5FA;            /* Lighter blue for hover/accents */
--color-cyan: #06B6D4;              /* Cyan accent */
--color-cyan-2: #22D3EE;            /* Lighter cyan */
--color-emerald: #10B981;           /* Green/emerald (CTA) */
--color-emerald-2: #34D399;         /* Lighter emerald */
--color-purple: #A855F7;            /* Purple accent */
--color-purple-2: #C084FC;          /* Lighter purple */
--color-amber: #F59E0B;             /* Amber/warning */
--color-amber-2: #FCD34D;           /* Lighter amber */
--color-rose: #F43F5E;              /* Rose/error */
--color-rose-2: #FB7185;            /* Lighter rose */

/* Overlay Tokens (for subtle backgrounds) */
--overlay-xs:  rgba(255, 255, 255, 0.03);   /* Hairline tint */
--overlay-sm:  rgba(255, 255, 255, 0.05);   /* Subtle hover bg */
--overlay-md:  rgba(255, 255, 255, 0.08);   /* Section divider tint */
--overlay-lg:  rgba(255, 255, 255, 0.12);   /* Prominent overlay */
--shadow-card: 0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.25);
```

#### Light Mode Overrides (`[data-theme="light"]`)
```css
--bg: #F8FAFC;                      /* Light background */
--surface: #FFFFFF;                 /* White card background */
--surface-2: #F1F5F9;               /* Light gray surface */
--border: rgba(0, 0, 0, 0.07);      /* Dark text borders */
--border-2: rgba(0, 0, 0, 0.12);    /* More prominent dark borders */
--text: #0F172A;                    /* Dark text */
--text-2: #475569;                  /* Gray text */
--text-3: #94A3B8;                  /* Light gray text */
--overlay-xs:  rgba(0, 0, 0, 0.02);
--overlay-sm:  rgba(0, 0, 0, 0.04);
--overlay-md:  rgba(0, 0, 0, 0.06);
--overlay-lg:  rgba(0, 0, 0, 0.09);
--shadow-card: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
```

#### Font Families
```css
--font-sans: var(--font-plus-jakarta);    /* Display/headings: Plus Jakarta Sans */
--font-body: var(--font-dm-sans);         /* Body text: DM Sans */
--font-mono: var(--font-jetbrains-mono);  /* Code/badges: JetBrains Mono */

/* Set in layout.tsx via Next.js font imports */
--font-plus-jakarta: imported from Google Fonts
--font-dm-sans: imported from Google Fonts
--font-jetbrains-mono: imported from Google Fonts
```

---

## 2. NAVBAR STRUCTURE & NAV ITEMS

### Location: `/src/components/layout/Navbar.tsx`

#### Navigation Links (Exact Structure)
```typescript
const NAV_LINKS = [
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Solutions', href: '/solutions', hasMega: true },
  { label: 'Case Studies', href: '/case-studies', hasMega: false },
  { label: 'Hire Developers', href: '/hire-developers', hasMega: false },
  { label: 'Blog', href: '/blog', hasMega: false },
  { label: 'About', href: '/about', hasMega: false },
];
```

#### Navbar Layout Details
- **Height (Desktop)**: 72px (nav-main-row)
- **Height (Mobile)**: 60px (below md breakpoint)
- **Logo Size (Desktop)**: 76x76px
- **Logo Size (Mobile)**: 48x48px
- **Announcement Bar** (above navbar): 38px tall, hidden on mobile
- **Container Padding**: 0 32px (desktop), 0 20px (tablet/mobile)

#### Desktop Navigation Styling
```jsx
// Link styling
className="nav-link-animated flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium"
style={{
  color: isActive ? 'var(--blue-2)' : 'var(--text-2)',
}}

// Active state shows underline animation (nav-link-animated::after)
// Hover: bg-white/5 (overlay-sm)
```

#### Mobile Navigation
- Slides in from right (exit: x: 100%)
- Full-screen overlay with `var(--bg)`
- Expandable mega menu sections with smooth height animation
- Bottom CTA buttons (Try AI Estimator, Book a Call, Theme Toggle)

#### Right-side CTAs (Desktop)
1. Theme toggle button (8x8 rounded lg)
2. "Book a Call" link (ghost style)
3. "Try AI Estimator" button (btn-emerald with MagneticWrapper)

#### Announcement Bar Content
- Left/Center: Live badge (emerald bg), booking status text, divider, CTA text
- Right: Dismiss button (X icon)
- Background: Gradient across surface colors with shimmer animation

---

## 3. CARD & GRID LAYOUT PATTERNS

### Card Component Styling
```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

/* Card Hover Effects */
.card-hover:hover {
  transform: translateY(-2px);
}

.card:hover {
  border-color: rgba(96, 165, 250, 0.22);
  box-shadow:
    0 0 0 1px rgba(96, 165, 250, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.18);
}

/* Comet border animation on hover (via ::before pseudo-element) */
/* Shimmer sweep on hover (via ::after pseudo-element) */
```

### Grid Classes (Responsive)
```css
/* Desktop */
.rg-2    { display: grid; grid-template-columns: 1fr 1fr; }
.rg-3    { display: grid; grid-template-columns: repeat(3, 1fr); }
.rg-4    { display: grid; grid-template-columns: repeat(4, 1fr); }
.rg-hero { grid-template-columns: 1.1fr 0.9fr; align-items: center; }
.rg-hero-equal { grid-template-columns: 1fr 1fr; align-items: center; }
.rg-sidebar { grid-template-columns: 1fr 240px; }
.rg-sidebar-lg { grid-template-columns: 1fr 280px; }
.rg-content-cta { grid-template-columns: 1fr auto; align-items: center; }

/* Tablet (≤1024px) */
.rg-3, .rg-4 → 2 columns
.rg-hero, .rg-hero-equal → 1 column (stacked)
.rg-sidebar-lg → 1fr 240px (sidebar keeps size)

/* Mobile (≤768px) */
.rg-2, .rg-3, .rg-4 → 1 column (full width)
.rg-hero, .rg-hero-equal → 1 column
.rg-sidebar, .rg-sidebar-lg → 1 column
```

### Featured Cards with Image + Content
```jsx
{/* Example from Blog/Case Studies Featured Card */}
<div className="grid grid-cols-1 md:grid-cols-12">
  {/* Image Column */}
  <div className="col-span-1 md:col-span-5 h-[240px] md:h-auto overflow-hidden">
    <img src={image} style={{ objectFit: 'cover' }} />
  </div>
  
  {/* Content Column */}
  <div className="col-span-1 md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
    {/* Content */}
  </div>
</div>
```

### Product/Solution Cards Grid Pattern
```jsx
<div className="rg-3" style={{ gap: 24 }}>
  {items.map((item) => (
    <div className="card card-hover" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Preview image - 196px height */}
      <div style={{ height: 196, position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        <img src={image} style={{ objectFit: 'cover', transform: 'scale(1.02)' }} />
        {/* Accent tag positioned absolute top-right */}
        <span className="tag tag-{variant}">Tag</span>
      </div>
      
      {/* Content area */}
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Title, description, metrics, tech tags */}
        {/* CTA buttons at bottom (gap: 8, borderTop) */}
      </div>
    </div>
  ))}
</div>
```

---

## 4. BUTTON & CTA STYLING

### Button Classes
```css
/* Base button */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  text-decoration: none;
}

.btn:hover {
  transform: translateY(-1px) scale(1.02);
}

.btn:active {
  transform: translateY(0) scale(0.99);
  transition-duration: 0.08s;
}

/* Primary (Blue gradient) */
.btn-primary {
  background: linear-gradient(135deg, #3B82F6, #2563EB);
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
.btn-primary:hover {
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
}

/* Emerald (Green gradient - used for AI Estimator CTA) */
.btn-emerald {
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}
.btn-emerald:hover {
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
}

/* Ghost (transparent with border) */
.btn-ghost {
  background: transparent;
  color: var(--text-2);
  border: 1px solid var(--border-2);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}
```

### Button Variations in Code
```jsx
// Large CTAs (featured sections)
className="btn btn-primary" style={{ padding: '14px 24px', fontSize: 14 }}

// Card-level CTAs (inside product cards)
className="btn btn-primary" style={{ padding: '9px 14px', fontSize: 13 }}

// With icons
<button className="btn btn-emerald">
  <Sparkles size={13} />
  Try AI Estimator
</button>
```

---

## 5. TAGS, BADGES & EYEBROWS

### Tag/Badge Classes
```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--surface-2);
  color: var(--text-2);
  border: 1px solid var(--border);
}

/* Colored tag variants */
.tag-blue      { background: rgba(59,130,246,0.12); color: #60A5FA; border-color: rgba(59,130,246,0.25); }
.tag-cyan      { background: rgba(6,182,212,0.12); color: #22D3EE; border-color: rgba(6,182,212,0.25); }
.tag-emerald   { background: rgba(16,185,129,0.12); color: #34D399; border-color: rgba(16,185,129,0.25); }
.tag-purple    { background: rgba(168,85,247,0.12); color: #C084FC; border-color: rgba(168,85,247,0.25); }
.tag-amber     { background: rgba(245,158,11,0.12); color: #FCD34D; border-color: rgba(245,158,11,0.25); }
.tag-rose      { background: rgba(244,63,94,0.12); color: #FB7185; border-color: rgba(244,63,94,0.25); }
```

### Eyebrow/Section Headers
```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--blue-2);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 6px 12px;
  border-radius: 999px;
}

.ev-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--emerald);
  box-shadow: 0 0 8px var(--emerald);
  animation: pulse-glow 2s infinite;
}
```

### Usage Examples
```jsx
{/* Eyebrow with dot */}
<span className="eyebrow mb-5 inline-flex">
  <span className="ev-dot" /> Engineering Insights
</span>

{/* Tag variants */}
<span className={`tag tag-${tagVariant}`}>FinTech</span>
```

---

## 6. SECTION PADDING & SPACING

### Standard Section Padding
```jsx
{/* Hero sections */}
className="hero-section"  // 124px top, 120px bottom (desktop)

{/* Inner page hero (accounts for navbar) */}
className="inner-hero-pt"  // 140px top (desktop), 80px (mobile)

{/* Standard sections */}
style={{ padding: '96px 0' }}  // Large sections
style={{ padding: '40px 0 48px' }}  // Medium sections
style={{ padding: '24px 0' }}  // Small sections

{/* Featured card section */}
style={{ padding: '12px', borderBottom: '1px solid var(--border)' }}
```

### Container
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;  /* Desktop */
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
```

---

## 7. TYPOGRAPHY

### Font Families
- **Display/Headings**: `font-display` → Plus Jakarta Sans (weights: 400, 500, 600, 700, 800)
- **Body Text**: DM Sans (weights: 400, 500, 600, 700)
- **Code/Monospace**: JetBrains Mono (weights: 400, 500, 600, 700)

### Heading Sizes
```jsx
{/* Hero H1 */}
className="text-4xl font-bold sm:text-5xl lg:text-6xl font-display"
// or with clamp
style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800 }}

{/* Large subheading */}
style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800 }}

{/* Card title */}
style={{ fontSize: 18, fontWeight: 700 }}  // Featured card
style={{ fontSize: 15, fontWeight: 700 }}  // Regular card

{/* Small title */}
style={{ fontSize: 13, fontWeight: 600 }}

{/* Meta text */}
className="text-xs uppercase tracking-widest"
```

### Text Colors
```jsx
{/* Primary text */}
style={{ color: 'var(--text)' }}

{/* Secondary text */}
style={{ color: 'var(--text-2)' }}

{/* Tertiary/Meta text */}
style={{ color: 'var(--text-3)' }}

{/* Accent color */}
style={{ color: 'var(--blue-2)' }}
```

### Line Heights
```jsx
lineHeight: 1.6  // Default body
lineHeight: 1.65 // Paragraphs
lineHeight: 1.5  // Compact
lineHeight: 1.1  // Tight (headings)
lineHeight: 1.3  // Semi-tight (card titles)
lineHeight: 1.35 // Semi-loose (card subtitles)
```

---

## 8. GRADIENT TEXT

### Available Gradients
```css
/* Blue to Cyan gradient */
.grad-blue {
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Emerald to Cyan gradient */
.grad-emerald {
  background: linear-gradient(135deg, #10B981, #06B6D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Purple to Blue gradient */
.grad-purple {
  background: linear-gradient(135deg, #A855F7, #3B82F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Usage
```jsx
<span className="grad-blue">Feature Name</span>
```

---

## 9. BACKGROUND EFFECTS

### Mesh Background (Hero sections)
```css
.mesh-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 800px 600px at 20% -10%, rgba(59,130,246,0.15), transparent 60%),
    radial-gradient(ellipse 600px 400px at 80% 50%, rgba(6,182,212,0.10), transparent 60%),
    radial-gradient(ellipse 500px 300px at 50% 100%, rgba(16,185,129,0.08), transparent 60%);
  pointer-events: none;
}
```

### Grid Background
```css
.grid-bg {
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 64px 64px;
}
```

### Dot Pattern
```css
.dot-bg {
  background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Glassmorphism
```css
.glass {
  background: rgba(15, 22, 41, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-2);
}

.glass-light {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

---

## 10. CLASSNAME NAMING CONVENTIONS

### Component Classes
```
.card              // Base card element
.card-hover        // Adds hover lift effect
.btn               // Base button
.btn-primary       // Blue gradient button
.btn-emerald       // Green gradient button
.btn-ghost         // Transparent button with border
.tag               // Badge/tag element
.tag-{color}       // Colored tag (blue, cyan, emerald, etc.)
.eyebrow           // Section header badge
.ev-dot            // Animated dot in eyebrow
.container         // Max-width wrapper
.nav-link-animated // Nav link with underline animation
.nav-logo          // Logo element (responsive sizing)
```

### Grid Classes
```
.rg-2              // 2-column grid (1 on mobile)
.rg-3              // 3-column grid (2 on tablet, 1 on mobile)
.rg-4              // 4-column grid (2 on tablet, 1 on mobile)
.rg-hero           // Hero layout (1.1fr 0.9fr on desktop, 1fr 1fr tablet)
.rg-hero-equal     // Equal hero layout (1fr 1fr)
.rg-sidebar        // Sidebar layout (1fr 240px)
.rg-sidebar-lg     // Large sidebar (1fr 280px)
.rg-content-cta    // Content + CTA (1fr auto)
```

### Background/Effect Classes
```
.mesh-bg           // Hero mesh gradient background
.grid-bg           // Grid pattern background
.dot-bg            // Dot pattern background
.glass             // Glassmorphism effect
.glass-light       // Light glassmorphism
.glow-blue         // Blue glow shadow
.glow-emerald      // Emerald glow shadow
```

### Utility Classes
```
.font-display      // Plus Jakarta Sans
.font-mono         // JetBrains Mono
.hero-section      // Hero padding (desktop)
.inner-hero-pt     // Inner page hero padding
.eyebrow           // Section header
.card-hover        // Card hover lift
.nav-link-animated // Nav link with animation
```

---

## 11. BLOG/CASE STUDY LISTING PAGE EXAMPLES

### Featured Card (Blog)
```jsx
<Link href={`/blog/${post.slug}`} className="group block">
  <div className="card card-hover" style={{ borderTop: `3px solid ${post.accent}`, padding: 0 }}>
    <div className="grid grid-cols-1 md:grid-cols-12">
      {/* Image: md:col-span-5 */}
      {/* Content: md:col-span-7, p-8 sm:p-10 lg:p-12 */}
    </div>
  </div>
</Link>
```

### Featured Card (Case Studies)
```jsx
<Link href={`/case-studies/${cs.slug}`} className="card card-hover">
  {/* Top accent bar (4px height) */}
  <div style={{ height: 4, background: accentColor }} />
  
  {/* Content area with padding */}
  <div style={{ padding: '24px' }}>
    <span className={`tag tag-${tagVariant}`}>{tag}</span>
    <h2 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h2>
    <p style={{ fontSize: 13, color: 'var(--text-2)' }}>{subtitle}</p>
    
    {/* Key metrics (2 column grid) */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
      {/* metrics */}
    </div>
    
    {/* Tech tags + CTA */}
  </div>
</Link>
```

### Regular Grid Cards
```jsx
<div className="rg-3" style={{ gap: 24 }}>
  {items.map((item) => (
    <Link key={item.slug} href={`/${path}/${item.slug}`} className="card card-hover" style={{ padding: 24 }}>
      <span className={`tag tag-${item.tagVariant}`}>{item.tag}</span>
      <h3 style={{ fontSize: 15, fontWeight: 700, margin: '12px 0 8px' }}>{item.title}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55 }}>{item.description}</p>
      
      {/* Bottom section with key stat and CTA */}
      <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: accentColor }}>{item.metric}</div>
          <div style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginTop: 3 }}>{item.metricLabel}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: accentColor, fontWeight: 600 }}>
          Read <ArrowRight size={11} />
        </div>
      </div>
    </Link>
  ))}
</div>
```

---

## 12. SOLUTIONS/PRODUCTS LISTING PAGE

### Filter Buttons
```jsx
<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
  {filters.map((f) => (
    <button
      onClick={() => setActiveFilter(f)}
      style={{
        padding: '7px 14px',
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
        border: '1px solid',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        background: activeFilter === f ? 'var(--blue)' : 'transparent',
        color: activeFilter === f ? 'white' : 'var(--text-2)',
        borderColor: activeFilter === f ? 'var(--blue)' : 'var(--border-2)',
      }}
    >
      {f}
    </button>
  ))}
</div>
```

### Product Cards (with preview image)
```jsx
<div className="rg-3" style={{ gap: 24 }}>
  {products.map((product) => (
    <div className="card card-hover" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Preview: 196px height */}
      <div style={{ height: 196, position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)', background: `linear-gradient(135deg, ${product.accent}20, ${product.accent}08)` }}>
        <img src={`/solutions/${product.slug}.png`} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.02)' }} />
        
        {/* Fades (top and bottom) */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to bottom, var(--surface), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 64, background: 'linear-gradient(to bottom, transparent, var(--surface))', pointerEvents: 'none' }} />
        
        {/* Tag badge (top right) */}
        <span className={`tag tag-${product.tagVariant}`} style={{ position: 'absolute', top: 10, right: 10, fontSize: 10 }}>
          {product.industry}
        </span>
      </div>
      
      {/* Content */}
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{product.name}</h3>
        <p style={{ fontSize: 13, color: product.accent, fontWeight: 600, marginBottom: 8 }}>{product.tagline}</p>
        <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 12 }}>{product.description}</p>
        
        {/* Key metric */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginBottom: 16 }}>
          <Gauge size={11} /> {product.keyMetric}
        </div>
        
        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 16 }}>
          {product.techStack.slice(0, 3).map((t) => (
            <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
          ))}
          {product.techStack.length > 3 && <span className="tag" style={{ fontSize: 10 }}>+{product.techStack.length - 3}</span>}
        </div>
        
        {/* CTA buttons at bottom */}
        <div style={{ display: 'flex', gap: 8, paddingTop: 16, borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
          <a href={product.demoUrl} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '9px 14px', fontSize: 13 }}>
            <Play size={12} /> Live Demo
          </a>
          <a href={product.demoUrl} className="btn btn-ghost" style={{ padding: '9px 14px', fontSize: 13 }}>
            Details <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
```

---

## 13. PACKAGE DEPENDENCIES FOR STYLING

### From `package.json`
```json
{
  "dependencies": {
    "clsx": "^2.1.1",           // Conditional classNames
    "framer-motion": "^12.40.0", // Animations and transitions
    "lucide-react": "^1.16.0",   // Icons (ArrowRight, Sparkles, etc.)
    "next-themes": "^0.4.6",     // Dark/light mode toggle
    "tailwind-merge": "^3.6.0"   // Merge Tailwind classes
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  }
}
```

### Key Packages:
- **lucide-react**: Icons used throughout (ArrowRight, Sparkles, Menu, X, Sun, Moon, etc.)
- **framer-motion**: AnimatePresence, motion.div for animations and transitions
- **next-themes**: useTheme() hook for dark/light mode
- **clsx/tailwind-merge**: className utilities (imported as `cn` in components)

---

## 14. CREATING A NEW /PRODUCTS PAGE - CHECKLIST

### Template Structure
```jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const FILTERS = ['All', 'Category1', 'Category2', /* ... */];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filtered = products.filter((p) => 
    activeFilter === 'All' || p.category === activeFilter
  );

  return (
    <main style={{ background: 'var(--bg)' }}>
      {/* ── Hero Section ────────────────────────────────── */}
      <section className="inner-hero-pt" style={{ padding: '0 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="ev-dot" />Section name
          </span>
          <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)' }}>
            Main headline<br /><span className="grad-blue">with gradient</span>
          </h1>
          <p style={{ marginTop: 20, fontSize: 18, color: 'var(--text-2)', lineHeight: 1.65 }}>
            Description text explaining the section.
          </p>
        </div>
      </section>

      {/* ── Filter Buttons ──────────────────────────────── */}
      <div className="container" style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '7px 14px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                border: '1px solid',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: activeFilter === f ? 'var(--blue)' : 'transparent',
                color: activeFilter === f ? 'white' : 'var(--text-2)',
                borderColor: activeFilter === f ? 'var(--blue)' : 'var(--border-2)',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Products Grid ───────────────────────────────── */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="rg-3" style={{ gap: 24 }}>
            {filtered.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="card card-hover" style={{ padding: 24 }}>
                {/* Content here */}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────── */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{ padding: '56px 48px', background: 'linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(30,58,138,0.95) 100%)', border: '1px solid rgba(59,130,246,0.25)' }}>
            <div className="rg-content-cta" style={{ gap: 48 }}>
              {/* Left content */}
              <div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
                  Ready to get started?
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(203,213,225,0.85)', lineHeight: 1.7 }}>
                  Description and call to action.
                </p>
              </div>
              
              {/* Right CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220 }}>
                <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '14px 24px', justifyContent: 'center' }}>
                  <Sparkles size={15} /> Get Estimate
                </Link>
                <Link href="/contact" className="btn" style={{ padding: '13px 24px', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}>
                  Book Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## QUICK REFERENCE: KEY COLORS

**Blues**: #3B82F6 (primary), #2563EB (darker), #60A5FA (lighter)
**Greens**: #10B981 (primary), #059669 (darker), #34D399 (lighter)
**Cyan**: #06B6D4 (primary), #22D3EE (lighter)
**Purple**: #A855F7, #C084FC
**Dark Background**: #0A0E1A
**Card Background**: #0F1629
**Border Color**: rgba(255,255,255,0.07)
**Primary Text**: #F1F5F9
**Secondary Text**: #94A3B8

