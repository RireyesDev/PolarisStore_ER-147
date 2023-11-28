'use client'
import styled from "styled-components";
import { PolarisContext } from "@/context/PolarisContext";
import { useContext } from "react";
import { BuyButton } from "@/components/BuyButton";
import { TitlePage } from "@/components/TitlePage";
import { Navigator } from "@/containers/Navigator";
import { CardProductInBag } from "@/components/CardProductInBag";
import { useRouter } from "next/navigation";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
`;

const BackgroundGray = styled.section`
    display: grid;
    grid-template-rows: auto 70px;
    grid-template-columns: 100%;
    justify-content: space-between;
    width: 340px;
    height: 480px;
    place-self: center;
    padding: 14px;    
    background-color: #ffffff; /* Color blanco */
    border-radius: 18px; /* Bordes redondeados */
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4); /* Sombra */
    margin-bottom: 60px;
`;

const ContainerButton = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
`;  

export default function CheckList() {

    const context = useContext(PolarisContext);
    const router = useRouter();

    function goToBilling(){
        router.push('/checklist/billing');     
    }

    return (
        <>
            <Navigator></Navigator>
            <MainContainer>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <TitlePage>LISTA DE COMPRAS</TitlePage>
                    <BackgroundGray>
                        <div>
                            {context?.addProducts.map( (product, index) => (
                                <CardProductInBag 
                                    key={index}
                                    productName={product.name}
                                    productPrice={product.price}
                                    productImage={product.image}
                                    productId={product.id}
                                ></CardProductInBag>
                            ))}
                        </div>
                        <ContainerButton>
                            <BuyButton btnClick={() => goToBilling()}>COMPRAR</BuyButton>
                        </ContainerButton>
                            
                    </BackgroundGray>     
                </div>                
            </MainContainer>
           
        </>
    );
}