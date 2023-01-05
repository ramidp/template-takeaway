import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { ContextHide } from '../../context/HideContext';
import ProductContainer from './estiloproducts'

const Product8 = () => {

    const {changeImage, setChangeImage} = useContext<any>(ContextHide)
    const [savedImage, getSavedImage] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/makis.jpg');
            localStorage.setItem('image8', image);
            getSavedImage(localStorage.getItem('image8'))
    },[savedImage])

    const [savedImage2, getSavedImage2] = useState<string | any>('')

    useEffect(() => {
            const image = require('../../images/photos/smaller/hot-rolls.jpg');
            localStorage.setItem('image82', image);
            getSavedImage2(localStorage.getItem('image82'))
    },[savedImage2])

    const handleChangeImage = () => {
        setChangeImage(!changeImage)
    }
    setTimeout(handleChangeImage,4000)

    return (
        <ProductContainer id="maki-hot">
        <div className="p-0">
            <div className="row m-0 p-0">
            <div className="foto col-6 p-0">
                {changeImage == 0 ? 
                    <img src={savedImage} alt="" />
                    :
                    <img src={savedImage2} alt="" />
                }
                </div>
                <div className="product-text col-12 col-lg-6">
                        <div className="title">
                            <h1>Maki Rolls</h1>
                            <hr />
                        </div>
                        <div className="card-box">
                            <div className="card">
                                <h4>Ebimaki</h4>
                                <p>Relleno de langostinos, palta y philadelphia. Recubierto con alga Nori.</p>
                            </div>
                            <div className="card">
                                <h4>Sakemaki</h4>
                                <p>Relleno de salmón, palta y philadelphia. Recubierto con alga Nori.</p>
                            </div>
                            <div className="card">
                                <h4>Kunseimaki</h4>
                                <p>Relleno de salmón ahumado, palta y philadelphia. Recubierto con alga Nori.</p>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="title">
                                <h1>Hot Rolls</h1>
                                <hr />
                            </div>
                            <div className="card-box">
                                <div className="card">
                                    <h4>Boston</h4>
                                    <p>Roll rebozado y frito. Relleno de salmón cocido con chaddar y provezal.</p>
                                </div>
                                <div className="card">
                                    <h4>Ebi Hot</h4>
                                    <p>Roll rebozado y frito. Relleno de salmón ahumado, langostinos y cheddar.</p>
                                </div>
                                <div className="card">
                                    <h4>Milano</h4>
                                    <p>Roll rebozado y frito. Relleno de salmón ahumado, muzzarella con albahaca y tomates secos.</p>
                                </div>
                                <div className="card">
                                    <h4>Hot SPF</h4>
                                    <p>Roll rebozado y frito. Relleno de salmón, palta y philadelphia.</p>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
         </div>
        </ProductContainer>
    );
}
 
export default Product8;