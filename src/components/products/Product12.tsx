import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product12 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/chirashi.jpg');
            localStorage.setItem('image12', image);
            getSavedImage(localStorage.getItem('image12'))
    },[savedImage])

    return (
        <ProductContainer id="chirashis">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Chirashis</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Chirashi de Langostinos</h4>
                                <p>Ensalada de langostinos, arroz, palta y philadelphia</p>
                            </div>
                            <div className="card">
                                <h4>Chirashi de Salmón</h4>
                                <p>Ensalada de salmón, arroz, palta y philadelphia</p>
                            </div>
                            <div className="card">
                                <h4>Chirashi de Ahumado</h4>
                                <p>Ensalada de salmón ahumado, arroz, palta y philadelphia</p>
                            </div>
                            <div className="card">
                                <h4>Crispy Salad</h4>
                                <p>Ensalada de salmon y langostinos rebozados y fritos, guacamole con nachos, arroz y philadelphia</p>
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
 
export default Product12;