import React from "react";
import styled from "styled-components";
import { BuyButton } from "./BuyButton";
import { PrimaryButton } from "./PrimaryButton";


const Card = styled.div`
    position: absolute;
    top: 90px;
    right: 148px;
    width: 380px;
    height: 488px;
    background-color: #ffffff; /* Color blanco */
    border-radius: 18px; /* Bordes redondeados */
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4); /* Sombra */
    margin: 14px;
    padding: 10px;
    padding-bottom: 20px;
    /* Configuración de grid */
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 76% 12% 12%;
    z-index: 4;
`;


const DivWrap = styled.div`
    grid-column: 1 / 3;
    place-self: center;
`;

const WrapPrimaryButton = styled(DivWrap)`
    grid-row: 2 / 3;
`;

const WrapBuyButton = styled(DivWrap)`
    grid-row: 3 / 4;
`;

const BackgroundGray = styled.div`
    display: block;
    width: 80%;
    height: 280px;
    background-color: #d4d0d0;
    border-radius: 20px;
    grid-column: 1 / 3;
    place-self: center;
`;


const BagCard = () => {
    return(
        <Card>
            <BackgroundGray></BackgroundGray>
            <WrapPrimaryButton>
                <PrimaryButton>IR A LISTA DE COMPRAS</PrimaryButton>
            </WrapPrimaryButton>
            <WrapBuyButton>
                <BuyButton>COMPRAR</BuyButton>
            </WrapBuyButton>            
        </Card>
    );
}

export { BagCard }