import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  let { username } = useParams();
  return (
    <div className="profile-body">
      <h1 class="welcome-msg"> Welcome to Charity Islands</h1>
      <img
        class="profile_pic"
        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/45434/134438/main-image"
      />
      <div className="container">
        <h1 class="username_text">{username}</h1>
        <h3 class="email_text">{username}@email.com</h3>
        <h1 class="profile_points">Points:</h1>
      </div>

      <div className="">
        <table class="history_table">
          <tr>
            <th>Group: </th>
            <th>Location: </th>
            <th>Type: </th>
            <th>Amount Donated: </th>
            <th>Hours worked: </th>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default UserPage;
