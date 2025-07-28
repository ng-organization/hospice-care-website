# Hospice Care Website - Styling Guideline

## 🎨 Design Philosophy

This document establishes a comprehensive design system for the hospice care website, ensuring consistency, professionalism, and accessibility across all pages and components. The design prioritizes compassion, trust, and clarity while maintaining modern UI standards.

## 🌈 Color Palette

### Primary Colors
- **Primary (Navy Blue)**: `#263159` - Main brand color for headers, primary buttons, and emphasis
- **Secondary (Blue)**: `#2472C5` - Supporting actions, links, and accents
- **Background**: `#FFFFFF` - Clean white background for light theme

### Supporting Colors
- **Text Primary**: `#1F2937` - Main text content
- **Text Secondary**: `#6B7280` - Supporting text, captions
- **Success**: `#10B981` - Success states, confirmations
- **Warning**: `#F59E0B` - Warnings, important notifications
- **Error**: `#EF4444` - Error states, critical alerts

### Neutral Palette
```
Gray 50:  #F9FAFB
Gray 100: #F3F4F6
Gray 200: #E5E7EB
Gray 300: #D1D5DB
Gray 400: #9CA3AF
Gray 500: #6B7280
Gray 600: #4B5563
Gray 700: #374151
Gray 800: #1F2937
Gray 900: #111827
```

## 📐 Design Principles

### Color Usage Rules
1. **Maximum 3 colors per page**: Primary, Secondary, and one supporting color
2. **Color hierarchy**: Primary for main actions, Secondary for supporting elements
3. **Accessibility first**: Maintain WCAG AA contrast ratios (4.5:1 minimum)
4. **Consistent application**: Use predefined color tokens consistently

### Content Layout
- **Text spacing**: Content should breathe - avoid clustering text
- **Full-width sections**: All sections utilize full viewport width
- **Proper margins**: Consistent spacing between sections and components
- **Responsive padding**: Adaptive padding based on screen size

## 🔘 Button System (Maximum 3 Variants)

### 1. Primary Button
- **Usage**: Main CTAs, form submissions, primary actions
- **Style**: Solid background with primary color
- **States**: Normal, hover, active, disabled
```css
Background: #263159
Text: #FFFFFF
Border: none
Border-radius: 8px
Padding: 12px 24px
```

### 2. Secondary Button
- **Usage**: Secondary actions, alternative options
- **Style**: Outlined with secondary color
- **States**: Normal, hover, active, disabled
```css
Background: transparent
Text: #2472C5
Border: 2px solid #2472C5
Border-radius: 8px
Padding: 10px 22px
```

### 3. Text Button
- **Usage**: Subtle actions, navigation links, less important actions
- **Style**: Text-only with hover effects
- **States**: Normal, hover, active, disabled
```css
Background: transparent
Text: #2472C5
Border: none
Padding: 8px 16px
```

## 📱 Mobile Menu Design

### Design Requirements
- **Style**: Elegant and minimal design
- **Layout**: Full-screen or 3/4 screen slide-out from right
- **Background**: Remaining 1/4 screen darkened to highlight menu
- **Typography**: Centered text with capitalized first letters
- **Scrolling**: Scrollable content if exceeds screen height
- **Close mechanism**: 
  - Borderless close button (×) symbol preferred
  - Click outside menu area to dismiss
  - ESC key support

### Technical Specifications
```css
Menu Width: 75vw (mobile), 400px (tablet)
Backdrop: rgba(0, 0, 0, 0.5)
Animation: slide-in-right 300ms ease-out
z-index: 9999
```

## 🏢 Layout System

### Full-Width Sections
All sections should utilize the full viewport width with proper internal spacing:

```css
.section-full-width {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
```

### Responsive Padding
```css
/* Mobile: 16px */
@media (max-width: 768px) {
  .responsive-padding { padding: 0 16px; }
}

/* Tablet: 32px */
@media (min-width: 768px) and (max-width: 1024px) {
  .responsive-padding { padding: 0 32px; }
}

/* Desktop: 64px */
@media (min-width: 1024px) {
  .responsive-padding { padding: 0 64px; }
}

/* Large Desktop: 128px */
@media (min-width: 1536px) {
  .responsive-padding { padding: 0 128px; }
}
```

