import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react'
import { ContextHide } from '../../context/HideContext';
import ProductContainer from './estiloproducts'

const Product10 = () => {

    const {changeImage, setChangeImage} = useContext<any>(ContextHide)
    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/sashimi.jpg');
            localStorage.setItem('image101', image);
            getSavedImage(localStorage.getItem('image101'))
    },[savedImage])

    const [savedImage2, getSavedImage2] = useState<string | any>('')

    useEffect(() => {
        const image = require('../../images/photos/smaller/nigiri.jpg');
        localStorage.setItem('image102', image);
        getSavedImage2(localStorage.getItem('image102'))
    },[savedImage2])

    const handleChangeImage = () => {
        setChangeImage(!changeImage)
    }
    setTimeout(handleChangeImage,4000)

    return (
        <ProductContainer id="sashimi-geishas">
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
                                <h1>Sashimi</h1>
                                <hr />
                            </div>
                            <div className="card-box">
                                <div className="card">
                                    <h4>Sashimi de Langostino</h4>
                                    <p>Cortes de langostinos cocidos.</p>
                                </div>
                                <div className="card">
                                    <h4>Sashimi de Salm??n</h4>
                                    <p>Cortes de salm??n fresco.</p>
                                </div>
                                <div className="card">
                                    <h4>Sashimi Spicy</h4>
                                    <p>Cortes de salm??n flambeado, coronado con aj?? Merken y pralin?? de s??samo.</p>
                                </div>
                            </div>
                            <div className="pt-3">
                                <div className="title">
                                    <h1>Nigiris</h1>
                                    <hr />
                                </div>
                                <div className="card-box">
                                    <div className="card">
                                        <h4>Nigiri de Langostino</h4>
                                        <p>Bocadito de arroz recubierto con langostino.</p>
                                    </div>
                                    <div className="card">
                                        <h4>Nigiri de Salm??n</h4>
                                        <p>Bocadito de arroz recubierto con salm??n fresco.</p>
                                    </div>
                                    <div className="card">
                                        <h4>Nigiri de Ahumado</h4>
                                        <p>Bocadito de arroz recubierto con salm??n ahumado.</p>
                                    </div>
                                    <div className="card">
                                        <h4>Nigiri Inca</h4>
                                        <p>Bocadito de arroz recubierto con pescado blanco flambeado. Ba??ado con salsa de mango picante y caviar negro.</p>
                                    </div>
                                    <div className="card">
                                        <h4>Nigiri Spicy</h4>
                                        <p>Bocadito de arroz recubierto con salm??n flambeado, coronado con aj?? Merken y pralin?? de s??samo.</p>
                                    </div>
                                </div>
                            </div>
                </div>
                
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product10;