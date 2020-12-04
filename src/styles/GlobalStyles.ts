import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Lato', sans-serif;
    }
    button {
        cursor: pointer;
    }
    p, span, h1, h2, h3, h4, h5, h5 {
        font-family: 'Lato', sans-serif;
    }
`;