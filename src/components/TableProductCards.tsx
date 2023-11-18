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
`;

const TableContainer = styled.section`
    width: 78%;
    border-radius: 30px 0px 0px 0px;
    box-shadow: -12px 12px 14px 0px rgba(0,0,0,0.44);


    min-height: 320px;
    background-color: white;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    justify-self: right;    
    z-index: 2;
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
             <TableContainer style={{
                width: `${context?.showCategories ? '80%' : '100%'}`,
                borderRadius: `${context?.showCategories ? '30px 0px 0px 0px' : '0px'}`,
             }}>
                <TitlePage>PRODUCTOS</TitlePage>
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
            </TableContainer>
        </MainContainer>       
    );
}

export { TableProductCards }