export const tokens = {
  colors: {
    navy: {
      DEFAULT: '#0B1F6B',
      hover: '#081754',
      light: '#EAF0FD',
    },
    royalBlue: {
      DEFAULT: '#1D5FE0',
      hover: '#174ec0',
      light: '#EAF2FF',
      tint: '#EAF2FF',
    },
    violet: {
      DEFAULT: '#7C5CE0',
      hover: '#6948cb',
      light: '#EFEAFF',
      tint: '#EFEAFF',
    },
    teal: {
      DEFAULT: '#1FA37A',
      hover: '#198865',
      light: '#E3F6EF',
      tint: '#E3F6EF',
    },
    coral: {
      DEFAULT: '#F2884B',
      hover: '#d9743a',
      light: '#FFEDE3',
      tint: '#FFEDE3',
    },
    rose: {
      DEFAULT: '#E8456B',
      hover: '#c83457',
      light: '#FDE8EE',
      tint: '#FDE8EE',
    },
    neutral: {
      pageStart: '#F4F8FF',
      pageEnd: '#F6F1FF',
      body: '#1E2A4A',
      muted: '#5B6785',
      border: '#DDE5F5',
      cardBg: '#FFFFFF',
    },
  },
  typography: {
    headline: 'var(--font-playfair), Georgia, serif',
    body: 'var(--font-inter), system-ui, sans-serif',
    script: 'var(--font-caveat), cursive',
  },
  borderRadius: {
    card: '1.25rem', // 20px
    pill: '9999px',
    badge: '9999px',
  },
  shadows: {
    soft: '0 4px 20px -2px rgba(11, 31, 107, 0.06), 0 2px 6px -1px rgba(11, 31, 107, 0.04)',
    hover: '0 10px 25px -4px rgba(11, 31, 107, 0.10), 0 6px 10px -2px rgba(11, 31, 107, 0.05)',
    floating: '0 20px 35px -8px rgba(11, 31, 107, 0.12), 0 8px 16px -4px rgba(11, 31, 107, 0.06)',
  },
} as const;

export type ThemeColors = typeof tokens.colors;
