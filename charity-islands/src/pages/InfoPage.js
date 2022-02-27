import React from "react";
import { renderMatches, useParams } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

function InfoPage() {
  let { charityname } = useParams();
  return (
    <div className="info-body">
      <div className="container">
        <div class="info-header">
          Search Results with keyword, "{charityname}"
        </div>

        <div class="charity-desc">
          Description
          <div class="desc-content">
            <h1>Who runs this charity?</h1>
            <LoremIpsum p={1} />
            <h1>Number of hours offered:</h1>
            <LoremIpsum p={1} />
            <h1>Where does my money go?</h1>
            <LoremIpsum p={1} />
            <h1>Location:</h1>
            <LoremIpsum p={1} />
          </div>
        </div>

        <div class="charity-relevant">News related to {charityname}</div>
        {/* <div class="also-viewed">Also Viewed</div> */}

        <div class="charity-reviews">
          Reviews
          <LoremIpsum p={10} />
        </div>

        {/* <div class="metric-display">Metric Display</div> */}
      </div>
    </div>
  );
}

export default InfoPage;

/* Reminder: To add more content
    In scss file, edit the 
    grid-template-columns and
    grid-template-row lines accordingly */
