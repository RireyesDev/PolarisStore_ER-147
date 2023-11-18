import React from "react";
import styled from "styled-components";
import { PrimaryBTN, PrimaryButton } from "./PrimaryButton";
import UserIcon from '/public/icons/user.png'
import { useRouter } from "next/navigation";

const Card = styled.div`
    position: absolute;
    top: 90px;
    right: 14px;
    width: 380px;
    height: 210px;
    background-color: #ffffff; /* Color blanco */
    border-radius: 18px; /* Bordes redondeados */
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4); /* Sombra */
    margin: 14px;
    padding: 10px;
    /* Configuración de grid */
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 20% 30% 50%;
    z-index: 3;
`;

const AccountBtnContainer = styled.div`    
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    place-self: center end;
`;

const LogOutBtnContainer = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    place-self: end;
`;

const NameUser = styled.h3`
    width: 240px;
    display: grid;
    place-content: center start;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    place-self: end;
    margin-bottom: 8px;
    font-family: 'Nunito', sans-serif;
`;

const IconUser = styled.div`
    width: 88px;
    height: 88px;
    background: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-image: url(${UserIcon.src});
    place-self: center;
`;


const CardAccount = () => {

    const router = useRouter();

    return(
        <Card>
            <IconUser></IconUser>
            <NameUser>Eduardo Rireyes</NameUser>
            <AccountBtnContainer>
                <PrimaryButton btnClick={() => {router.push('/my-account')}} btnWidth={240}>MI CUENTA</PrimaryButton>
            </AccountBtnContainer>
            <LogOutBtnContainer>
                <PrimaryButton btnClick={() => {router.push('/welcome')}} btnWidth={140}>SALIR</PrimaryButton>
            </LogOutBtnContainer>
        </Card>
    );
}

export { CardAccount }