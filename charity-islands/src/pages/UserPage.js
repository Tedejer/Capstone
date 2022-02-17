import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  let { username } = useParams();
  return (
    <div>
      <h1>{username}'s Profile Page</h1>
      <div className="profile">
        {username} is a wonderful person who appreciates d's jokes. Whenever
        {username} makes a d's joke everyone and anyone laughs. {username} is a
        total chad among chads.
      </div>
    </div>
  );
}

export default UserPage;
