import React from "react";
import styled from "styled-components";

const PrimaryBTN = styled.button`
    width: 280px;
    height: 42px;
    background-color: var(--primary-color);
    color: var(--light-color);
    border-radius: 14px;
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
    margin: 8px 0px;    

    &:hover{
        background-color: var(--primary-color_hover);
    }

    &:active{
        background-color: var(--primary-color_active);
    }
`;


const PrimaryButton = (props: any) => {
    
    return(
        <PrimaryBTN 
            onClick={props.btnClick}
            style={{
                width: `${props.btnWidth}px`,
            }}
        >{props.children}</PrimaryBTN>
    );
}

export { PrimaryButton, PrimaryBTN }