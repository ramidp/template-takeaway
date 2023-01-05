import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ProductContainer from './estiloproducts'

const Product2 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/entradas.jpg');
            localStorage.setItem('image2', image);
            getSavedImage(localStorage.getItem('image2'))
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
                            <h1>Platos al Wok</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Yakisoba</h4>
                                <p>Salteado de fideos, vegetales y carne a elección. Opciones carne: Pollo, Cerdo, Lomo, Camarones, Salmón.</p>
                            </div>
                            <div className="card">
                                <h4>Yakimeshi</h4>
                                <p>Salteado de arroz, huevo, vegetales y carne a elección. Opciones carne: Pollo, Cerdo, Lomo, Camarones, Salmón.</p>
                            </div>
                            <div className="card">
                                <h4>Yasaitame</h4>
                                <p>Salteado de arroz, vegetales y carne a elección. Opciones carne: Pollo, Cerdo, Lomo, Camarones, Salmón.</p>
                            </div>
                            <div className="card">
                                <h4>Wok Peruano</h4>
                                <p>Salteado de lomo, vegetales, maní y papas fritas. Acompañado por arroz blanco.</p>
                            </div>
                            <div className="card">
                                <h4>Vegan Wok</h4>
                                <p>Vegetales salteados. Opcional: fideos o arroz.</p>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product2;