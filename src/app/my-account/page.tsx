'use client'
import styled from "styled-components";
import { PrimaryButton } from "@/components/PrimaryButton"
import { NavBar } from "@/components/NavBar";
import { TitlePage } from "@/components/TitlePage";
import { Navigator } from "@/containers/Navigator";
import { ImageProfile } from "@/components/ImageProfile";
import { useState } from "react";
import { CardEditAccount } from "@/components/Card_EditAccount";
import { CardEditForm } from "@/components/Card_EditForm";
import { CardEditPayment } from "@/components/Card_EditPayment";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
`;

const InfoContainer = styled.section`
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: repeat(3, 33.33%);        
    padding: 10px;  
    margin-top: 40px;
`;

const GridContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr 2fr 2fr;
    gap: 10px;
    height: 920px;
    justify-self: center;
`;

const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 3 / 4;
    grid-row: 1 / 2;  
    display: grid; 
    align-content: center;
    justify-content: right; 
`;


const CardSection = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: repeat(3, 33.33%);
    border-radius: 10px;
    padding: 10px;  
    margin-top: 40px;
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
  grid-column: 1 / 4;
  grid-row: 2 / 4;
`;

const TitleAccount = styled.h3`
    width: 100%;
    font-size: 18px;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: grid;
    place-content: center start;
    font-family: 'Nunito', sans-serif;
`;


const ImageProfileContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    display: grid;
    place-content: center;
`;

const NameProfile = styled.h4`
    width: 100%;
    font-size: 18px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    place-content: center start;
    font-family: 'Nunito', sans-serif;
`;

const EmailProfile = styled(NameProfile)`
    font-size: 16px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`;

const CountryProfile = styled(NameProfile)`
    font-size: 16px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
`;


const CardsEditContainer = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    background-color: #1414141a;
    margin: 0 auto;
`;


export default function Welcome() {

    const [showEditAccount, setShowEditAccount] = useState(false);
    const [showEditFormPayment, setShowEditFormPayment] = useState(false);
    const [showEditPayment, setShowEditPayment] = useState(false);

    
    return (
        <>
            <Navigator></Navigator>
            <MainContainer>
                <TitlePage>MI CUENTA</TitlePage>
                <GridContainer>
                    <InfoContainer>
                        <ImageProfileContainer>
                            <ImageProfile imgSize={62}></ImageProfile>
                        </ImageProfileContainer>                        
                        <NameProfile>Eduardo Rireyes</NameProfile>
                        <EmailProfile>exmple2024@gmail.com</EmailProfile>
                        <CountryProfile>Argentina</CountryProfile>
                        <DivContainer>
                            <PrimaryButton btnClick={() => setShowEditAccount(!showEditAccount)} btnWidth={200}>Editar Cuenta</PrimaryButton>                            
                        </DivContainer>
                    </InfoContainer>
                   
                    <CardSection2>
                        <TitleAccount>Formulario de Pago</TitleAccount>
                        <DivContainer>
                            <PrimaryButton  btnClick={() => setShowEditFormPayment(!showEditFormPayment)}>Editar Formulario</PrimaryButton>
                        </DivContainer> 
                        <Card></Card>
                    </CardSection2>

                    <CardSection3>
                        <TitleAccount>Metodo de Pago</TitleAccount>
                        <DivContainer>
                            <PrimaryButton  btnClick={() => setShowEditPayment(!showEditPayment)}>Editar Metodo de Pago</PrimaryButton>        
                        </DivContainer>     
                        <Card></Card>
                    </CardSection3>
                    
                </GridContainer>

               {showEditAccount ?  
                    <CardsEditContainer>
                        <CardEditAccount exitClick={() => setShowEditAccount(!showEditAccount)}></CardEditAccount>
                    </CardsEditContainer> :
                    <></>                    
                }

                {showEditFormPayment ?  
                    <CardsEditContainer>
                        <CardEditForm exitClick={() => setShowEditFormPayment(!showEditFormPayment)}></CardEditForm>
                    </CardsEditContainer> :
                    <></>                    
                }

                {showEditPayment ?  
                    <CardsEditContainer>
                        <CardEditPayment exitClick={() => setShowEditPayment(!showEditPayment)}></CardEditPayment>
                    </CardsEditContainer> :
                    <></>                    
                }

                
            </MainContainer>
        </>
    );
}