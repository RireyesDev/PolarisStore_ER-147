'use client'
import styled from "styled-components";
import { PrimaryButton } from "@/components/PrimaryButton"
import { PolarisContext } from "@/context/PolarisContext";
import { useContext } from "react";
import { NavBar } from "@/components/NavBar";
import { BuyButton } from "@/components/BuyButton";
import { TitlePage } from "@/components/TitlePage";
import { Navigator } from "@/containers/Navigator";
import { CardProductInBag } from "@/components/CardProductInBag";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
`;

const BackgroundGray = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 480px;
    place-self: center;
    padding: 14px;    
    background-color: #ffffff; /* Color blanco */
    border-radius: 18px; /* Bordes redondeados */
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4); /* Sombra */
`;

export default function CheckList() {

    const context = useContext(PolarisContext);

    return (
        <>
            <Navigator></Navigator>
            <MainContainer>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <TitlePage>LISTA DE COMPRAS</TitlePage>
                    <BackgroundGray>
                        <div>
                            {context?.addProducts.map( product => (
                                <CardProductInBag 
                                    productName={product.name}
                                    productPrice={product.price}
                                    productImage={product.image}
                                    productId={product.id}
                                ></CardProductInBag>
                            ))}
                        </div>
                        <BuyButton>COMPRAR</BuyButton>
                    </BackgroundGray>     
                </div>                
            </MainContainer>
           
        </>
    );
}