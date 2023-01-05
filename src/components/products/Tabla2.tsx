import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product1 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/tabla-sake.jpg');
            localStorage.setItem('image-tabla2', image);
            getSavedImage(localStorage.getItem('image-tabla2'))
    },[savedImage])

    return (
        <ProductContainer>
        <div className="p-0">
            <div className="row m-0 p-0">
                    <div className="foto col-6 p-0">
                        <img src={savedImage} alt="" />
                    </div>
                    <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Tablas Medium</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Sake (16)</h4>
                                <p>2 Tamago, 2 Honey, 2 New York Phila, 2 Philadelphia, 2 Sakemaki, 2 Sashimis de Salmón, 2 Geishas de Salmón, 2 Nigiris de Salmón.</p>
                            </div>
                            <div className="card">
                                <h4>Kunseisake (16)</h4>
                                <p>2 Teriyaki, 2 Smoked, 2 Brooklyn, 2 Buenos Aires, 2 Kunseimaki, 2 Sashimis de Salmón, 2 Geishas de Salmón, 2 Nigiris de Salmón.</p>
                            </div>
                            <div className="card">
                                <h4>Veggie (16)</h4>
                                <p>2 Yasai, 2 Veggie, 2 Tropic, 2 Mango, 2 Veggie Max, 2 Veganmaki, 2 Geishas de Tamago, 2 Nigiris de Zanahoria.</p>
                            </div>
                            <div className="card">
                                <h4>Hot (20)</h4>
                                <p>5 Boston, 5 Ebi Hot, 5 Milano, 5 Hot SPF.</p>
                            </div>
                            <div className="card">
                                <h4>Roll (25)</h4>
                                <p>5 Crazy, 5 Teriyaki, 5 Tuna Mix, 5 California, 5 New York Phila.</p>
                            </div>
                            <div className="card">
                                <h4>Natori (25)</h4>
                                <p>5 Philadelphia, 5 Teriyaki, 5 Kunsei, 5 Crazy, 3 Nigiris de Salmón, 2 Geishas de Salmón.</p>
                            </div>
                        </div>
                    </div>
               
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product1;