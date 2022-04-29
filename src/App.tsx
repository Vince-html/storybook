import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';

import { theme } from './styles/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home>Hello</Home>
    </ThemeProvider>
  );
};

export default App;
