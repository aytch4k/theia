# Autheo Theme Implementation Guide

## Step-by-Step Implementation Instructions

### Prerequisites
- React/TypeScript project with Tailwind CSS
- Node.js and npm/yarn installed
- Existing project structure similar to webui-empty

### Step 1: Install Dependencies
Ensure your project has the required dependencies:

```bash
npm install tailwindcss postcss autoprefixer
npm install @types/react @types/react-dom  # For TypeScript projects
```

### Step 2: Copy Theme Files

1. **Copy theme directory**:
   ```bash
   cp -r autheo-theme-bundle/theme/ src/
   ```

2. **Replace index.css**:
   ```bash
   cp autheo-theme-bundle/index.css src/
   ```

3. **Update tailwind.config.js**:
   ```bash
   cp autheo-theme-bundle/tailwind.config.js ./
   ```

### Step 3: Update Import Statements

Add Google Fonts import to your HTML head or CSS:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Step 4: Verify Tailwind Configuration

Ensure your `tailwind.config.js` includes the correct content paths:
```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // ... rest of config
}
```

### Step 5: Update Component Styling

Replace hardcoded colors with Tailwind classes:

#### Before:
```jsx
<div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
  <button style={{ backgroundColor: '#007bff' }}>Button</button>
</div>
```

#### After:
```jsx
<div className="bg-background text-textPrimary">
  <button className="bg-primary text-primary-contrast">Button</button>
</div>
```

### Step 6: Common Class Mappings

| Old Pattern | New Tailwind Class | Description |
|-------------|-------------------|-------------|
| `bg-white` | `bg-background` | Main background |
| `text-black` | `text-textPrimary` | Primary text |
| `text-gray-600` | `text-textSecondary` | Secondary text |
| `bg-blue-500` | `bg-primary` | Primary color |
| `bg-purple-500` | `bg-accent` | Accent color |
| `border-gray-300` | `border-border` | Border color |

### Step 7: Layout Components

Update main layout components:

```jsx
// Layout.tsx
<div className="flex h-screen overflow-hidden bg-background">
  <main className="flex-1 overflow-auto p-6 text-textPrimary">
    {children}
  </main>
</div>
```

### Step 8: Card Components

```jsx
// Card component
<div className="bg-card rounded-lg border border-border p-6">
  <h3 className="text-textPrimary font-semibold">Title</h3>
  <p className="text-textSecondary">Description</p>
</div>
```

### Step 9: Button Components

```jsx
// Primary button
<button className="bg-primary hover:bg-primary/90 text-primary-contrast py-2 px-4 rounded-md">
  Primary Action
</button>

// Secondary button
<button className="bg-secondary hover:bg-secondary/90 text-secondary-contrast py-2 px-4 rounded-md">
  Secondary Action
</button>
```

### Step 10: Form Elements

```jsx
// Input field
<input className="bg-background border border-border rounded-md px-3 py-2 text-textPrimary focus:border-primary focus:ring-1 focus:ring-primary/50" />

// Select dropdown
<select className="bg-background border border-border rounded-md px-3 py-2 text-textPrimary">
  <option>Option 1</option>
</select>
```

## Troubleshooting

### Common Issues

1. **Colors not applying**: Ensure Tailwind is rebuilding after config changes
2. **Font not loading**: Verify Google Fonts import in HTML head
3. **Build errors**: Check that theme files are in correct TypeScript/JavaScript format

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Docker build (if using containers)
docker-compose build
```

### Verification Checklist

- [ ] No white backgrounds visible
- [ ] Primary color (#00C7B0) used consistently
- [ ] Inter font loading properly
- [ ] Dark theme applied throughout
- [ ] All interactive elements use theme colors
- [ ] Text contrast meets accessibility standards

## Advanced Customization

### Extending Colors

To add custom colors, update `src/theme/index.ts`:

```typescript
export const theme = {
  colors: {
    // ... existing colors
    custom: {
      main: "#YOUR_COLOR",
      light: "#YOUR_LIGHT_COLOR",
      dark: "#YOUR_DARK_COLOR",
    }
  }
}
```

Then update `tailwind.config.js`:

```javascript
colors: {
  // ... existing colors
  custom: {
    DEFAULT: theme.colors.custom.main,
    light: theme.colors.custom.light,
    dark: theme.colors.custom.dark,
  }
}
```

### Typography Variants

Add custom typography in `src/theme/index.ts`:

```typescript
variants: {
  // ... existing variants
  customHeading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
  }
}
```

## Support

For implementation issues or questions, refer to:
- Tailwind CSS documentation
- React TypeScript best practices
- Autheo internal development guidelines