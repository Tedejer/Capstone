import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div class="register_body">
      <div class="register_positioning">
        <div class="p-3 py-5" data-selected="true" data-label-id="0">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="text-center">Create Your Account</h3>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Username</label>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                value=""
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email address"
                value=""
              />
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-12">
              <label class="labels">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                id="password"
                onkeyup="check();"
              />
              <br />
              <label class="labels">Confirm Password</label>
              <input
                type="confirm_password"
                class="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                id="confirm_password"
                onkeyup="check();"
              />
              <span id="message"></span>
            </div>
          </div>
          <div class="mt-5 text-center">
            <div>
              <Link as={Link} to="/">
                <button class="btn btn-primary register-button" type="button">
                  Register
                </button>
              </Link>
              <Link as={Link} to="/">
                <button class="btn btn-secondary cancel-button" type="button">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
