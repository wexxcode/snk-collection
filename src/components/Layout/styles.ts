import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: 120px;
    grid-template-areas:
    'AS MH'
    'AS CT';
    height: 100vh;
    padding: 0;
`;