import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {

        title: string,
    
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,
    
            white: string,
            black: string,
            gray: string,
    
            succes: string,
            info: string,
            warning: string,
        },

        borders: {
            soft: string,
            medium: string,
            hard: string,
        },
        fontSize: {
            little: string,
            normal: string,
            medium: string,
            big: string,
        },
        fontWeight: {
            light: string,
            normal: string,
            bold: string,
            extra: string,
        }
    };
}