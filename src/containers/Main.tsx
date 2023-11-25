import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 92vh;
    background-color: white;
    display: grid;    
    place-content: center;
`;

const Main = (props: any) => {
    return (
        <MainContainer>
           {props.children}
        </MainContainer>
    )
}

export { Main }