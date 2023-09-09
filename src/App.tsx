import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './styles/theme';

import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
