# 🎨 Typography Quick Reference Guide

## 🚀 Quick Copy-Paste Classes

### Display Text (Syne)
```tsx
{/* Hero Name - Largest */}
<h1 className="font-display text-display-2xl font-extrabold uppercase tracking-[-0.04em]">
  VIVEK RANA
</h1>

{/* Section Headings */}
<h2 className="font-display text-display-lg font-bold tracking-[-0.02em]">
  Section Title
</h2>
```

### Heading Text (Plus Jakarta Sans)
```tsx
{/* Card Titles */}
<h3 className="font-heading text-xl md:text-2xl font-extrabold tracking-tight">
  Card Title
</h3>

{/* Sub-headings, Nav Links */}
<span className="font-heading font-semibold text-body-md tracking-[0.02em]">
  Navigation Link
</span>
```

### Body Text (Inter)
```tsx
{/* Paragraphs */}
<p className="font-body text-body-lg font-normal leading-[1.85]">
  This is body text for paragraphs and descriptions.
</p>

{/* Small Text */}
<p className="font-body text-body-sm font-normal">
  Small details and captions
</p>
```

### Mono Text (JetBrains Mono)
```tsx
{/* Typewriter Effect */}
<span className="font-mono text-mono-lg font-bold uppercase tracking-[0.05em]">
  React Developer
</span>

{/* Tech Badges */}
<span className="font-mono text-mono-sm font-bold uppercase tracking-wider">
  React
</span>

{/* Labels */}
<span className="font-mono text-label tracking-[0.15em] uppercase">
  Currently Available
</span>
```

### Watermark Text (Bebas Neue)
```tsx
{/* Background Watermark */}
<div className="font-bebas text-[clamp(120px,20vw,220px)] font-normal text-white/[0.03] opacity-[0.025]">
  SECTION
</div>
```

---

## 🎯 Font Family Usage Map

| Element | Font | Weight | Size Class | Example |
|---------|------|--------|------------|---------|
| Hero Name | Syne | 800 | `text-display-2xl` | VIVEK RANA |
| Section h2 | Syne | 700 | `text-display-lg` | About Me |
| Project Title | Plus Jakarta | 800 | `text-xl md:text-2xl` | E-Commerce Platform |
| Nav Links | Plus Jakarta | 600 | `text-body-md` | Home, About, Contact |
| Paragraphs | Inter | 400 | `text-body-lg` | I'm a MERN developer... |
| Typewriter | JetBrains Mono | 700 | `text-mono-lg` | React Developer |
| Tech Badges | JetBrains Mono | 400 | `text-mono-sm` | React, Node.js |
| Watermarks | Bebas Neue | 400 | `text-[clamp(...)]` | PROJECTS |

---

## 📐 Responsive Size Scale

### Display Sizes (Syne)
```css
text-display-2xl → clamp(64px, 10vw, 120px)   /* Hero name */
text-display-xl  → clamp(48px, 7vw, 88px)     /* Extra large */
text-display-lg  → clamp(36px, 5vw, 64px)     /* Section headings */
text-display-md  → clamp(28px, 4vw, 48px)     /* Medium display */
text-display-sm  → clamp(22px, 3vw, 36px)     /* Small display */
```

### Body Sizes (Inter)
```css
text-body-lg → clamp(16px, 1.5vw, 18px)       /* Paragraphs */
text-body-md → clamp(14px, 1.2vw, 16px)       /* Descriptions */
text-body-sm → clamp(12px, 1vw, 14px)         /* Small text */
```

### Mono Sizes (JetBrains Mono)
```css
text-mono-lg → clamp(14px, 1.2vw, 16px)       /* Typewriter */
text-mono-sm → clamp(11px, 1vw, 13px)         /* Tech badges */
text-label   → 11px (fixed)                    /* Labels */
```

---

## 🎨 Special Effects

### 3D Text Depth
```tsx
<span 
  className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
  style={{
    textShadow: `
      1px 1px 0 #1a1a2e,
      2px 2px 0 #1a1a2e,
      3px 3px 0 #1a1a2e,
      4px 4px 0 #0d0d14,
      5px 5px 0 #0d0d14,
      6px 6px 0 #0d0d14
    `
  }}
>
  3D Text
</span>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Glowing Text
```tsx
<span style={{ textShadow: '0 0 60px rgba(79, 142, 247, 0.3)' }}>
  Glowing Text
</span>
```

### Animated Underline
```tsx
<motion.div 
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
  style={{ transformOrigin: 'center' }}
