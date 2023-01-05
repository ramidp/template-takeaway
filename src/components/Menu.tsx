import styled from "styled-components";
import Datos from "./Datos";
import MenuHide from "./MenuHide";
import MenuMobile from "./MenuMobile";
import React from 'react'


const Menu = () => {


    return ( 
        <MenuContainer>
                <div className="row">
                    <div className="col-12 p-0">
                        <Datos/>
                        <MenuMobile/>
                        <MenuHide/>
                    </div>
                </div>
        </MenuContainer>
     );
}
 
export default Menu;

const MenuContainer = styled.div`
    width: 100%;
    position: fixed;
    padding: 0;
    margin: 0;
    z-index: 100;
    transition: 2s ease all;
    `
    