import React from 'react';
import  { Container } from './styles';

const Layout: React.FC = ( { children }) => {
    return(
        <Container className="container-fluid">
             { children }
        </Container>
    )
}
export default Layout;

