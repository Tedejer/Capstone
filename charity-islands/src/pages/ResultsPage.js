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
        <div class="searched-results">Results for {searchedelem}
          <h5 class="result-link"onClick={() => {
            resultElem = resultElem + searchedelem;
            navigate(resultElem);
          }}> - link to {searchedelem}'s info page</h5>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
