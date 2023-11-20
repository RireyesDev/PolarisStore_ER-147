import React from "react";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";



const CardEditForm = (props: any) => {

    return(
        <PolarisCard>
            <TitleCard title="Editar Formulario de Facturación"></TitleCard>
            <DivContainer>
                <TextBox title="Nombre" placeHolder="Jonh"></TextBox>
                <TextBox title="Apellido" placeHolder="Wick"></TextBox>
                <TextBox title="Email" placeHolder="example2023@gmail.com"></TextBox>
                <TextBox title="Número de Teléfono" placeHolder="5328 4961"></TextBox>
                <TextBox title="País" placeHolder="Argentina"></TextBox>
                <TextBox title="Ciudad" placeHolder="Buenos Aires"></TextBox>
                <TextBox title="Código Postal" placeHolder="0101 4536"></TextBox>
                <TextBox title="Dirección de Entrega" placeHolder="Km 108, carretera al Atlantico..."></TextBox>
            </DivContainer>
            <PrimaryButton>EDITAR</PrimaryButton>
            <PrimaryButton btnClick={props.exitClick}>SALIR</PrimaryButton>
        </PolarisCard>
    );
}


export { CardEditForm }