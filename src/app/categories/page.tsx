'use client'
import { PrimaryButton } from "@/components/PrimaryButton"
import { Main } from "@/containers/Main";
import { Navigator } from "@/containers/Navigator"
import { TitlePage } from "@/components/TitlePage";
import styled from "styled-components";
import { categories } from "@/database/categories";
import { useRouter } from "next/navigation";

// generate a card with map list categories

const Container = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    grid-gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    justify-self: center;
`;

const Card = styled.button`
  width: 250px;
  min-height: 120px;
  background-color: #f2f2f2;
  padding: 16px;
  display: grid;
  place-content: end end;
  border-radius: 20px;
  transition: transform ease 0.5s;
  cursor: pointer;
  color: var(--light-color);
  font-size: 18px;
  letter-spacing: 1px;
  border: none;

  &:hover {
      transform: scale(1.1);
      transition: transform ease 0.5s;
  }

  background-color: ${(props: { color: any; }) => props.color};
`;

const Title = styled.h3`
    width: 200px;
    height: 20px;
    white-space: nowrap;  
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
`;


export default function Categories(props: any) {

    const router = useRouter();

    return (
        <>
            <Navigator></Navigator>            
            <Main>              
                <TitlePage>CATEGORIES</TitlePage>
               <Container>
                    {categories.map((category, index) => {

                        const path = category.categoria
                            .toLowerCase() // Convertir texto a minúsculas
                            .replace(/\s+/g, '-') // Reemplazar espacios con guiones
                            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Eliminar tildes
    
                        return(
                        <Card 
                            key={index} 
                            color={category.color} 
                            onClick={() => router.push(`/categories/${path}`)}>{
                                <Title>{category.categoria}</Title>
                            }
                        </Card>
                    )})}
               </Container>
            </Main>
        </>
    );
}