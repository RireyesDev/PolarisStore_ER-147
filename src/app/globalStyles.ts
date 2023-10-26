import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap');

    :root{
        --primary-color: #7817b2;
        --secondary-color: #a525f8;
        --primary-color_triad: #17b460;
        --light-color: #f2f2f2;
        --dark-color: #2e2e2e;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, p, button{
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
    }
`;


export { GlobalStyles }