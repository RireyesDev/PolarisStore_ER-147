import React from "react";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";



const CardEditPayment = (props: any) => {

    return(
        <PolarisCard>
            <TitleCard title="Editar Metodo de Pago"></TitleCard>
            <DivContainer>
                <TextBox title="Nombre del titular de la tarjeta" placeHolder="Jonh Wick"></TextBox>
                <TextBox title="Número de tarjeta" placeHolder="4581 9863 7852 4563"></TextBox>
                <TextBox title="Vencimiento de la tarjeta" placeHolder="MM/AA"></TextBox>
                <TextBox title="CVC" placeHolder="148"></TextBox>
            </DivContainer>
            <PrimaryButton>EDITAR</PrimaryButton>
            <PrimaryButton btnClick={props.exitClick}>SALIR</PrimaryButton>
        </PolarisCard>
    );
}


export { CardEditPayment }