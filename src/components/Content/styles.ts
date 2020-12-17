import styled from 'styled-components';
import bg from '../../assets/gdn-yellow.jpeg';

export const Container = styled.div`
    grid-area: CT;
    background: #eaeaea url(${bg});
    background-size: cover;
    background-position: 50% 75%;
    width: 100%;
    height: 100%;
    padding: 50px 40px;
`;