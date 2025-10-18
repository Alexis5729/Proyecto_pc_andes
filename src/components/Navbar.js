import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarPrincipal(){
    return(
        <Navbar>
            <Container>
            <Navbar.Brand href="#inicio">PC ANDES</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">                        
                        <Nav.Link href="#caracteristicas">Caracteristicas</Nav.Link>
                        <Nav.Link href="#demo">Ver Demo</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}//fin NavbarPrincipal

export default NavbarPrincipal;