import React from 'react';
import { Container }from './styles';

const Search: React.FC = () => {
    return(
        <Container>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Buscar itens" />
                <label>Buscar item</label>
            </div>
        </Container>
    );
}

export default Search;