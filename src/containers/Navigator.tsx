import { BagCard } from "@/components/BagCard";
import { CardAccount } from "@/components/CardAccount";
import { ListCategories } from "@/components/ListCategories";
import { NavBar } from "@/components/NavBar";
import { PolarisContext } from "@/context/PolarisContext";
import React, { useContext } from "react";


const Navigator = () => {

    const context = useContext(PolarisContext);

    return(
        <>
            <NavBar></NavBar>
            {context?.showCategories ? <ListCategories></ListCategories> : <></>}
            {context?.showAccount ? <CardAccount></CardAccount> : <></>}
            {context?.showBag ? <BagCard></BagCard> : <></>}
        </>
    );
}

export { Navigator }