import styled from "styled-components";
import Product1 from "./products/Product1";
import Product2 from "./products/Product2";
import Product3 from "./products/Product3";
import { Route, Routes } from "react-router-dom";
import Product4 from "./products/Product4";
import Product5 from "./products/Product5";
import Product6 from "./products/Product6";
import Product7 from "./products/Product7";
import Product8 from "./products/Product8";
import Product9 from "./products/Product9";
import Product10 from "./products/Product10";
import Product11 from "./products/Product11";
import Product12 from "./products/Product12";
import Tabla1 from "./products/Tabla1";
import Tabla2 from "./products/Tabla2";
import Tabla3 from "./products/Tabla3";


const Products = () => {

    return ( 
        <>
        <span id="menu"></span>
        <span id="menu2"></span>
        <span id="tablas"></span>
            <ProductsContainer>
                    <Routes>
                        <Route path="/" element={<Product1/>}/>
                        <Route path="/platos-al-wok" element={<Product2/>}/>
                        <Route path="/platos-principales" element={<Product3/>}/>
                        <Route path="/platos-infantiles" element={<Product4/>}/>
                        <Route path="/rolls-clasicos" element={<Product5/>}/>
                        <Route path="/rolls-especiales" element={<Product6/>}/>
                        <Route path="/rolls-premium" element={<Product7/>}/>
                        <Route path="/maki-hot-rolls" element={<Product8/>}/>
                        <Route path="/veggie-rolls" element={<Product9/>}/>
                        <Route path="/sashimi-nigiris" element={<Product10/>}/>
                        <Route path="/geishas-temakis" element={<Product11/>}/>
                         <Route path="/chirashis" element={<Product12/>}/>
                        <Route path="/tablas" element={<Tabla1/>}/>
                        <Route path="/tablas2" element={<Tabla2/>}/>
                        <Route path="/tablas3" element={<Tabla3/>}/>
                    </Routes>
            </ProductsContainer>
        </>
     );
}
 
export default Products;

const ProductsContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.secondary};
    height: 100vh;
    margin-top: 92px;

    span {
        position: relative;
        top: 100%;
    }

@media (max-width: 466px) {
    padding-top: 30px;
}
@media (max-width: 991px) {
    margin-top: 0;
}
   
`