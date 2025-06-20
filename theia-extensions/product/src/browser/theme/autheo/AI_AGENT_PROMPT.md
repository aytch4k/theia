# AI Agent Implementation Prompt for Autheo Theme

## Task Overview
You are tasked with implementing the Autheo theme system on a React/TypeScript project with Tailwind CSS. This theme provides a modern, professional dark aesthetic with muted colors designed for tech applications.

## Project Context
- **Target**: React/TypeScript project using Tailwind CSS
- **Theme**: Professional dark theme with muted cyan primary color
- **Goal**: Replace existing styling with cohesive Autheo theme system
- **Constraints**: Must maintain existing functionality while updating visual design

## Implementation Steps

### Phase 1: Theme System Setup

1. **Copy Theme Files**:
   - Copy `theme/index.ts` to `src/theme/index.ts`
   - Copy `theme/index.js` to `src/theme/index.js`
   - Replace `src/index.css` with provided version
   - Replace `tailwind.config.js` with provided version

2. **Verify Dependencies**:
   - Ensure Google Fonts Inter is imported
   - Confirm Tailwind CSS is properly configured
   - Check that PostCSS and Autoprefixer are installed

### Phase 2: Color System Migration

**Primary Color Mapping**:
- Old bright cyan/blue → New muted cyan (#00C7B0)
- Old purple/violet → New neon crimson (#FF3C5F)
- Old light backgrounds → New dark gray-blue (#1A1C24)

**Systematic Replacement Rules**:

1. **Background Colors**:
   ```
   bg-white → bg-background
   bg-gray-50 → bg-background
   bg-gray-100 → bg-elevated
   ```

2. **Text Colors**:
   ```
   text-black → text-textPrimary
   text-gray-900 → text-textPrimary
   text-gray-600 → text-textSecondary
   text-gray-500 → text-textSecondary
   ```

3. **Primary Actions**:
   ```
   bg-blue-500 → bg-primary
   bg-blue-600 → bg-primary
   text-blue-500 → text-primary
   border-blue-500 → border-primary
   ```

4. **Accent Elements**:
   ```
   bg-purple-500 → bg-accent
   bg-pink-500 → bg-accent
   text-purple-500 → text-accent
   ```

### Phase 3: Component-Specific Updates

**Layout Components**:
- Main container: `bg-background text-textPrimary`
- Cards: `bg-card border-border`
- Sidebars: `bg-background-paper`

**Interactive Elements**:
- Primary buttons: `bg-primary hover:bg-primary/90 text-primary-contrast`
- Secondary buttons: `bg-secondary hover:bg-secondary/90 text-secondary-contrast`
- Links: `text-primary hover:text-primary/80`

**Form Elements**:
- Inputs: `bg-background border-border focus:border-primary focus:ring-primary/50`
- Selects: `bg-background border-border text-textPrimary`

### Phase 4: Validation & Testing

**Visual Verification Checklist**:
- [ ] No white backgrounds remain
- [ ] Primary color (#00C7B0) used consistently
- [ ] Text has proper contrast ratios
- [ ] Interactive elements respond to hover states
- [ ] Form elements are properly styled
- [ ] Cards and containers use dark theme
- [ ] Navigation elements use primary color for active states

**Functional Testing**:
- [ ] All existing functionality preserved
- [ ] No broken layouts or components
- [ ] Responsive design maintained
- [ ] Accessibility standards met

## Critical Implementation Notes

### Color Conversion Priority
1. **High Priority**: Backgrounds (white → dark), primary actions, navigation
2. **Medium Priority**: Secondary elements, borders, form controls
3. **Low Priority**: Decorative elements, subtle accents

### Common Pitfalls to Avoid
- Don't change functional logic, only styling
- Preserve existing component structure
- Maintain responsive breakpoints
- Keep accessibility attributes intact
- Don't modify TypeScript interfaces unless necessary

### Build Process
- Use Docker containers for builds if project requires it
- Test in development mode before production build
- Verify theme loads correctly in all browsers
- Check that fonts load properly

## Expected Outcome

After implementation, the project should have:
- **Cohesive dark theme** throughout all pages
- **Professional muted color palette** with cyan primary
- **Consistent typography** using Inter font
- **Improved visual hierarchy** with proper contrast
- **Modern tech aesthetic** suitable for enterprise applications

## Quality Assurance

**Before/After Comparison**:
- Take screenshots of key pages before implementation
- Compare with final result to ensure visual improvement
- Verify no functionality regression
- Confirm theme consistency across all components

**Performance Check**:
- Ensure CSS bundle size hasn't significantly increased
- Verify font loading doesn't impact page speed
- Check that Tailwind purging works correctly

## Troubleshooting Guide

**If colors don't apply**:
1. Check Tailwind config imports theme correctly
2. Verify CSS is rebuilding after changes
3. Clear browser cache and rebuild

**If fonts don't load**:
1. Confirm Google Fonts import in HTML head
2. Check network requests for font files
3. Verify font-family declarations in CSS

**If build fails**:
1. Check TypeScript/JavaScript module compatibility
2. Verify all import paths are correct
3. Ensure PostCSS processes Tailwind correctly

## Success Metrics

Implementation is successful when:
- All pages use dark theme consistently
- Primary color appears in buttons, links, and active states
- No white backgrounds visible anywhere
- Text maintains readability with proper contrast
- Interactive elements provide clear visual feedback
- Overall aesthetic matches professional tech application standards

This prompt should enable any AI agent to systematically implement the Autheo theme while maintaining project functionality and achieving the desired visual outcome.