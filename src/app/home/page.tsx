'use client'
import { NavBar } from "@/components/NavBar";
import { Productcard } from "@/components/ProductCard";
import { TableProductCards } from "@/components/TableProductCards";


export default function Welcome() {
    return (
        <>
            <NavBar></NavBar>
            <TableProductCards></TableProductCards>
        </>
    );
}