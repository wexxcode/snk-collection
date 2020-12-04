import React from 'react';
import Search from '../Search';
import { Container } from './styles'

const MainHeader: React.FC = () => {
    return(
        <Container>
            <nav>
                <ul>
                    <li className="avatar"><img src="https://via.placeholder.com/150" alt="Avatar Usuário"/></li>
                    <li className="avatar"><a href="#">Preferências</a></li>
                    <li className="avatar"><a href="#">Meus Dados</a></li>
                </ul>
            </nav>
            <Search />
        </Container>
    );
}

export default MainHeader;