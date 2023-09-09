import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    background: {
      default: '#F2F2F2',
    },
    primary: {
      main: '#F05D31',
    },
    grey: {
      '100': '#EEEFF1',
      '300': '#D9D9D9',
      '500': '#656668',
      '900': '#323534',
    },
  },
});
