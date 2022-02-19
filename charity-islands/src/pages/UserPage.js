import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  let { username } = useParams();
  return (
    <div className="d-flex justify-content-center">
      <h1> {username} Profile Page</h1>
      <div className="">
        <img
          style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
      </div>
    </div>
  );
}
export default UserPage;
