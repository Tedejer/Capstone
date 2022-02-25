import React, { useState } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/name_flat_color_style.png";

// Components
import AdvSearch from "../components/AdvSearch.js";

function HomePage() {
  let navigate = useNavigate();
  let result = "/ResultsPage/";
  const [name, setName] = useState("");
  
  return (
    <div class="home-body">
      <div className="container-home">
          <div class="Logo">
            <img src={logo} alt="Charity Islands" width="500" height="160" />
            {/* <span class="Home-Page-Title">Charity Islands</span> */}
          </div>
          <div class="Search-Bar">
            
            <Form className="search-result">
              <FormGroup className="mb-3" controlId="formBasicSearchResult">
                <Form.Control type="search" placeholder="Search" value={name} onChange={(e) => setName(e.target.value)}/>
              </FormGroup>
              <div class="mt-5 text-center search-button">
                <Button onClick={() => {
                  result = result + name;
                  navigate(result);
                }}>Search</Button>
              </div>
            </Form>
          </div>
          <div class="AdvSearch-button">
            <AdvSearch/>
          </div>
          
      </div>
    </div>
  );
}

export default HomePage;
