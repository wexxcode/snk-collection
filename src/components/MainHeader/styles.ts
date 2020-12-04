import styled from 'styled-components';

export const Container = styled.header`
    grid-area: MH;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 46px 40px 0px 40px;
    nav {
        ul {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            list-style: none;
            border-top: 3px solid ${props=>props.theme.colors.black};
            padding: 0;
            li {
                margin: 5px 10px;
                &:first-child {
                    margin-right: 0;
                }
                &:last-child {
                    margin-left: 65px;
                }
                img {
                    border-radius: 50%;
                    width: 20px;
                    border: 1.5px solid ${props => props.theme.colors.black};
                }
                a {
                    font-size: ${props => props.theme.fontSize.little};
                    color: ${props => props.theme.colors.black};
                    text-decoration: none;
                    text-transform: uppercase;
                }
            }
        }
    }
`;