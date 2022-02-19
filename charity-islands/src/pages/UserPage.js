import React from "react";
import "../styling/UserPage.css";

function UserPage() {
  return (
    <div className="profile-body">
      <h1> {username} Profile Page</h1>
      <div class="profile_positioning">
        <div
          style={{
            display: "flex",
            justifyContent: "Center",
            alignItems: "center",
          }}
        >
          <h1>Edit Profile</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="JohnDoe"
              value=""
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Email Address</label>
            <input
              type="text"
              class="form-control"
              placeholder="JohnDoe@example.com"
              value=""
            />
          </div>
        </div>

        <div class="row mt-3">
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
        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Change Profile Picture</label>
            <input
              type="text"
              class="form-control"
              placeholder="Upload Profile Picture"
              value=""
            />
          </div>
        </div>
        <div class="mt-3 text-center">
          <button class="btn btn-primary profile-button" type="button">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserPage;
