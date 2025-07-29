# IE Community Hospice Styling Guide

## Table of Contents
1. [Brand Overview](#brand-overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Motion & Animation](#motion--animation)
7. [Visual Effects](#visual-effects)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [Code Examples](#code-examples)

---

## Brand Overview

### Design Philosophy
IE Community Hospice's visual design embodies compassion, professionalism, and trust. Our design language focuses on:
- **Warmth & Comfort**: Using calming colors and gentle transitions
- **Clarity & Simplicity**: Clear typography and intuitive layouts
- **Professional Trust**: Consistent, polished components that convey reliability
- **Accessibility First**: Ensuring all users can access our services

### Visual Identity Principles
- **Clean & Modern**: Minimalist approach with purposeful white space
- **Human-Centered**: Warm imagery and compassionate messaging
- **Professional Healthcare**: Medical credibility with approachable design
- **Responsive Experience**: Seamless across all devices

---

## Color System

### Primary Colors
Our color palette centers around two main colors that represent trust, stability, and compassion.

#### Primary - Navy Blue (#263159)
- **Primary-800**: `#263159` - Main brand color
- **Primary-900**: `#1a2240` - Darker variant for hover states
- **Primary-700**: `#3b4965` - Lighter variant
- **Primary-600**: `#57637b` - Medium shade
- **Primary-500**: `#737d91` - Neutral shade
- **Primary-400**: `#8f97a7` - Light shade
- **Primary-300**: `#abb1bd` - Lighter shade
- **Primary-200**: `#c7cbd3` - Very light shade
- **Primary-100**: `#e3e5e9` - Near white
- **Primary-50**: `#f1f2f4` - Background tint

#### Secondary - Blue (#2472C5)
- **Secondary-600**: `#2472c5` - Main secondary color
- **Secondary-700**: `#1e5fa3` - Darker variant
- **Secondary-800**: `#1d4f84` - Even darker
- **Secondary-900**: `#1c426e` - Darkest
- **Secondary-500**: `#5287f3` - Brighter variant
- **Secondary-400**: `#79a8f8` - Light variant
- **Secondary-300**: `#a3c7fc` - Lighter
- **Secondary-200**: `#c6dcfd` - Very light
- **Secondary-100**: `#dfeafe` - Near white
- **Secondary-50**: `#f0f6fe` - Background tint

### Neutral Colors (Grays)
- **Gray-900**: `#111827` - Darkest text
- **Gray-800**: `#1F2937` - Dark text
- **Gray-700**: `#374151` - Medium dark text
- **Gray-600**: `#4B5563` - Medium text
- **Gray-500**: `#6B7280` - Neutral text
- **Gray-400**: `#9CA3AF` - Light text
- **Gray-300**: `#D1D5DB` - Borders
- **Gray-200**: `#E5E7EB` - Light borders
- **Gray-100**: `#F3F4F6` - Light backgrounds
- **Gray-50**: `#F9FAFB` - Lightest backgrounds

### Semantic Colors
- **White**: `#FFFFFF` - Pure white
- **Destructive**: HSL(0 84.2% 60.2%) - Error states
- **Accent**: Uses Primary color scheme

### Color Usage Guidelines

#### Text Colors
- **Primary Text**: Gray-900 on light backgrounds
- **Secondary Text**: Gray-600 for less important content
- **Inverted Text**: White on dark backgrounds
- **Link Text**: Secondary-600 with hover state Secondary-700

#### Background Colors
- **Page Background**: White or Gray-50
- **Card Backgrounds**: White with subtle shadows
- **Section Alternating**: White and Gray-50
- **Dark Sections**: Primary-800 with overlay gradients

#### Interactive Elements
- **Primary Actions**: Primary-800 background, white text
- **Secondary Actions**: Transparent with Secondary-600 border
- **Hover States**: Darker shade of base color
- **Focus States**: Ring color using Secondary-600

---

## Typography

### Font Families
```css
font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", 
             "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", 
             "Microsoft JhengHei", "PingFang TC", "Hiragino Sans TC", 
             "Source Han Sans TC", sans-serif;
```

**Monospace (for code)**:
```css
font-family: 'Geist Mono', monospace;
```

### Type Scale
- **text-xs**: 0.75rem (12px) - Small labels, captions
- **text-sm**: 0.875rem (14px) - Secondary text, form labels
- **text-base**: 1rem (16px) - Body text default
- **text-lg**: 1.125rem (18px) - Lead paragraphs
- **text-xl**: 1.25rem (20px) - Section descriptions
- **text-2xl**: 1.5rem (24px) - Small headings
- **text-3xl**: 1.875rem (30px) - Section headings
- **text-4xl**: 2.25rem (36px) - Page headings
- **text-5xl**: 3rem (48px) - Hero headings
- **text-6xl**: 3.75rem (60px) - Large hero headings
- **text-7xl**: 4.5rem (72px) - Extra large hero headings

### Font Weights
- **font-light** (300): Hero headings, large display text
- **font-normal** (400): Body text, descriptions
- **font-medium** (500): Buttons, navigation links
- **font-semibold** (600): Emphasized text, card titles
- **font-bold** (700): Important headings

### Heading Hierarchy

#### Hero Sections
- **Desktop**: text-7xl font-light with font-semibold emphasis
- **Tablet**: text-5xl
- **Mobile**: text-4xl

#### Page Headings (H1)
- **Desktop**: text-6xl font-light
- **Tablet**: text-5xl
- **Mobile**: text-4xl

#### Section Headings (H2)
- **Desktop**: text-4xl to text-5xl font-light
- **Mobile**: text-3xl to text-4xl

#### Subsection Headings (H3)
- **Size**: text-2xl font-semibold
- **Color**: Gray-800 or Primary-800

#### Card Titles (H4)
- **Size**: text-xl font-semibold
- **Color**: Gray-800

### Body Text Guidelines
- **Line Height**: Leading-relaxed (1.625) for better readability
- **Paragraph Spacing**: mb-4 to mb-6 between paragraphs
- **Max Width**: max-w-4xl for optimal reading length
- **Color**: Gray-600 for body text, Gray-800 for emphasis

---

## Spacing & Layout

### Spacing Scale
Based on rem units (1rem = 16px):
- **spacing-xs**: 0.25rem (4px)
- **spacing-sm**: 0.5rem (8px)
- **spacing-md**: 1rem (16px)
- **spacing-lg**: 1.5rem (24px)
- **spacing-xl**: 2rem (32px)
- **spacing-2xl**: 3rem (48px)
- **spacing-3xl**: 4rem (64px)
- **spacing-4xl**: 6rem (96px)
- **spacing-5xl**: 8rem (128px)

### Container System
```css
.section-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile */
}

@media (min-width: 640px) {
  padding: 0 2rem; /* Tablet */
}

@media (min-width: 1024px) {
  padding: 0 4rem; /* Desktop */
}

@media (min-width: 1536px) {
  padding: 0 8rem; /* Large screens */
}
```

### Responsive Padding
```css
.responsive-padding {
  /* Mobile: 1rem */
  /* Tablet: 2rem */
  /* Desktop: 4rem */
  /* Large: 8rem */
}
```

### Section Spacing
- **Between Sections**: py-16 to py-24 (4rem to 6rem)
- **Mobile**: py-12 (3rem)
- **Hero Sections**: Full height (h-screen) or custom heights

### Grid System
- **Default Grid**: 12 columns with gap-6
- **Card Grids**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **Feature Grids**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

---

## Components

### Button Variants

#### Primary Button
```css
/* Main CTAs, form submissions */
bg-primary-800 text-white
hover:bg-primary-900 hover:-translate-y-0.5 hover:shadow-md
border-radius: 8px
padding: 12px 24px
```

#### Secondary Button
```css
/* Secondary actions */
bg-transparent text-secondary-600 
border-2 border-secondary-600
hover:bg-secondary-600 hover:text-white
```

#### Text Button
```css
/* Subtle actions */
bg-transparent text-secondary-600
hover:bg-gray-50 hover:text-secondary-700
```

#### Button Sizes
- **Small**: h-9 px-4 py-2 text-sm
- **Default**: h-12 px-6 py-3
- **Large**: h-14 px-8 py-4 text-base

### Card Components
```css
/* Base Card */
rounded-lg border bg-card shadow-sm
padding: 1.5rem

/* Hover State */
hover:shadow-xl transition-all duration-300

/* Card Title */
text-2xl font-semibold

/* Card Description */
text-sm text-muted-foreground
```

### Badge Component
```css
/* Default Badge */
bg-secondary-100 text-primary-800
px-4 py-2 rounded-full 
text-sm font-medium

/* White/Transparent Badge (on dark backgrounds) */
bg-white/20 text-white 
border border-white/30
backdrop-blur-sm
```

### Form Elements
```css
/* Input Fields */
border border-gray-300
rounded-lg px-4 py-3
focus:border-secondary-600
focus:ring-2 focus:ring-secondary-600/20

/* Labels */
text-sm font-medium text-gray-700 mb-2

/* Help Text */
text-sm text-gray-500 mt-1
```

### Navigation Patterns
```css
/* Desktop Nav Links */
text-gray-600 hover:text-secondary-600
font-medium transition-colors

/* Mobile Menu */
fixed top-0 right-0
width: 75vw max-width: 400px
transform: translateX(100%) /* closed */
transform: translateX(0) /* open */
transition: transform 300ms ease-out
```

---

## Motion & Animation

### Animation Principles
- **Purposeful**: Every animation should enhance UX
- **Smooth**: Use appropriate easing curves
- **Performance**: Prefer transform and opacity
- **Consistent**: Same duration for similar actions

### Transition Durations
- **Fast**: 200ms - Hover states, small interactions
- **Normal**: 300ms - Most transitions
- **Slow**: 500ms - Page transitions, complex animations
- **Very Slow**: 800ms-1s - Hero animations, reveals

### Easing Curves
- **ease-out**: Default for most animations
- **ease-in-out**: For continuous animations
- **ease-in**: For exit animations

### Common Animations

#### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Float
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

#### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Interactive Transitions
- **Hover Lift**: hover:-translate-y-0.5
- **Button Press**: active:translate-y-0
- **Scale**: hover:scale-105
- **All Properties**: transition-all duration-300

---

## Visual Effects

### Shadow System
- **shadow-sm**: Subtle elevation for cards
- **shadow-md**: Medium elevation for hover states
- **shadow-lg**: High elevation for modals
- **shadow-xl**: Extra elevation for important elements
- **shadow-2xl**: Maximum elevation

### Border Radius Scale
- **rounded**: 4px - Small elements
- **rounded-md**: 8px - Default for buttons, inputs
- **rounded-lg**: 12px - Cards, containers
- **rounded-xl**: 16px - Large cards
- **rounded-full**: 9999px - Pills, badges

### Gradients
```css
/* Hero Overlay */
bg-gradient-to-br from-primary-800/95 to-primary-900/90

/* Additional Dark Overlay */
bg-black/40

/* Section Transitions */
bg-gradient-to-b from-transparent to-gray-50
```

### Backdrop Effects
- **backdrop-blur-sm**: Subtle blur for overlays
- **bg-white/20**: Transparent white backgrounds
- **border-white/30**: Semi-transparent borders

---

## Responsive Design

### Breakpoints
- **Mobile**: < 640px (default)
- **Tablet (sm)**: ≥ 640px
- **Desktop (md)**: ≥ 768px
- **Large (lg)**: ≥ 1024px
- **Extra Large (xl)**: ≥ 1280px
- **2XL**: ≥ 1536px

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens:
```css
/* Mobile default */
text-base

/* Tablet and up */
sm:text-lg

/* Desktop and up */
lg:text-xl
```

### Responsive Typography
#### Hero Text
- Mobile: text-4xl
- Tablet: sm:text-5xl
- Desktop: lg:text-7xl

#### Body Text
- Mobile: text-base
- Desktop: lg:text-lg or lg:text-xl

### Component Adaptations
#### Grid Columns
- Mobile: grid-cols-1
- Tablet: md:grid-cols-2
- Desktop: lg:grid-cols-3 or lg:grid-cols-4

#### Spacing
- Mobile: p-4 or p-6
- Tablet: sm:p-8
- Desktop: lg:p-12

---

## Accessibility

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear visual distinction

### Focus States
```css
focus-visible:outline-none 
focus-visible:ring-2 
focus-visible:ring-ring 
focus-visible:ring-offset-2
```

### Interactive Element Sizing
- **Minimum Touch Target**: 44x44px on mobile
- **Button Height**: Minimum h-12 (48px)
- **Clickable Padding**: Adequate padding around links

### ARIA Guidelines
- Use semantic HTML elements
- Provide alt text for images
- Label form inputs properly
- Include skip navigation links
- Ensure keyboard navigation works

### Motion Accessibility
- Respect prefers-reduced-motion
- Provide pause controls for animations
- Avoid flashing content

---

## Code Examples

### Hero Section Pattern
```tsx
<section className="relative h-screen bg-cover bg-top">
  <div className="absolute inset-0 bg-gradient-to-br from-primary-800/95 to-primary-900/90" />
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 text-center">
    <Badge className="bg-white/20 text-white border-white/30">
      Badge Text
    </Badge>
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white">
      Hero Title
    </h1>
    <p className="text-xl text-white/90 max-w-4xl mx-auto">
      Description text
    </p>
  </div>
</section>
```

### Card Pattern
```tsx
<Card className="hover:shadow-xl transition-all duration-300">
  <CardHeader>
    <CardTitle className="text-2xl font-semibold">
      Card Title
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-gray-600">Card content</p>
  </CardContent>
</Card>
```

### Button Usage
```tsx
// Primary CTA
<Button variant="primary" size="lg">
  Call Now
</Button>

// Secondary Action
<Button variant="secondary">
  Learn More
</Button>

// Subtle Link
<Button variant="text" size="sm">
  View Details
</Button>
```

### Responsive Section
```tsx
<section className="py-12 sm:py-16 lg:py-24">
  <div className="section-content">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Grid items */}
    </div>
  </div>
</section>
```

---

## Implementation Notes

1. **Consistency**: Always use the defined color variables and spacing scale
2. **Performance**: Optimize images and use lazy loading
3. **Testing**: Test on multiple devices and browsers
4. **Documentation**: Keep this guide updated with new patterns
5. **Collaboration**: Share updates with the team

This styling guide serves as the foundation for maintaining visual consistency across the IE Community Hospice website. All new components and pages should follow these guidelines to ensure a cohesive user experience.