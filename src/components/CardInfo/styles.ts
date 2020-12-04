import styled from 'styled-components';

export const Container = styled.article`
    position: absolute;
    width: 300px;
    bottom: 10%;
    right: 5%;
     .card {
         border: 2px solid ${props => props.theme.colors.black};
         .card-body {
             .card-title .card-text {
                 color: ${props => props.theme.colors.black};
             }
             .card-title {
                font-size: ${props => props.theme.fontSize.normal};
                font-weight: ${props => props.theme.fontWeight.bold};
             }
             .card-text {
                font-size: ${props => props.theme.fontSize.little};
             }

             .number-firm {
                display: flex;
                flex-direction: row;
                justify-content:space-between;
             }
             .buy {
                display: flex;
                flex-direction: row;
                justify-content:space-between;

                p, span {
                    font-weight: ${props => props.theme.fontWeight.extra};
                    font-size: ${props => props.theme.fontSize.little};                    
                }

             }

         }
     }
`;