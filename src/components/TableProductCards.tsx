import React from "react";
import styled from "styled-components";
import { Productcard } from "./ProductCard";
import { TitlePage } from "./TitlePage";
import { products } from "@/database/products";

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
    box-shadow: -14px 6px 29px 0px rgba(0,0,0,0.2);


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

    return(
        <MainContainer>
             <TableContainer>
                <TitlePage>PRODUCTOS</TitlePage>
                {products.map((product, index) => (
                    <Productcard 
                        key={index}
                        image={product.image}
                        price={product.price}
                        name={product.name}
                    ></Productcard>    
                ))}
            </TableContainer>
        </MainContainer>       
    );
}

export { TableProductCards }