import React, { useContext } from "react";
import styled from "styled-components";
import { Productcard } from "./ProductCard";
import { TitlePage } from "./TitlePage";
import { PolarisContext } from "@/context/PolarisContext";
import { useRouter } from "next/navigation";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
    padding-bottom: 80px;

    @media (max-width: 768px) {
        display: flex;
        height: auto;
        min-height: auto;
    }
`;

const TableContainer = styled.section`
    width: 100%;
    min-height: 320px;
    background-color: white;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    justify-self: right;    
    z-index: 2;

    @media (max-width: 768px) {
        display: grid;
        
        grid-template-rows: 160px 80%;
        min-height: auto;
    }       
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    grid-template-columns: 1fr 3fr 3fr 1fr;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const TableProductCards = () => {

    const context = useContext(PolarisContext);

    const router = useRouter();

    function goToProduct(id: number){
        router.push(`/products/${id}`);
    }

    function buyProduct(id: number){
        
        context?.setAddProducts(prevProducts => {
            return [...prevProducts, context?.products[id - 1]];
        });   
        
        context?.setShowBag(true);
    }

    return(
        <MainContainer>
             <TableContainer>
                <TitlePage>PRODUCTOS</TitlePage>
                <Container>
                    {context?.products.map((product, index) => (
                        <Productcard 
                            key={index}
                            image={product.image}
                            price={product.price}
                            name={product.name}
                            viewProduct={() => goToProduct(product.id)}
                            clickBuyProduct={() => buyProduct(product.id)}
                        ></Productcard>    
                    ))}
                </Container>
            </TableContainer>
        </MainContainer>       
    );
}

export { TableProductCards }