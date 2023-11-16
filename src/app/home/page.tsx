'use client'
import { NavBar } from "@/components/NavBar";
import { CardAccount } from "@/components/CardAccount";
import { Productcard } from "@/components/ProductCard";
import { TableProductCards } from "@/components/TableProductCards";
import { ListCategories } from "@/components/ListCategories";
import { BagCard } from "@/components/BagCard";
import { PolarisContext } from "@/context/PolarisContext";
import { useContext } from "react";

type PolarisContextType = {
    showAccount: boolean,
}

export default function Home() {

    const context = useContext(PolarisContext);

    return (
        <>
            <NavBar></NavBar>
            {context?.showAccount ? <CardAccount></CardAccount> : <></>}
            <BagCard></BagCard>
            <ListCategories></ListCategories>
            <TableProductCards></TableProductCards>
        </>
    );
}