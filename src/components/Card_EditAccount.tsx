import React from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";
import { useRouter } from "next/navigation";
import { ButtonContainer } from "@/styles/ButtonContainer";


const BtnContainer1 = styled.div`
    width: 100%;
    display: grid;
    place-self: center;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
`;

const btnContainer2 = styled.div`
    width: 100%;
    display: grid;
    place-self: center;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
` 

const CardEditAccount = (props: any) => {

    const router = useRouter();

    return(
        <PolarisCard>
            <TitleCard title="Editar Cuenta"></TitleCard>
            <DivContainer>
                <TextBox title="Nombre" placeHolder="Jonh"></TextBox>
                <TextBox title="Apellido" placeHolder="Wick"></TextBox>
                <TextBox title="Usuario" placeHolder="wick23"></TextBox>
                <TextBox title="Nueva Contraseña" placeHolder="*****************" type="password"></TextBox>
                <TextBox title="Repetir Contraseña" placeHolder="*****************" type="password"></TextBox>
                <TextBox title="Pais" placeHolder="Argentina"></TextBox>            
            </DivContainer>

            <ButtonContainer>
                <PrimaryButton btnClick={props.editClick} btnWidth={140}>EDITAR</PrimaryButton>
            </ButtonContainer>

            <ButtonContainer>
                <PrimaryButton btnClick={props.exitClick} btnWidth={140}>SALIR</PrimaryButton>
            </ButtonContainer>
            
        </PolarisCard>
    );
}


export { CardEditAccount }