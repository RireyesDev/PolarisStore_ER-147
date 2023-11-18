import React from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";
import { useRouter } from "next/navigation";

const ForgotText = styled.h4`
    width: var(--size-button-textBox);
    height: 32px;
    font-size: 12px;
    color: var(--primary-color);   
`;

const CardLogIn = (props: any) => {

    const router = useRouter();

    return(
        <PolarisCard>
            <TitleCard title="INICIAR SESIÓN"></TitleCard>
            <DivContainer>
                <TextBox title="Email" placeHolder="example2023@gmail.com"></TextBox>
                <TextBox title="Contraseña" placeHolder="*****************"></TextBox>
                <ForgotText>Olvide mi contrasesña</ForgotText>
            </DivContainer>
            <PrimaryButton btnClick={() => router.push('/home')} btnWidth={280}>INICIAR</PrimaryButton>
            <PrimaryButton btnClick={() => router.push('/signin')} btnWidth={280}>REGISTRATE</PrimaryButton>
        </PolarisCard>
    );
}


export { CardLogIn }