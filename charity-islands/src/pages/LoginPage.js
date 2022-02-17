import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  let profile = "/UserPage/";
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="userName"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="password" placeholder="Password" />
        <button
          onClick={() => {
            profile = profile + name;
            navigate(profile);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
