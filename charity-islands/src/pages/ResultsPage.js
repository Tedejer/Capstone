import React from "react";
import { renderMatches, useParams, Link } from "react-router-dom";

function ResultsPage(){
    let {searchedElem} = useParams();
    return (
        <div class="results-body">
            <div class="results-container" style={{border: "1px solid red"}}>
                <div class="searched-element">Searched Element
                    <Link as={Link} to="/InfoPage">
                    <button class="btn btn-primary result-info-button" type="button">Results Info Page</button>
                    </Link>
                </div>
                <div class="searched-results">Searched Results</div>
            </div>
        </div>
    )
}

export default ResultsPage;