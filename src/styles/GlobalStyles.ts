import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: "Poppins", sans-serif;
    background: url("bg-intro-mobile.png");
    background-size: cover;
    background-color: #FF7979;
    padding: 88px 24px 50px 24px;

    @media(min-width:1440px){
        background: url("bg-intro-desktop.png");
        background-color: #FF7979;
        padding: 0;
    }
}
`;

export default GlobalStyle;
