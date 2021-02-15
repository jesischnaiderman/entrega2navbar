
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CartWidget';
import { Link } from "react-router-dom";

import './index.css';
const NavbarComponent = () =>{
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">Gyrokinesis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to={'/'}>Inicio</Link>
        <NavDropdown title="Catalogo" id="collasible-nav-dropdown">
                
                <Link id='RouterNavLink'to={'/category/all'}>todos</Link>
                <NavDropdown.Divider />
                <Link id='RouterNavLink' to={'/category/1'}>categoria1</Link>
                <NavDropdown.Divider />
                <Link id='RouterNavLink' to={'/category/2'}>categoria2</Link>
                </NavDropdown>
        <Link to={'/category/all'}>Productos</Link>
        <Link to={'/carrito'}><CardWidget /></Link>
        <Link to={'/contactos'}>Contactos</Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </>
);
}

export default NavbarComponent;