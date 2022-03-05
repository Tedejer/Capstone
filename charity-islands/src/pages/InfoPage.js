import React from "react";
import { renderMatches, useParams } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

function InfoPage() {
  let { charityname } = useParams();
  return (
    <div className="info-body">
      <div className="container">
        <div class="info-header">
          <h1>{charityname}</h1>
        </div>
        <hr></hr>
        <div class="desc-who">
          <h1>Who runs this charity?</h1>
          <LoremIpsum p={1} />
        </div>
        <div class=" desc-type">
          <h1>What type of charity is this?</h1>
          <LoremIpsum p={1} />
        </div>
        <div class=" desc-hours">
          <h1>Number of hours offered</h1>
          <LoremIpsum p={1} />
        </div>
        <div class="desc-where">
          <h1>Where does my money go?</h1>
          <LoremIpsum p={1} />
        </div>
        <div class="desc-location">
          <h1>Location</h1>
          <LoremIpsum p={2} />
        </div>
        <div class="charity-reviews">
          <h1>Reviews</h1>
          <LoremIpsum p={2} />
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
