import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product5 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/rolls-clasicos-especiales.jpg');
            localStorage.setItem('image5', image);
            getSavedImage(localStorage.getItem('image5'))
    },[savedImage])

    return (
        <ProductContainer id="entrada">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Rolls Clásicos</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>California</h4>
                                <p>Relleno de kanikama, palta y philadelphia.</p>
                            </div>
                            <div className="card">
                                <h4>Futurama</h4>
                                <p>Relleno de langostinos rebozados y fritos y philadelphia. Bañado en salsa de miel y mostaza.</p>
                            </div>
                            <div className="card">
                                <h4>Honey</h4>
                                <p>Relleno de salmón cocido en miel y jengibre. Recubierto con batata crocante y bañado en salsa dulce.</p>
                            </div>
                            <div className="card">
                                <h4>New York Phila</h4>
                                <p>Relleno de salmón, palta y philadelphia..</p>
                            </div>
                            <div className="card">
                                <h4>Philadelphia</h4>
                                <p>Relleno de salmón y philadelphia.</p>
                            </div>
                            <div className="card">
                                <h4>Teriyaki</h4>
                                <p>Relleno de salmón cocido en salsa teriyaki, palta y philadelphia. Recubierto de tamago.</p>
                            </div>
                            <div className="card">
                                <h4>Tamago</h4>
                                <p>Roll de tamago relleno de salmón y philadelphia.</p>
                            </div>
                            <div className="card">
                                <h4>Tuna Mix</h4>
                                <p>Relleno de atún con philadelphia.</p>
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
 
export default Product5;