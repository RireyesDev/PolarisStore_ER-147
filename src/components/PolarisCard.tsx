import React from "react";
import styled from "styled-components";
import Image from "next/image";
import PolarisLogo from "../../public/Polaris_Light.svg"


const Card = styled.section`
    width: 340px;
    min-height: 360px;
    display: grid;
    grid-template-rows: 92px auto;
    grid-template-columns: 100%;
    background-color: var(--dark-color);
    border-radius: 22px 22px 32px 32px ;
    margin: 20px 0px;
    box-shadow: 6px 8px 14px 0px rgba(0, 0, 0, 0.37);
`;

const CardLight = styled(Card)`
    height: 100%;
    display: grid;
    grid-row: 2 / 3;
    grid-template-columns: 50% 50%;
    grid-template-rows: 68px auto 72px;
    background-color: var(--light-color);
    border-radius: 78px 0px 22px 22px;
    padding: 24px 10px;
    margin: 0px;
    box-shadow: none;
`;

const ImageLogo = styled(Image)`
    width: 168px;
    height: 64px;
    place-self: center;
    object-fit: contain;
`;


const PolarisCard = (props: any) => {

    return(
        <Card>
            <ImageLogo src={PolarisLogo} alt="Polaris Logo"></ImageLogo>
            <CardLight>
                {props.children}
            </CardLight>
        </Card>
    );
}


export { PolarisCard }