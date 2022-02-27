import React from "react";
import {  useParams, Link, useNavigate } from "react-router-dom";

function ResultsPage() {
  let { searchedelem } = useParams();
  let navigate = useNavigate();
  let resultElem = "/InfoPage/";
  return (
    <div class="results-body">
      <div class="results-container">
        <div class="searched-element">{searchedelem}</div>
        <div class="searched-results">
          Searched Results
          <ul class="result-1">Results for '{searchedelem}'</ul>
            <li onClick={() => {
            resultElem = resultElem + searchedelem;
            navigate(resultElem);
          }}>{searchedelem} 1</li>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
