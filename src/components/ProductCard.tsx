import React from "react";
import styled from "styled-components";
import productExample from '/public/images/product_example.jpg'
import Image from "next/image";
import AddBagIcon from '/public/icons/add-bag.png'

const Container = styled.div`
  display: grid;
  width: 248px;
  height: 292px;  
  grid-template-columns: 70% 30%;
  grid-template-rows: 72% 14% 14%;
  background-color: #ffffff; /* Fondo blanco */
  border-radius: 20px; /* Bordes redondeados */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Sombra */
  margin: 20px;
  transition: transform 0.4s ease;

  &:hover{
    transform: scale(1.03);
    transition: transform 0.4s ease;
  }
`;

const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;  
  overflow: hidden;
  object-fit: cover;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  border-radius: 20px 20px 0 0 ;  
  cursor: pointer;
`;

const TextContainer = `
    width: 84%;
    max-width: 146px;
    justify-self: center;
    display: grid;
    align-content: center;
    justify-content: start;    
    letter-spacing: 1px;
    font-family: 'Nunito', sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Price = styled.h3`   
    ${TextContainer}
    font-weight: bold;    
`;

const Name = styled.h4`
    ${TextContainer}
    font-weight: normal;    
    align-content: start;    
    text-overflow: ellipsis;
`;

const IconSpan = styled.span`
    display: block;
    width: 32px;
    height: 32px;    
    background-image: url(${AddBagIcon.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const BuyButton = styled.button`
  width: 46px;
  height: 46px;
  display: grid;
  place-content: center;
  grid-column: 2;
  grid-row: 2 / 5;
  border-radius: 50%;
  place-self: center;
  background-color: var(--primary-color_triad);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 10px;

  &:hover {
    background-color: var(--primary-color_triad_hover);
  }

  &:active {
    background-color: var(--primary-color_triad_active);
  }
`;

const Productcard = (props: any) => {
    return(
        <Container>
            <ImageContainer onClick={props.viewProduct} src={props.image} alt="Example" width={700} height={700}></ImageContainer>
            <Price>{props.price}</Price>
            <Name>{props.name}</Name>
            <BuyButton><IconSpan></IconSpan></BuyButton>
        </Container>
    );
}

export { Productcard }