'use client'
import { NavBar } from "@/components/NavBar";
import { Productcard } from "@/components/ProductCard";


export default function Welcome() {
    return (
        <>
            <NavBar></NavBar>
            <Productcard></Productcard>
        </>
    );
}