'use client'
import { PrimaryButton } from "@/components/PrimaryButton"
import { NavBar } from "@/components/NavBar";
import { TitlePage } from "@/components/TitlePage";


export default function Welcome() {
    return (
        <>
            <NavBar></NavBar>
            <TitlePage>MI CUENTA</TitlePage>
        </>
    );
}