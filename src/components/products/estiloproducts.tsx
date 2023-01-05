import styled from "styled-components";

const ProductContainer = styled.div`
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.fontPrim};
    width: 100%;
    height: 100%;

    .product-text {
        
        height: 100vh;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 130px 50px 50px 50px;
        background: ${props => props.theme.secondary};

        @media (max-width: 467px) {
            padding: 100px 50px 50px 50px;
        }

    .title {
        width: 100%;
    }

    .card-box {
    max-height: 100vh;
    overflow: auto;
    }
    .card {
            background-color: inherit;
            border: none;
            max-width: 100%;
            display: flex;
        }
        h4 {
            color : ${props => props.theme.fontFour};
            font-size: 20px;
        }
        p {
            font-size: 15px;
        }
        h1 {
            font-size: 30px;
        }
        h1  {
        @media (max-width: 512px)    {
            font-size: 24px;
            }
        }
        h4 {
            @media (max-width: 512px)    {
            font-size: 16px;
            }
        }
        p {
            @media (max-width: 512px)    {
            font-size: 13px;
            }
        }
    
        h1  {
        @media (min-width: 513px) and (max-width: 1165px)    {
            font-size: 26px;
            }
        }
        h4 {
            @media (min-width: 513px) and (max-width: 1165px)    {
            font-size: 18px;
            }
        }
        p {
            @media (min-width: 513px) and (max-width: 1165px)    {
            font-size: 13px;
            }
        }
    }


    .foto {
        display: flex;
        font-size: 30px;
        justify-content: center;
        align-items: center;
        /* border: 1px solid white; */
        
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        object-position: 50% 50%;
        transition: 1s ease all;
        filter:contrast(80%);
        animation-name: contrast;
        animation-duration: 4s; 
        animation-iteration-count: infinite;
        @keyframes contrast {
            0% {filter: contrast(80%)}
            50% {filter: contrast(30%)}
            100% {filter: contrast(80%)}
        }

    @media (max-width: 991px) {
        display: none;
        }
    }
`

export default ProductContainer