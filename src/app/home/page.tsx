'use client'
import { NavBar } from "@/components/NavBar";
import { CardAccount } from "@/components/CardAccount";
import { Productcard } from "@/components/ProductCard";
import { TableProductCards } from "@/components/TableProductCards";


export default function Welcome() {
    return (
        <>
            <NavBar></NavBar>
            <CardAccount></CardAccount>
            <TableProductCards></TableProductCards>
        </>
    );
}