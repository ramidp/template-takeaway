import React from 'react';
import styled from 'styled-components'


const wallpaper = require('../images/photos/ik2002-wall.jpg')


const Fondo = () => {
    return ( 
        <>
        <Img src={wallpaper} alt="" />
        </>
     );
}
 
export default Fondo;


const Img = styled.img`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 120vh;
    object-fit: cover;
`