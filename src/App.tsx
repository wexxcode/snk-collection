import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Login } from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';

import light from './styles/themes/light';



function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <h1>Just Do It</h1>
      <Login />
    </ThemeProvider>
  );
}

export default App;
