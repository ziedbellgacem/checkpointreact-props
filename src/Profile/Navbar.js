import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'


function NavBar(){
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React Js</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">JSX</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Components</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Props</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">State</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Hooks</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Router</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default NavBar;