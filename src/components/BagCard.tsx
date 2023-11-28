import React, { useContext } from "react";
import styled from "styled-components";
import { BuyButton } from "./BuyButton";
import { PrimaryButton } from "./PrimaryButton";
import { PolarisContext } from "@/context/PolarisContext";
import { useRouter } from "next/navigation";
import { CardProductInBag } from "./CardProductInBag";

const Card = styled.div`
    position: absolute;
    top: 80px;
    right: 12%;
    width: 372px;
    min-height: 488px;
    height: auto;
    background-color: #ffffff; /* Color blanco */
    border-radius: 0px 0px 30px 30px;
    box-shadow: rgba(0, 0, 0, 0.208) 4px 4px 4px 0px;
    padding: 10px;
    padding-bottom: 14px;
    /* Configuración de grid */
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 76% 12% 12%;
    z-index: 4;
    font-family: 'Nunito';
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
    top: 0;
    width: 90%;
    min-height: 240px;
    height: auto;
    border-radius: 14px;
    grid-column: 1 / 3;
    place-self: start center;
    padding: 8px;
    margin: 20px 0px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;


const BagCard = () => {

    const context = useContext(PolarisContext);

    const router = useRouter();

    function goToChecklist(){
        router.push('/checklist');
        context?.setShowBag(false);
    }

    function goToPayment(){
        router.push('/checklist/billing');
        context?.setShowBag(false);
    }

    return(
        <Card>
            <BackgroundGray>
                {context?.addProducts.map( (product, index) => (
                    <CardProductInBag 
                        key={index}
                        productName={product.name}
                        productPrice={product.price}
                        productImage={product.image}
                        productId={product.id}
                    ></CardProductInBag>
                ))}                
            </BackgroundGray>
            <WrapPrimaryButton>
                <PrimaryButton btnClick={() => goToChecklist()}>IR A LISTA DE COMPRAS</PrimaryButton>
            </WrapPrimaryButton>
            <WrapBuyButton>
                <BuyButton btnClick={() => goToPayment()}>COMPRAR</BuyButton>
            </WrapBuyButton>            
        </Card>
    );
}

export { BagCard }