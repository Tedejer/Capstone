import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

// Components
import Results from "../components/Results";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

function ResultsPage() {
  const [isLoading, setLoading] = useState(false);
  let { searchedelem } = useParams();
  const [elem, setElem] = useState("");

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        searchedelem = elem;
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div>
      <Container fluid>
        <form class="results-search-bar">
          <Row className="justify-content-center">
            <Col xs={{ span: 6, offset: 1 }} md={{ span: 5, offset: 3 }}>
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
                type="button search-btn"
                disabled={!elem}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading" : "Search"}
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
      {/* End Search */}
      <Results resultWord={searchedelem} />
    </div>
  );
}

export default ResultsPage;
