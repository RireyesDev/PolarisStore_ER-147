import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h2`
    width: 100%;
    height: 80px;
    display: grid;
    place-content: center;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 40px; 
    letter-spacing: 3px;
    font-size: 32px;
    font-family: 'Nunito', sans-serif;
`;


const TitlePage = (props: any) => {
    return(
        <TitleContainer>{props.children}</TitleContainer>
    );
}

export { TitlePage }