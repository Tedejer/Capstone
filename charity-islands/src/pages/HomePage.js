import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/name_flat_color.png";
import { Button, FormControl } from "react-bootstrap";

// Components
import AdvSearch from "../components/AdvSearch.js";

function HomePage() {
  let navigate = useNavigate();
  let searchElem = "/ResultsPage/";
  const [elem, setElem] = useState("");

  return (
    <div class="home-body">
      <div className="container-home">
        <div className="Logo-Container">
          <img className="Logo" src={logo} alt="Charity Islands" />
        </div>
        <div class="Search-Bar">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // value={searchElem}
              onChange={(e) => setElem(e.target.value)}
            />
            <Button
              variant="outline-success"
              type="submit"
              onClick={() => {
                searchElem = searchElem + elem;
                navigate(searchElem);
              }}
            >
              Search
            </Button>
          </form>
          <div className="AdvSearch-button">
            <AdvSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
