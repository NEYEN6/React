import logo from '../imagenes/logo.png';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import CartWidget from '../CartWitdget/CartWidget';
import {Link, Router} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    
    <Navbar  expand="lg" className='navBar'>
      <Container fluid>
        <Navbar.Brand as={Link} to ={"/"} ><img src={logo} alt="#" className="logo" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll>

            <NavDropdown title="Hombres" id="navbarScrollingDropdown">
              
              <NavDropdown.Item as={Link} to ={"/tienda/Zapatillas"} className='titulo'>
              Zapatillas
              </NavDropdown.Item>
              <NavDropdown.Item className='titulo'>
              Ojotas
              </NavDropdown.Item>
              <NavDropdown.Item className='titulo'>
              Sandalias
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown  title="Mujeres" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to ={"/tienda/Remeras"} className='titulo'>Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to ={"/tienda/Pantalones"} className='titulo'>Pantalones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to ={"/tienda/Buzos"} className='titulo'>Buzos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to ={"/tienda/Camperas"} className='titulo'>Camperas</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link as={Link} to ={"/tienda"} className='titulo'>Todos </Nav.Link> 
          </Nav>

          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder= "Ingresar articulo"
              className="me-2"
              aria-label="Search"
            />        
            <Button variant="outline-success" className='botonBuscar'>Buscar <FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
          </Form>  

          
          <NavLink to="/cart"><CartWidget/></NavLink>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavScrollExample;