import React, { useContext } from "react";
import styled from "styled-components";
import { PrimaryBTN, PrimaryButton } from "./PrimaryButton";
import { useRouter } from "next/navigation";
import { PolarisContext } from "@/context/PolarisContext";
import { ImageProfile } from "./ImageProfile";

const Card = styled.div`
    position: absolute;
    top: 90px;
    right: 5%;
    width: 380px;
    height: 200px;
    background-color: #ffffff; /* Color blanco */
    border-radius:  0px 0px 14px 14px; /* Bordes redondeados */
    box-shadow: rgba(0, 0, 0, 0.208) 4px 4px 4px 0px;
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

const UserContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    place-self: start;
`;


const NameUser = styled.h3`
    width: 220px;
    display: grid;
    place-content: center start;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    place-self: end;
    margin-bottom: 8px;
    font-family: 'Nunito', sans-serif;
`;


const CardAccount = () => {

    const context = useContext(PolarisContext);

    const router = useRouter();

    function goToMyAccount(){
        router.push('/my-account')
        context?.setShowAccount(false);
    }


    return(
        <Card>
            <UserContainer>
                <ImageProfile imgSize={92} noCursor></ImageProfile>
            </UserContainer>            
            <NameUser>Eduardo Rireyes</NameUser>
            <AccountBtnContainer>
                <PrimaryButton btnClick={() => goToMyAccount()} btnWidth={220}>MI CUENTA</PrimaryButton>
            </AccountBtnContainer>
            <LogOutBtnContainer>
                <PrimaryButton btnClick={() => {router.push('/welcome')}} btnWidth={140}>SALIR</PrimaryButton>
            </LogOutBtnContainer>
        </Card>
    );
}

export { CardAccount }