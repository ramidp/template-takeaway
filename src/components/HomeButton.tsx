import styled from 'styled-components';
import {ReactComponent as UpArrowLogo} from '../images/icons/arrow-up.svg'


const HomeButton = () => {
    return ( 
        <HomeButtonCotainer>
            <a href="#top">
                <UpArrowLogo/>
            </a>
        </HomeButtonCotainer>
     );
}
 
export default HomeButton;


const HomeButtonCotainer = styled.div`
    position: fixed;
    z-index: 1000;
    right: 1%;
    bottom: 3%;

    a {
        background-color: ${props => props.theme.primary};
        padding: 10px;
        border-radius: 10px;
        svg {
            filter: invert(100%);
            height: 22px;
            width: 22px;
        }
        &:hover {
            filter: contrast(50%);
        }
    }
`