## 🦸 Hero Section Variants

### 1. Homepage Hero
- **Height**: Full viewport (100vh)
- **Background**: Full-width background image with overlay
- **Content**: Centered with primary CTA
- **Style**: Bold, welcoming, brand-focused

### 2. Page Hero (About, Services, Areas)
- **Height**: 60vh or fixed height based on content
- **Background**: Subtle background or solid color
- **Content**: Page title, breadcrumb, brief description
- **Style**: Clean, informative, page-specific

## 🧭 Navigation System

### Sticky Navbar
- **Position**: Fixed to top of viewport
- **Background**: Translucent with backdrop blur when scrolled
- **Height**: 64px minimum
- **z-index**: 50

### Navigation States
```css
/* Default state */
background: rgba(38, 49, 89, 0.9)
backdrop-filter: blur(8px)

/* Scrolled state */
background: rgba(255, 255, 255, 0.95)
border-bottom: 1px solid #E5E7EB
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
```

## 📝 Typography Scale

### Font Families
- **Primary**: Inter, system-ui, sans-serif
- **Headings**: Inter, system-ui, sans-serif
- **Monospace**: 'Fira Code', Consolas, monospace

### Type Scale
```css
H1: 3rem (48px) / 1.2 line-height / 700 weight
H2: 2.25rem (36px) / 1.3 line-height / 600 weight
H3: 1.875rem (30px) / 1.4 line-height / 600 weight
H4: 1.5rem (24px) / 1.5 line-height / 500 weight
H5: 1.25rem (20px) / 1.6 line-height / 500 weight
H6: 1.125rem (18px) / 1.6 line-height / 500 weight

Body Large: 1.125rem (18px) / 1.7 line-height / 400 weight
Body: 1rem (16px) / 1.6 line-height / 400 weight
Body Small: 0.875rem (14px) / 1.5 line-height / 400 weight
Caption: 0.75rem (12px) / 1.4 line-height / 400 weight
```

## 🎯 Component Guidelines

### Cards
- **Border radius**: 12px
- **Shadow**: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- **Padding**: 24px
- **Border**: 1px solid #E5E7EB

### Forms
- **Input height**: 48px minimum
- **Border radius**: 8px
- **Focus states**: 2px solid secondary color
- **Error states**: Red border with error message

### Spacing System
```css
/* Spacing scale (rem units) */
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
5xl: 8rem (128px)
```

## ♿ Accessibility Standards

### Required Compliance
- **WCAG 2.1 AA** compliance minimum
- **Keyboard navigation** for all interactive elements
- **Screen reader compatibility** with proper ARIA labels
- **Color contrast** ratios of 4.5:1 for normal text, 3:1 for large text
- **Focus indicators** visible and high contrast

### Implementation Checklist
- [ ] Alt text for all images
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Keyboard accessibility for all interactive elements
- [ ] ARIA labels for complex components
- [ ] Color contrast validation
- [ ] Screen reader testing

## 🎨 CSS Custom Properties

### Design Tokens
```css
:root {
  /* Colors */
  --color-primary: #263159;
  --color-secondary: #2472C5;
  --color-white: #FFFFFF;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-900: #111827;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  
  /* Borders */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## 📊 Performance Guidelines

### Image Optimization
- **Format**: WebP with PNG/JPG fallbacks
- **Responsive images**: Multiple sizes with srcset
- **Lazy loading**: Implement for below-fold content
- **Compression**: Optimize for web without quality loss

### CSS Performance
- **Minimize custom CSS**: Leverage Tailwind utilities
- **Critical CSS**: Inline critical styles
- **Unused CSS**: Remove unused styles
- **CSS minification**: Compress for production

## 🔄 Maintenance

### Regular Reviews
- **Quarterly design reviews**: Ensure consistency across new components
- **Accessibility audits**: Regular testing with assistive technologies
- **Performance monitoring**: Track Core Web Vitals
- **User feedback**: Collect and implement user experience improvements

### Documentation Updates
- **Keep guidelines current**: Update as design evolves
- **Component library**: Maintain up-to-date component documentation
- **Design tokens**: Version control design token changes
- **Change log**: Document all guideline updates

---

*Last updated: [Current Date]*
*Version: 1.0*