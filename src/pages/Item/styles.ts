import styled from 'styled-components';

export const Container = styled.section`
    .card {
        border-radius: ${props => props.theme.borders.hard};
        border: 3px solid ${props => props.theme.colors.black};
    }
    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        .bg-add {
            width: 90%;
            height: 83%;
            border-radius: ${props => props.theme.borders.soft};
            border: 2px solid ${props => props.theme.colors.black};
        }
    }
    .form-upload {
        position: absolute;
        width: 150px;
        bottom: 58px;
        left: 58px;
    }
    .form-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        .form-control {
            border: 2px solid ${props => props.theme.colors.black};
        }
        h2 {
            width:100%;
        }
        .form-floating {
            width: 45.4%;
        }
        .btn-add-company {
            border-radius: 30px;
            font-weight: bold;
            background-color: ${props => props.theme.colors.black};
            border: 2px solid ${props => props.theme.colors.black};
        }
        .form-description {
            width: 100%;
        }
        .form-select {
            width: 20%;
            height: 58px;
            border: 2px solid ${props => props.theme.colors.black};
        }
        .form-color {
            width: 20%;
        }
    }
`;