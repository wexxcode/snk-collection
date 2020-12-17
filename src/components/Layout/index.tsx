import React from 'react';
import Content from '../Content';
import MainAside from '../MainAside';

import MainHeader from '../MainHeader';
import  { Container } from './styles';

const Layout: React.FC = ( { children }) => {
    return(
        <Container className="container-fluid">
            <MainHeader />
            <MainAside />
            <Content>
                {children}
            </Content>
        </Container>
    )
}
export default Layout;

