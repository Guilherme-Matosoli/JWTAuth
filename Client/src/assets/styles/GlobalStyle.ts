import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html{
        font-size: 10px;
        font-family: 'Poppins', sans-serif;
    }

    :root{
        --color-background: #DCEDFF;
        --color-modal-login: #E8EDDF;
        --color-modal-aside: #CFDBD5;

        --color-ball: #89A496;
        --color-ball-hover: #5F7369;
    }

    @media(max-width: 950px){
        html{
            font-size: 9px;
        }
    }
`;