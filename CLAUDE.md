# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a hospice care website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project uses shadcn/ui for UI components and is designed as a modern, responsive website for a hospice care service. The codebase consists of a single-page application with smooth scrolling navigation and professional healthcare theming.

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

Note: This project uses pnpm as the package manager (evidenced by pnpm-lock.yaml).

## Architecture & Structure

### Key Files and Directories

- `app/` - Next.js 15 App Router structure
  - `layout.tsx` - Root layout with Geist fonts and metadata
  - `page.tsx` - Main homepage component (single-page application)
  - `globals.css` - Global Tailwind CSS styles
- `components/` 
  - `ui/` - shadcn/ui components (Button, Card, Input, etc.)
  - `theme-provider.tsx` - Theme provider component
- `lib/utils.ts` - Utility functions (includes cn() for className merging)
- `hooks/` - Custom React hooks (use-mobile, use-toast)
- `public/` - Static assets including medical/healthcare images and documents

### Component Architecture

The main application is a single large component (`HospiceCareWebsite`) in `app/page.tsx` that includes:
- Fixed navigation with mobile menu
- Hero section with call-to-action
- Services section showcasing hospice care services
- About section with company information
- Testimonials carousel
- Contact form and information
- Footer with additional links

### Styling Approach

- Uses Tailwind CSS with custom color scheme (sage and blue theme)
- CSS-in-JS approach with Tailwind classes
- Custom animations and transitions
- Responsive design with mobile-first approach
- Uses CSS custom properties for theming

### State Management

- Uses React hooks (useState, useEffect, useRef) for local state
- No external state management library
- Intersection Observer for scroll animations
- Simple carousel state for testimonials

## Configuration Notes

- **Next.js Config**: ESLint and TypeScript errors are ignored during builds (`ignoreDuringBuilds: true`, `ignoreBuildErrors: true`)
- **Images**: Unoptimized images are enabled in Next.js config
- **Path Aliases**: Uses `@/*` for absolute imports
- **shadcn/ui**: Configured with default style, neutral base color, and CSS variables

## Content Focus

This is a healthcare website for hospice care services, so maintain professional, compassionate, and respectful tone when making any content changes. The site emphasizes dignity, comfort, and family support in end-of-life care.