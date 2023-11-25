import React from "react";
import styled from "styled-components";
import { PrimaryBTN } from "./PrimaryButton";


const BuyBTN = styled(PrimaryBTN)`
    background-color: var(--primary-color_triad);

    &:hover{
        background-color: var(--primary-color_triad_hover);
    }

    &:active{
        background-color: var(--primary-color_triad_active);
    }

`;

const BuyButton = (props: any) => {
    return(
        <BuyBTN onClick={props.btnClick}>{props.children}</BuyBTN>
    );
}

export { BuyButton }