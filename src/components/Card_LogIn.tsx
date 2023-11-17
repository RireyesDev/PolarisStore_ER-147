import React from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

const ForgotText = styled.h4`
    width: var(--size-button-textBox);
    height: 32px;
    font-size: 12px;
    color: var(--primary-color);   
`;

const CardLogIn = (props: any) => {

    return(
        <PolarisCard>
            <TitleCard title="INICIAR SESIÓN"></TitleCard>
            <DivContainer>
                <TextBox title="Email" placeHolder="example2023@gmail.com"></TextBox>
                <TextBox title="Contraseña" placeHolder="*****************"></TextBox>
                <ForgotText>Olvide mi contrasesña</ForgotText>
            </DivContainer>
            <PrimaryButton clickButton={props.clickPrimaryAction}>INICIAR</PrimaryButton>
            <SecondaryButton clickButton={props.clickSecondaryAction}>REGISTRATE</SecondaryButton>
        </PolarisCard>
    );
}


export { CardLogIn }