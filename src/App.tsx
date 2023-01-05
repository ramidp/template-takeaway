import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Main from './components/Main';
import Products from './components/Products';
import Promociones from './components/Promociones';
import Footer2 from './components/Footer2';
import HomeButton from './components/HomeButton';


const App = () => {

  const theme = {
      primary: '#9E0510',
      secondary: 'black',
      tertiary: 'white',
      fourth: 'gray',
      fontPrim: 'white',
      fontSecond: 'black',
      fontTert: 'gray',
      fontFour: '#9E0510',
      mainFont: "Red Hat Display", // Fuente 1
      main2Font: 'Arial',
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
            <AppContainer className="col-12">
              <HomeButton/>
              <Menu/>
                  <Routes>
                    <Route path='*' element={<Main/>}/>
                    <Route path="/Products/*" element={<Products/>}/>
                    <Route path="/Promociones" element={<Promociones/>}/>
                    <Route path="/Contacto" element={<Footer2/>}/>
                  </Routes>
                <Footer/>
            </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
     * {
      font-family: ${props => props.theme.mainFont}; // Aplica a TODA la App la fuente.
     }
`