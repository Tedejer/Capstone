import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  let { username } = useParams();
  return (
    <div className="profile-body">
      <div class="profile_positioning">
        <h1 class="profile-title">Edit {username}'s Profile Settings</h1>

        <div >
          <img class="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
        </div>
        
        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Name</label>
            <input type="text" class="form-control" placeholder="Name" value=""/>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Email Address</label>
            <input type="text" class="form-control" placeholder="Email Address" value=""/>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Password</label>
            <input type="password" class="form-control" name="password" placeholder="Password" id="password" onkeyup="check();"/>
            <br />
            <label class="labels">Confirm Password</label>
            <input type="confirm_password" class="form-control" name="confirm_password" placeholder="Confirm Password" id="confirm_password" onkeyup="check();"/>
            <span id="message"></span>
          </div>
        </div>

        <div class="mt-3 text-center">
            <div>
              <Link as={Link} to="/">
                <button class="btn btn-primary save-button" type="button">Save Changes</button>
              </Link>
              <Link as={Link} to="/">
                <button class="btn btn-secondary cancel-button" type="button">Cancel</button>
              </Link>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;