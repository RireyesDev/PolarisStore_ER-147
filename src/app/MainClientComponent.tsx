'use client'
import React, { useState} from "react"
import { PolarisContext } from "@/context/PolarisContext"
import type { PolarisContextType } from '@/context/PolarisContext'


export default function MainClientComponent(props: any) {

    const [showAccount, setShowAccount] = useState<boolean>(false);


    const polarisContextValue : PolarisContextType = {
      showAccount,
      setShowAccount
    }

    return(        
        <PolarisContext.Provider 
            value={polarisContextValue} 
        >{props.children}</PolarisContext.Provider>
    );
}