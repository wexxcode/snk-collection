import React from 'react';
import { Container } from './styles'

interface CardInfoProps {
    title?: string;
    subtitle?: string;
    NumberSize?: string;
    retail?: boolean;
    resel?: boolean;
    predominantColor?: string;
    secondaryColor?: string;
    location?: string;
    buyDate?: string;
    firm?: string;
    buyPrice?: string;
    buyCotation?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
    title, 
    subtitle, 
    NumberSize, 
    firm, 
    retail, 
    resel, 
    buyDate, 
    buyPrice, 
    buyCotation,
    predominantColor,
    secondaryColor,
    location,
    
}) => {
    return(
        <Container>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p> 
                    <div className="number-firm">
                        <span>{NumberSize}</span>
                        <p>{firm}</p>
                    </div>    
                    <div className="">
                        <span>{retail}</span>
                        <span>{resel}</span>
                    </div>    
                    <div className="buy">
                        <span>{buyDate}</span>
                        <p>
                            {buyPrice}
                            <span>
                                {buyCotation}
                            </span>
                        </p>
                    </div>
                    <div className="buy">
                        <span>{predominantColor}</span>
                        <span>{secondaryColor}</span>
                        <span>{location}</span>
                    </div>         
                </div>
            </div>
        </Container>
    );
}

export default CardInfo;