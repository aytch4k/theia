const { theme } = require("./src/theme/index.js");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Font family from theme
      fontFamily: {
        sans: theme.typography.fontFamily.primary,
        mono: theme.typography.fontFamily.mono,
      },

      // Font feature settings from Figma
      fontFeatureSettings: {
        inter: theme.typography.fontFeatureSettings,
      },

      // Colors from centralized theme
      colors: {
        // Primary brand color
        primary: {
          DEFAULT: theme.colors.primary.main,
          light: theme.colors.primary.light,
          dark: theme.colors.primary.dark,
          contrast: theme.colors.primary.contrastText,
        },
        secondary: {
          DEFAULT: theme.colors.secondary.main,
          light: theme.colors.secondary.light,
          dark: theme.colors.secondary.dark,
          contrast: theme.colors.secondary.contrastText,
        },
        accent: {
          DEFAULT: theme.colors.accent.main,
          light: theme.colors.accent.light,
          dark: theme.colors.accent.dark,
          contrast: theme.colors.accent.contrastText,
        },

        // Background colors
        background: {
          DEFAULT: theme.colors.background.default,
          paper: theme.colors.background.paper,
          elevated: theme.colors.background.elevated,
        },

        // Text colors
        textPrimary: theme.colors.text.primary,
        textSecondary: theme.colors.text.secondary,
        textDisabled: theme.colors.text.disabled,
        textHint: theme.colors.text.hint,
        textWhite: theme.colors.text.white,

        // Border colors
        border: {
          DEFAULT: theme.colors.border.main,
          light: theme.colors.border.light,
          dark: theme.colors.border.dark,
        },
        divider: theme.colors.divider,

        // Status colors
        success: {
          DEFAULT: theme.colors.success.main,
          light: theme.colors.success.light,
          dark: theme.colors.success.dark,
          contrast: theme.colors.success.contrastText,
        },
        error: {
          DEFAULT: theme.colors.error.main,
          light: theme.colors.error.light,
          dark: theme.colors.error.dark,
          contrast: theme.colors.error.contrastText,
        },
        warning: {
          DEFAULT: theme.colors.warning.main,
          light: theme.colors.warning.light,
          dark: theme.colors.warning.dark,
          contrast: theme.colors.warning.contrastText,
        },
        info: {
          DEFAULT: theme.colors.info.main,
          light: theme.colors.info.light,
          dark: theme.colors.info.dark,
          contrast: theme.colors.info.contrastText,
        },

        // Gray scale
        gray: theme.colors.gray,

        // Legacy compatibility colors (keeping HSL format for existing components)
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },

      // Typography from theme
      fontSize: theme.typography.fontSizes,
      fontWeight: theme.typography.fontWeights,
      lineHeight: theme.typography.lineHeights,
      letterSpacing: theme.typography.letterSpacing,

      // Spacing from theme
      spacing: theme.spacing,

      // Border radius from theme
      borderRadius: {
        ...theme.borderRadius,
        button: theme.borderRadius.lg, // 8px for buttons
        card: theme.borderRadius.xl, // 12px for cards
        // Legacy compatibility
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // Box shadows from theme
      boxShadow: {
        ...theme.shadows,
        button: theme.shadows.button,
        card: theme.shadows.card,
        // Updated glow effects with new primary color
        glow: '0 0 10px rgba(0, 254, 217, 0.5)',
        'glow-md': '0 0 15px rgba(0, 254, 217, 0.6)',
        'glow-lg': '0 0 20px rgba(0, 254, 217, 0.7)',
      },

      // Transitions from theme
      transitionDuration: {
        fast: theme.transitions.duration.fast,
        normal: theme.transitions.duration.normal,
        slow: theme.transitions.duration.slow,
      },

      // Z-index from theme
      zIndex: theme.zIndex,

      // Animation and transitions
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        "fade-in": "fadeIn 0.2s ease-in-out",
        "fade-out": "fadeOut 0.2s ease-in-out",
        "scale-in": "scaleIn 0.2s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};