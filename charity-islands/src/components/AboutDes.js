import React from "react";
import { Tab, ListGroup, Row, Col, Container } from "react-bootstrap";

function AboutDes() {
  return (
    <div>
      <h2 className="about-pad">Charity Categories</h2>
      <Tab.Container defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Agriculture
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Children and Youth
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Comunity Development
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Education
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Environment
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Health
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                Wildlife Protection
              </ListGroup.Item>
              <ListGroup.Item action href="#link8">
                Women's Empowerment
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <p>
                  Agricultural work might be on a rural community farming or
                  permaculture project. The best of these projects include local
                  outreach— such as demonstration farms and educational
                  workshops in schools—that support a community-wide change in
                  thinking about agriculture.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <p>
                  Volunteers might work with kids at an orphanage or nursery,
                  tutor teens in English or math, or organize sports activities
                  for at-risk youth. The most effective child care centers are
                  those that provide a quality education that prepares the
                  children and youth for an economically viable future, and
                  engaging alternatives to the temptations of drugs and gangs.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <p>
                  This broad category includes everything from installing solar
                  panels at a health clinic or water catchment systems at a
                  school and training firefighters in emergency response to
                  supporting the administration of microcredit programs. For
                  those who prefer a tangible sign of progress, projects in the
                  area of construction—from installing a better stove to
                  building a house—may be especially satisfying.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link4">
                <p>
                  Educational programs range from lending a hand at an
                  elementary school to teaching English to adults in order to
                  improve their job opportunities. Volunteers might provide
                  vocational training or health and hygiene education through
                  workshops, or tutor struggling students at an after-school
                  program.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link5">
                <p>
                  Environmental projects may have volunteers working in an
                  office preparing educational materials, outside creating
                  trails (or recycling, or picking up trash, or planting and
                  tending flora), or in schools or neighborhood centers
                  providing community outreach. In a context where putting food
                  on the table is a more urgent need than care of the
                  environment for many families, volunteers should look for
                  projects that combine community outreach and education with
                  their efforts and know that their presence can help draw
                  attention to an area that might have been overlooked by the
                  local community in the past.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link6">
                <p>
                  While opportunities abound for specialized skills, from
                  first-aid training to heart surgery, you don’t necessarily
                  need to be a medical professional to assist in a community
                  health clinic or public hospital. Volunteers may be able to
                  help organize workshops, assist medical staff, provide
                  translation skills, or raise awareness on issues such as
                  HIV/AIDS.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link7">
                <p>
                  Volunteers can choose from activities such as protecting
                  turtle hatchlings on their journey from nest to sea,
                  supporting the rehabilitation of injured and trafficked
                  animals, or restoring natural habitats for endangered species.
                  Not all wildlife protection projects allow volunteers to work
                  with their animals; work may instead be focused on the
                  cleaning of cages, restoration of natural habitats, or visual
                  monitoring of animal activity in the wild. Programs that help
                  develop alternative sources of income generation for the
                  community are especially interesting, turning many “wildlife
                  protection” projects into a combination of environment,
                  education, and community development.
                </p>
              </Tab.Pane>

              <Tab.Pane eventKey="#link8">
                <p>
                  Volunteer opportunities that focus on women might include
                  promoting associations of artisan weavers or supporting
                  workshops on everything from civil rights to home finances.
                  According to UN Women, “there is a direct link between
                  increased female labor participation and growth,” and World
                  Bank studies demonstrate that women are more likely than men
                  to spend their income on food and education for their
                  children, making investments in women a critical part of
                  development.
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
