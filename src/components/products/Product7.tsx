import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product7 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/rolls-premium.jpg');
            localStorage.setItem('image7', image);
            getSavedImage(localStorage.getItem('image7'))
    },[savedImage])

    return (
        <ProductContainer id="rolls-especiales">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Rolls Premium</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Ceviche </h4>
                                <p>Relleno de salmón y pescado blanco marinados en leche de tigre. Recubierto con ralladura de naranja y coronado con salsa de ají amarillo, cilantro, cebolla morada y batata crocante.</p>
                            </div>
                            <div className="card">
                                <h4>Inca </h4>
                                <p>Relleno de philadelphia, palta y mango. Recubierto con pescado blanco flambeado. Bañado con salsa de mango picante y caviar negro.</p>
                            </div>
                            <div className="card">
                                <h4>Ikkenai</h4>
                                <p>Roll de tamago relleno de salmón , langostinos y palta. Recubierto con philadelphia y coronado con praliné de sésamo.</p>
                            </div>
                            <div className="card">
                                <h4>Ikura</h4>
                                <p>Relleno de tartar de pulpo, palta y philadelphia. Coronado con caviar de salmón</p>
                            </div>
                            <div className="card">
                                <h4>Masago</h4>
                                <p>Relleno de salmón y palmitos. Coronado con caviar rojo y negro.</p>
                            </div>
                            <div className="card">
                                <h4>Merken</h4>
                                <p>Relleno de langostinos, mango y philadelphia. Recubierto con salmón flambeado, ají Merken y praliné de sésamo.</p>
                            </div>
                            <div className="card">
                                <h4>Sweet Dream </h4>
                                <p>Roll de tamago relleno palta, ananá, philadelphia. Recubierto con salmón. Coronado con batata crocante y bañado en miel de maracuyá.</p>
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
 
export default Product7;