import { createTheme, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

let theme = createTheme({
  palette: {
    primary: {
      main: '#2978a0',
    },
    secondary: {
      main: '#315659',
    },
    text: {
      primary: '#253031',
      secondary: 'rgba(37,48,49,0.5)',
      disabled: 'rgba(37,48,49,0.3)',
    },
    warning: {
      main: '#bcab79',
    },
    info: {
      main: '#c6e0ff',
    },
  },
});

export const AppThemeProvider = (props: PropsWithChildren<unknown>) => (
  <ThemeProvider theme={ theme }>{ props.children }</ThemeProvider>
);
