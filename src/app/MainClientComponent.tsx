'use client'
import React, { useState } from "react"
import { PolarisContext } from "@/context/PolarisContext"
import type { PolarisContextType } from '@/context/PolarisContext'
import { UserContext } from '@/context/UsersContext'
import type { UserContextType } from '@/context/UsersContext'
import { Users } from "@/context/UsersContext"
import { productsMain } from "@/database/products"
import { Products } from "@/context/PolarisContext"
import { GlobalStyles } from "./globalStyles"
import { users } from "@/database/users"


export default function MainClientComponent(props: any) {

    const [showAccount, setShowAccount] = useState<boolean>(false);
    const [showBag, setShowBag] = useState<boolean>(false);
    const [showCategories, setShowCategories] = useState<boolean>(false);

    const [products, setProducts] = useState(productsMain);
    const [addProducts, setAddProducts] = useState<Products[]>([]);


    const [showInfoUsers, setShowInfoUsers] = useState<Users[]>(users);



    const polarisContextValue : PolarisContextType = {
      showAccount,
      setShowAccount,
      showBag,
      setShowBag,
      showCategories,
      setShowCategories,
      products,
      setProducts,
      addProducts,
      setAddProducts,
    }

    const userContextValue : UserContextType = {
        showInfoUsers,
        setShowInfoUsers,  
      }

    return(   
        <UserContext.Provider 
            value={userContextValue}
        >
            <PolarisContext.Provider 
                value={polarisContextValue} 
                >
                <GlobalStyles></GlobalStyles>
                {props.children}
            </PolarisContext.Provider>
        </UserContext.Provider>     
    );
}