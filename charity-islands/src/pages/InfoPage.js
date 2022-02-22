import React from "react";
import { renderMatches, useParams } from "react-router-dom";

function InfoPage(){
    let { charityname } = useParams();
    return (
        <div className="info-body">
            <div className="container" style={{border: "1px solid red"}}>
                <div class="info-header">Charity Name</div>
                <div class="content-large">Description</div>
                <div class="content-small">News</div>
                <div class="content-small">Also Viewed</div>
                {/* <div class="info-news">Charity News</div> */}
                {/* <div class="metric-display">Metric Display</div> */}
            </div>
        </div>
    );
}

export default InfoPage;