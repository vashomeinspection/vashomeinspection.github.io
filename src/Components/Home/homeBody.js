import React from "react";
import { Container, Row, Col, Button, Image, Card, Carousel } from "react-bootstrap";

import serviceArea from "../../Assets/serviceAreas.png";
import locationIcon from "../../Assets/icons/locationIcon.svg";
import inspect from "../../Assets/icons/inspect.svg";
import cert from "../../Assets/certification.jpg";
import moldCert from "../../Assets/moldCert.jpg";
import homeAbout from "../../Assets/homeAbout.jpg";
import placeHold from "../../Assets/placeholder.png"
import quoteBg from "../../Assets/quotePlaceholder.jpg"


function HomeBody() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Container className="home-content">
            {/***** Certifications *****/}
            <Row>
              <div class="home-image">
                  <Image src={cert}/>
                  <Image src={moldCert}/>
              </div>
            </Row>
            {/***** End Certifications *****/}
            {/***** About *****/}
            <Row>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                  <h1>About</h1>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
              </div>
              <Col md={5} style={{padding:"1rem"}}>
                <Image src={homeAbout} 
                    className="img-fluid" 
                />
              </Col>
              <Col md={7} style={{paddingRight:"1rem"}}>
                  <h3>
                    Title // something like We're here for you
                  </h3>
                  
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                       mollit anim id est laborum.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </h5>
                    <Button
                      variant="outline-dark"
                      href="/about"
                      >
                      Learn more
                    </Button>
              </Col>
            </Row>
            {/***** end About *****/}

            {/***** Locations *****/} 
            <Row>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                  <h1>Proudly Serving Southwest Florida Since 2015</h1>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
              </div>
              <Col md={6}>
                <h3 style={{  paddingTop: "1rem"}}>
                  <Image
                      src={locationIcon}
                      alt="home pic"
                      className="img-fluid"
                      style={{paddingRight:"1rem", paddingLeft: "10rem"}}
                    />   Cape Coral
                </h3>
                <h3>
                  <Image
                      src={locationIcon}
                      alt="home pic"
                      className="img-fluid"
                      style={{paddingRight:"1rem", paddingLeft: "10rem"}}
                    />   Port Charlotte
                </h3>
                <h3>
                  <Image
                      src={locationIcon}
                      alt="home pic"
                      className="img-fluid"
                      style={{paddingRight:"1rem", paddingLeft: "10rem"}}
                    />   Punta Gorda
                </h3>
                <h3>
                  <Image
                      src={locationIcon}
                      alt="home pic"
                      className="img-fluid"
                      style={{paddingRight:"1rem", paddingLeft: "10rem"}}
                    />   Bonita Springs
                </h3>
                <h3>
                  <Image
                      src={locationIcon}
                      alt="home pic"
                      className="img-fluid"
                      style={{paddingRight:"1rem", paddingLeft: "10rem"}}
                    />   Estero
                </h3>
                <h3>
                  <Image
                      src={locationIcon}
                      alt="home pic"
                      className="img-fluid"
                      style={{paddingRight:"1rem", paddingLeft: "10rem"}}
                    />   Fort Myers
                </h3>
              </Col>
              <Col md={5}>
                <Image
                  src={serviceArea}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                />
              </Col>
            </Row>
            {/***** End Locations *****/}

            {/***** Reviews *****/} 
            <Row>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                 <h1>What our Customers Say</h1>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
              </div>
              <Col/>
              <Col md={8}>
                  <Carousel>
                    <Carousel.Item>
                      <Image
                        className="d-block w-100"
                        src={quoteBg}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                      <h2 style={{color:"black"}}>"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."</h2>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        className="d-block w-100"
                        src={quoteBg}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                      <h2 style={{color:"black"}}>"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."</h2>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        className="d-block w-100"
                        src={quoteBg}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                      <h2 style={{color:"black"}}>"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."</h2>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                  
                </Col>
                <Col/>
            </Row>
            {/***** End Reviews *****/}

            {/***** Services *****/} 
            <Row>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                  <h1>Services</h1>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
              </div>
              
                <Row style={{ justifyContent: "center", paddingLeft:"20px" }}>
                  <Col md={3} style={{ paddingBottom: "20px" }}>
                    <Card className="services-card-view">
                      <Card.Img variant="top" src={inspect} alt="card-img" />
                      <Card.Body>
                        <Card.Title >General Inspection</Card.Title>
                        {"\n"}
                        {"\n"}
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={3}>
                  <Card className="services-card-view">
                      <Card.Img variant="top" src={placeHold} alt="card-img" />
                      <Card.Body>
                        <Card.Title>New Construction Inspection</Card.Title>
                        {"\n"}
                        {"\n"}
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={3}>
                  <Card className="services-card-view">
                      <Card.Img variant="top" src={placeHold} alt="card-img" />
                      <Card.Body>
                        <Card.Title>4-point Home Inspections</Card.Title>
                        {"\n"}
                        {"\n"}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "20px", paddingLeft:"20px" }}>
                  <Col md={3}>
                    <Card className="services-card-view">
                      <Card.Img variant="top" src={placeHold} alt="card-img" />
                      <Card.Body>
                        <Card.Title>Wind Mitigation</Card.Title>
                        {"\n"}
                        {"\n"}
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={3}>
                    <Card className="services-card-view">
                      <Card.Img variant="top" src={placeHold} alt="card-img" />
                      <Card.Body>
                        <Card.Title>Mold and Mildew Inspection</Card.Title>
                        {"\n"}
                        {"\n"}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
                  <Button
                    variant="outline-dark"
                    href="/services"
                    size="lg"
                    style={{ maxWidth: "250px", justifycontent:"center" }}
                    >
                    More Information
                  </Button>
                </div>
            </Row>
          </Container> 
        </Row>
      </Container>
    </Container>
  );
}
export default HomeBody;