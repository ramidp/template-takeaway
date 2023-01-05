import styled from "styled-components";
import React, { useContext } from 'react'
import { ContextHide} from "../context/HideContext";


const Logo = () => {

    const logo = require('../images/ikkenaireduc.png') // EJEMPLO

    const {menuOff} = useContext<any>(ContextHide)

    return ( 
        <LogoContainer>
            <a onClick={menuOff} href="/">
                <img src={logo} alt="Logo" />
            </a>
            <a className="onlinestore" onClick={menuOff} href="https://pedidos.masdelivery.com/ikkenai" target="_blank"><h3>Pedido Online</h3></a>
        </LogoContainer>
     );
}
 
export default Logo;

const LogoContainer = styled.div`
    display: flex;
    gap: 10px;
    
    .onlinestore {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
            font-weight: 700;
            color: ${props => props.theme.fontPrim};
            font-size: 1em;
            margin: 0;
            padding: 0;
            padding: 5px;
            &:hover {
                color: ${props => props.theme.fontFour};

            }
        }
    }
    .onlinestore2 {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
            font-weight: 700;
            color: ${props => props.theme.fontFour};
            font-size: 1em;
            margin: 0;
            padding: 0;
            padding: 5px;
            &:hover {
                color: ${props => props.theme.fontPrim};

            }
        }
    }

    img {
        max-width: 150px;
        padding: 6px 0;
    }
    
    @media (max-width: 1200px) {
        width: 70%;
    }
`