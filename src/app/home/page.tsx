'use client'
import { TableProductCards } from "@/components/TableProductCards";
import { PolarisContext } from "@/context/PolarisContext";
import { useContext } from "react";
import { Navigator } from "@/containers/Navigator";
import { Footer } from "@/containers/Footer";


export default function Home() {

    const context = useContext(PolarisContext);

    return (
        <>
            <Navigator></Navigator>
            <TableProductCards></TableProductCards>
            <Footer></Footer>
        </>
    );
}