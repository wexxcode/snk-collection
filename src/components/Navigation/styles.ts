import styled from 'styled-components';

export const Container = styled.div`
    img {
        position: absolute;
        top: 10px;
    }
    .nav {
        width: 100%;
        margin-bottom: 60px;
        .nav-item {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            height: 50px;
            &:after {
                content: "";
                border-right: 1px solid white;
                color: ${props => props.theme.colors.white};
            }
            .nav-link {
                color: ${props => props.theme.colors.white};
                text-transform: uppercase;
                font-size: ${props => props.theme.fontSize.little}
            }
        }
    }
`;