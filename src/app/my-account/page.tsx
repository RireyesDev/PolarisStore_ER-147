'use client'
import styled from "styled-components";
import { PrimaryButton } from "@/components/PrimaryButton"
import { NavBar } from "@/components/NavBar";
import { TitlePage } from "@/components/TitlePage";
import { Navigator } from "@/containers/Navigator";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
`;

const InfoContainer = styled.h3`
    width: 400px;
    height: 80px;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: repeat(3, 33.33%);
`;

const GridContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    height: 720px;
    justify-self: center;
`;

const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 2;  
    display: grid; 
    align-content: center;
    justify-content: right; 
`;

const CardAccount = styled.div`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 28% 40% 32%;
  grid-template-rows: 1fr 2fr 2fr 2fr 1fr;
  border-radius: 10px;
  padding: 10px;  
`;

const CardSection = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 70%;
  border-radius: 10px;
  padding: 10px;  
`;

const CardSection1 = styled(CardSection)`
  grid-area: 1 / 1 / 2 / 2; /* Ubicación de la primera card */
`;

const CardSection2 = styled(CardSection)`
  grid-area: 2 / 1 / 2 / 2; /* Ubicación de la primera card */
`;

const CardSection3 = styled(CardSection)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d3d3d3; /* Color gris */
  border-radius: 10px;
  padding: 10px;
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const TitleAccount = styled.h3`
    width: 100%;
    font-size: 18px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: grid;
    place-content: center start;
    font-family: 'Nunito', sans-serif;
`;


export default function Welcome() {
    return (
        <>
            <Navigator></Navigator>
            <MainContainer>
                <TitlePage>MI CUENTA</TitlePage>
                <GridContainer>
                    <CardAccount>
                        <TitleAccount>Cuenta</TitleAccount>
                        <DivContainer>
                            <PrimaryButton>Editar Cuenta</PrimaryButton>                            
                        </DivContainer>
                        <Card></Card>
                    </CardAccount>

                    <CardSection2>
                        <TitleAccount>Formulario de Pago</TitleAccount>
                        <DivContainer>
                            <PrimaryButton>Editar Formulario</PrimaryButton>
                        </DivContainer> 
                        <Card></Card>
                    </CardSection2>

                    <CardSection3>
                        <TitleAccount>Metodo de Pago</TitleAccount>
                        <DivContainer>
                            <PrimaryButton>Editar Metodo de Pago</PrimaryButton>        
                        </DivContainer>     
                        <Card></Card>
                    </CardSection3>
                    <CardSection>
                        
                    </CardSection>
                    
                </GridContainer>
            </MainContainer>
        </>
    );
}