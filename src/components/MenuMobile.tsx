import styled from 'styled-components'
import Logo from './Logo';
import React from 'react'
import NavBar from './NavBar';


const MenuMobile = () => {
    return ( 
        <MenuMobileContainer>
            <Logo/>
            <NavBar/>
        </MenuMobileContainer>
     );
}

export default  MenuMobile;

const MenuMobileContainer = styled.div`
        width: 100%;
        justify-content: space-between;
        align-items: center;
        display: flex;
        flex-direction: row;
        background-image: linear-gradient(to left, #242424, ${props => props.theme.secondary});

`