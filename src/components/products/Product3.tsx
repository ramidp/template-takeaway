import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ProductContainer from './estiloproducts'

const Product3 = () => {

    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/tabla-especial.jpg');
            localStorage.setItem('image3', image);
            getSavedImage(localStorage.getItem('image3'))
    },[savedImage])

    return (
        <ProductContainer id="platoprincipal">
        <div className="p-0">
            <div className="row m-0 p-0">
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1 >Platos Principales</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Ceviche</h4>
                                <p>Carne a elección, palta, batatas fritas, cebolla morada y jengibre, marinados en jugo de cítricos. Opciones carne: Lenguado, salmón, Camarones.</p>
                            </div>
                            <div className="card">
                                <h4>Sake Yaki</h4>
                                <p>Salmón grillado, laqueado en salsa Teriyaki. Acompañado por verduras grilladas y arroz blanco.</p>
                            </div>
                            <div className="card">
                                <h4>Haku Grill</h4>
                                <p>Salteado de arroz, verduras grilladas, cubos de lenguado, camarones y crema de ostras</p>
                            </div>
                            <div className="card">
                                <h4>Pollo Agridulce</h4>
                                <p>Cubos de pollo robozados y fritos, vegetales y mani, salteados en salsa agridulce. Acompañado por arroz blanco.</p>
                            </div>
                            <div className="card">
                                <h4>Ravioles de Salmón</h4>
                                <p>Ravioles de salmón en deliciosa crema de ostras, portobellos y cebolla de verdeo.</p>
                            </div>
                            <div className="card">
                                <h4>Fettuccinis de Mar</h4>
                                <p>Fettuccinis con tinta de calamar en crema de ostras con camarones y verdeo</p>
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
 
export default Product3;