import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Login } from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';

import light from './styles/themes/light';
import Layout from './components/Layout';




function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
          <h1>Just Do It</h1>
         <Login />
      </Layout>
      
    </ThemeProvider>
  );
}

export default App;
