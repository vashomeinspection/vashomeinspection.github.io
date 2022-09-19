import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import serviceArea from "../../Assets/serviceAreas.png";
import locationIcon from "../../Assets/icons/locationIcon.svg";
import inspect from "../../Assets/icons/inspect.svg";
import Card from "react-bootstrap/Card";

function HomeBody() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Container className="home-content">
          <h1>About</h1>
            <h3>
              We're here for you
            </h3>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h6>
              <Button
                variant="primary"
                href="/about"
                style={{ maxWidth: "250px" }}
                >
                Learn more
              </Button>
          <Row>
            <Col md={7}>
              <h1>Proudly Serving Southwest Florida Since 2015</h1>
              <h5 >
                <img
                    src={locationIcon}
                    alt="home pic"
                    className="img-fluid"
                  />   Cape Coral
              </h5>
              <h5 >
                <img
                    src={locationIcon}
                    alt="home pic"
                    className="img-fluid"
                  />   Port Charlotte
              </h5>
              <h5>
                <img
                    src={locationIcon}
                    alt="home pic"
                    className="img-fluid"
                  />   Punta Gorda
              </h5>
              <h5>
                <img
                    src={locationIcon}
                    alt="home pic"
                    className="img-fluid"
                  />   Bonita Springs
              </h5>
              <h5>
                <img
                    src={locationIcon}
                    alt="home pic"
                    className="img-fluid"
                  />   Estero
              </h5>
              <h5>
                <img
                    src={locationIcon}
                    alt="home pic"
                    className="img-fluid"
                  />   Fort Myers
              </h5>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={serviceArea}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
          <h1>What our Customers Say</h1>
            <h5>"
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              "</h5>

          <h1>Services</h1>
            <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
              <Col md={4} style={{ paddingBottom: "20px" }}>
                <Card className="project-card-view">
                  <Card.Img variant="top" src={inspect} alt="card-img" />
                  <Card.Body>
                    <Card.Title>General Inspection</Card.Title>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
              <Card className="project-card-view">
                  <Card.Img variant="top" src={inspect} alt="card-img" />
                  <Card.Body>
                    <Card.Title>New Construction Inspection</Card.Title>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
              <Card className="project-card-view">
                  <Card.Img variant="top" src={inspect} alt="card-img" />
                  <Card.Body>
                    <Card.Title>4-point Home Inspections</Card.Title>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="project-card-view">
                  <Card.Img variant="top" src={inspect} alt="card-img" />
                  <Card.Body>
                    <Card.Title>Wind Mitigation</Card.Title>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="project-card-view">
                  <Card.Img variant="top" src={inspect} alt="card-img" />
                  <Card.Body>
                    <Card.Title>Mold and Mildew Inspection</Card.Title>
                    {"\n"}
                    {"\n"}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Button
              variant="primary"
              href="/about"
              style={{ maxWidth: "250px", justifycontent:"center" }}
              >
              Schedule Inspection
            </Button>
        </Container>
    
        </Row>
      </Container>
    </Container>
  );
}
export default HomeBody;