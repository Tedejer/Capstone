import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import AboutDes from "../components/AboutDes";

function AboutPage() {
  return (
    <div className="about-body">
      <Container fluid="md">
        <Row className="justify-content-center">
          <Col className="about-pad" md="2">
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="about-pad">
              <Col>
                <h4>What is Charity Islands?</h4>
              </Col>
              <Col md="6">
                <p>
                  Charity Islands is a site that aims to help a person easily
                  find and determine what charity foundation they would like to
                  donate to or what form of community service they would like to
                  participate in.
                </p>
              </Col>
            </Row>

            <Row className="about-pad">
              <Col>
                <h4>Can Charity Islands be used nationwide?</h4>
              </Col>
              <Col md="6">
                <p>No, Charity Islands is based in Ventura County only.</p>
              </Col>
            </Row>

            <Row className="about-pad">
              <Col>
                <h4>How was Charity Islands created?</h4>
              </Col>
              <Col md="6">
                <p>
                  Charity Islands came from the idea that people can be selfish.
                  The site would help those people feel less self-centered by
                  giving them opportunities of good deeds.
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <AboutDes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
