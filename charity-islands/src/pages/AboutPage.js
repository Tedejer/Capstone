import React from "react";

function AboutPage() {
  return (
    <div>
      <h1 class="About-Header">AboutPage</h1>
      <section class="About=container">
        <div class="Question-1">
          <h1 class="About-Page">What is Charity Islands?</h1>

          <div class="About-Body">
            <h3>
              Charity Islands is a site that aims to help a person easily find
              and determine what charity foundation they would like to donate to
              or what form of community service they would like to participate
              in.
            </h3>
          </div>
        </div>

        <div class="Question-2">
          <h1 class="About-Page">Can Charity Islands be used nationwide?</h1>

          <div class="About-Body">
            <h3>No, Charity Islands is based in Ventura County only.</h3>
          </div>
        </div>

        <div class="Question-3">
          <h1 class="About-Page">How was Charity Islands created?</h1>

          <div class="About-Body">
            <h3>
              Charity Islands came from the idea that people can be selfish. The
              site would help those people feel less self-centered by giving
              them opportunities of good deeds.
            </h3>
          </div>
        </div>
      </section>

      <div className="space">
        <img
          src="https://wakatime.com/badge/user/e48fee3e-ead5-429e-880c-36c0316e81d5/project/6ffded4b-aa6b-498d-bc45-f3d16d0c29bf.svg"
          alt="wakatime"
        />
      </div>
    </div>
  );
}

export default AboutPage;
