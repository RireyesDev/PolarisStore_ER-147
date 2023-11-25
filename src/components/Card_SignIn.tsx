import React, { useContext } from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { DivContainer } from "@/styles/DivContainer";
import { TextBox } from "./TextBox";
import { PrimaryButton } from "./PrimaryButton";
import { useRouter } from "next/navigation";

const ContainerButton = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
`;


const CardSignIn = () => {

    const router = useRouter();

    return(
        <PolarisCard>
            <TitleCard title="CREAR CUENTA"></TitleCard>
            <DivContainer>
                <TextBox title="Nombre" placeHolder="Jonh"></TextBox>
                <TextBox title="Apellido" placeHolder="Wick"></TextBox>
                <TextBox title="Email" placeHolder="example2023@gmail.com"></TextBox>
                <TextBox title="Añadir Contraseña" placeHolder="*****************" type="password"></TextBox>
                <TextBox title="Repetir Contraseña" placeHolder="*****************" type="password"></TextBox>
            </DivContainer>
            <ContainerButton>
                <PrimaryButton btnClick={() => router.push('/home')} btnWidth={280}>CREAR USUARIO</PrimaryButton>
            </ContainerButton>
        </PolarisCard>
    );
}

export { CardSignIn }