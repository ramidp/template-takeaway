import styled from "styled-components";
import React from 'react'


const Datos = () => {
    return ( 
        <DatosContainer>
            <p>0800-111-4000</p>
            <p>Mas info directa y rapida</p>
        </DatosContainer>
     );
}
 
export default Datos;

const DatosContainer = styled.div`
        background-image: linear-gradient(to right, black, ${props => props.theme.fourth});
        display: flex;
        justify-content: flex-end;
        padding-right: 50px;
        @media (max-width: 991px) {
            justify-content: center;
            padding: 0;
        }
        p {
            color: ${props => props.theme.fontPrim};
            padding: 11px 10px;
            margin: 0;
        }

`