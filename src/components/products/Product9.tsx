import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react'
import ProductContainer from './estiloproducts'

const Product9 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/veggie.jpg');
            localStorage.setItem('image9', image);
            getSavedImage(localStorage.getItem('image9'))
    },[savedImage])

    return (
        <ProductContainer id="entrada">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                <div className="title">
                                <h1>Veggie Rolls</h1>
                                <hr />
                            </div>
                            <div className="card-box">
                                <div className="card">
                                    <h4>Yasai</h4>
                                    <p>Relleno de cebolla caramelizada, rúcula, tomates secos y philadelphia. Recubierto con ciboulette.</p>
                                </div>
                                <div className="card">
                                    <h4>Veggie</h4>
                                    <p>Relleno de verduras salteadas al curry, palta y tamago. Recubierto con zanahoria y bañado en salsa de miel y mostaza.</p>
                                </div>
                                <div className="card">
                                    <h4>Tropic</h4>
                                    <p>Relleno de zanahoria, ananá y philadelphia. Recubierto con palta y bañado en salsa de ají amarillo.</p>
                                </div>
                                <div className="card">
                                    <h4>Mango</h4>
                                    <p>Relleno de palta, zanahoria y philadelphia. Recubierto con mango..</p>
                                </div>
                                <div className="card">
                                    <h4>Veggie Mex</h4>
                                    <p>Relleno de tomates frescos y muzzarella con albahaca. Coronado con guacamole y nachos.</p>
                                </div>
                                <div className="card">
                                    <h4>Veganmaki</h4>
                                    <p>Relleno de palmitos, zanahoria, tomates secos y pepino. Recubierto con alga Nori.</p>
                                </div>
                            </div>
                </div>
                <div className="foto col-6 p-0">
                    <img src={savedImage} alt="" />
                </div>
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product9;