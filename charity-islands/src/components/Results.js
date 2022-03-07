import React from "react";
import { useNavigate } from "react-router-dom";

function Results(props) {
  console.log(props);
  let navigate = useNavigate();
  let resultPath = "/InfoPage/" + props.resultWord;
  return (
    <div>
      <div class="results-container">
        <div class="searched-results">
          Results for "{props.resultWord}"
          <h5
            class="result-link"
            onClick={() => {
              navigate(resultPath);
            }}
          >
            {" "}
            - temporary link to {props.resultWord}'s info page
          </h5>
          {/* End Search Link */}
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

export default Results;
