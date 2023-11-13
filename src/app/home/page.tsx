'use client'
import { NavBar } from "@/components/NavBar";
import { CardAccount } from "@/components/CardAccount";
import { Productcard } from "@/components/ProductCard";
import { TableProductCards } from "@/components/TableProductCards";
import { ListCategories } from "@/components/ListCategories";
import { BagCard } from "@/components/BagCard";


export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <CardAccount></CardAccount>
            <BagCard></BagCard>
            <ListCategories></ListCategories>
            <TableProductCards></TableProductCards>
        </>
    );
}