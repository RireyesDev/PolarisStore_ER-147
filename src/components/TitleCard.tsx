import React from "react";
import styled from "styled-components";


const Title = styled.h2`
    width: 100%;
    height: 42px;
    display: grid;
    place-content: center;
    margin: 18px 0px;
    font-weight: bold;

`;


const TitleCard = (props: any) => {

    return(
        <Title>{props.title}</Title>
    );
}

export { TitleCard }