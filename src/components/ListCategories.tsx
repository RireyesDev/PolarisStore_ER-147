import React from "react";
import styled from "styled-components";
import { categories } from "@/database/categories";
import { useRouter } from "next/navigation";

const ContainerCategories = styled.div`
    position: absolute;
    top: 80px;
    left: 0px;
    width: 308px;
    height: 738px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: white;    
    z-index: 4;
    border-radius: 0px 0px 30px 0px;
    box-shadow: rgba(0, 0, 0, 0.208) 4px 4px 4px 0px;
`;

const Title = styled.h2`
    width: 86%;
    height: 48px;
    background-color: white;
    font-family: 'Nunito', sans-serif;
    margin: 34px 0px;
    align-self: center;
`;

const ButtonCategory = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
    background-color: white;
    text-align: left;
    padding-left: 68px;
    white-space: nowrap;

    &:hover {
        background-color: rgb(216, 216, 216);
    }

    &:active {
        background-color: rgb(185, 185, 185);
    }
`;

const ListCategories = () => {

    const router = useRouter();

    return(
        <ContainerCategories>
            <Title>CATEGORIAS</Title>
            {categories.map((button, index) => {

                const path = button
                    .toLowerCase() // Convertir texto a minúsculas
                    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Eliminar tildes

                return(
                    <ButtonCategory key={index} onClick={() => router.push(`/categories/${path}`)}>{button}</ButtonCategory>
                );
            })}
        </ContainerCategories>               
    );
}

export { ListCategories }