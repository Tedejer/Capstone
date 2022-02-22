import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/brand_flat.svg";

function NavbarV1() {
  return (
    <Navbar classname="color-nav" bg="dark" variant="dark" expand="sm">
      <Navbar className="Container-fluid">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Charity Islands" width="40" height="40" />
        </Navbar.Brand>
      </Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/LoginPage">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutPage">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Profile">
            Profile
          </Nav.Link>
          {/* Temp Buttons */}
          <Nav.Link as={Link} to="/InfoPage">
            Charity
          </Nav.Link>
          <Nav.Link as={Link} to="/Debug">
            Debug
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarV1;
