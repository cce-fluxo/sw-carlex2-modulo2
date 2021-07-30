import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        text-decoration: none;
        border: none;
    };
    body{
        font-family: "Roboto", sans-serif;
        background-color: ${props => props.theme.colors.black};
    }
    ul{
        list-style: none;
    }
`