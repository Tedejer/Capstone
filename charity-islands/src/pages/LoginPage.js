import React, { useState } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  let profile = "/UserPage/";
  const [name, setName] = useState("");

  return (
    <div>
      <Form className="login_pos">
        <div className=" d-flex justify-content-center">
          <h1>Login</h1>
        </div>
        <FormGroup className="mb-3" controlId="formBasicUsername">
          <FormLabel>Username:</FormLabel>
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicUsername">
          <FormLabel>Password:</FormLabel>
          <Form.Control type="password" placeholder="Enter password" />
        </FormGroup>

        <div className="mt-5 text-center">
          <Button
            onClick={() => {
              profile = profile + name;
              navigate(profile);
            }}
          >
            Login
          </Button>{" "}
          <Button
            onClick={() => {
              navigate("/Register");
            }}
          >
            Register
          </Button>{" "}
        </div>
      </Form>
      {/* end form */}
    </div>
  );
}

export default LoginPage;
