import React, { useState } from "react";
import {  useParams, Link, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

function ResultsPage() {
  let { searchedelem } = useParams();
  let navigate = useNavigate();
  let resultElem = "/InfoPage/";
  resultElem = resultElem + searchedelem;

  let newSearch = "/InfoPage/";
  newSearch = newSearch;

  const [elem, setElem] = useState("");
  return (
    <div>
    <Container fluid>
      <form class="results-search-bar">
        <Row className="justify-content-center">
          <Col xs={{ span: 4, offset: 3}} md={{span: 5, offset: 3}}>
            <input
              class="form-control me-2"
              type="search"
              placeholder={searchedelem}
              aria-label="Search"
              onChange={(e) => setElem(e.target.value)}
            />
          </Col>

          <Col xs={4}>
            <Button
              variant="outline-success"
              type="submit"
              disabled={!elem}
              onClick={() => {
                newSearch =  newSearch + elem;
                  navigate(newSearch);
              }}
              >
              Search
              </Button>
            </Col>  
          </Row>
        </form>
      </Container>
      <div class="results-container">
        <div class="searched-results">Results for "{searchedelem}"
          <h5 class="result-link"onClick={() => {
            navigate(resultElem);
          }}> - temporary link to {searchedelem}'s info page</h5>

          <h5>Will be replaced with corresponding Charity Groups</h5>
            <ul>
              <li>Charity One</li>
                <p>- Brief Desc</p>
              <li>Charity Two</li>
                <p>- Brief Desc</p>
              <li>Charity Three</li>
                <p>- Brief Desc</p>
            </ul> 
        </div>
      </div>
    </div>  
  );
}

export default ResultsPage;
