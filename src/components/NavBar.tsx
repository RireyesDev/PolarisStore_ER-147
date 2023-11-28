import React, {useContext} from "react";
import styled from "styled-components";
import MenuIcon from '/public/icons/menu.png'
import BagIcon from '/public/icons/bag.png'
import PolariLogo from '/public/Polaris_Dark.svg'
import { PolarisContext } from "@/context/PolarisContext";
import { useRouter } from "next/navigation";
import { ImageProfile } from "./ImageProfile";

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
    border-bottom: 1px solid var(--dark-color);
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
    justify-self: right;
    margin-right: 18%;
`;

const HomeButton = styled(TheButton)`
    width: 140px;
    height: 60px;
    grid-column: 2 / 3;   
    background-image: url(${PolariLogo.src});
    justify-self: left;
    margin-left: 16%;
`;

const BagButton = styled(TheButton)` 
    grid-column: 4 / 5;  
    background-image: url(${BagIcon.src});
    justify-self: right;
    margin-right: 18%;
`;

const UserContainer = styled.div`   
    grid-column: 5 / 6;
    justify-self: left;
    margin-left: 18%;
    display: grid;
    place-content: center;
`;

const NavBar = (props: any) => {

    const context = useContext(PolarisContext);

    function clickUserCard(){
        context?.setShowAccount(!context.showAccount);
        if(context?.showBag === true){
            context?.setShowBag(!context.showBag);
        }
        if(context?.showCategories === true){
            context?.setShowCategories(!context.showCategories);
        }
    }

    function clickBagCard(){
        context?.setShowBag(!context.showBag);
        if(context?.showAccount === true){
            context?.setShowAccount(!context.showAccount);
        }
        if(context?.showCategories === true){
            context?.setShowCategories(!context.showCategories);
        }        
    }

    function clickCategories(){
        context?.setShowCategories(!context.showCategories);
        if(context?.showAccount === true){
            context?.setShowAccount(!context.showAccount);
        }
        if(context?.showBag === true){
            context?.setShowBag(!context.showBag);
        }
    }

    const router = useRouter();

    function goHome(){
        router.push('/home');
    }

    return(
        <NavContainer>
            <MenuButton onClick={() => clickCategories()}></MenuButton>
            <HomeButton onClick={() => goHome()}></HomeButton>
            <BagButton onClick={() => clickBagCard()}></BagButton>
            <UserContainer>
                <ImageProfile imgClick={() => clickUserCard()} imgSize={32}></ImageProfile>
            </UserContainer>
        </NavContainer>
    );
}

export { NavBar }