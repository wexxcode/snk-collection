import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo-placeholder.svg'

const Navigation: React.FC = () => {
    return(
        <Container>
            <img src={ Logo } alt="Logo Placeholder" />
            <nav>
                <ul className="nav flex-column text-right">
                    <li className="nav-item">
                        <a className="nav-link" href="">Marca</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Modelo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Item</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="">Coleção</a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}

export default Navigation;