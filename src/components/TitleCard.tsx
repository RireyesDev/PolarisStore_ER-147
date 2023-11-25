import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    place-content: center;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
`;

const Title = styled.h2`
    width: 100%;
    height: 42px;
    display: grid;
    place-content: center;
    margin: 14px 0px;
    font-weight: bold;
`;




const TitleCard = (props: any) => {

    return(
        <Container>
            <Title>{props.title}</Title>
        </Container>
    );
}

export { TitleCard }