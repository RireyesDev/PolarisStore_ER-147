import React from "react";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";



const CardEditAccount = () => {

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
            <PrimaryButton>EDITAR</PrimaryButton>
            <SecondaryButton>SALIR</SecondaryButton>
        </PolarisCard>
    );
}


export { CardEditAccount }