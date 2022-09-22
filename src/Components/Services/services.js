import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import placeHold from "../../Assets/placeholder.png";


function Services() {
  return (
        <Container fluid className="about-section">
          <Container className="content">
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                  <h1>Services</h1>
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

              
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "30px", paddingBottom: "50px" }}
                className="about-img"
              >
                
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }
    
    export default Services;