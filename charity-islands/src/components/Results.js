import React from "react";
import { useNavigate } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

function Results(props) {
  console.log(props);
  let navigate = useNavigate();
  let resultPath = "/InfoPage/" + props.resultWord;
  return (
    <div>
      <div class="results-container">
        <div class="searched-results">
          Results for "{props.resultWord}"
          <ul>
            <li
              class="result-link font-weight-bold"
              onClick={() => {
                navigate(resultPath);
              }}
            >
              Test Link One
            </li>
            <p>
              Brief Desc: This Charity is about ___. It is located here ___. The operations hours are: ___.
            </p>
            <li
              class="result-link font-weight-bold"
              onClick={() => {
                navigate(resultPath);
              }}
            >
              Test Link Two
            </li>
            <p>
            Brief Desc: This Charity is about ___. It is located here ___. The operations hours are: ___.
            </p>
            <li
              class="result-link font-weight-bold"
              onClick={() => {
                navigate(resultPath);
              }}
            >
              Test Link Three
            </li>
            <p>
            Brief Desc: This Charity is about ___. It is located here ___. The operations hours are: ___.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Results;
