import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product1 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/tabla-small.jpg');
            localStorage.setItem('image-tabla1', image);
            getSavedImage(localStorage.getItem('image-tabla1'))
    },[savedImage])

    return (
        <ProductContainer id="tablascompletas">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Tablas Small</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Surtida(10)</h4>
                                <p>10 Piezas a elección del Sushiman</p>
                            </div>
                            <div className="card">
                                <h4>Small (10)</h4>
                                <p>2 New York Phila, 2 Teriyaki, 2Honey, 2Buenos Aires, 2 Sakemaki. </p>
                            </div>
                            <div className="card">
                                <h4>A Elección (15)</h4>
                                <p>5 Clásicos, 5 Especiales, 5 Premium.</p>
                            </div>
                            <div className="card">
                                <h4>Eco (15)</h4>
                                <p>5 California, 5 Honey, 5 Teriyaki.</p>
                            </div>
                            <div className="card">
                                <h4>Pop (15)</h4>
                                <p>5 New York Phila, 5 Crazy, 5 Tamago.</p>
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
 
export default Product1;