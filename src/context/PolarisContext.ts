import { createContext } from "react";

type Products = {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    categories: string[];
}

type PolarisContextType = {
    showAccount: boolean;
    setShowAccount: React.Dispatch<React.SetStateAction<boolean>>;
    showBag: boolean;
    setShowBag: React.Dispatch<React.SetStateAction<boolean>>;
    showCategories: boolean;
    setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;    
    products: Products[];
    setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
    addProducts: Products[];
    setAddProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const PolarisContext = createContext<PolarisContextType | undefined>(undefined);

export { PolarisContext };
export type { PolarisContextType };
export type { Products };
