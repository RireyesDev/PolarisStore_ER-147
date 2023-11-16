import { createContext } from "react";

type PolarisContextType = {
    showAccount: boolean,
}

const PolarisContext = createContext({});

export { PolarisContext }