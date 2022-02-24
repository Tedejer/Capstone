import React from "react";
import logo from "../assets/name_flat_color_style.png";

// Components
import AdvSearch from "../components/AdvSearch.js";

function HomePage() {
  return (
    <div class="home-body">
      <div className="container-home">
          <div class="Logo">
            <img src={logo} alt="Charity Islands" width="500" height="160" />
            {/* <span class="Home-Page-Title">Charity Islands</span> */}
          </div>
          <div class="Search-Bar">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-primary search-button" type="submit">Search</button>
            </form>
          </div>
          <div class="AdvSearch-button">
            <AdvSearch/>
          </div>
          
      </div>
    </div>
  );
}

export default HomePage;
