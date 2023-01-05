import { useContext, useState } from 'react';
import styled from 'styled-components';
import {ContextHide} from '../context/HideContext'
import { OffCanvasTop } from './OffCanvasTop';
import { HashLink } from 'react-router-hash-link';



const MenuNav = () => {

  const {menuHidding, menuOff, menuHidding2} = useContext<any>(ContextHide)

  return (
    <MenuNavContainer>
            <OffCanvasTop/>
            <HashLink className="hide" onClick={menuHidding} to={{pathname: '/' , hash: '#menu'}}>Menu</HashLink>
            <HashLink className="hide" onClick={menuHidding2} to={{pathname: 'tablas' , hash: '#tablas'}}>Tablas</HashLink>
            <a className="hide" onClick={menuOff} href="#contacto">Contacto</a>
    </MenuNavContainer>
  );
}

export default MenuNav;

const MenuNavContainer = styled.div`
    color: white;
    display: flex;
    padding-right: 50px;

    .onlinestore {

    }

    a {
      margin: 0;
        font-size: 16px;
        color: ${props => props.theme.fontPrim};
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.fontFour};
        }
      text-decoration: none;
      h3 {
        margin: 0;
        font-size: 16px;
        color: ${props => props.theme.fontPrim};
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.fontFour};
        }
      }
    }
    
    .hide {
@media (max-width: 991px) {
      display: none;
      padding-right: 0px;
    }
  }
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`

