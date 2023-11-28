import React from 'react';
import styled from 'styled-components';
import PolariLogo from '/public/Polaris_Dark.svg'

const FooterContainer = styled.footer`
    width: 100%;
    background-color: white;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    z-index: 5;
    border-top: 1px solid black;
`;

const HomeButton = styled.span`
    width: 140px;
    height: 60px;
    grid-column: 1 / 2; 
    grid-row: 1 / 2;  
    background-image: url(${PolariLogo.src});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;  
    place-self: center; 
`;

const YearContainer = styled.div`
  font-size: 18px;
  font-weight: bold;  
  color: #333;
  grid-column: 2 / 3; 
  grid-row: 1 / 2;
  place-self: center;
`;


const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <HomeButton />  
      <YearContainer>© {currentYear} Rireyes Technologies</YearContainer>    
    </FooterContainer>
  );
};

export { Footer };