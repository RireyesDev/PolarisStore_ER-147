'use client'
import styled from "styled-components";
import { PrimaryButton } from "@/components/PrimaryButton"
import { PolarisContext } from "@/context/PolarisContext";
import { useContext } from "react";
import { NavBar } from "@/components/NavBar";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
`;

const BackgroundGray = styled.div`
    display: block;
    width: 80%;
    height: 280px;
    background-color: #d4d0d0;
    border-radius: 20px;
    grid-column: 1 / 3;
    place-self: center;
    padding: 14px;
`;

export default function CheckList() {

    const context = useContext(PolarisContext);

    return (
        <>
            <NavBar></NavBar>
            <MainContainer>
                <BackgroundGray>
                    {context?.addProducts.map( product => (
                        <h5 style={{color: 'white'}}>{product.name}</h5>
                    ))}
                </BackgroundGray>     
            </MainContainer>
           
        </>
    );
}