import { useState } from "react";
import type { UserContextType } from '@/context/UsersContext'
import { Users } from "@/context/UsersContext"
import { users } from "@/database/users";




const useLocalStorage = () => {
    
      
    // Obtengo los datos del LocalStorage
    const getDataUsers = () => {
        const dataUsers = localStorage.getItem('users');
        const newDataUsers = dataUsers ? JSON.parse(dataUsers) : [];
        return newDataUsers;
    }

    const [showInfoUsers, setShowInfoUsers] = useState<Users[]>(getDataUsers());
    const [userLogged, setUserLogged] = useState<Users[]>(getDataUsers());

    // Creo el LocalStorage
    const createLocalStorage = (user: Users[]) => {
        setShowInfoUsers(user);
        localStorage.setItem('users', JSON.stringify(user));
    }
    

    return {
        showInfoUsers,    
        setShowInfoUsers,
        userLogged, 
        setUserLogged,    
    }
    
}

export { useLocalStorage }