import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product6 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/rolls-clasicos-especiales.jpg');
            localStorage.setItem('image6', image);
            getSavedImage(localStorage.getItem('image6'))
    },[savedImage])

    return (
        <ProductContainer id="rolls-especiales">
        <div className="p-0">
            <div className="row m-0 p-0">
                 <div className="foto col-6 p-0">
                    <img src={savedImage} alt="" />
                </div>
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Rolls Especiales</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Avocado</h4>
                                <p>Relleno de salmón, mango y palmito. Recubierto con palta y sésamo blanco</p>
                            </div>
                            <div className="card">
                                <h4>Buenos Aires</h4>
                                <p>Relleno de salmón, langostinos, palta y philadelphia.</p>
                            </div>
                            <div className="card">
                                <h4>Brooklyn </h4>
                                <p>Relleno de salmón y philadelphia. Recubierto con salmón ahumado y mayonesa de maracuyá.</p>
                            </div>
                            <div className="card">
                                <h4>Crazy</h4>
                                <p>Relleno de langostinos, palta y philadelphia. Recubierto con salmón y salsa de mango</p>
                            </div>
                            <div className="card">
                                <h4>Mexican</h4>
                                <p>Relleno de salmón, cilantro y philadelphia. Coronado con guacamole y nachos.</p>
                            </div>
                            <div className="card">
                                <h4>Tempura</h4>
                                <p>Relleno de langostino tempura frito, palta y philadelphia. Recubierto con ralladura de lima y bañado en salsa de mango..</p>
                            </div>
                            <div className="card">
                                <h4>Smoked</h4>
                                <p>Relleno de salmón ahumado, palta y phialdelphia.</p>
                            </div>
                            <div className="card">
                                <h4>Kunsei </h4>
                                <p>Roll de tamago relleno de salmón ahumado, philadelphia y portobellos. Bañado en salsa de maracuyá y coronado con ají Merken.</p>
                            </div>
                        </div>
                </div>
                
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product6;