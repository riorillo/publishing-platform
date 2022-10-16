export const theme = {
    colors: {
      background: '#FFF',
      main: '#7AC86A',
      darker: '#59BA45',
      backgroundDark: '#121212',
      textPrimary: '#000',
      textSecondary: '#FFF'
    },
    fontSizes: {
      extraLarge: 44,
      large: 32,
      medium: 24,
      base: 18,
      small: 14,
      extraSmall: 10,
    },
    radii: [10, 20, 30, 40, 50],
    space: {
      extraSmall: 4,
      small: 8,
      medium: 16,
      large: 32,
    },
    sizes: {
      extraSmall: 20,
      small: 28,
      medium: 34,
      large: 48,
    },
    textTransform: {
      uppercase: 'uppercase',
      capitalize: 'capitalize',
      lowercase: 'lowercase',
      none: 'none',
    },
  }
  export type Theme = typeof theme
  export type ThemeColors = keyof Theme['colors']