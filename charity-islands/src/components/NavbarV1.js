import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
//import { brand_dark } from '../assets/brand_dark.svg';

var brand_light = require('../assets/brand_light.svg');

function NavbarV1() {
  return (
    <div>
      
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <img src={brand_light} alt="Charity Islands"width="40" height="40"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/AboutPage">About</Nav.Link>
              <Nav.Link href="/LoginPage">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LoginPage">Login</Link>
          </li>
          <li>
            <Link to="/AboutPage">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarV1;
export { brand_light };
