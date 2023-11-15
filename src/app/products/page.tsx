'use client'
import styled from "styled-components";
import Image from "next/image";
import productExample from '/public/images/product_example.jpg'
import { PrimaryButton } from "@/components/PrimaryButton"
import { NavBar } from "@/components/NavBar";
import { BuyButton } from "@/components/BuyButton";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
`;

const Container = styled.div`
    width: 76%;
    min-width: 840px;
    height: 380px;
    place-self: center;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 70% 30%;
`;

const ImageContainer = styled(Image)`
    width: 240px;
    height: 240px;  
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    border-radius: 20px;
    place-self: start center;
`;


const ContainerProduct = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 30% 55% 15%;
    grid-template-rows: 20% 50% 30%;
`;

const TitleProduct = styled.h3`
    font-size: 20px;
    font-weight: bold;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-left: 10px;
    font-family: 'Nunito', sans-serif;
`;

const PriceProduct = styled.h3`
    font-size: 20px;
    font-weight: bold;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    margin-left: 10px;
    font-family: 'Nunito', sans-serif;
    display: grid;
    place-content: start right;
`;

const DescriptionProduct = styled.h4`
    font-size: 16px;
    font-weight: 500;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    margin-left: 10px;
    font-family: 'Nunito', sans-serif;
`;

const CategoryProduct = styled.h4`
    font-size: 20px;
    font-weight: bold;
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    margin-left: 10px;
    font-family: 'Nunito', sans-serif;
`;


const ContainerButtons = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 2 / 3;    
    display: flex;
    align-items: end;
    justify-content: end;
`;

export default function Products() {
    return (
        <>
            <NavBar></NavBar>
            <MainContainer>
                <Container>                    
                    <ContainerProduct>
                        <ImageContainer src={productExample} alt="Example"></ImageContainer>
                        <TitleProduct>Nike - Air Jordan 1</TitleProduct>
                        <PriceProduct>$ 88</PriceProduct>
                        <DescriptionProduct>No necesitas una capa para tomar vuelo—solo tus AJ1s. Ya sabes, los que se ven en Miles en Spider-Man: Across the Spider-Verse, exclusivamente en cines. Esta nueva versión del icónico colorway de Chicago cuenta con una mezcla de materiales, que incluyen cuero brillante y gamuza suave. El mundo está esperando, así que entra.</DescriptionProduct>
                        <CategoryProduct>Categories</CategoryProduct>
                    </ContainerProduct>
                    <ContainerButtons>
                        <PrimaryButton>AGREGAR A LA BOLSA</PrimaryButton>
                        <BuyButton>COMPRAR</BuyButton>
                    </ContainerButtons>
                </Container>
            </MainContainer>
        </>
    );
}