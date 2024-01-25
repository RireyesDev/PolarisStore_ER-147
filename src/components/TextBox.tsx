import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    height: 78px;
    display: grid;
    grid-template-rows: 40% 60%;
    margin: 6px 0px;
`;

const Title = styled.h3`
    width: 100%;
    height: 32px;
    font-size: 14px;
    display: flex;
    align-items: end;    
`;

const InputText = styled.input`
    width: var(--size-button-textBox);
    height: 38px;
    align-self: center;
    justify-self: center;
    border-radius: 50px;
    border: 1px solid var(--dark-color);
    padding-left: 18px;
    background-color: #fcfcfc;
`;


const TextBox = (props: any) => {

    return(
        <Container>
            <Title>{props.title}</Title>
            <InputText ref={props.reference} type="text" placeholder={props.placeHolder}></InputText>
        </Container>
    );
}

export { TextBox }