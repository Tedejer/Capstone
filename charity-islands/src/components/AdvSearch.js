import React, { useState } from "react";
import {
  Button,
  Collapse,
  Form,
  FormControl,
  FormCheck,
  FormLabel,
  FormText,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function AdvSearch() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        className="btn"
        variant="primary"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Advance
      </Button>
      <Collapse in={open}>
        <div className="">
          <Container fluid="sm">
            <Form>
              <Form.Group>
                <Row>
                  <FormLabel column="lg">Categories:</FormLabel>
                </Row>
                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Profit" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Non-Profit" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Agricuture" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Children and Youth" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Comunity Development" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Education" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Environment" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Health" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Wildlife Protection" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Women's Empowerment" />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group>
                <Row>
                  <FormLabel column="lg">CSUCI:</FormLabel>
                </Row>
                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Student Life" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Arts" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Mental Health" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="Personal Welfare" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check type="checkbox" label="Education" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <FormLabel column="lg">Time:</FormLabel>
                </Row>

                <Row>
                  <Col md={3}>
                    <Form.Control
                      size="sm"
                      placeholder="eg. 5:30pm"
                      type="time"
                    ></Form.Control>
                  </Col>
                </Row>
                <FormText id="passwordHelpBlock" muted>
                  E.g. 3:00 PM
                </FormText>
              </Form.Group>
            </Form>
          </Container>
        </div>
      </Collapse>
    </div>
  );
}

export default AdvSearch;
