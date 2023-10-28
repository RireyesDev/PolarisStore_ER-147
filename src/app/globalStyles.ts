import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap');

    :root{
        --primary-color: #7817b2;
        --primary-color_hover: #8D1BD0;
        --primary-color_active: #2A083D;
        --secondary-color: #a525f8;
        --secondary-color_hover: #991DE0;
        --secondary-color_active: #3E0C5A;
        --primary-color_triad: #17b460;
        --primary-color_triad_hover: #128E4C;
        --primary-color_triad_active: #0E6938;
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