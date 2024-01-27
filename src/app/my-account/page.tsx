'use client'
import { useContext } from "react";
import styled from "styled-components";
import { PrimaryButton } from "@/components/PrimaryButton"
import { Navigator } from "@/containers/Navigator";
import { ImageProfile } from "@/components/ImageProfile";
import { useState } from "react";
import { CardEditAccount } from "@/components/Card_EditAccount";
import { CardEditForm } from "@/components/Card_EditForm";
import { CardEditPayment } from "@/components/Card_EditPayment";
import { Footer } from "@/containers/Footer";
import { UserContext } from "@/context/UsersContext";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    

    @media (max-width: 768px) {
        min-height: 100vh;
        grid-template-columns: 1fr;
    }
`;

const InfoContainer = styled.section`
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: repeat(3, 33.33%);      
    margin-top: 40px;

    @media (max-width: 768px) {
        margin-top: 0px;
        height: 210px;
        grid-template-columns: 40% 60%;
        grid-template-rows: repeat(3, 20%) 40%;
    }
`;


const ImageProfileContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: grid;
    place-content: center;

    @media (max-width: 768px) {
        grid-column: 1 / 2;
        grid-row: 1 / 4;
    }
`;


const NameProfile = styled.h4`
    width: 100%;
    font-size: 18px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    place-content: center start;
    font-family: 'Nunito', sans-serif;

    @media (max-width: 768px) {
        font-size: 16px;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
`;

const EmailProfile = styled(NameProfile)`
    font-size: 16px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const CountryProfile = styled(NameProfile)`
    font-size: 16px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const GridContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr 2fr 2fr;
    min-height: 1000px;
    padding-bottom: 40px;
    justify-self: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 20% 40% 40%;
    }
`;

const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 3 / 4;
    grid-row: 1 / 2;  
    display: grid; 
    align-content: center;
    justify-content: right; 

    @media (max-width: 768px) {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
        align-self: start;
    }
`;


const CardSection = styled.div`
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: repeat(3, 33.33%);
    border-radius: 10px;
    
    @media (max-width: 768px) {
        margin-top: 40px;
        grid-template-rows: 20% 50% 10% 20%;
        grid-template-columns: 40% 60%;
    }
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

  @media (max-width: 768px) {
    height: 140px;
    align-self: center;
    grid-row: 2 / 3;
  }
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


const CardsEditContainer = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    background-color: #1414141a;
    margin: 0 auto;
`;

const TitlePage = styled.h2`
    width: 100%;
    height: 80px;
    display: grid;
    place-content: center;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 40px; 
    letter-spacing: 3px;
    font-size: 32px;
    font-family: 'Nunito', sans-serif;

    @media (max-width: 768px) {
        height: 38px;
        font-size: 28px;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: center;
        align-self: center;
        margin-top: 80px;
        margin-bottom: 40px; 
        text-align: center;
    }
`;


export default function Welcome() {

    const [showEditAccount, setShowEditAccount] = useState(false);
    const [showEditFormPayment, setShowEditFormPayment] = useState(false);
    const [showEditPayment, setShowEditPayment] = useState(false);

    const contextUser = useContext(UserContext)

    const name = contextUser?.userLogged[0].name;
    const lastName = contextUser?.userLogged[0].lastName;
    const email = contextUser?.userLogged[0].email;
    const profile = contextUser?.userLogged[0].profile;
    
    return (
        <>
            <Navigator></Navigator>
            <MainContainer>
                <TitlePage>MI CUENTA</TitlePage>
                <GridContainer>
                    <InfoContainer>
                        <ImageProfileContainer>
                            <ImageProfile 
                                imgSize={92} 
                                noCursor 
                                profile={profile}  
                                alt="Example" 
                                width={700} 
                                height={700}
                            ></ImageProfile>
                        </ImageProfileContainer>                        
                        <NameProfile>{name} {lastName}</NameProfile>
                        <EmailProfile>{email}</EmailProfile>
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
            <Footer></Footer>
        </>
    );
}