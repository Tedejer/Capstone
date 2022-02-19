import React, { useState } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  let profile = "/UserPage/";
  const [name, setName] = useState("");

  return (
    <div>
      <div className="register_positioning">
        <h3 className="">Login</h3>
      </div>

      <Form className="register_positioning">
        <FormGroup className="mb-3" controlId="formBasicUsername">
          <FormLabel>Username</FormLabel>
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicUsername">
          <FormLabel>Password</FormLabel>
          <Form.Control type="password" placeholder="Enter password" />
        </FormGroup>

        <div className="mt-5 text-center">
          <Button
            className="btn-primary"
            onClick={() => {
              profile = profile + name;
              navigate(profile);
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              navigate("/Register");
            }}
          >
            Register
          </Button>
        </div>
      </Form>
      {/* end form */}
    </div>
  );
}

export default LoginPage;
