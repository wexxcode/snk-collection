import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo-placeholder.svg'

const Navigation: React.FC = () => {
    return(
        <Container>
            <a href="/">
                <img src={ Logo } alt="Logo Placeholder" />
            </a>
            <nav>
                <ul className="nav flex-column text-right">
                    <li className="nav-item">
                        <a className="nav-link" href="/company">Marca</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Modelo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/itens">Iten</a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}

export default Navigation;