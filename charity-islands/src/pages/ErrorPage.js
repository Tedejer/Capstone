import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div class="error-msg">
      <h1>Error: Page not found :(</h1>
        <Link as={Link} to="/">
          <button class="btn btn-primary error-home-button" type="button">
            Back to Home
          </button>
        </Link>
    </div>
  );
}

export default ErrorPage;
