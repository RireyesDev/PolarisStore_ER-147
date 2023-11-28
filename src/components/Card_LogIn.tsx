import React from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";
import { useRouter } from "next/navigation";

const ForgotText = styled.h4`
    width: var(--size-button-textBox);
    height: 32px;
    font-size: 12px;
    color: var(--primary-color);   
`;

const ContainerButton = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    
`;

const CardLogIn = (props: any) => {

    const router = useRouter();

    return(
        <PolarisCard>
            <TitleCard title="INICIAR SESIÓN"></TitleCard>
            <DivContainer>
                <TextBox title="Email" placeHolder="example2023@gmail.com"></TextBox>
                <TextBox title="Contraseña" placeHolder="*****************"></TextBox>
                <ForgotText>Olvide mi contrasesña</ForgotText>
            </DivContainer>
            <ContainerButton>
                <PrimaryButton btnClick={() => router.push('/home')} btnWidth={280}>INICIAR</PrimaryButton>
                <PrimaryButton btnClick={() => router.push('/signin')} btnWidth={280}>REGISTRATE</PrimaryButton>                
            </ContainerButton>
        </PolarisCard>
    );
}


export { CardLogIn }