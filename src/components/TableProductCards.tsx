import React from "react";
import styled from "styled-components";
import { Productcard } from "./ProductCard";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: #c48d8d;
    display: grid;    
`;

const TableContainer = styled.section`
    width: 100%;
    min-height: 320px;
    background-color: #b9d8b9;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    justify-self: right;    
`;


const TableProductCards = () => {
    return(
        <MainContainer>
             <TableContainer>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Productcard></Productcard>
            </TableContainer>
        </MainContainer>       
    );
}

export { TableProductCards }