import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const OffCanvasExample = ({ name, ...props } : any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <OffCanvasContainer>

      <Button onClick={handleShow} className="me-2">
        |||
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
             <div className="menu-closemark">
              <HashLink onClick={handleClose} to={{pathname:"./Products", hash:'#menu'}}><h3>Menu</h3></HashLink>
              <p onClick={handleClose}>X</p>
              </div>
              <li>
                <Link onClick={handleClose} to="./Products/">Entradas</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/platos-al-wok">Platos al Wok</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/platos-principales">Platos Principales</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/platos-infantiles">Menu Infantil</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/rolls-clasicos">Rolls Clásicos</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/rolls-especiales">Rolls Especiales</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/rolls-premium">Rolls Premium</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/maki-hot-rolls">Maki / Hot Rolls</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/veggie-rolls">VeggieRolls</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/sashimi-nigiris">Sashimi / Nigiris</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/geishas-temakis">Geishas / Temakis</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/chirashis">Chirashis</Link>
              </li>
              <HashLink onClick={handleClose} to={{pathname:"./Promociones", hash:'#tablas'}}><h3>Tablas</h3></HashLink>
              <li>
                <Link onClick={handleClose} to="./Products/tablas">Small</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/tablas2">Mid</Link>
              </li>
              <li>
                <Link onClick={handleClose} to="./Products/tablas3">Large</Link>
              </li>
              <Link onClick={handleClose} to='./Contacto'><h3>Contacto</h3></Link>
        </Offcanvas.Body>
      </Offcanvas>
    </OffCanvasContainer>
  );
}

const OffCanvasTop = () => {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export {OffCanvasExample, OffCanvasTop}

const OffCanvasContainer = styled.div`
  .btn {
    background-color: ${props => props.theme.primary};
    border: none;
    a {
      color: ${props => props.theme.fontPrim}
    }
  }

  display: none;
  @media (max-width: 991px) {
  display: inline-block; 
  }

  
  `