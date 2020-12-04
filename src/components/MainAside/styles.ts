import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    > div {
        background-color: ${props => props.theme.colors.black};
        height: 100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: flex-end;
        padding: 17px;
    }
`;