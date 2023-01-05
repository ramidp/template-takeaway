import React, { useState } from 'react'
import styled from 'styled-components';
import BrandMain from './BrandMain';
import Products from './Products';
import Promociones from './Promociones';



const Main = () => {

  return (
    <AppContainer>
        <BrandMain/>
        <div className="hide">
          <Promociones/>
          <Products/>
        </div>
    </AppContainer>
);
}

export default Main;

const AppContainer = styled.div`
  width: 100%;
     * {
      font-family: ${props => props.theme.mainFont}; // Aplica a TODA la App la fuente.
     }

     .hide {
      background-color: inherit;

    @media (max-width: 991px) {
      display: none;
    }
     }
`