import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

// Assets
import logo from "../assets/name_flat_color.png";

// Components
import AdvSearch from "../components/AdvSearch.js";

function HomePage() {
  let navigate = useNavigate();
  let searchPath = "/ResultsPage/";
  const [elem, setElem] = useState("");

  return (
    <div className="home-body">
      <Container fluid>
        <Row className="justify-content-center AdvSearch-button ">
          <Col xs={8}>
            <Image fluid src={logo} alt="Charity Islands" />
          </Col>
        </Row>
        <form>
          <Row className="justify-content-center">
            <Col xs={{ span: 4, offset: 3 }} md={{ span: 5, offset: 3 }}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setElem(e.target.value)}
              />
            </Col>
            <Col xs={4}>
              <Button
                variant="outline-success"
                type="submit"
                disabled={!elem}
                onClick={() => {
                  searchPath = searchPath + elem;
                  navigate(searchPath);
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </form>
        <Row className="justify-content-center">
          <Col className="AdvSearch-button" xs={5} md={6}>
            <AdvSearch />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
