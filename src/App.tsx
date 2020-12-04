import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import light from './styles/themes/light';
import Layout from './components/Layout';
import MainAside from './components/MainAside';
import MainHeader from './components/MainHeader';
import Content from './components/Content';
import CardInfo from './components/CardInfo';




function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
          <MainHeader />
          <MainAside />
          <Content>
            <CardInfo
              title="Nike SB 987"
              firm="Nike"
              NumberSize="43"
              buyDate="16/04/1988"
              subtitle="Em 2001, a Nike criou a Nike SB sua categoria dedicada ao Skateboarding, depois de varias tentativas de entrar no skate a Nike finalmente se consolidou com a contratação do skatista Paul Rodriguez em 2004, o que trouxe para marca credibilidade no mercado."
              retail={true}
              resel={false}
              buyPrice="650,00"
              buyCotation="5,40"
              predominantColor="Vermelha"
              secondaryColor="Branca"
              location="COD-A2CAL4"
            />
          </Content>
      </Layout>
      
    </ThemeProvider>
  );
}

export default App;
