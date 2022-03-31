import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
  FormControl,
} from "react-bootstrap";

// Assets
import logo from "../assets/name_flat_color.png";

function HomePage() {
  let navigate = useNavigate();
  let searchPath = "/ResultsPage/";
  const [elem, setElem] = useState("");

  return (
    <div className="home-body">
      <Container fluid>
        <Row className="justify-content-center AdvSearch-button ">
          <Col md={8}>
            <Image fluid src={logo} alt="Charity Islands" />
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-3">
            <Row>
              <Col xs={{ span: 6, offset: 2 }} md={{ span: 5, offset: 3 }}>
                <FormControl
                  lg
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setElem(e.target.value)}
                ></FormControl>
                <Form.Text>
                  Check our About Page for the categories we offer.
                </Form.Text>
              </Col>
              <Col>
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
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default HomePage;
