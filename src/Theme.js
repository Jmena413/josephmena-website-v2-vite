// theme.ts (or theme.js)
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // Often used for brand or accent color
      main: '#64ffda',
    },
    secondary: {
      // A softer accent color
      main: '#8892b0',
    },
    background: {
      // Primary background colors
      default: '#0a192f',
      card: '#0a192f'
    },
    text: {
      // Basic text colors
      primary: '#ccd6f6',
      secondary: '#8892b0',
      white: '#e6f1ff'
    },
  },
  typography: {
    // Font stack used on Brittany Chiang’s site includes
    // "Calibre", "Inter", "San Francisco", etc.
    // Replace or remove if you prefer your own fonts
    fontFamily: [
      'Calibre',
      'Inter',
      'San Francisco',
      'SF Pro Text',
      '-apple-system',
      'system-ui',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#e6f1ff',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      color: '#e6f1ff',
    },
    body1: {
      fontSize: '1rem',
      color: '#8892b0',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#8892b0',
    },
  },
  // You can add additional component overrides here if you want
  // to fine-tune specific Material-UI components.
});

export default theme;