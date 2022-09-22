import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import placeHold from "../../Assets/placeholder.png";
import cert from "../../Assets/certification.jpg";
import moldCert from "../../Assets/moldCert.jpg";

function About() {
  return (
        <Container fluid className="about-section">
          <Container className="content">
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                  <h1>About</h1>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
              </div>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h2> Meet the Inspector </h2>
                
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
              
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "30px", paddingBottom: "50px" }}
                className="about-img"
              >
                <Image src={placeHold}
                 className="img-fluid" 
                 alt="inspector picture">
                </Image>
                <div className="cert-image" >
                  <Image src={cert} style={{maxHeight:"105px"}}/>
                  <Image src={moldCert} style={{maxHeight:"105px"}}/>
              </div>
                
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }
    
    export default About;