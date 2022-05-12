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
        <div className="desc-who">
          <h1>Who runs this charity?</h1>
          <h3>Charity Name: </h3>
          <h3>Charity Leader: </h3>
        </div>
        <div className=" desc-type">
          <h1>What type of charity is this?</h1>
          <h3>This charity helps ___.</h3>
        </div>
        <div className=" desc-hours">
          <h1>Number of hours offered</h1>
          <h3>Monday: 8AM - 5PM</h3>
          <h3>Tuesday: 8AM - 5PM</h3>
          <h3>Wednesday: 8AM - 5PM</h3>
          <h3>Thursday: 8AM - 5PM</h3>
          <h3>Friday: 8AM - 5PM</h3>
          <h3>Saturday: CLOSED</h3>
          <h3>Sunday: CLOSED</h3>
        </div>
        <div className="desc-where">
          <h1>Where does my money go?</h1>
          <p>The money will go to ___.</p>
        </div>
        <div className="desc-location">
          <h1>Location</h1>
          <p>This group is located at:</p>
          <p>Address 1: </p>
        </div>
        <div className="charity-reviews">
          <h1>Reviews</h1>
          <p>Review 1:</p>
          <p>Review 2:</p>
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
