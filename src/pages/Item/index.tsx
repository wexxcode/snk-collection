import React from 'react';

import { Container} from './styles';
import bg from '../../assets/gdn-yellow.jpeg';

export const Item: React.FC = () => {
    return(
        <Container> 
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="bg-add img-responsive" src={bg} alt="..."/>
                        <div className="input-group form-upload mb-3">
                            <input type="file" className="form-control" />
                            <label className="input-group-text">Upload</label>
                        </div>
                    </div>
                    <div className="col-md-8 p-4">
                        <div className="card-body">
                            <h5 className="card-title">Novo Item</h5>
                            <p className="card-text">Preencha os campos abaixo para adicionar um novo item</p>
                            <div className="form-container">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" />
                            <label>Modelo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" />
                            <label>Marca</label>
                        </div>
                        <div className="form-floating form-description mb-3">
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" />
                            <label>Descrição</label>
                        </div>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Und. de medida</option>
                            <option value="1">BR</option>
                            <option value="2">EUA</option>
                            <option value="3">EUR</option>
                        </select>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Numeração</option>
                            <option value="42">42</option>
                            <option value="2">43</option>
                            <option value="3">44</option>
                        </select>
                        <div className="form-floating form-color">
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" />
                            <label>Cor Predominante</label>
                        </div>
                        <div className="form-floating form-color">
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" />
                            <label>Cor Secundária</label>
                        </div>
                        <div className="form-check form-switch mb-1">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                            <label className="form-check-label">Retail</label>
                        </div>
                    </div>
                            <a href="#" className="btn btn-primary text-end my-4">Adicionar</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}