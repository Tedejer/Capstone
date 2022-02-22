import React from "react";
import logo from "../assets/brand_dark.svg";

// Components
import AdvSearch from "../components/AdvSearch.js";

function HomePage() {
  return (
    <div class="Home-Page">
      <div class="Logo">
        <img src={logo} alt="Charity Islands" width="120" height="120" />
        <span class="Home-Page-Title">Charity Islands</span>
      </div>
      <div class="Search-Bar">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      <AdvSearch />
    </div>
  );
}

export default HomePage;
