'use client'
import styled from "styled-components";
import Image from "next/image";
import { PrimaryButton } from "@/components/PrimaryButton"
import { BuyButton } from "@/components/BuyButton";
import { useContext } from "react";
import { PolarisContext } from "@/context/PolarisContext";
import { Navigator } from "@/containers/Navigator";
import { useRouter } from "next/navigation";
import { Footer } from "@/containers/Footer";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
`;

const Container = styled.section`
    width: 76%;
    min-width: 840px;
    height: 400px;
    place-self: center;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 70% 30%;
    `;

const ContainerProduct = styled.section`
    width: 100%;
    min-width: 840px;
    height: 100%;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 35% 50% 15%;
    grid-template-rows: 20% 50% 10% 20%;
`;

const ImageContainer = styled(Image)`
    width: 268px;
    height: 268px;  
    overflow: hidden;
    object-fit: cover;
    grid-column: 1 / 2;
    grid-row: 1 / 5;
    border-radius: 20px;
    place-self: center start;
`;



const TitleProduct = styled.h3`
    font-size: 20px;
    font-weight: bold;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-left: 10px;
    font-family: 'Nunito', sans-serif;
    white-space: nowrap;
    overflow: hidden;    
    text-overflow: ellipsis;
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
    gap: 30px;
`;

const ContainerCategories = styled.div`
    width: 92%;    
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    grid-column: 2 / 3;
    justify-self: right;
`;

const CategoryH4 = styled.h4`
  width: auto;
  height: 34px;
  border-radius: 50px;
  background-color: #e0bf00;
  color: white;
  display: grid;
  place-content: center;
  align-self: end;
  padding: 0 20px;
  white-space: nowrap;
`;

export default function Products({params}: {params: { id: number}}) {

    const context = useContext(PolarisContext);

    const theProduct = {
        id: context?.products[params.id - 1].id, 
        image: context?.products[params.id - 1].image, 
        name: context?.products[params.id - 1].name,
        price: context?.products[params.id - 1].price,
        description: context?.products[params.id - 1].description,
        categories: context?.products[params.id - 1].categories,
    }

    const router = useRouter();

    function buyProduct(id: number){
        if (theProduct.id !== undefined) {
            context?.setAddProducts(prevProducts => {
                return [...prevProducts, context?.products[id - 1]];
            });   
        }
        
        context?.setShowBag(true);
    }
    
    return (
        <>
            <Navigator></Navigator>
            <MainContainer>
                <Container>                    
                    <ContainerProduct>
                        <ImageContainer src={theProduct.image ?? ''} alt={theProduct.name ?? ''} width={700} height={700}></ImageContainer>
                        <TitleProduct>{theProduct.name ?? ''}</TitleProduct>
                        <PriceProduct>{theProduct.price ?? ''}</PriceProduct>
                        <DescriptionProduct>{theProduct.description ?? ''}</DescriptionProduct>
                        <CategoryProduct>Categories</CategoryProduct>
                        <ContainerCategories>{theProduct.categories?.map((category, index) => (
                            <CategoryH4 key={index}>{category}</CategoryH4>
                        ))}</ContainerCategories>
                    </ContainerProduct>
                    <ContainerButtons>
                        <PrimaryButton btnWidth={220} btnClick={() => buyProduct(theProduct?.id ?? 0)}>AGREGAR A LA BOLSA</PrimaryButton>
                        <BuyButton btnWidth={220}>COMPRAR</BuyButton>
                    </ContainerButtons>
                </Container>
            </MainContainer>
            <Footer></Footer>
        </>
    );
}