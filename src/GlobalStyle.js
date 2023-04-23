import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import background from "./dolars.png";


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: ${({ theme }) => theme.font.lato};
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: url("${background}") no-repeat center fixed;
        background-size: cover;
    }
`;