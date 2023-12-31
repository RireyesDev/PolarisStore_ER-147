import React from "react";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";
import { ButtonContainer } from "@/styles/ButtonContainer";
import { BuyButton } from "./BuyButton";
import { useRouter } from "../../node_modules/next/navigation";



const CardEditPayment = (props: any) => {

    const router = useRouter();

    return(
        <PolarisCard>
            <TitleCard title="Editar Metodo de Pago"></TitleCard>
            <DivContainer>
                <TextBox title="Nombre del titular de la tarjeta" placeHolder="Jonh Wick"></TextBox>
                <TextBox title="Número de tarjeta" placeHolder="4581 9863 7852 4563"></TextBox>
                <TextBox title="Vencimiento de la tarjeta" placeHolder="MM/AA"></TextBox>
                <TextBox title="CVC" placeHolder="148"></TextBox>
            </DivContainer>
            <ButtonContainer>
                {props.typeButton === 'payment' ? 
                    <BuyButton btnClick={() => router.push('/checklist/buy-product')} btnWidth={140}>COMPRAR</BuyButton> : 
                    <PrimaryButton btnClick={props.saveClick} btnWidth={140}>EDITAR</PrimaryButton>
                }
            </ButtonContainer>
            <ButtonContainer>
                <PrimaryButton btnClick={props.exitClick} btnWidth={140}>SALIR</PrimaryButton>    
            </ButtonContainer>
        </PolarisCard>
    );
}


export { CardEditPayment }