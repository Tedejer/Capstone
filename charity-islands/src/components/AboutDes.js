import React from "react";
import { Tab, ListGroup, Row, Col } from "react-bootstrap";

function AboutDes() {
  return (
    <div>
      <h2 className="about-pad">Charity Categories</h2>
      <Tab.Container defaultActiveKey="#link1">
        <Row>
          <Col sm={12} md={6}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Agriculture
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Animal Service
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Children and Youth
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Community Development
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Education
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Environment
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                Food Share
              </ListGroup.Item>
              <ListGroup.Item action href="#link8">
                Health
              </ListGroup.Item>
              <ListGroup.Item action href="#link9">
                Military Community
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8} md={6}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <p>
                  This category covers services closely related to agriculture
                  and permaculture work. It includes but is not limited to
                  educational workshops and projects that demonstrate the impact
                  of agriculture within
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link2">
                <p>
                  This category involves the aid of various facilities or
                  organizations related to animals. This is a broad category
                  that includes anything from animal shelters to small programs
                  to protecting specific biological communities. This may also
                  include assisting with the space and environment for local
                  animal habitats.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link3">
                <p>
                  This category covers the facilities and volunteer
                  opportunities involving children and youth organizations. It
                  can range from educational projects to outdoor sporting
                  activities in the community.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link4">
                <p>
                  This category covers the facilities and volunteer
                  opportunities involving Community Development. It can range
                  from educational projects to outdoor sporting activities in
                  the community.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link5">
                <p>
                  This category covers the facilities and volunteer
                  opportunities involved in education.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link6">
                <p>
                  This category covers the facilities and volunteer
                  opportunities involved in the environment.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link7">
                <p>
                  This category covers the facilities and volunteer
                  opportunities involved with Food Shares in Ventura County.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link8">
                <p>
                  This category covers the facilities and volunteer
                  opportunities involved in health.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link9">
                <p>
                  This category covers the facilities and volunteer opportunites
                  invlovling the military and veterans.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default AboutDes;
