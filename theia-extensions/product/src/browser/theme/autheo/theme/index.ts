export const theme = {
  // Color palette from brand specification
  colors: {
    // Primary brand color
    primary: {
      main: "#00C7B0", // Muted cyan, less bright than #00FED9
      light: "#33D9C5",
      dark: "#009E8E",
      contrastText: "#010214",
    },

    // Secondary brand colors
    secondary: {
      main: "#2A2F5B", // Dark indigo-gray, replacing tech blue
      light: "#4B517F",
      dark: "#1A1F3D",
      contrastText: "#FFFFFF",
    },
    accent: {
      main: "#FF3C5F", // Neon crimson, replacing bold purple
      light: "#FF667F",
      dark: "#CC2F4B",
      contrastText: "#FFFFFF",
    },

    // Background colors
    background: {
      default: "#1A1C24", // Darker gray-blue, replacing #F5F5F5 for a grittier feel
      paper: "#010214", // Unchanged, dark bluish background
      elevated: "#262735", // Unchanged, surface gradient start
      surface: "linear-gradient(135deg, #262735 0%, #010214 100%)", // Unchanged
    },

    // Text colors
    text: {
      primary: "#FFFFFF", // Unchanged, pure white for titles/headings
      secondary: "#B4B7C4", // Slightly bluer gray than #DDDDDD for tech vibe
      disabled: "#6E727F", // Darker, techier than #9E9E9E
      hint: "#8F94A3", // Bluer hint than #BDBDBD
      white: "#FFFFFF", // Unchanged
    },

    // Border and divider colors
    divider: "#262735", // Unchanged
    border: {
      main: "#262735", // Unchanged
      light: "#404040", // Unchanged
      dark: "#1A1A1A", // Unchanged
    },

    // Status colors
    success: {
      main: "#00C7B0", // Updated to match new primary cyan
      light: "#33D9C5",
      dark: "#009E8E",
      contrastText: "#010214",
    },
    error: {
      main: "#F81818", // Unchanged, error red
      light: "#FA5555",
      dark: "#C61414",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FF6B00", // Darker, less vibrant orange than #FFBB00 for gritty feel
      light: "#FF8F33",
      dark: "#CC5500",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2A2F5B", // Updated to match new secondary color
      light: "#4B517F",
      dark: "#1A1F3D",
      contrastText: "#FFFFFF",
    },

    // Gray scale
    gray: {
      50: "#E8EAEF", // Slightly bluer grays to match tech aesthetic
      100: "#D3D6DF",
      200: "#B4B7C4",
      300: "#9598A6",
      400: "#767A8A",
      500: "#6E727F",
      600: "#585C6B",
      700: "#434652",
      800: "#2F313A",
      900: "#1A1C24",
    },
  },

  // Typography system based on Figma tokens
  typography: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      mono: ["Geist Mono", "monospace"],
    },
    fontSizes: {
      xs: "0.6875rem", // 11px - Figma font-size-small
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
    },
    fontWeights: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500, // Figma font-weight-medium
      semibold: 600, // Figma font-weight-semibold
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    // Figma font feature settings
    fontFeatureSettings: '"case", "ss02", "tnum", "liga", "calt"',
    // Typography variants with specific sizes and weights
    variants: {
      // Display variants
      display1: {
        fontSize: "3rem", // 48px
        fontWeight: 700, // bold
        lineHeight: 1.2,
      },
      display2: {
        fontSize: "2.25rem", // 36px
        fontWeight: 600, // semibold
        lineHeight: 1.25,
      },
      // Heading variants
      h1: {
        fontSize: "2rem", // 32px
        fontWeight: 700, // bold
        lineHeight: 1.25,
      },
      h2: {
        fontSize: "1.875rem", // 30px
        fontWeight: 600, // semibold
        lineHeight: 1.25,
      },
      h3: {
        fontSize: "1.5rem", // 24px
        fontWeight: 600, // semibold
        lineHeight: 1.375,
      },
      h4: {
        fontSize: "1.25rem", // 20px
        fontWeight: 600, // semibold
        lineHeight: 1.375,
      },
      h5: {
        fontSize: "1.125rem", // 18px
        fontWeight: 500, // medium
        lineHeight: 1.5,
      },
      h6: {
        fontSize: "1rem", // 16px
        fontWeight: 500, // medium
        lineHeight: 1.5,
      },
      // Body variants
      body1: {
        fontSize: "1rem", // 16px
        fontWeight: 400, // normal
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem", // 14px
        fontWeight: 400, // normal
        lineHeight: 1.625,
      },
      // Utility variants
      caption: {
        fontSize: "0.6875rem", // 11px
        fontWeight: 400, // normal
        lineHeight: 1.25,
      },
      overline: {
        fontSize: "0.6875rem", // 11px
        fontWeight: 500, // medium
        lineHeight: 1.25,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
    },
  },

  // Spacing scale
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
    40: "10rem", // 160px
    48: "12rem", // 192px
    56: "14rem", // 224px
    64: "16rem", // 256px
  },

  // Border radius
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    default: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px - Figma button border radius
    xl: "0.75rem", // 12px - Figma card border radius
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Figma card shadow
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    button: "0 2px 4px rgba(0, 0, 0, 0.1)", // Figma button shadow
    card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Figma card shadow
  },

  // Transitions - based on Figma design tokens
  transitions: {
    duration: {
      fast: "0.1s", // Figma transition-duration-fast
      normal: "0.2s",
      slow: "0.3s",
    },
    easing: {
      default: "ease-in-out",
      in: "ease-in",
      out: "ease-out",
      linear: "linear",
    },
    property: {
      opacity: "opacity", // Figma transition-property-opacity
      all: "all",
      colors: "background-color, border-color, color, fill, stroke",
      transform: "transform",
    },
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-index scale
  zIndex: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  // Component variants
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: "#00FED9",
          color: "#010214",
          borderColor: "#00FED9",
        },
        secondary: {
          backgroundColor: "#3A4EFF",
          color: "#FFFFFF",
          borderColor: "#3A4EFF",
        },
        outlined: {
          backgroundColor: "transparent",
          color: "#00FED9",
          borderColor: "#00FED9",
        },
        text: {
          backgroundColor: "transparent",
          color: "#00FED9",
          borderColor: "transparent",
        },
        danger: {
          backgroundColor: "#F81818",
          color: "#FFFFFF",
          borderColor: "#F81818",
        },
      },
      sizes: {
        small: {
          padding: "0.375rem 0.75rem",
          fontSize: "0.875rem",
        },
        medium: {
          padding: "0.75rem 1.5rem",
          fontSize: "0.875rem",
        },
        large: {
          padding: "1rem 2rem",
          fontSize: "1rem",
        },
      },
    },
    card: {
      variants: {
        elevated: {
          backgroundColor: "#FFFFFF",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderColor: "transparent",
        },
        outlined: {
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          borderColor: "#E0E0E0",
        },
        filled: {
          backgroundColor: "#F5F5F5",
          boxShadow: "none",
          borderColor: "transparent",
        },
      },
    },
  },
} as const;

export type Theme = typeof theme;

// Theme preference from Figma
export const themePreference = "light" as const;

// Utility functions for theme access
export const getColor = (path: string) => {
  const keys = path.split(".");
  let value: any = theme.colors;
  for (const key of keys) {
    value = value?.[key];
  }
  return value;
};

export const getSpacing = (value: keyof typeof theme.spacing) => {
  return theme.spacing[value];
};

export const getShadow = (value: keyof typeof theme.shadows) => {
  return theme.shadows[value];
};

export default theme;