'use client'
import { NavBar } from "@/components/NavBar";
import { CardAccount } from "@/components/CardAccount";
import { Productcard } from "@/components/ProductCard";
import { TableProductCards } from "@/components/TableProductCards";
import { ListCategories } from "@/components/ListCategories";


export default function Welcome() {
    return (
        <>
            <NavBar></NavBar>
            <CardAccount></CardAccount>
            <ListCategories></ListCategories>
            <TableProductCards></TableProductCards>
        </>
    );
}