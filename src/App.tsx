import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes/>    
    </ThemeProvider>
  );
}

export default App;
