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

    const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return(
        <MainContainer>
             <TableContainer>
                {exampleArray.map((card, index) => (
                    <Productcard key={index}></Productcard>    
                ))}
            </TableContainer>
        </MainContainer>       
    );
}

export { TableProductCards }