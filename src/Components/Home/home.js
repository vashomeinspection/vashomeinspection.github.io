import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeBody from "./homeBody";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
          <Col className="home-title">
            <h1>VAS HOME INSPECTIONS</h1>
          </Col>
        
      </Container>
      <HomeBody />
    </section>
  );
}

export default Home;