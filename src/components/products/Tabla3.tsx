import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product1 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/tabla-especial.jpg');
            localStorage.setItem('image-tabla3', image);
            getSavedImage(localStorage.getItem('image-tabla3'))
    },[savedImage])

    return (
        <ProductContainer id="tablas-especiales">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Tablas Large</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                        <div className="card">
                                <h4>Akita (30)</h4>
                                <p>5 Honey, 5 California, 5 Buenos Aires, 5 Ebimaki, 5 Tuna Mix, 3 Nigiris de Langostino, 2 Geishas de Salmón</p>
                            </div>
                            <div className="card">
                                <h4>Shogun (30)</h4>
                                <p>5 New York Phila, 5 Tamago, 5 Avocado, 5 Crazy, 55 Smoked, 3 Nigiris de Salmón, 2 Geishas de Ahumado.</p>
                            </div>
                            <div className="card">
                                <h4>Ikkenai (30)</h4>
                                <p>5 Ceviche, 5 Tempura, 5 Kunsei, 5 Merken, 5 Mexican, 2 Geishas de Salmón, 2 Nigiris Inca.</p>
                            </div>
                            <div className="card">
                                <h4>Special (40)</h4>
                                <p>5 Ikkenai, 5 Sweet Dream, 5 Merken, 5 Brooklyn, 5 Ukura, 5 Inca, 3 Sashimis Spicy, 4 Geishas de Salmón, 3 Nigiris de Ahumado.</p>
                            </div>
                            <div className="card">
                                <h4>Premium (50)</h4>
                                <p>5 Ceviche, 5	Mexican, 5 Tempura, 5 Inca, 5 Avocado, 5 Crazy, 5 Ikkenai, 5 Kunsei, 3 Sashimi de Salmón, 3	Geishas de Ahumado, 2 Nigiris de Salmón, 2 Nigiris de Langostino.</p>
                            </div>
                            <div className="card">
                                <h4>Deluxe (70)</h4>
                                <p>5 Sweet Dream, 5	Ikura, 5 Avocado, 5	Mexican, 5 Brooklyn, 5 Merken, 5 Masago, 5 Inca, 5 Ceviche, 5 Tempura, 4 Sashimis de Salmón, 3 Geishas de Salmón, 3 Geishas de Ahumado, 4 Nigiris Inca, 3 Nigiris de Salmón, 3 Nigiris de Ahumado.</p>
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