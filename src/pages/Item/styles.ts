import styled from 'styled-components';

export const Container = styled.section`
    .bg-add {
        width: 100%;
        height: 100%;
    }
    .form-upload {
        position: absolute;
        width: 150px;
        bottom: 48px;
        left: 26px;
    }
    .form-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        h2 {
            width:100%;
        }
        .form-floating {
            width: 49.4%;
        }
        .form-description {
            width: 100%;
        }
        .form-select {
            width: 20%;
            height: 58px;
        }
        .form-color {
            width: 20%;
        }
    }
`;