/>
```

---

## 📋 Section Heading Template

Copy-paste this for any new section:

```tsx
<motion.div className="text-center mb-20 relative">
  {/* Small mono label */}
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay: 0.2 }}
    className="inline-block px-6 py-2 rounded-full glass border border-primary/20 font-mono text-label text-primary tracking-[0.2em] uppercase mb-6"
  >
    🚀 Section Label
  </motion.span>
  
  {/* Main heading - Syne Display with 3D depth */}
  <motion.h2 
    className="font-display text-display-lg font-bold mb-6 tracking-[-0.02em]"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.3 }}
  >
    <span 
      className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
      style={{
        textShadow: `
          1px 1px 0 #1a1a2e,
          2px 2px 0 #1a1a2e,
          3px 3px 0 #1a1a2e,
          4px 4px 0 #0d0d14,
          5px 5px 0 #0d0d14,
          6px 6px 0 #0d0d14
        `,
      }}
    >
      Section Title
    </span>
  </motion.h2>
  
  {/* Subtitle - Inter body font */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.4 }}
    className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto"
  >
    Section description goes here
  </motion.p>
  
  {/* Large Bebas watermark */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 0.025, scale: 1 } : {}}
    transition={{ duration: 1.2, delay: 0.5 }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[clamp(120px,20vw,220px)] font-normal text-white/[0.03] leading-none tracking-wider pointer-events-none whitespace-nowrap"
    style={{ 
      textShadow: '0 0 40px rgba(79, 142, 247, 0.1)',
    }}
  >
    SECTION
  </motion.div>
</motion.div>
```

---

## 🎯 Common Patterns

### Button Text
```tsx
<button className="font-heading text-body-md font-semibold tracking-[0.05em] uppercase">
  Click Me
</button>
```

### Card Title
```tsx
<h3 className="font-heading text-xl md:text-2xl font-extrabold tracking-tight">
  Card Title
</h3>
```

### Card Description
```tsx
<p className="font-body text-body-md text-muted-foreground leading-relaxed">
  Card description text
</p>
```

### Tech Badge
```tsx
<span className="font-mono text-mono-sm font-bold uppercase tracking-wider">
  React
</span>
```

### Form Label
```tsx
<label className="font-heading text-body-sm font-semibold">
  Your Name
</label>
```

### Form Input
```tsx
<input className="font-body text-body-md" />
```

### Navigation Link
```tsx
<a className="font-heading font-semibold text-body-md tracking-[0.02em]">
  Home
</a>
```

---

## 🔤 Letter Spacing Guide

```css
tracking-[-0.04em]  → Hero name (tight)
tracking-[-0.02em]  → Section headings (tight)
tracking-tight      → Card titles
tracking-[0.02em]   → Nav links (slightly loose)
tracking-[0.05em]   → Typewriter, buttons (loose)
tracking-[0.15em]   → Labels (very loose)
tracking-[0.2em]    → Section labels (extra loose)
tracking-wider      → Tech badges
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
text-display-2xl    → 64px on mobile, 120px on desktop
text-display-lg     → 36px on mobile, 64px on desktop
text-body-lg        → 16px on mobile, 18px on desktop
text-mono-lg        → 14px on mobile, 16px on desktop

/* Scales smoothly between breakpoints using clamp() */
```

---

## 🎨 Color Combinations

### Primary Text
```tsx
className="text-white"           // Main headings
className="text-foreground"      // Body text
className="text-muted-foreground" // Secondary text
className="text-primary"         // Accent text (#4F8EF7)
```

### Gradient Text
```tsx
className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
```

---

## ⚡ Performance Tips

1. **Font Loading**: Already optimized with @fontsource
2. **Subset Loading**: Only Latin characters loaded
3. **Font Display**: Uses `swap` for faster rendering
4. **Preload**: Not needed (self-hosted)
5. **Caching**: Fonts cached by browser

---

## 🐛 Troubleshooting

### Font Not Loading?
```bash
# Reinstall fonts
npm install @fontsource/syne @fontsource/plus-jakarta-sans @fontsource/inter @fontsource/jetbrains-mono @fontsource/bebas-neue

# Clear cache and rebuild
npm run build
```

### Wrong Font Showing?
- Check Tailwind class: `font-display`, `font-heading`, `font-body`, `font-mono`, `font-bebas`
- Verify import in `src/main.tsx`
- Check browser DevTools → Computed styles

### Size Not Responsive?
- Use `text-display-*`, `text-body-*`, `text-mono-*` classes
- These use clamp() for fluid scaling
- Avoid fixed pixel sizes

---

## 📚 Reference Files

- **tailwind.config.ts**: Font family and size definitions
- **src/index.css**: Typography base styles and CSS variables
- **src/main.tsx**: Font imports
- **PREMIUM_TYPOGRAPHY_COMPLETE.md**: Full implementation guide

---

**Last Updated**: Context Transfer Session
**Status**: Production Ready ✅
