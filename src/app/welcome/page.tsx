'use client'
import React from "react";
import styled from "styled-components";
import { CardLogIn } from "@/components/Card_LogIn";
import Image from "next/image";
import PolarisLight from "/public/Polaris_Light.svg";
import Product2 from "/public/product_microfone2.jpg";
import { useRouter } from "next/navigation";


const ContainerPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 100%; 
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        min-height: 110vh;     
    }
`;

const Background = styled.section`
    width: 100%;
    min-height: 100vh;
    grid-column: 1 / 2;
    background-image: url(${Product2.src});
    display: grid;
    place-content: center;
    padding: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;        
    grid-template-columns: 50% 50%;
    flex-direction: column;
    justify-content: start;
    padding: 1% 8%;

    @media (max-width: 768px){
        grid-template-columns: 100%;
        grid-template-rows: 10% 20% 70%;
        min-height: 110vh;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`;

const PolarisLogo = styled(Image)`
    width: 300px;
    height: 200px;   
    align-self: left;

    @media (max-width: 768px){     
        width: 200px;
        height: 100px;   
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: center;
        align-self: center;
    }
`;

const WelcomeText = styled.h1`
    width: 100%;
    color: var(--light-color);
    font-size: 34px;
    letter-spacing: 2px;
    justify-self: center;
    align-self: center; 
    grid-column: 1 / 2;

    @media (max-width: 768px){        
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        justify-self: center;
        align-self: center;
        font-size: 28px;
        text-align: center;
    }

`;

const CardLogInContainer = styled.div`
    justify-self: right;
    align-self: center;
    grid-column: 2 / 3;
    grid-row: 1 / 3;

    @media (max-width: 768px){        
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        justify-self: center;
        align-self: center;
    }
`;

export default function Welcome() {

    const StoreDescription = "Obten la mejor experiencia y compra los mejores productos.";

    return (
        <ContainerPage>
            <Background>                
                <PolarisLogo src={PolarisLight} alt="Polaris Logo"></PolarisLogo>
                <WelcomeText>{StoreDescription}</WelcomeText>
                <CardLogInContainer>
                    <CardLogIn></CardLogIn>
                </CardLogInContainer>
            </Background>
        </ContainerPage>
    );
}