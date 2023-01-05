import styled from "styled-components";
import React from 'react'


const Promociones = () => {

    const image = require('../images/photos/tabla-especial.jpg')
    const image1 = require('../images/city1.jpg')


    return ( 
        <>
         <span id="promociones"></span>        
            <PromocionesContainer >
                    <div className="cards-box">
                        <div className="cards p-0">
                            <h3>TODOS LOS DÍAS</h3>
                            <p className="text" >10% Off pagando en Efectivo</p>
                            <img src={image} alt="" />
                        </div>
                        {/* <div className="cards p-0">
                            <h3>Caja de Promociones</h3>
                            <p className="text" >Texto de Promo</p>
                            <p className="text" >Promo 2</p>
                            <img src={image} alt="" />
                        </div> */}
                    </div>
            </PromocionesContainer>
        </>
     );
}
 
export default Promociones;

const PromocionesContainer = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .cards-box {
        gap: 15px;
        padding-top: 20px;
        display: flex;

        .cards {
            height: 20vh;
            width: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
           
        @media (max-width: 991px) {
            width: 80vh;
        }
        @media (max-width: 760px) {
            width: 60vh;
        }
        @media (max-width: 550px) {
            width: 40vh;
        }
            h3 {
                font-size: 2em;
                color: ${props => props.theme.fontPrim};
            }

            img {
                height: 50%;
                width: 100%;
                object-fit: cover;
            }
        .text, .text1 {
                text-align: center;
                margin: 0;
                font-size: 1.5em;
                z-index: 1;
                color: ${props => props.theme.fontPrim};
            }
        }
    }

`