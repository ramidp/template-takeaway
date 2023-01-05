import { useState, useEffect } from "react";
import styled from "styled-components";
import Fondo from "./Wallpaper";

const BrandMain = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../images/ikkenailogo.png');
            localStorage.setItem('logo1', image);
            getSavedImage(localStorage.getItem('logo1'))
    },[savedImage])

    return (
        <BrandMainContainer>
            <Fondo/>
            <div className="brand-logo">
                <Logo src={savedImage} alt="" />
                <div className="brand-info">
                    <p className="m-0">
                        <span><b>ITUZAINGÓ</b></span>
                        <br />
                        <br />
                        <span>DIRECCIÓN</span>
                        <br />
                        Santa Rosa 1124
                        <br />
                        <span>TELÉFONOS</span>
                        <br />
                        4458-4488 / 4458-4794
                        <br />
                        <span>HORARIO</span>
                        <br />
                        MARTES A DOMINGOS
                        <br />
                        DE 19:30 A 23HS            
                    </p>
                    <p className="m-0">
                        <span><b>RAMOS MEJÍA</b></span>
                        <br />
                        <br />
                        <span>DIRECCIÓN</span>
                        <br />
                        Rosales 323
                        <br />
                        <span>TELÉFONOS</span>
                        <br />
                        6066-8630 / 15-4417-1117
                        <br />
                        <span>HORARIO</span>
                        <br />
                        MARTES A DOMINGOS
                        <br />
                        DE 19:30 A 23HS           
                    </p>
                </div>
            </div>
        </BrandMainContainer>
    );
}
 
export default BrandMain;


const BrandMainContainer = styled.div`
    height: 60vh;
    width: 100%;
    padding-top: 80px;
    
    @media (max-width: 991px) {
        height: 100vh;
        padding-top: 80px;
    }
    @media (max-width: 625px ){
        padding-top: 10px;
    }

    span {
        color: ${props => props.theme.fontFour}
    }

    .brand-logo {
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        p {
            padding: 0 20px;
            font-size: 1.5em;
            color: ${props => props.theme.fontPrim};
            z-index: 1;
        @media (max-width: 840px) {
            font-size: 1.2em;
        }
    }
    .brand-info {
        display: flex;
    }
    @media (max-width: 991px) {
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 840px) {
        height: 100vh;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
    }
    @media (max-width: 625px ){
        justify-content: flex-start;
        padding-top: 100px; 
    }
}
`

const Logo = styled.img`
    height: 80%;

    @media (max-width: 991px ){
        height: 40%;
    }
    @media (max-width: 840px ){
        height: 40%;
    }
    @media (max-width: 625px ){
        height: 30%;
    }
`