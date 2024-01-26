import React from "react";
import styled from "styled-components";
import Image from "next/image";
import AddBagIcon from '/public/icons/add-bag.png'

const Container = styled.div`
  display: grid;
  width: 208px;
  height: 240px;  
  grid-template-columns: 70% 30%;
  grid-template-rows: 70% 15% 15%;
  background-color: #ffffff; /* Fondo blanco */
  border-radius: 20px; /* Bordes redondeados */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4); /* Sombra */
  margin: 20px;
  transition: transform 0.4s ease;

  &:hover{
    transform: scale(1.03);
    transition: transform 0.4s ease;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 160px;
    border-radius: 10px;
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
    font-size: 16px;
    font-weight: bold;    

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Name = styled.h4`
    ${TextContainer}
    font-size: 14px;
    font-weight: normal;    
    align-content: start;    
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const IconSpan = styled.span`
    display: block;
    width: 32px;
    height: 32px;    
    background-image: url(${AddBagIcon.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

const BuyButton = styled.button`
  width: 44px;
  height: 44px;
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

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Productcard = (props: any) => {

    return(
      <Container>
          <ImageContainer onClick={props.viewProduct} src={props.image} alt="Example" width={700} height={700}></ImageContainer>
          <Price>{props.price}</Price>
          <Name>{props.name}</Name>
          <BuyButton onClick={props.clickBuyProduct}><IconSpan></IconSpan></BuyButton>
      </Container>
    );
}

export { Productcard }