import React from "react";
import { renderMatches, useParams, Link } from "react-router-dom";

function ResultsPage() {
  let { searchedelem } = useParams();
  return (
    <div class="results-body">
      <div class="results-container" style={{ border: "1px solid red" }}>
        <div class="searched-element">{searchedelem}</div>
        <div class="searched-results">
          Searched Results
          <ul class="result-1">Results for '{searchedelem}'</ul>
          <Link as={Link} to="/InfoPage">
            <li>{searchedelem} 1</li>
            <li>{searchedelem} 2</li>
            <li>{searchedelem} 3</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
