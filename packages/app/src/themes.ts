import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

const fontFamily =
  '"Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"';

export const modernLightTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,

      background: {
        default: '#f3f4f6', // cleaner light gray
        paper: '#ffffff',
      },

      primary: { main: '#2563eb' },
      secondary: { main: '#0ea5e9' },

      navigation: {
        ...palettes.light.navigation,
        background: '#0b1220',
        indicator: '#60a5fa',
        color: 'rgba(255,255,255,0.72)',
        selectedColor: '#ffffff',
        navItem: {
          ...palettes.light.navigation.navItem,
          hoverBackground: 'rgba(255,255,255,0.08)',
        },
        submenu: {
          ...palettes.light.navigation.submenu,
          background: '#0f1a2d',
        },
      },

      banner: {
        ...palettes.light.banner,
        info: '#2563eb',
        error: '#ef4444',
        text: '#0b1220',
        link: '#2563eb',
      },
    },
  }),

  fontFamily,
  defaultPageTheme: 'home',

  // Calmer, more “product” headers (less rainbow)
  pageTheme: {
    home: genPageTheme({ colors: ['#0b1220', '#1f2a44'], shape: shapes.round }),
    documentation: genPageTheme({
      colors: ['#0b1220', '#1f2a44'],
      shape: shapes.round,
    }),
    tool: genPageTheme({ colors: ['#0b1220', '#1f2a44'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#0b1220', '#1f2a44'],
      shape: shapes.round,
    }),
    website: genPageTheme({
      colors: ['#0b1220', '#1f2a44'],
      shape: shapes.round,
    }),
    library: genPageTheme({
      colors: ['#0b1220', '#1f2a44'],
      shape: shapes.round,
    }),
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(15, 23, 42, 0.08)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(2, 6, 23, 0.08)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 800,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontSize: '12px',
        },
      },
    },
  },
});

export const modernDarkTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,

      background: {
        default: '#070a14', // remove that “flat gray” vibe
        paper: '#0b1020',
      },

      primary: { main: '#60a5fa' },
      secondary: { main: '#a78bfa' },

      navigation: {
        ...palettes.dark.navigation,
        background: '#050814',
        indicator: '#60a5fa',
        color: 'rgba(255,255,255,0.74)',
        selectedColor: '#ffffff',
        navItem: {
          ...palettes.dark.navigation.navItem,
          hoverBackground: 'rgba(255,255,255,0.08)',
        },
        submenu: {
          ...palettes.dark.navigation.submenu,
          background: '#0b1020',
        },
      },

      banner: {
        ...palettes.dark.banner,
        info: '#60a5fa',
        error: '#fb7185',
        text: '#e5e7eb',
        link: '#93c5fd',
      },
    },
  }),

  fontFamily,
  defaultPageTheme: 'home',

  // Same calm header style everywhere
  pageTheme: {
    home: genPageTheme({ colors: ['#070a14', '#0b1020'], shape: shapes.round }),
    documentation: genPageTheme({
      colors: ['#070a14', '#0b1020'],
      shape: shapes.round,
    }),
    tool: genPageTheme({ colors: ['#070a14', '#0b1020'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#070a14', '#0b1020'],
      shape: shapes.round,
    }),
    website: genPageTheme({
      colors: ['#070a14', '#0b1020'],
      shape: shapes.round,
    }),
    library: genPageTheme({
      colors: ['#070a14', '#0b1020'],
      shape: shapes.round,
    }),
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(148, 163, 184, 0.14)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 18px 55px rgba(0,0,0,0.45)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 800,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontSize: '12px',
        },
      },
    },
  },
});
