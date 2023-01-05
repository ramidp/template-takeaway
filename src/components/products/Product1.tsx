import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useContext } from 'react';
import ProductContainer from './estiloproducts'
import { ContextPhotos } from '../../context/LoadPhotosContext';

const Product1 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/entradas.jpg');
            localStorage.setItem('image1', image);
            getSavedImage(localStorage.getItem('image1'))
    },[savedImage])


    return (
        <ProductContainer>
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Entradas</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Degustación de Entradas</h4>
                                <p>Mix de: Ebi Furai (60gr), Ika Furai (150gr), Harumakis (2u), Gyozas (3u) y Salmón Crispy (2u).</p>
                            </div>
                            <div className="card">
                                <h4>Ika Furai</h4>
                                <p>(Rabas) Aros de calamar rebozados y fritos.Porción de 250gr.</p>
                            </div>
                            <div className="card">
                                <h4>Ebi Furai</h4>
                                <p>Langostinos rebozados y fritos. Con miel de maracuyá. Porción de 130gr.</p>
                            </div>
                            <div className="card">
                                <h4>Harumakis de Verdura</h4>
                                <p>Arrolladitos primavera rellenos de verdura. Porción 2u.</p>
                            </div>
                            <div className="card">
                                <h4>Harumakis de Carne</h4>
                                <p>Arrolladitos primavera rellenos de carne. Porción 2u.</p>
                            </div>
                            <div className="card">
                                <h4>Harumakis de Salmón</h4>
                                <p>Arrolladitos primavera rellenos de salmón. Porción 2u.</p>
                            </div>
                            <div className="card">
                                <h4>Gyozas</h4>
                                <p>Bocaditos fritos de cerdo y hakusai. Bañados con salsa Teriyaki. Porción 5u.</p>
                            </div>
                            <div className="card">
                                <h4>Salmón Crispy</h4>
                                <p>Albondigas de salmón y cheddar, rebozadas y fritas. Bañadas con salsa Teriyaki. Porción 4u.</p>
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