import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { PolarisCard } from "./PolarisCard";
import { TitleCard } from "./TitleCard";
import { TextBox } from "./TextBox";
import { DivContainer } from "@/styles/DivContainer";
import { PrimaryButton } from "./PrimaryButton";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UsersContext";
import { log } from "console";



const ForgotText = styled.h4`
    width: var(--size-button-textBox);
    height: 32px;
    font-size: 12px;
    color: var(--primary-color);   
`;

const ContainerButton = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    
`;

const newArray = [];


const CheckUser = (refTextEmail: any, refTextPassword : any, context: any, router: any) => {
  const email = refTextEmail.current?.value;
  const password = refTextPassword.current?.value;  

  const newArray : any[] = [];

  // Busca el usuario y contrase;a ingresados por el usuario dentro de mi base de datos de usuarios
  context.showInfoUsers.forEach((item: any) => {
    if(item.email === email){
        if(item.password === password){
            newArray.push(item);            
        }
    }
  });

  // si el usuario y contraseña son correctos, redirecciona al home.
  // de lo contrario, muestra un mensaje de error.
  if(newArray.length > 0){
    router.push('/home');
    context.setUserLogged(...newArray);
    console.log(newArray);    
    console.log(context.userLogged);
    
  } else {
    console.log("Usuario o contraseña incorrectos");    
  }
}


const CardLogIn = (props: any) => {

    const router = useRouter();

    const refEmail = useRef(null);
    const refPassword = useRef(null);

    const context = useContext(UserContext);


    return(
        <PolarisCard>
            <TitleCard title="INICIAR SESIÓN"></TitleCard>
            <DivContainer>
                <TextBox reference={refEmail} title="Email" placeHolder="example2023@gmail.com"></TextBox>
                <TextBox reference={refPassword}title="Contraseña" placeHolder="*****************"></TextBox>
                <ForgotText>Olvide mi contrasesña</ForgotText>
            </DivContainer>
            <ContainerButton>
                <PrimaryButton btnClick={() => CheckUser(refEmail, refPassword, context, router)} btnWidth={280}>INICIAR</PrimaryButton>
                <PrimaryButton btnClick={() => router.push('/signin')} btnWidth={280}>REGISTRATE</PrimaryButton>                
            </ContainerButton>
        </PolarisCard>
    );
}


export { CardLogIn }