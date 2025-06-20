# Autheo Theme Bundle v1.0

A comprehensive theme system for React/TypeScript projects using Tailwind CSS with a modern, professional dark aesthetic.

## Theme Overview

This theme provides a cohesive dark color palette with muted, professional colors designed for tech applications:

- **Primary**: Muted cyan (#00C7B0) - Professional, less bright
- **Secondary**: Dark indigo-gray (#2A2F5B) - Sophisticated tech blue
- **Accent**: Neon crimson (#FF3C5F) - Bold but controlled
- **Background**: Dark gray-blue (#1A1C24) - Gritty, modern feel
- **Typography**: Inter font with optimized feature settings

## Bundle Contents

```
autheo-theme-bundle/
├── theme/
│   ├── index.ts          # TypeScript theme definition
│   └── index.js          # CommonJS theme for Tailwind
├── index.css             # CSS variables and base styles
├── tailwind.config.js    # Tailwind configuration
├── README.md             # This file
└── IMPLEMENTATION.md     # Detailed implementation guide
```

## Quick Start

1. Copy the `theme/` directory to your project's `src/` folder
2. Replace your `src/index.css` with the provided version
3. Update your `tailwind.config.js` with the provided configuration
4. Import the theme in your components as needed

## Color Palette

### Primary Colors
- **Primary**: #00C7B0 (Muted cyan)
- **Secondary**: #2A2F5B (Dark indigo-gray)
- **Accent**: #FF3C5F (Neon crimson)

### Background Colors
- **Default**: #1A1C24 (Dark gray-blue)
- **Paper**: #010214 (Dark bluish)
- **Elevated**: #262735 (Surface gradient)

### Text Colors
- **Primary**: #FFFFFF (Pure white)
- **Secondary**: #B4B7C4 (Bluer gray)
- **Disabled**: #6E727F (Darker tech gray)

### Status Colors
- **Success**: #00C7B0 (Matches primary)
- **Error**: #F81818 (Error red)
- **Warning**: #FF6B00 (Darker orange)
- **Info**: #2A2F5B (Matches secondary)

## Typography

- **Font Family**: Inter with optimized feature settings
- **Feature Settings**: "case", "ss02", "tnum", "liga", "calt"
- **Weights**: 100-900 available
- **Sizes**: xs (11px) to 6xl (64px)

## Usage Examples

### TypeScript/React
```typescript
import { theme } from './theme';

const MyComponent = () => (
  <div style={{ backgroundColor: theme.colors.background.default }}>
    <h1 style={{ color: theme.colors.text.primary }}>Title</h1>
  </div>
);
```

### Tailwind Classes
```jsx
<div className="bg-background text-textPrimary">
  <button className="bg-primary text-primary-contrast">
    Primary Button
  </button>
</div>
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Internal use for Autheo projects.