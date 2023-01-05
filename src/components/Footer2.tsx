import styled from "styled-components";
import {ReactComponent as FacebookLogo} from '../images/icons/facebook.svg'
import {ReactComponent as InstagramLogo} from '../images/icons/instagram.svg'

const Footer = () => {

    return ( 
        <>
            <FooterContainer>
                <div className="row p-0 m-auto"> 
                    <div className="social-media justify-content-center col-12 d-flex flex-row pb-5"> 
                     
                     <a href="https://www.facebook.com/ikkenaisushi" target="_blank" >
                         <FacebookLogo/>
                     </a>

                     <a href="https://www.instagram.com/ikkenai_sushi" target="_blank">
                          <InstagramLogo/>
                     </a>
                    </div>

                    <a className="pb-3" href="#getintouch"><h3>Contactanos</h3></a>

                    <div className="col-12">
                        <div className="row">
                            <div className="card col-6 p-3 m-0">
                                <h1>Unite al Staff</h1>
                                <p>Texto para unirte al laburo bla bla bla</p>
                                <p>info@tuvieja.com</p>
                                <a href="">E-MAIL</a>
                                <p>Escribinos para sentirte parte de esta basura</p>
                            </div>
                            <div className="card col-6 p-3 m-0">
                                <h1>Card 2</h1>
                                <p>Texto para otra funcion o idea</p>
                                <p>Aguante tu emprendimiento</p>
                                <a href="">Datos mas</a>
                                <p>Escribinos para sentirte parte de esta basura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: ${props => props.theme.tertiary};
    margin: auto;
    padding: 200px 0;
        a {
            text-align: center;
            text-decoration: none;
            color: ${props => props.theme.fontFour};
        }

    .card {
        gap: 30px;
        border: none;        
        text-align: center;
        height: 50vh;
        border: none;
        background: ${props => props.theme.tertiary};
        color: ${props => props.theme.fontSecond};
   
        a {
            text-decoration: none;
            color: ${props => props.theme.fontFour};
        }
        h1 {
            display: inline;
            font-size: 25px;
            margin: 0;
            font-size: 30px;
        }
    }
    .card-input {
        justify-content: flex-start;

    @media (max-width: 991px) {
        width: 100%!important;
    }
        input {
            width: 70%;
            padding: 10px 0;
            margin: 15px 0;
            &::placeholder {
                    padding-left: 10px;
                    }
        }
    }
    .social-media {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        a svg {
            width: 40px;
            height: 40px;
            &:hover {
                filter: invert(50%);
            }
        }
    }

`