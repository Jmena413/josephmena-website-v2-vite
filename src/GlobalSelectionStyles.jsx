// GlobalSelectionStyles.tsx
import React from 'react';
import { GlobalStyles } from '@mui/material';
import theme from './Theme';

const GlobalSelectionStyles = () => (
  <GlobalStyles
    styles={{
      '::selection': {
        backgroundColor: '#64ffda',
        color: '#0a192f',
      },
      '::-moz-selection': {
        backgroundColor: '#64ffda',
        color: '#0a192f',
      },
      'body': {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        margin: 0,
        padding: 0,
        minHeight: '100vh',
      },
    }}
  />
);

export default GlobalSelectionStyles;