import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  let { username } = useParams();
  return (
    <div>
      <h1>{username}'s Profile Page</h1>
    </div>
  );
}

export default UserPage;
