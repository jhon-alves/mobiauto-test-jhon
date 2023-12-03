'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          textTransform: 'inherit',
          borderRadius: 6,
          padding: '9px 18px'
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          backgroundColor: '#FFF'
        }
      }
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF'
        }
      }
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: 32,
    },
    h2: {
      fontWeight: 700,
      fontSize: 28,
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 14,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: '#5518bb',
    },
    secondary: {
      main: '#f8f6fc'
    },
    background: {
      default: '#f8f6fc',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    grey: {
      50: '#CED4DA'
    },
    success: {
      main: '#519f8c',
      light: '#e2f4f2'
    }
  }
});

export default theme;