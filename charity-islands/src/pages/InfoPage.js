import React from "react";
import { renderMatches, useParams } from "react-router-dom";

function InfoPage(){
    let { charityname } = useParams();
    return (
        <div className="info-body">
            <div className="container" style={{border: "1px solid red"}}>
                <div class="info-header">Charity Name</div>
                <div class="charity-desc">Description</div>
                <div class="charity-news">News</div>
                <div class="also-viewed">Also Viewed</div>
                <div class="charity-reviews">Reviews</div>
                {/* <div class="metric-display">Metric Display</div> */}
            </div>
        </div>
    );
}

export default InfoPage;