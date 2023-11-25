'use client'
import { CardSignIn } from "@/components/Card_SignIn";
import styled from "styled-components";

// Create styled component for title Container 

const DivContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-content: center;    
`;


export default function SignIn() {
    return (
        <DivContainer>
            <CardSignIn></CardSignIn>
        </DivContainer>
    );
}