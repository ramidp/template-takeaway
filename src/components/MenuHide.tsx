import styled from "styled-components";
import { ContextHide } from "../context/HideContext";
import { useContext, useRef, useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HashLink } from "react-router-hash-link";



const MenuHide = () => {

    const {hide, hide2} = useContext<any>(ContextHide)

    return (
        <MenuHideContainer>
            {hide?
            <div className="submenu">
                <HashLink to={{pathname: "/", hash: "#menu"}}>Entradas</HashLink>
                <HashLink to={{pathname: "/platos-al-wok", hash: "#menu"}}>Platos al Wok</HashLink>
                <HashLink to={{pathname: "/platos-principales", hash: "#menu"}}>Platos Principales</HashLink>
                <HashLink to={{pathname: "/platos-infantiles", hash: "#menu"}}>Menu Infantil</HashLink>
                <HashLink to={{pathname: "/rolls-clasicos", hash: "#menu"}}>Rolls Clásicos</HashLink>
                <HashLink to={{pathname: "/rolls-especiales", hash: "#menu"}}>Rolls Especiales</HashLink>
                <HashLink to={{pathname: "/rolls-premium", hash: "#menu"}}>Rolls Premium</HashLink>
                <HashLink to={{pathname: "/maki-hot-rolls", hash: "#menu"}}>Maki / Hot Rolls</HashLink>
                <HashLink to={{pathname: "/veggie-rolls", hash: "#menu"}}>Veggie Rolls</HashLink>
                <HashLink to={{pathname: "/sashimi-nigiris", hash: "#menu"}}>Sashimi / Nigiris</HashLink>
                <HashLink to={{pathname: "/geishas-temakis", hash: "#menu"}}>Geishas / Temakis</HashLink>
                <HashLink to={{pathname: "/chirashis", hash: "#menu"}}>Chirashis</HashLink>
            </div>
            :
            <></>
                }
            {hide2?
            <div className="submenu">
                <HashLink to={{pathname: "/tablas", hash: "#tablas"}}>Small</HashLink>
                <HashLink to={{pathname: "/tablas2", hash: "#tablas"}}>Medium</HashLink>
                <HashLink to={{pathname: "/tablas3", hash: "#tablas"}}>Large</HashLink>
            </div>
            :
            <></>
                }
        </MenuHideContainer>
     );
}
 
export default MenuHide;

const MenuHideContainer = styled.div`
    width: 100%;
    .submenu {
        width: 100%;
        padding-right: 50px;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        background-image: linear-gradient(to right, #410707, ${props => props.theme.primary});
        a {
            text-decoration: none;
            padding: 10px 10px;
            font-size: 15px;
            color: ${props => props.theme.fontPrim};
            &:hover {
                color: ${props => props.theme.fontSecond};
            }
        }
    }
@media (max-width: 991px) {
    display: none;
}

`