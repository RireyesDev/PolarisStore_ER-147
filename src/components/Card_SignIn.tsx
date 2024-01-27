import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { DivContainer } from "@/styles/DivContainer";
import { TextBox } from "./TextBox";
import { PrimaryButton } from "./PrimaryButton";
import { useRouter } from "next/navigation";

const ContainerButton = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
`;


const CardSignIn = () => {

    const router = useRouter();
    
    const refName = useRef();
    const refLastName = useRef();
    const refEmail = useRef();
    const refPassword = useRef();
    const refConfirmPassword = useRef();

    const [arrayObject, setArrayObject] = useState<any[]>([]);

    const newUser = () => {


        const name = refName?.current?.value;
        const lastName = refLastName?.current?.value;
        const email = refEmail?.current?.value;
        const password = refPassword?.current?.value;
        const confirmPassword = refConfirmPassword?.current?.value;

        const newObject = {
            name: name, 
            lastName: lastName, 
            email: email, 
            password: password,
        };

        setArrayObject([...arrayObject, newObject]);
    }

    console.log(arrayObject);
    

    return(
        <PolarisCard>
            <TitleCard title="CREAR CUENTA"></TitleCard>
            <DivContainer>
                <TextBox reference={refName} title="Nombre" placeHolder="Jonh"></TextBox>
                <TextBox reference={refLastName} title="Apellido" placeHolder="Wick"></TextBox>
                <TextBox reference={refEmail} title="Email" placeHolder="example2023@gmail.com"></TextBox>
                <TextBox reference={refPassword} title="Añadir Contraseña" placeHolder="*****************" type="password"></TextBox>
                <TextBox reference={refConfirmPassword} title="Repetir Contraseña" placeHolder="*****************" type="password"></TextBox>
            </DivContainer>
            <ContainerButton>
                <PrimaryButton btnClick={() =>newUser()} btnWidth={280}>CREAR USUARIO</PrimaryButton>
            </ContainerButton>
        </PolarisCard>
    );
}

export { CardSignIn }