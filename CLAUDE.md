# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Kevin Ivan's personal portfolio website built with Next.js 15 (RC), React 19 (RC), TypeScript, Tailwind CSS, and Framer Motion. The site features a single-page layout with smooth animations and interactive elements.

## Development Commands

```bash
# Start development server with Turbo (faster builds)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Key Components

- **app/page.tsx**: Main portfolio page with personal info, projects, and work experience
- **app/layout.tsx**: Root layout with font configuration and Hotjar analytics
- **app/components/Curve/**: Custom SVG curve animation component using Framer Motion
- **app/components/BackgroundGradient.tsx**: Animated gradient background component
- **lib/utils.ts**: Utility functions including `cn()` for className merging with clsx and tailwind-merge

### Styling System

- **Custom CSS Variables**: Defined in `app/globals.css` for neutral colors (n1-n8)
- **Tailwind Configuration**: Extended with custom fonts, colors, and animations in `tailwind.config.ts`
- **Font Stack**: Lora (serif), Inter, Geist Sans, and Geist Mono fonts
- **Color System**: Neutral palette with CSS custom properties

### Key Features

- **Interactive Avatar**: Slideshow animation on hover/click with 25 images in `/public/slideshow/`
- **Smooth Page Transitions**: Custom curve animation that reveals content with SVG morphing
- **Responsive Design**: Mobile-first approach with breakpoints
- **Custom Animations**: Tailwind keyframes for scaling and fan effects

### File Structure

```
app/
├── components/
│   ├── Curve/           # SVG curve transition component
│   └── BackgroundGradient.tsx
├── fonts/               # Local font files
├── globals.css          # Global styles and CSS variables
├── layout.tsx           # Root layout
└── page.tsx             # Main portfolio page

lib/
└── utils.ts             # Utility functions

public/
├── logos/               # Company/project logos
├── slideshow/           # Avatar slideshow images (1-25.webp)
└── [various icons]      # Social media and other icons
```

### Animation Patterns

- **Framer Motion**: Used for page transitions, element animations, and interactive states
- **Custom Keyframes**: Scale, fan-right-1, and fan-right-2 animations in Tailwind config
- **Curve Component**: SVG path morphing for smooth page reveals

### Content Management

- **Static Data**: Projects and jobs are defined as arrays in `app/page.tsx`
- **Image Optimization**: Next.js Image component with priority loading for above-fold content
- **External Links**: All project and job links open in new tabs with proper rel attributes

## Development Notes

- Uses Next.js 15 RC with experimental features
- React 19 RC with new hooks and patterns
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Framer Motion for complex animations
- ESLint for code quality