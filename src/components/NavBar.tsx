import React, {useContext} from "react";
import styled from "styled-components";
import MenuIcon from '/public/icons/menu.png'
import BagIcon from '/public/icons/bag.png'
import UserIcon from '/public/icons/user.png'
import PolariLogo from '/public/Polaris_Dark.svg'
import { PolarisContext } from "@/context/PolarisContext";

// Create Navbar component styled component, name: NavBar
const NavContainer = styled.nav`
    top: 0;
    width: 100%;
    min-width: 900px;
    min-height: 77px;
    display: grid;
    grid-template-columns: 10% 20% 50% 10% 10%;
    grid-template-rows: 100%;
    place-items: center;
    border-bottom: 1px solid var(--light-color);
    z-index: 5;
`;

// Create component styled button name: MenuButton  

const TheButton = styled.button`
    width: 32px;
    height: 32px;
    background: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;
const MenuButton = styled(TheButton)`   
    grid-column: 1 / 2;    
    background-image: url(${MenuIcon.src});
`;

const HomeButton = styled(TheButton)`
    width: 140px;
    height: 60px;
    grid-column: 2 / 3;   
    background-image: url(${PolariLogo.src});
`;

const BagButton = styled(TheButton)` 
    grid-column: 4 / 5;  
    background-image: url(${BagIcon.src});
`;

const UserButton = styled(TheButton)`   
    grid-column: 5 / 6;
    background-image: url(${UserIcon.src});
`;

const NavBar = (props: any) => {

    const context = useContext(PolarisContext);

    function clickUserCard(){
        context?.setShowAccount(!context.showAccount);
        if(context?.showBag === true){
            context?.setShowBag(!context.showBag);
        }
    }

    function clickBagCard(){
        context?.setShowBag(!context.showBag);
        if(context?.showAccount === true){
            context?.setShowAccount(!context.showAccount);
        }
    }

    function clickCategories(){
        context?.setShowCategories(!context.showCategories);
        if(context?.showAccount === true){
            context?.setShowAccount(!context.showAccount);
        }
    }

    return(
        <NavContainer>
            <MenuButton onClick={() => clickCategories()}></MenuButton>
            <HomeButton></HomeButton>
            <BagButton onClick={() => clickBagCard()}></BagButton>
            <UserButton onClick={() => clickUserCard()}></UserButton>
        </NavContainer>
    );
}

export { NavBar }