# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Codeforge** is a Next.js 16.3 landing page and portfolio website for a premium software development company. The site showcases services, technologies, projects, and capabilities with a modern, animated design.

## Development Commands

### Core Commands
- `npm run dev` – Start the development server on port 3000 (accessible at `http://localhost:3000`)
- `npm run build` – Build the application for production
- `npm start` – Start the production server
- `npm run lint` – Run ESLint to check code quality

### Common Workflows
- **Local development**: Run `npm run dev`, then navigate to `http://localhost:3000` to view changes in real-time
- **Linting before commit**: Run `npm run lint` to catch styling and import issues
- **Building for deployment**: Run `npm run build` to create an optimized production bundle

## Architecture & Code Structure

### Directory Layout
```
├── app/                          # Next.js App Router
│   ├── layout.js                # Root layout with ThemeProvider
│   ├── page.js                  # Landing page (main entry point)
│   ├── globals.css              # Global styles & Tailwind config
│   └── icon.svg                 # Favicon
├── components/                   # React components
│   ├── ThemeProvider.js         # Dark mode provider (next-themes wrapper)
│   ├── Navbar.js                # Navigation header
│   ├── Hero.js                  # Hero section
│   ├── Capabilities.js          # Product capabilities
│   ├── Services.js              # Services offered
│   ├── Technologies.js          # Tech stack showcase
│   ├── Projects.js              # Portfolio projects
│   ├── WhyCodeforge.js          # Value proposition
│   ├── Process.js               # Development process
│   ├── About.js                 # Company info
│   ├── Stats.js                 # Key metrics/statistics
│   ├── Testimonials.js          # Client testimonials
│   ├── FAQ.js                   # Frequently asked questions
│   ├── Contact.js               # Contact form/CTA
│   └── Footer.js                # Footer
├── package.json                 # Dependencies and scripts
├── jsconfig.json                # Path alias config (@/* → ./*/)
├── next.config.mjs              # Next.js config
├── metadata.json                # App metadata
└── [git, lock files, etc.]
```

### Key Architectural Patterns

1. **Component Composition**: The landing page is built from composable section components stacked in `app/page.js`. Each component is self-contained and responsible for its own styling and animation.

2. **Client-Side State**: Components marked with `"use client"` handle:
   - Theme toggling (Navbar)
   - Scroll state detection (Navbar)
   - Mobile menu toggling
   - Animations (motion/react)
   - DOM event listeners

3. **Theme System**: 
   - Uses `next-themes` for dark/light mode toggling
   - CSS custom properties defined in `app/globals.css` for both light and dark modes
   - Tailwind v4's `@theme` directive references custom properties
   - `ThemeProvider` component wraps the entire app in the root layout

4. **Styling Approach**:
   - Tailwind CSS v4 with PostCSS
   - Custom CSS variables for color tokens (background, foreground, card, border, primary, muted, etc.)
   - Shared `.glass-card` utility class for frosted glass effect components
   - Responsive design using Tailwind breakpoints (mobile-first)

5. **Animations**:
   - All animations use `motion/react` for smooth, performant transitions
   - Common patterns: fade-in on scroll, staggered animations for lists, interactive hover states

## Key Technologies & Dependencies

| Library | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.3.2 | React framework with App Router |
| React | 19.2.8 | UI library |
| Tailwind CSS | 4.0.0 | Utility-first CSS framework |
| motion/react | 12.0.0 | Animation library (Framer Motion) |
| next-themes | 0.4.4 | Dark/light mode management |
| lucide-react | 0.469.0 | Icon library |
| PostCSS | 8.5.1 | CSS processing |
| ESLint | 10.9.0 | Code linting |

## Important Design Decisions

### Styling & Theme Management
- **Color System**: All colors are defined as CSS variables, making theme switching seamless without conditional classes
- **Glass-card Effect**: The `.glass-card` class uses `backdrop-blur-xl` for a modern frosted glass appearance
- **No Hardcoded Colors**: Avoid hardcoding colors; use CSS variable tokens from `globals.css`

### Component Best Practices
- **Server vs. Client**: Only mark components with `"use client"` when they need interactivity (hooks, event listeners, browser APIs)
- **Path Aliases**: Always use `@/` for imports from the root directory (e.g., `@/components/Navbar`)
- **Mobile-First**: Write styles mobile-first, then add responsive breakpoints (`md:`, `lg:`, etc.)

### Animation Guidelines
- Use `motion/react` for all animations; avoid CSS animations for complex interactions
- Animations should enhance UX, not distract—keep durations short (0.3–0.6s for most transitions)
- Use motion's `initial`, `animate`, and `transition` props for clean, declarative animations

### Future Considerations
- **Dynamic Content**: If adding database-driven content, use Next.js API routes or server actions
- **SEO**: Metadata is defined in the root layout; update as needed for meta tags and structured data
- **Performance**: The `force-dynamic` setting in `app/page.js` disables static generation—consider caching strategies if performance becomes a concern
- **Form Integration**: Contact form in `Contact.js` should be connected to a backend service (email provider, database, etc.)

## Common Tasks

### Adding a New Section to the Landing Page
1. Create a new component file in `components/` (e.g., `components/NewSection.js`)
2. Use `"use client"` directive if the component needs interactivity
3. Import and add the component to `app/page.js` in the desired position
4. Style using Tailwind classes and CSS variables for colors
5. Use `motion/react` for any animations

### Updating Colors or Theme
1. Modify the CSS custom properties in `app/globals.css` (both `:root` and `.dark` sections)
2. Use the class `.glass-card` or Tailwind color utilities that reference the CSS variables
3. No need to restart the dev server—changes are reflected immediately

### Fixing Responsive Layout Issues
1. Use Tailwind's breakpoint prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
2. Mobile-first: define base styles for mobile, then override for larger screens
3. Test at different viewport sizes using browser DevTools

## Performance & Optimization Notes

- **Image Optimization**: Use Next.js `<Image>` component for optimized loading (currently using external URLs)
- **Bundle Size**: The combination of Tailwind v4, motion, and small icon library keeps the bundle lean
- **Caching**: Consider enabling ISR (Incremental Static Regeneration) if serving from a database
- **Scroll Performance**: The Navbar scroll listener is optimized with `useCallback` and cleanup

## Debugging Tips

- **Theme Not Switching**: Ensure `ThemeProvider` is properly wrapping the app and check browser DevTools for CSS variable values
- **Animations Not Working**: Verify the component is wrapped in `motion.div` or appropriate motion component and has `initial`, `animate`, and `transition` props
- **Styling Issues**: Check if Tailwind classes are spelled correctly and not conflicting with global styles; inspect computed styles in DevTools
- **Mobile Menu Issues**: Debug mobile menu state in `Navbar.js` by checking the `mobileMenuOpen` state and `AnimatePresence` from motion/react

## ESLint Configuration

The project has ESLint configured with Next.js standards. The Next.js config ignores ESLint during build (`ignoreDuringBuilds: true`), but you should still run `npm run lint` locally to catch issues before committing.

## Deployment Notes

- The app requires Node.js runtime
- Environment variables (if needed in the future) should be added to `.env.local` for local development
- The Navbar is set to responsive and mobile-friendly—ensure all viewports are tested before deploying
- Contact form (if integrated with external services) should validate inputs on the backend for security

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
