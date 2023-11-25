'use client'
import React from "react";
import styled from "styled-components";
import { CardLogIn } from "@/components/Card_LogIn";
import Image from "next/image";
import PolarisLight from "/public/Polaris_Light.svg";
import Product1 from "/public/product_microfone1.jpg";
import Product2 from "/public/product_microfone2.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";


const ContainerPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 50%); 
    align-items: center;
    justify-content: center;
`;

const PrimaryBackground = styled.section`
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    background-image: url(${Product1.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;    
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 4%;
`;

const PolarisLogo = styled(Image)`
    width: 300px;
    height: 200px;
    align-self: left;
`;

const SecondBackground = styled(PrimaryBackground)`
    grid-column: 2 / 3;
    background-image: url(${Product2.src});
    display: grid;
    place-content: center;
    padding: 0;
`;



const WelcomeText = styled.h1`
    width: 100%;
    color: var(--light-color);
    font-size: 38px;
    letter-spacing: 2px;
    align-self: center;    
    margin-top: 32%;


`;

export default function Welcome() {

    const router = useRouter();
    const StoreDescription = "Obten la mejor experiencia y compra los mejores productos.";

    return (
        <ContainerPage>
            <PrimaryBackground>
                <PolarisLogo src={PolarisLight} alt="Polaris Logo"></PolarisLogo>
                <WelcomeText>{StoreDescription}</WelcomeText>
            </PrimaryBackground>

            <SecondBackground>                
                <CardLogIn/>                
            </SecondBackground>
        </ContainerPage>
    );
}