import React from 'react';
import Search from '../Search';
import { Container } from './styles'

const MainHeader: React.FC = () => {
    return(
        <Container>
            <nav>
                <ul>
                    <li className="avatar"><img src="https://via.placeholder.com/150" alt="Avatar Usuário"/></li>
                    <li className="avatar"><a href="/about">Sobre</a></li>
                    <li className="avatar"><a href="/user">Preferências</a></li>
                </ul>
            </nav>
            <Search />
        </Container>
    );
}

export default MainHeader;