import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  let { username } = useParams();
  return (
    <div className="profile-body">
      <h1> Welcome to Charity Islands, {username}</h1>
    </div>
  );
}
export default UserPage;
