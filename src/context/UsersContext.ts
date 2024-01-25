'use client';
import { createContext } from "react";

type Users = {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

type UserContextType = {
    showInfoUsers: Users[];
    setShowInfoUsers: React.Dispatch<React.SetStateAction<Users[]>>;   
    userLogged: Users[];
    setUserLogged: React.Dispatch<React.SetStateAction<Users[]>>;   
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export { UserContext };
export type { UserContextType };
export type { Users };