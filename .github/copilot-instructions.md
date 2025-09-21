# AgenticCortex.github.io - AI Coding Instructions

## Project Overview

This is a React + Vite landing page for AgenticCortex, featuring a modern dark-themed design with gradient animations and neural network aesthetics. The site showcases AI/ML research with sections for features, technology, and call-to-actions.

## Architecture & Tech Stack

- **Framework**: React 19.1+ with Vite 7+ (ES modules, JSX)
- **Styling**: Component-scoped CSS with comprehensive design system in `App.css`
- **Build**: Vite with GitHub Pages deployment via `.github/workflows/pages.yml`
- **Linting**: ESLint 9+ with React hooks and refresh plugins

## Design System Patterns

### CSS Custom Properties (App.css)

The project uses an extensive CSS custom property system in `App.css` - always reference these variables:

```css
/* Colors: --neural, --cortex, --primary (with -light/-dark variants) */
/* Gradients: --gradient-primary, --gradient-text, --gradient-secondary */
/* Spacing: --space-xs through --space-3xl */
/* Typography: --font-size-xs through --font-size-4xl */
```

### Component Architecture

- **Flat component structure**: All components in `src/components/` with co-located CSS files
- **Component + CSS pairs**: Each component has matching `.css` file (e.g., `Header.jsx` + `Header.css`)
- **Consistent naming**: PascalCase components, kebab-case CSS classes

### Button System

The `Button` component uses a variant + size pattern:

```jsx
<Button variant="primary|secondary|hero|outline" size="sm|md|lg|xl">
```

Reference existing variants in `Button.jsx` before creating new ones.

## Key Conventions

### Import Patterns

```jsx
import React, { useState } from "react"
import Button from "./Button" // Relative imports for components
import "./ComponentName.css" // Always import component CSS
import AgenticCortex from "../icon/AgenticCortex" // Custom icons
```

### CSS Class Naming

- Block-element pattern: `.header`, `.header-content`, `.nav-desktop`
- Utility classes: `.gradient-text`, `.animate-pulse-glow`
- State modifiers: `.nav-mobile` (mobile variants), `.btn-primary` (variants)

### Responsive Design

- Mobile-first approach with `nav-desktop` hidden by default
- Mobile menu toggles with `nav-mobile` and `mobile-menu-toggle`
- Use existing breakpoint patterns in component CSS files

## Development Workflows

### Local Development

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build to /dist
npm run lint       # ESLint check
npm run preview    # Preview built site
```

### Deployment

- **Auto-deploy**: Pushes to `main` branch trigger GitHub Pages deployment
- **Build output**: `/dist` directory uploaded as Pages artifact
- **URL**: Deployed to `https://agentcortex.github.io`

### Adding Components

1. Create `ComponentName.jsx` in `src/components/`
2. Create matching `ComponentName.css` with component-scoped styles
3. Import CSS in component: `import './ComponentName.css'`
4. Follow existing button/header patterns for props and structure
5. Add to main `App.jsx` if it's a page section

## Special Files & Assets

### Custom SVG Icon

`src/icon/AgenticCortex.jsx` contains a large inline SVG (994+ lines) with gradients. Import as React component, not as static asset.

### Design System Colors

The neural network theme uses specific color relationships:

- **Neural**: Purple gradient (#8b5cf6 → variants)
- **Cortex**: Blue gradient (#3b82f6 → variants)
- **Primary**: Cyan gradient (#06b6d4 → variants)

### ESLint Configuration

Uses modern flat config with custom rule: `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]` to allow unused React/constants.

## Integration Points

- **GitHub Pages**: Auto-deployment via workflow, no manual build steps
- **Vite**: Hot reload, fast builds, ES modules throughout
- **React 19**: Uses latest patterns, StrictMode enabled in `main.jsx`

When making changes, maintain the established design system, component patterns, and mobile-responsive structure. Always test both desktop and mobile layouts.
