import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react'
import { ContextHide } from '../../context/HideContext';
import ProductContainer from './estiloproducts'

const Product11 = () => {

    const {changeImage, setChangeImage} = useContext<any>(ContextHide)
    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/geishas.jpg');
            localStorage.setItem('image11', image);
            getSavedImage(localStorage.getItem('image11'))
    },[savedImage])

    const [savedImage2, getSavedImage2] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/temakis.jpg');
            localStorage.setItem('image112', image);
            getSavedImage2(localStorage.getItem('image112'))
    },[savedImage2])

    const handleChangeImage = () => {
        setChangeImage(!changeImage)
    }

    setTimeout(handleChangeImage,4000)

    return (
        <ProductContainer id="geishas-temakis">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="foto col-6 p-0">
                {changeImage == 0 ? 
                    <img src={savedImage} alt="" />
                    :
                    <img src={savedImage2} alt="" />
                }
                </div>
                <div className="product-text col-12 col-lg-6">
                            <div className="title">
                                <h1>Geishas</h1>
                                <hr />
                            </div>
                            <div className="card-box">
                                <div className="card">
                                    <h4>Geisha de Salmón</h4>
                                    <p>Palta y philadelphia envueltos en salmón.</p>
                                </div>
                                <div className="card">
                                    <h4>Geisha de Ahumado</h4>
                                    <p>Palta y philadelphia envueltos en salmón ahumado.</p>
                                </div>
                            </div>
                            <div className="pt-3">
                                <div className="title">
                                    <h1>Temakis</h1>
                                    <hr />
                                </div>
                                <div className="card-box">
                                    <div className="card">
                                        <h4>Temaki de Langostinos</h4>
                                        <p>Cono de alga Nori relleno de arroz, langostinos, palta y philadelphia.</p>                                    </div>
                                    <div className="card">
                                        <h4>Temaki de Salmón</h4>
                                        <p>Cono de alga Nori relleno de arroz, salmón, palta y philadelphia.</p>
                                    </div>
                                    <div className="card">
                                        <h4>Temaki de Ahumado</h4>
                                        <p>Cono de alga Nori relleno de arroz, salmón ahumado, palta y philadelphia.</p>
                                    </div>
                                </div>
                            </div>
                </div>
                
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product11;