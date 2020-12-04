import styled from 'styled-components';

export const Container = styled.div`
    width: 42%;
    > div {
       input {
            border-radius: ${props => props.theme.borders.hard};
            border: 3px solid ${props => props.theme.colors.black};

            &:after {
                background-color:red;
            }
       }
       label {
            left: 17px;
       }
    }
`;

