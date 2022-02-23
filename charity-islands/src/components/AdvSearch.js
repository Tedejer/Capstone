import React, { useState } from "react";
import {
  Button,
  Collapse,
  Form,
  FormControl,
  FormCheck,
  FormText,
  Col,
  Row,
} from "react-bootstrap";

function AdvSearch() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        advance
      </Button>
      <Collapse in={open}>
        <div className="">
          <Form>
            <Row>
              <FormText>Type</FormText>
              <Col>
                <Form.Check type="checkbox" label="Environment" />
                <Form.Check type="checkbox" label="Food Bank" />
                <Form.Check type="checkbox" label="Homeless" />
                <Form.Check type="checkbox" label="Animal" />
              </Col>
            </Row>
            <Row>
              <FormText>Time</FormText>
              <Col>
                <Form.Check type="checkbox" label="Morning" />
                <Form.Check type="checkbox" label="Afternoon" />
              </Col>
            </Row>
          </Form>
        </div>
      </Collapse>
    </div>
  );
}

export default AdvSearch;
