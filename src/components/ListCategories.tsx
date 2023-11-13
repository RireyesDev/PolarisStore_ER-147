import React from "react";
import styled from "styled-components";

const ContainerCategories = styled.div`
    position: absolute;
    top: 90px;
    left: 14px;
    width: 20%;
    height: 98vh;
    padding: 10px;
    /* Configuración de grid */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    
    z-index: 1;
`;

const Title = styled.h2`
    width: 100%;
    height: 48px;
    background-color: white;
    font-family: 'Nunito', sans-serif;
    margin: 40px 0px;
`;

const ButtonCategory = styled.button`
    width: 160px;
    height: 48px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 10px 0px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
    background-color: white;
    &:hover {
        background-color: #45a049;
    }

    &:active {
        background-color: #388e3c; /* Puedes ajustar el color del estado activo aquí */
    }
`;

const ListCategories = () => {

    const exampleArray =  [1, 2, 3, 4, 5, 6, 7, ' Todas'];

    return(
        <ContainerCategories>
            <Title>CATEGORIAS</Title>
            {exampleArray.map(button => (
                <ButtonCategory key={button}>Categoria {button}</ButtonCategory>
            ))}
        </ContainerCategories>               
    );
}

export { ListCategories }