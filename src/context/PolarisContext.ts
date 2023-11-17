import { createContext } from "react";

type PolarisContextType = {
    showAccount: boolean;
    setShowAccount: React.Dispatch<React.SetStateAction<boolean>>;
    showBag: boolean;
    setShowBag: React.Dispatch<React.SetStateAction<boolean>>;
    showCategories: boolean;
    setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
}

const PolarisContext = createContext<PolarisContextType | undefined>(undefined);

export { PolarisContext };
export type { PolarisContextType };
