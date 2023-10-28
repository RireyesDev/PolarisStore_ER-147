import React from "react";
import styled from "styled-components";
import Image from "next/image";
import PolarisLogo from "../../public/Polaris_Light.svg"


const Card = styled.section`
    width: 340px;
    min-height: 360px;
    display: grid;
    grid-template-rows: 128px auto;
    grid-template-columns: 100%;
    background-color: var(--dark-color);
    border-radius: 22px 22px 32px 32px ;

    box-shadow: 6px 8px 14px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 8px 14px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 8px 14px 0px rgba(0,0,0,0.75);
`;

const CardLight = styled(Card)`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    grid-row: 2 / 3;
    grid-template-rows: 100%;
    background-color: var(--light-color);
    border-radius: 78px 0px 22px 22px;
    padding: 20px 10px;

    

    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
`;

const ImageLogo = styled(Image)`
    width: 200px;
    height: 72px;
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