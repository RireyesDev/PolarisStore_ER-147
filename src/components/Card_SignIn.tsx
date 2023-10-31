import React from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { DivContainer } from "@/styles/DivContainer";
import { TextBox } from "./TextBox";
import { PrimaryButton } from "./PrimaryButton";



const CardSignIn = () => {

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
            <PrimaryButton>CREAR USUARIO</PrimaryButton>
        </PolarisCard>
    );
}

export { CardSignIn }