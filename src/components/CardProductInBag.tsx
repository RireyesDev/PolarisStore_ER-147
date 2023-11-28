import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ContainerSmall = styled.div`
    width: 100%;
    height: 52px;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: repeat(2, 50%);
    margin: 10px 0px;
`;


const ProductImage = styled(Image)`
    width: 52px;
    height: 52px;
    border-radius: 14px;
    object-fit: cover;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    place-self: center;

`;


const Title = styled.h3`
    width: 100%;
    color: var(--dark-color);
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    place-self: center start;
`;


const Price = styled(Title)`
    font-size: 16px;
    font-weight: 500;   
    display: grid;
    place-content: center;
`;


const ButtonDelete = styled.button`
    width: 36px;
    height: 36px;
    background-color: red;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    place-self: center;
`; 


const CardProductInBag = (props: any) => {
       return(
        <ContainerSmall>
            <ProductImage src={props.productImage} alt={props.productId} width={300} height={300}></ProductImage>
            <Title>{props.productName}</Title>
            <Price>{props.productPrice}</Price>
            <ButtonDelete></ButtonDelete>
        </ContainerSmall>
    );
}

export {CardProductInBag};