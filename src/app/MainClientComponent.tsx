'use client'
import React, { useState } from "react"
import { PolarisContext } from "@/context/PolarisContext"
import type { PolarisContextType } from '@/context/PolarisContext'
import { productsMain } from "@/database/products"


export default function MainClientComponent(props: any) {

    const [showAccount, setShowAccount] = useState<boolean>(false);
    const [showBag, setShowBag] = useState<boolean>(false);
    const [showCategories, setShowCategories] = useState<boolean>(false);

    const [products, setProducts] = useState(productsMain);



    const polarisContextValue : PolarisContextType = {
      showAccount,
      setShowAccount,
      showBag,
      setShowBag,
      showCategories,
      setShowCategories,
      products,
      setProducts,
    }

    return(        
        <PolarisContext.Provider 
            value={polarisContextValue} 
        >{props.children}</PolarisContext.Provider>
    );
}