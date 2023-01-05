import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product4 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/menu-infantil.jpg');
            localStorage.setItem('image4', image);
            getSavedImage(localStorage.getItem('image4'))
    },[savedImage])

    return (
        <ProductContainer id="platos-infantiles">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="foto col-6 p-0">
                    <img src={savedImage} alt="" />
                </div>
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Menu Infantil</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Cartoon Roll</h4>
                                <p>Roll rebozado y frito. Relleno de arroz, salchicha y cheddar.</p>
                            </div>
                            <div className="card">
                                <h4>Nuggets de Pollo</h4>
                                <p>Deliciosos bocaditos fritos de pollo rebozado. Porción 5u.</p>
                            </div>
                            <div className="card">
                                <h4>Bastones de Muzzarella</h4>
                                <p>Crocantes bastoncitos de muzzarella robozados y fritos. Porción 4u.</p>
                            </div>
                        </div>
                </div>
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product4;