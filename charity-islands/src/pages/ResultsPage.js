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
        <div class="searched-results">Results for "{searchedelem}"
          <h5 class="result-link"onClick={() => {
            resultElem = resultElem + searchedelem;
            navigate(resultElem);
          }}> - temporary link to {searchedelem}'s info page</h5>

          <h5>Will be replaced with corresponding Charity Groups</h5>
            <ul>
              <li>Charity One</li>
                <p>- Location, Hours, Phone Number</p>
              <li>Charity Two</li>
                <p>- Location, Hours, Phone Number</p>
              <li>Charity Three</li>
              < p>- Location, Hours, Phone Number</p>
            </ul> 
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
