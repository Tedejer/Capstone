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
            <FormLabel>Category:</FormLabel>
            <Row>
              <Col>
                <Form.Check type="checkbox" label="Environment" />
              </Col>
              <Col>
                <Form.Check type="checkbox" label="Food Bank" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Check type="checkbox" label="Homeless" />
              </Col>
              <Col>
                <Form.Check type="checkbox" label="Health" />
              </Col>
            </Row>
            <Form>
              <FormLabel>Time:</FormLabel>
              <Form.Control
                className="timeBox"
                size="sm"
                placeholder="eg. 5:30pm"
                type="time"
              ></Form.Control>
              <Form.Text id="passwordHelpBlock" muted>
                For example 3:00 PM
              </Form.Text>
            </Form>
          </Container>
        </div>
      </Collapse>
    </div>
  );
}

export default AdvSearch;
