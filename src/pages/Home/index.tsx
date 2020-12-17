import React from 'react';
import Content from '../../components/Content';

import { Container} from './styles';

export const Home: React.FC = () => {
    return(
        <Container>
               <Content>
                    <h1>Home</h1>
               </Content>
        </Container>
    )
}