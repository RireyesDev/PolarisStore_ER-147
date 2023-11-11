'use client'
import { CardLogIn } from "@/components/Card_LogIn";
import styled from "styled-components";

const DivContainer = styled.div`
    width: 100%;
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;    
`;

export default function LogIn() {
    return (
        <DivContainer>
            <CardLogIn></CardLogIn>
        </DivContainer>
    );
}