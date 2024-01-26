'use client'
import { TableProductCards } from "@/components/TableProductCards";
import { Navigator } from "@/containers/Navigator";
import { Footer } from "@/containers/Footer";


export default function Home() {

    return (
        <>
            <Navigator></Navigator>
            <TableProductCards></TableProductCards>
            <Footer></Footer>
        </>
    );
}