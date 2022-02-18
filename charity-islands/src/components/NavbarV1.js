import React from "react";
import { Route, Routes, Router, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";

var brand_light = require("../assets/brand_light.svg");

function NavbarV1() {
  return (
    <div>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={brand_light}
                  alt="Charity Islands"
                  width="40"
                  height="40"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/AboutPage">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/LoginPage">
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavbarV1;
export { brand_light };
