'use client';
import React from "react";
import styled from "styled-components";
import { Navigator } from "@/containers/Navigator";
import { Main } from "@/containers/Main";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/PrimaryButton";

const Container = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;	

export default function BuyProduct() {

    const router = useRouter();

    return (

        <>
            <Navigator></Navigator> 
            <Main>                 
                <Container>
                    <h1>Gracias por tu Compra!!!</h1>
                    <PrimaryButton btnClick={() => {router.push('/home')}}>VOLVER AL HOME</PrimaryButton>
                </Container>
            </Main>
        </>
    )
}