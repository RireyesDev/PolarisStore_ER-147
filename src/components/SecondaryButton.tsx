import React from "react";
import styled from "styled-components";
import { PrimaryBTN } from "./PrimaryButton";


const SecondaryBTN = styled(PrimaryBTN)`
    background-color: var(--secondary-color);

    &:hover{
        background-color: var(--secondary-color_hover);
    }

    &:active{
        background-color: var(--secondary-color_active);
    }

`;

const SecondaryButton = (props: any) => {
    return(
        <SecondaryBTN>{props.children}</SecondaryBTN>
    );
}

export { SecondaryButton }